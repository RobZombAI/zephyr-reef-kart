import UIKit
import WebKit

/// NativeHapticsBridge connects JavaScript haptics calls to iOS Taptic Engine generators.
/// Supports both window.AndroidHaptics.vibrate(ms) and navigator.vibrate(pattern).
final class NativeHapticsBridge: NSObject, WKScriptMessageHandler {
    
    private let lightImpact = UIImpactFeedbackGenerator(style: .light)
    private let mediumImpact = UIImpactFeedbackGenerator(style: .medium)
    private let heavyImpact = UIImpactFeedbackGenerator(style: .heavy)
    private let notificationFeedback = UINotificationFeedbackGenerator()
    
    override init() {
        super.init()
        lightImpact.prepare()
        mediumImpact.prepare()
        heavyImpact.prepare()
        notificationFeedback.prepare()
    }
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == "iosHaptics" else { return }
        
        if let dict = message.body as? [String: Any], let type = dict["type"] as? String {
            DispatchQueue.main.async { [weak self] in
                guard let self = self else { return }
                switch type {
                case "light":
                    self.lightImpact.impactOccurred()
                    self.lightImpact.prepare()
                case "medium":
                    self.mediumImpact.impactOccurred()
                    self.mediumImpact.prepare()
                case "heavy":
                    self.heavyImpact.impactOccurred()
                    self.heavyImpact.prepare()
                case "warning":
                    self.notificationFeedback.notificationOccurred(.warning)
                    self.notificationFeedback.prepare()
                case "error":
                    self.notificationFeedback.notificationOccurred(.error)
                    self.notificationFeedback.prepare()
                case "duration":
                    let ms = (dict["ms"] as? Double) ?? 30.0
                    if ms < 25 {
                        self.lightImpact.impactOccurred(intensity: CGFloat(max(0.3, ms / 25.0)))
                        self.lightImpact.prepare()
                    } else if ms < 80 {
                        self.mediumImpact.impactOccurred()
                        self.mediumImpact.prepare()
                    } else {
                        self.heavyImpact.impactOccurred()
                        self.heavyImpact.prepare()
                    }
                default:
                    self.mediumImpact.impactOccurred()
                    self.mediumImpact.prepare()
                }
            }
        } else if let ms = message.body as? Double {
            DispatchQueue.main.async { [weak self] in
                guard let self = self else { return }
                if ms < 25 {
                    self.lightImpact.impactOccurred()
                } else if ms < 80 {
                    self.mediumImpact.impactOccurred()
                } else {
                    self.heavyImpact.impactOccurred()
                }
            }
        }
    }
    
    /// UserScript injected into WKWebView to transparently wire window.AndroidHaptics & navigator.vibrate to iOS
    static var injectionScript: String {
        return """
        (function() {
            // Polyfill window.AndroidHaptics for direct cross-platform parity
            window.AndroidHaptics = {
                vibrate: function(ms) {
                    try {
                        window.webkit.messageHandlers.iosHaptics.postMessage({ type: 'duration', ms: Number(ms) || 30 });
                    } catch (e) {}
                }
            };
            
            // Polyfill navigator.vibrate for Web API parity
            if (typeof navigator !== 'undefined') {
                var origVibrate = navigator.vibrate ? navigator.vibrate.bind(navigator) : null;
                navigator.vibrate = function(pattern) {
                    try {
                        if (typeof pattern === 'number') {
                            window.webkit.messageHandlers.iosHaptics.postMessage({ type: 'duration', ms: pattern });
                            return true;
                        } else if (Array.isArray(pattern) && pattern.length > 0) {
                            var first = pattern[0];
                            window.webkit.messageHandlers.iosHaptics.postMessage({ type: 'duration', ms: first });
                            return true;
                        }
                    } catch (e) {}
                    if (origVibrate) return origVibrate(pattern);
                    return true;
                };
            }
            
            // Prevent pinch-zoom and gesture interference
            document.addEventListener('gesturestart', function(e) { e.preventDefault(); }, { passive: false });
            document.addEventListener('gesturechange', function(e) { e.preventDefault(); }, { passive: false });
            document.addEventListener('gestureend', function(e) { e.preventDefault(); }, { passive: false });
            
            // Prevent contextual menus on touch hold
            window.addEventListener('contextmenu', function(e) { e.preventDefault(); }, false);
        })();
        """
    }
}
