#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

echo "=== Building Zephyr Reef Grand Prix for iOS ==="

cd "$ROOT_DIR"

# 1. Ensure output directories exist
rm -rf build/ios
mkdir -p build/ios/ZephyrReefKart.app
mkdir -p build/ios/Payload

# 2. Sync WebAssets to ensure iOS has latest bundles
echo "--> Syncing WebAssets..."
mkdir -p ios/ZephyrReefKart/ZephyrReefKart/Resources/WebAssets/assets
mkdir -p ios/ZephyrReefKart/ZephyrReefKart/Resources/WebAssets/audio
cp index.html ios/ZephyrReefKart/ZephyrReefKart/Resources/WebAssets/index.html
cp zephyr.html ios/ZephyrReefKart/ZephyrReefKart/Resources/WebAssets/zephyr.html
cp assets/* ios/ZephyrReefKart/ZephyrReefKart/Resources/WebAssets/assets/
cp -r android/ZephyrReefKart/app/src/main/assets/audio/* ios/ZephyrReefKart/ZephyrReefKart/Resources/WebAssets/audio/

# 3. Locate iPhoneOS SDK
SDK_PATH="$(xcrun --sdk iphoneos --show-sdk-path 2>/dev/null || echo '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk')"
echo "--> Using SDK: $SDK_PATH"

SWIFTC_BIN="$(which swiftc 2>/dev/null || echo '/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swiftc')"
if [ ! -x "$SWIFTC_BIN" ]; then
  SWIFTC_BIN="/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/swiftc"
fi

# 4. Compile Swift sources
echo "--> Compiling Swift sources with swiftc..."
"$SWIFTC_BIN" -sdk "$SDK_PATH" \
  -target arm64-apple-ios15.0 \
  -parse-as-library \
  -O \
  ios/ZephyrReefKart/ZephyrReefKart/App/AppDelegate.swift \
  ios/ZephyrReefKart/ZephyrReefKart/App/SceneDelegate.swift \
  ios/ZephyrReefKart/ZephyrReefKart/App/ViewController.swift \
  ios/ZephyrReefKart/ZephyrReefKart/WebView/GameWebView.swift \
  ios/ZephyrReefKart/ZephyrReefKart/WebView/NativeHapticsBridge.swift \
  ios/ZephyrReefKart/ZephyrReefKart/WebView/LocalSchemeHandler.swift \
  -o build/ios/ZephyrReefKart.app/ZephyrReefKart

# 5. Process Info.plist
echo "--> Generating Info.plist..."
sed -e 's/\$(EXECUTABLE_NAME)/ZephyrReefKart/g' \
    -e 's/\$(PRODUCT_BUNDLE_IDENTIFIER)/com.robzombai.zephyrreefkart/g' \
    -e 's/\$(PRODUCT_NAME)/ZephyrReefKart/g' \
    -e 's/\$(PRODUCT_MODULE_NAME)/ZephyrReefKart/g' \
    -e 's/\$(PRODUCT_BUNDLE_PACKAGE_TYPE)/APPL/g' \
    ios/ZephyrReefKart/ZephyrReefKart/Info.plist > build/ios/ZephyrReefKart.app/Info.plist

# 6. Copy App Icons & WebAssets
echo "--> Bundling resources..."
cp ios/ZephyrReefKart/ZephyrReefKart/Resources/Assets.xcassets/AppIcon.appiconset/*.png build/ios/ZephyrReefKart.app/ 2>/dev/null || true
cp -r ios/ZephyrReefKart/ZephyrReefKart/Resources/WebAssets build/ios/ZephyrReefKart.app/WebAssets

# 7. Code signing (ad-hoc development signature)
echo "--> Code signing application bundle..."
codesign -s - --force --deep build/ios/ZephyrReefKart.app
codesign --verify --deep --strict build/ios/ZephyrReefKart.app

# 8. Package into .ipa
echo "--> Packaging ZephyrReefKart.ipa..."
cp -r build/ios/ZephyrReefKart.app build/ios/Payload/
(cd build/ios && zip -q -r "$ROOT_DIR/ZephyrReefKart.ipa" Payload)

echo "=== iOS Build Complete: ZephyrReefKart.ipa generated successfully! ==="
ls -lh "$ROOT_DIR/ZephyrReefKart.ipa"
