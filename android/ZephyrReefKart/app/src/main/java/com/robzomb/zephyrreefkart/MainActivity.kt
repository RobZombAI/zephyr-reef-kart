package com.robzomb.zephyrreefkart

import android.annotation.SuppressLint
import android.content.Context
import android.content.pm.ActivityInfo
import android.media.AudioAttributes
import android.media.AudioFocusRequest
import android.media.AudioManager
import android.os.Build
import android.os.Bundle
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import android.util.Log
import android.view.Gravity
import android.view.View
import android.view.WindowManager
import android.webkit.ConsoleMessage
import android.webkit.JavascriptInterface
import android.webkit.RenderProcessGoneDetail
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.widget.FrameLayout
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewClientCompat
import com.google.android.gms.ads.AdError
import com.google.android.gms.ads.AdRequest
import com.google.android.gms.ads.AdSize
import com.google.android.gms.ads.AdView
import com.google.android.gms.ads.FullScreenContentCallback
import com.google.android.gms.ads.LoadAdError
import com.google.android.gms.ads.MobileAds
import com.google.android.gms.ads.RequestConfiguration
import com.google.android.gms.ads.interstitial.InterstitialAd
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback
import com.google.android.gms.ads.rewarded.RewardedAd
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback
import com.google.android.ump.ConsentInformation
import com.google.android.ump.ConsentRequestParameters
import com.google.android.ump.UserMessagingPlatform

// ═══ CONFIG ADS (Google AdMob, UMP Consent & Better Ads Policy) ═══════════
// ATTIVAZIONE ADS REALI SU GOOGLE PLAY:
// Crea l'account su https://apps.admob.com, registra l'applicazione con package
// 'com.robzomb.zephyrreefkart' e sostituisci gli ID qui sotto.
// Gli ID attuali sono i TEST ID ufficiali di Google: mostrano annunci demo
// senza generare click invalidi, violazioni o ban dell'account sviluppatore.
object AdsConfig {
    const val APP_ID = "ca-app-pub-3940256099942544~3347511713"
    const val BANNER_UNIT_ID = "ca-app-pub-3940256099942544/6300978111"
    const val INTERSTITIAL_UNIT_ID = "ca-app-pub-3940256099942544/1033173712"
    const val REWARDED_UNIT_ID = "ca-app-pub-3940256099942544/5224354917"

    // Cooldown minimo di 120s tra interstitial per conformità a Better Ads Experience di Google Play
    const val MIN_INTERSTITIAL_COOLDOWN_MS = 120_000L
}
// ══════════════════════════════════════════════════════════════════════════

class AndroidAds(private val activity: MainActivity) {
    @JavascriptInterface
    fun hideBanner() {
        activity.runOnUiThread { activity.hideAdBanner() }
    }

    @JavascriptInterface
    fun showBanner() {
        activity.runOnUiThread { activity.showAdBanner() }
    }

    @JavascriptInterface
    fun showInterstitial() {
        activity.runOnUiThread { activity.showRaceEndInterstitial() }
    }

    @JavascriptInterface
    fun isRewardedReady(): Boolean {
        return activity.isRewardedAdAvailable()
    }

    @JavascriptInterface
    fun showRewarded(rewardKey: String) {
        activity.runOnUiThread { activity.showRewardedAd(rewardKey) }
    }

    @JavascriptInterface
    fun showPrivacyOptions() {
        activity.runOnUiThread { activity.showPrivacyOptions() }
    }
}

class AndroidHaptics(private val context: Context) {
    @JavascriptInterface
    fun vibrate(milliseconds: Long) {
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                val vibratorManager = context.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as? VibratorManager
                vibratorManager?.defaultVibrator?.vibrate(
                    VibrationEffect.createOneShot(milliseconds.coerceIn(5, 500), VibrationEffect.DEFAULT_AMPLITUDE)
                )
            } else {
                @Suppress("DEPRECATION")
                val vibrator = context.getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    vibrator?.vibrate(
                        VibrationEffect.createOneShot(milliseconds.coerceIn(5, 500), VibrationEffect.DEFAULT_AMPLITUDE)
                    )
                } else {
                    @Suppress("DEPRECATION")
                    vibrator?.vibrate(milliseconds.coerceIn(5, 500))
                }
            }
        } catch (e: Exception) {
            Log.w("ZephyrHaptics", "Haptics failed: ${e.message}")
        }
    }
}

class MainActivity : ComponentActivity() {

    private lateinit var webView: WebView
    private lateinit var adContainer: FrameLayout
    private lateinit var adBannerView: AdView
    private var interstitialAd: InterstitialAd? = null
    private var rewardedAd: RewardedAd? = null
    private var isRewardedLoading = false
    private var isBannerLoaded = false
    private var lastInterstitialTime = 0L
    private var lastBackPressedTime = 0L
    private var audioManager: AudioManager? = null
    private var focusRequest: AudioFocusRequest? = null
    private lateinit var consentInformation: ConsentInformation
    private var isMobileAdsInitialized = false

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Lock to landscape & keep screen awake
        requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

        // Notch & punch-hole cutout display support
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            window.attributes.layoutInDisplayCutoutMode =
                WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES
        }

        // Fullscreen edge-to-edge immersive sticky
        hideSystemBars()

        // Create & configure WebView with strict Google Play security compliance
        webView = WebView(this).apply {
            setLayerType(View.LAYER_TYPE_HARDWARE, null)
            setBackgroundColor(0xFF000000.toInt())
            isVerticalScrollBarEnabled = false
            isHorizontalScrollBarEnabled = false
            isLongClickable = false
            setOnLongClickListener { true }

            settings.apply {
                javaScriptEnabled = true
                domStorageEnabled = true
                databaseEnabled = true
                mediaPlaybackRequiresUserGesture = false
                // Google Play Security Best Practices: disabilita file:// e content://
                // Tutti gli asset sono serviti in modo protetto via WebViewAssetLoader virtual HTTPS
                allowFileAccess = false
                allowContentAccess = false
                useWideViewPort = true
                loadWithOverviewMode = true
                cacheMode = WebSettings.LOAD_DEFAULT
                mixedContentMode = WebSettings.MIXED_CONTENT_NEVER_ALLOW
                textZoom = 100
                safeBrowsingEnabled = true
            }

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                setRendererPriorityPolicy(
                    WebView.RENDERER_PRIORITY_BOUND,
                    /* attemptedStartupWhenRendererPriorityRaised = */ true
                )
            }
        }

        // Native Haptics Bridge
        webView.addJavascriptInterface(AndroidHaptics(this), "AndroidHaptics")

        // Setup WebViewAssetLoader
        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        webView.webViewClient = object : WebViewClientCompat() {
            override fun shouldInterceptRequest(
                view: WebView,
                request: WebResourceRequest
            ): WebResourceResponse? {
                return assetLoader.shouldInterceptRequest(request.url)
            }

            override fun onRenderProcessGone(view: WebView, detail: RenderProcessGoneDetail): Boolean {
                Log.w("ZephyrKart", "Renderer WebGL terminato dal sistema: riavvio pulito")
                view.destroy()
                recreate()
                return true
            }
        }

        webView.webChromeClient = object : WebChromeClient() {
            override fun onConsoleMessage(consoleMessage: ConsoleMessage): Boolean {
                Log.d("ZephyrKart-JS", "${consoleMessage.message()} -- [${consoleMessage.sourceId()}:${consoleMessage.lineNumber()}]")
                return true
            }
        }

        // Layout: WebView full-screen + Banner AdMob in basso
        adContainer = FrameLayout(this)
        adContainer.addView(webView, FrameLayout.LayoutParams(
            FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT))
        adBannerView = AdView(this).apply {
            adUnitId = AdsConfig.BANNER_UNIT_ID
            setAdSize(AdSize.BANNER)
            visibility = View.GONE
        }
        adContainer.addView(adBannerView, FrameLayout.LayoutParams(
            FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.WRAP_CONTENT,
            Gravity.BOTTOM))
        setContentView(adContainer)

        // Bridge JS per la gestione Ads (Banner, Interstitial, Rewarded, GDPR Privacy)
        webView.addJavascriptInterface(AndroidAds(this), "AndroidAds")

        // Inizializzazione UMP (GDPR / Consenso Privacy UE) e Google Mobile Ads
        setupConsentAndAds()

        // Setup Audio Focus
        setupAudioFocus()

        // Carica Zephyr Reef via asset loader virtual HTTPS
        webView.loadUrl("https://appassets.androidplatform.net/assets/zephyr.html")

        // Back button: gestione pausa in gara e conferma uscita
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                val now = System.currentTimeMillis()
                webView.evaluateJavascript(
                    "(function() { if (window.__zephyr && window.__zephyr.mode === 'race' && !window.__zephyr.paused) { window.__zephyr.setPaused(true); document.getElementById('z-pause-modal')?.classList.remove('hidden'); return 'paused'; } return 'not_in_race'; })()"
                ) { result ->
                    if (result != null && result.contains("paused")) {
                        return@evaluateJavascript
                    }
                    if (now - lastBackPressedTime < 2000) {
                        finish()
                    } else {
                        lastBackPressedTime = now
                        Toast.makeText(this@MainActivity, "Premi di nuovo per uscire da Zephyr Reef Grand Prix", Toast.LENGTH_SHORT).show()
                    }
                }
            }
        })
    }

    // ═══ GESTIONE CONSENSO PRIVACY (UMP SDK / GDPR) ════════════════════════
    private fun setupConsentAndAds() {
        val params = ConsentRequestParameters.Builder()
            .setTagForUnderAgeOfConsent(false)
            .build()

        consentInformation = UserMessagingPlatform.getConsentInformation(this)
        consentInformation.requestConsentInfoUpdate(
            this,
            params,
            {
                UserMessagingPlatform.loadAndShowConsentFormIfRequired(this) { formError ->
                    if (formError != null) {
                        Log.w("ZephyrAds", "Consent form error: ${formError.message} (${formError.errorCode})")
                    }
                    if (consentInformation.canRequestAds()) {
                        initializeMobileAds()
                    }
                }
            },
            { requestConsentError ->
                Log.w("ZephyrAds", "Consent info update error: ${requestConsentError.message}")
                if (consentInformation.canRequestAds()) {
                    initializeMobileAds()
                }
            }
        )

        // Se il consenso era già presente o non richiesto (es. fuori da EEA)
        if (consentInformation.canRequestAds()) {
            initializeMobileAds()
        }
    }

    private fun initializeMobileAds() {
        if (isMobileAdsInitialized) return
        isMobileAdsInitialized = true

        // Protezione account AdMob: configura test device id per evitare invalid traffic
        val testConfig = RequestConfiguration.Builder()
            .setTestDeviceIds(listOf(AdRequest.DEVICE_ID_EMULATOR))
            .build()
        MobileAds.setRequestConfiguration(testConfig)

        MobileAds.initialize(this) { initStatus ->
            Log.d("ZephyrAds", "MobileAds initialized: $initStatus")
            runOnUiThread {
                loadBanner()
                loadInterstitial()
                loadRewardedAd()
            }
        }
    }

    // ═══ BANNER ADS ════════════════════════════════════════════════════════
    private fun loadBanner() {
        if (isBannerLoaded) return
        val adRequest = AdRequest.Builder().build()
        adBannerView.loadAd(adRequest)
        isBannerLoaded = true
    }

    fun showAdBanner() {
        adBannerView.visibility = View.VISIBLE
        if (!isBannerLoaded) {
            loadBanner()
        }
    }

    fun hideAdBanner() {
        adBannerView.visibility = View.GONE
    }

    // ═══ INTERSTITIAL ADS (CON COOLDOWN BETTER ADS) ════════════════════════
    private fun loadInterstitial() {
        InterstitialAd.load(
            this,
            AdsConfig.INTERSTITIAL_UNIT_ID,
            AdRequest.Builder().build(),
            object : InterstitialAdLoadCallback() {
                override fun onAdLoaded(ad: InterstitialAd) {
                    interstitialAd = ad
                    ad.fullScreenContentCallback = object : FullScreenContentCallback() {
                        override fun onAdDismissedFullScreenContent() {
                            interstitialAd = null
                            loadInterstitial()
                        }
                        override fun onAdFailedToShowFullScreenContent(adError: AdError) {
                            interstitialAd = null
                            loadInterstitial()
                        }
                    }
                }
                override fun onAdFailedToLoad(loadAdError: LoadAdError) {
                    interstitialAd = null
                }
            }
        )
    }

    fun showRaceEndInterstitial() {
        val now = System.currentTimeMillis()
        if (now - lastInterstitialTime < AdsConfig.MIN_INTERSTITIAL_COOLDOWN_MS) {
            Log.d("ZephyrAds", "Interstitial throttled per policy Better Ads: cooldown rimanente ${(AdsConfig.MIN_INTERSTITIAL_COOLDOWN_MS - (now - lastInterstitialTime)) / 1000}s")
            return
        }
        val ad = interstitialAd
        if (ad != null) {
            lastInterstitialTime = now
            ad.show(this)
        } else {
            loadInterstitial()
        }
    }

    // ═══ REWARDED VIDEO ADS (PREMI & SBLOCCHI) ═════════════════════════════
    private fun loadRewardedAd() {
        if (isRewardedLoading || rewardedAd != null) return
        isRewardedLoading = true
        RewardedAd.load(
            this,
            AdsConfig.REWARDED_UNIT_ID,
            AdRequest.Builder().build(),
            object : RewardedAdLoadCallback() {
                override fun onAdLoaded(ad: RewardedAd) {
                    rewardedAd = ad
                    isRewardedLoading = false
                    ad.fullScreenContentCallback = object : FullScreenContentCallback() {
                        override fun onAdDismissedFullScreenContent() {
                            rewardedAd = null
                            loadRewardedAd()
                        }
                        override fun onAdFailedToShowFullScreenContent(adError: AdError) {
                            rewardedAd = null
                            loadRewardedAd()
                        }
                    }
                }
                override fun onAdFailedToLoad(loadAdError: LoadAdError) {
                    rewardedAd = null
                    isRewardedLoading = false
                }
            }
        )
    }

    fun isRewardedAdAvailable(): Boolean = rewardedAd != null

    fun showRewardedAd(rewardKey: String) {
        val ad = rewardedAd
        if (ad != null) {
            ad.show(this) { rewardItem ->
                val amount = rewardItem.amount
                val type = rewardItem.type
                Log.d("ZephyrAds", "Utente ha guadagnato ricompensa: $amount $type ($rewardKey)")
                webView.evaluateJavascript(
                    "if (typeof window.onZephyrAdReward === 'function') { window.onZephyrAdReward('$rewardKey', $amount); }",
                    null
                )
            }
        } else {
            Toast.makeText(this, "Caricamento video in corso, attendi qualche secondo...", Toast.LENGTH_SHORT).show()
            loadRewardedAd()
        }
    }

    // ═══ MODULO PRIVACY & CONSENSO (GDPR OPZIONI) ══════════════════════════
    fun showPrivacyOptions() {
        UserMessagingPlatform.showPrivacyOptionsForm(this) { formError ->
            if (formError != null) {
                Log.w("ZephyrAds", "Errore visualizzazione opzioni privacy: ${formError.message}")
                Toast.makeText(this, "Opzioni privacy non disponibili al momento", Toast.LENGTH_SHORT).show()
            }
        }
    }

    private fun setupAudioFocus() {
        audioManager = getSystemService(Context.AUDIO_SERVICE) as? AudioManager
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val playbackAttributes = AudioAttributes.Builder()
                .setUsage(AudioAttributes.USAGE_GAME)
                .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
                .build()
            focusRequest = AudioFocusRequest.Builder(AudioManager.AUDIOFOCUS_GAIN)
                .setAudioAttributes(playbackAttributes)
                .setAcceptsDelayedFocusGain(true)
                .setOnAudioFocusChangeListener { focusChange ->
                    when (focusChange) {
                        AudioManager.AUDIOFOCUS_LOSS,
                        AudioManager.AUDIOFOCUS_LOSS_TRANSIENT -> {
                            webView.evaluateJavascript("if (window.__zephyr && !window.__zephyr.userSettings.muted) window.__zephyr.toggleMute();", null)
                        }
                        AudioManager.AUDIOFOCUS_GAIN -> {
                            webView.evaluateJavascript("if (window.__zephyr && window.__zephyr.userSettings.muted) window.__zephyr.toggleMute();", null)
                        }
                    }
                }.build()
            focusRequest?.let { audioManager?.requestAudioFocus(it) }
        }
    }

    private fun hideSystemBars() {
        WindowCompat.setDecorFitsSystemWindows(window, false)
        val controller = WindowInsetsControllerCompat(window, window.decorView)
        controller.hide(WindowInsetsCompat.Type.systemBars())
        controller.systemBarsBehavior = WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
    }

    override fun onResume() {
        super.onResume()
        hideSystemBars()
        webView.onResume()
        webView.resumeTimers()
    }

    override fun onPause() {
        super.onPause()
        webView.onPause()
        webView.pauseTimers()
    }

    override fun onDestroy() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            focusRequest?.let { audioManager?.abandonAudioFocusRequest(it) }
        }
        webView.destroy()
        super.onDestroy()
    }
}
