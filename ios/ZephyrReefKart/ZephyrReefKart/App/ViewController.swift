import UIKit
import WebKit

final class ViewController: UIViewController, WKNavigationDelegate, WKUIDelegate {
    
    private var gameWebView: GameWebView?
    private var loadingIndicator: UIActivityIndicatorView?
    
    override var prefersStatusBarHidden: Bool {
        return true
    }
    
    override var prefersHomeIndicatorAutoHidden: Bool {
        return true
    }
    
    override var supportedInterfaceOrientations: UIInterfaceOrientationMask {
        return .landscape
    }
    
    override var preferredInterfaceOrientationForPresentation: UIInterfaceOrientation {
        return .landscapeRight
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor(red: 0.04, green: 0.07, blue: 0.10, alpha: 1.0)
        
        setupWebView()
        setupLoadingIndicator()
        setupNotifications()
    }
    
    private func setupWebView() {
        // Resolve WebAssets bundle directory
        guard let assetsURL = Bundle.main.url(forResource: "WebAssets", withExtension: nil) else {
            fatalError("Could not find WebAssets in main bundle")
        }
        
        let webView = GameWebView.makeConfigured(webAssetsURL: assetsURL)
        webView.navigationDelegate = self
        webView.uiDelegate = self
        webView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(webView)
        
        NSLayoutConstraint.activate([
            webView.topAnchor.constraint(equalTo: view.topAnchor),
            webView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            webView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            webView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
        
        self.gameWebView = webView
        webView.loadGame(from: assetsURL)
    }
    
    private func setupLoadingIndicator() {
        let indicator = UIActivityIndicatorView(style: .large)
        indicator.color = UIColor(red: 0.22, green: 0.85, blue: 1.0, alpha: 1.0)
        indicator.translatesAutoresizingMaskIntoConstraints = false
        indicator.hidesWhenStopped = true
        view.addSubview(indicator)
        
        NSLayoutConstraint.activate([
            indicator.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            indicator.centerYAnchor.constraint(equalTo: view.centerYAnchor)
        ])
        
        indicator.startAnimating()
        self.loadingIndicator = indicator
    }
    
    private func setupNotifications() {
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(handleWillResignActive),
            name: UIApplication.willResignActiveNotification,
            object: nil
        )
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(handleDidBecomeActive),
            name: UIApplication.didBecomeActiveNotification,
            object: nil
        )
    }
    
    @objc private func handleWillResignActive() {
        gameWebView?.pauseGame()
    }
    
    @objc private func handleDidBecomeActive() {
        gameWebView?.resumeGame()
    }
    
    // MARK: - WKNavigationDelegate
    
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        loadingIndicator?.stopAnimating()
        setNeedsUpdateOfHomeIndicatorAutoHidden()
    }
    
    func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        loadingIndicator?.stopAnimating()
        print("[ZephyrKart-iOS] Navigation error: \(error.localizedDescription)")
    }
    
    func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
        print("[ZephyrKart-iOS] WebContent process terminated, reloading...")
        if let assetsURL = Bundle.main.url(forResource: "WebAssets", withExtension: nil) {
            gameWebView?.loadGame(from: assetsURL)
        }
    }
    
    deinit {
        NotificationCenter.default.removeObserver(self)
    }
}
