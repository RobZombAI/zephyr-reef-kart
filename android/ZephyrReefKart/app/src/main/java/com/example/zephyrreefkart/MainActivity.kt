package com.example.zephyrreefkart

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
import android.widget.FrameLayout
import com.google.android.gms.ads.AdError
import com.google.android.gms.ads.AdRequest
import com.google.android.gms.ads.AdSize
import com.google.android.gms.ads.AdView
import com.google.android.gms.ads.FullScreenContentCallback
import com.google.android.gms.ads.LoadAdError
import com.google.android.gms.ads.MobileAds
import com.google.android.gms.ads.interstitial.InterstitialAd
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewClientCompat

// ═══ CONFIG ADS (AdMob) ═══════════════════════════════════════════════
// ATTIVAZIONE ADS REALI: crea l'account su apps.admob.com, registra
// l'app (package com.example.zephyrreefkart) e sostituisci i 3 ID qui sotto
// con quelli del tuo account. Gli attuali sono i TEST ID ufficiali Google
// (mostrano annunci "Test Ad" senza ricavi).
object AdsConfig {
    const val APP_ID = "ca-app-pub-3940256099942544~3347511713"
    const val BANNER_UNIT_ID = "ca-app-pub-3940256099942544/6300978111"
    const val INTERSTITIAL_UNIT_ID = "ca-app-pub-3940256099942544/1033173712"
}
// ══════════════════════════════════════════════════════════════════════

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
    private var lastBackPressedTime = 0L
    private var audioManager: AudioManager? = null
    private var focusRequest: AudioFocusRequest? = null

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Lock to landscape & keep screen awake
        requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

        // Notch & punch-hole cutout display support (Item 61)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            window.attributes.layoutInDisplayCutoutMode =
                WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES
        }

        // Fullscreen edge-to-edge immersive sticky
        hideSystemBars()

        // Create & configure WebView
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
                allowFileAccess = true
                allowContentAccess = true
                useWideViewPort = true
                loadWithOverviewMode = true
                cacheMode = WebSettings.LOAD_DEFAULT
                mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
                // Il gioco gestisce da solo la dimensione del testo nell'HUD:
                // il font scale di sistema romperebbe il layout di gara
                textZoom = 100
                // App solo locale: niente controlli safe browsing (boot piu' rapido)
                @Suppress("DEPRECATION")
                safeBrowsingEnabled = false
            }

            // Renderer WebGL esplicitamente legato alla visibilita' dell'app e
            // riavviabile in anticipo: evita degradi/kill del GPU renderer in gara
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                setRendererPriorityPolicy(
                    WebView.RENDERER_PRIORITY_BOUND,
                    /* attemptedStartupWhenRendererPriorityRaised = */ true
                )
            }
        }

        // Add Native Haptics Bridge (Item 62)
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

            // Il renderer WebGL di WebView puo' essere ucciso dal sistema su
            // device con poca memoria durante una gara: senza questo handler
            // l'utente resterebbe su schermo nero. Ricreiamo l'attivita' puliti.
            override fun onRenderProcessGone(view: WebView, detail: RenderProcessGoneDetail): Boolean {
                Log.w("ZephyrKart", "Renderer WebGL terminato: riavvio dell'app")
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

        // Layout: WebView a schermo pieno + banner AdMob (visibile solo nei menu)
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

        // Init AdMob + banner + interstitial (silenzioso se il device non ha
        // Google Play Services: il gioco funziona identico senza annunci)
        MobileAds.initialize(this) {}
        adBannerView.loadAd(AdRequest.Builder().build())
        loadInterstitial()

        // Bridge JS per la shell (banner nei menu, interstitial tra le gare)
        webView.addJavascriptInterface(AndroidAds(this), "AndroidAds")

        // Setup Audio Focus (Item 63)
        setupAudioFocus()

        // Load Zephyr Reef via asset loader
        webView.loadUrl("https://appassets.androidplatform.net/assets/zephyr.html")

        // Handle Back button with in-race pause and exit confirmation
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                val now = System.currentTimeMillis()
                webView.evaluateJavascript(
                    "(function() { if (window.__zephyr && window.__zephyr.mode === 'race' && !window.__zephyr.paused) { window.__zephyr.setPaused(true); document.getElementById('z-pause-modal')?.classList.remove('hidden'); return 'paused'; } return 'not_in_race'; })()"
                ) { result ->
                    if (result != null && result.contains("paused")) {
                        // Race was running and is now paused cleanly
                        return@evaluateJavascript
                    }
                    if (now - lastBackPressedTime < 2000) {
                        finish()
                    } else {
                        lastBackPressedTime = now
                        Toast.makeText(this@MainActivity, "Press again to exit Zephyr Reef Grand Prix", Toast.LENGTH_SHORT).show()
                    }
                }
            }
        })
    }

    fun showAdBanner() {
        adBannerView.visibility = View.VISIBLE
        if (!adBannerView.isLoading && adBannerView.adListener == null) {
            adBannerView.loadAd(AdRequest.Builder().build())
        }
    }

    fun hideAdBanner() {
        adBannerView.visibility = View.GONE
    }

    private fun loadInterstitial() {
        InterstitialAd.load(this, AdsConfig.INTERSTITIAL_UNIT_ID,
            AdRequest.Builder().build(), object : InterstitialAdLoadCallback() {
                override fun onAdLoaded(ad: InterstitialAd) {
                    interstitialAd = ad
                    ad.fullScreenContentCallback = object : FullScreenContentCallback() {
                        override fun onAdDismissedFullScreenContent() {
                            interstitialAd = null
                            loadInterstitial()
                        }
                        override fun onAdFailedToShowFullScreenContent(adError: AdError) {
                            interstitialAd = null
                        }
                    }
                }
                override fun onAdFailedToLoad(adError: LoadAdError) {
                    interstitialAd = null
                }
            })
    }

    fun showRaceEndInterstitial() {
        interstitialAd?.show(this)
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
