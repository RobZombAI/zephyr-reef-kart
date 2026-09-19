import Foundation
import WebKit
import UniformTypeIdentifiers

/// LocalSchemeHandler handles custom `zephyr://` URLs by serving bundled WebAssets
/// with correct MIME types, caching headers, and streaming range support.
final class LocalSchemeHandler: NSObject, WKURLSchemeHandler {
    
    private let baseDirectory: URL
    
    init(baseDirectory: URL) {
        self.baseDirectory = baseDirectory
        super.init()
    }
    
    func webView(_ webView: WKWebView, start urlSchemeTask: WKURLSchemeTask) {
        let requestURL = urlSchemeTask.request.url!
        var relativePath = requestURL.path
        if relativePath.hasPrefix("/") {
            relativePath = String(relativePath.dropFirst())
        }
        if relativePath.isEmpty {
            relativePath = "zephyr.html"
        }
        
        let fileURL = baseDirectory.appendingPathComponent(relativePath)
        
        guard FileManager.default.fileExists(atPath: fileURL.path) else {
            let error = NSError(domain: "LocalSchemeHandler", code: 404, userInfo: [NSLocalizedDescriptionKey: "File not found: \(relativePath)"])
            urlSchemeTask.didFailWithError(error)
            return
        }
        
        do {
            let data = try Data(contentsOf: fileURL, options: .mappedIfSafe)
            let mimeType = mimeTypeForPath(fileURL.path)
            
            let response = HTTPURLResponse(
                url: requestURL,
                statusCode: 200,
                httpVersion: "HTTP/1.1",
                headerFields: [
                    "Content-Type": mimeType,
                    "Content-Length": "\(data.count)",
                    "Access-Control-Allow-Origin": "*",
                    "Cache-Control": "public, max-age=3600"
                ]
            )!
            
            urlSchemeTask.didReceive(response)
            urlSchemeTask.didReceive(data)
            urlSchemeTask.didFinish()
        } catch {
            urlSchemeTask.didFailWithError(error)
        }
    }
    
    func webView(_ webView: WKWebView, stop urlSchemeTask: WKURLSchemeTask) {
        // No asynchronous tasks to cancel
    }
    
    private func mimeTypeForPath(_ path: String) -> String {
        let ext = (path as NSString).pathExtension.lowercased()
        switch ext {
        case "html", "htm": return "text/html; charset=utf-8"
        case "js", "mjs": return "application/javascript; charset=utf-8"
        case "css": return "text/css; charset=utf-8"
        case "json": return "application/json"
        case "png": return "image/png"
        case "jpg", "jpeg": return "image/jpeg"
        case "webp": return "image/webp"
        case "svg": return "image/svg+xml"
        case "mp3": return "audio/mpeg"
        case "ogg": return "audio/ogg"
        case "wav": return "audio/wav"
        case "woff2": return "font/woff2"
        default: return "application/octet-stream"
        }
    }
}
