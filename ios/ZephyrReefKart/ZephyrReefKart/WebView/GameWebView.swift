import UIKit
import WebKit

final class GameWebView: WKWebView {
    
    private let hapticsBridge = NativeHapticsBridge()
    
    static func makeConfigured(webAssetsURL: URL) -> GameWebView {
        let configuration = WKWebViewConfiguration()
        
        // Game-tuned media & script policies
        configuration.allowsInlineMediaPlayback = true
        configuration.mediaTypesRequiringUserActionForPlayback = []
        
        let preferences = WKPreferences()
        preferences.javaScriptCanOpenWindowsAutomatically = false
        configuration.preferences = preferences
        
        let webpagePrefs = WKWebpagePreferences()
        webpagePrefs.allowsContentJavaScript = true
        configuration.defaultWebpagePreferences = webpagePrefs
        
        // Register custom scheme handler
        let schemeHandler = LocalSchemeHandler(baseDirectory: webAssetsURL)
        configuration.setURLSchemeHandler(schemeHandler, forURLScheme: "zephyr")
        
        // Inject haptics polyfill and anti-scroll / anti-callout rules
        let userContentController = WKUserContentController()
        let bridgeScript = WKUserScript(
            source: NativeHapticsBridge.injectionScript,
            injectionTime: .atDocumentStart,
            forMainFrameOnly: true
        )
        userContentController.addUserScript(bridgeScript)
        configuration.userContentController = userContentController
        
        let webView = GameWebView(frame: .zero, configuration: configuration)
        webView.setupView()
        
        userContentController.add(webView.hapticsBridge, name: "iosHaptics")
        
        return webView
    }
    
    private func setupView() {
        backgroundColor = UIColor(red: 0.04, green: 0.07, blue: 0.10, alpha: 1.0)
        isOpaque = true
        autoresizingMask = [.flexibleWidth, .flexibleHeight]
        
        // Disable WebKit default elastic scrolling and pinch-zoom
        scrollView.isScrollEnabled = false
        scrollView.bounces = false
        scrollView.showsVerticalScrollIndicator = false
        scrollView.showsHorizontalScrollIndicator = false
        scrollView.contentInsetAdjustmentBehavior = .never
        
        // Disable text selection and callouts
        scrollView.isUserInteractionEnabled = true
    }
    
    func loadGame(from webAssetsURL: URL) {
        let htmlURL = webAssetsURL.appendingPathComponent("zephyr.html")
        if FileManager.default.fileExists(atPath: htmlURL.path) {
            // Load via direct secure file URL allowing local read access
            loadFileURL(htmlURL, allowingReadAccessTo: webAssetsURL)
        } else {
            // Fallback to custom URL scheme
            if let zephyrURL = URL(string: "zephyr://game/zephyr.html") {
                load(URLRequest(url: zephyrURL))
            }
        }
    }
    
    func pauseGame() {
        evaluateJavaScript("(function() { if (window.__zephyr && !window.__zephyr.paused) { window.__zephyr.setPaused(true); } })()", completionHandler: nil)
    }
    
    func resumeGame() {
        evaluateJavaScript("(function() { if (window.__zephyr && window.__zephyr.paused) { window.__zephyr.setPaused(false); } })()", completionHandler: nil)
    }
    
    deinit {
        configuration.userContentController.removeScriptMessageHandler(forName: "iosHaptics")
    }
}
