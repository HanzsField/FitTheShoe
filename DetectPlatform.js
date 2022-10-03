function CheckIsMobilePlatform() {
  var userAgent = navigator.userAgent;
  isMobile =
    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(userAgent) ||
    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(userAgent) ||
    // iPad on iOS 13 detection
    (userAgent.includes("Mac") && "ontouchend" in document);
  return isMobile;
}

function CheckIsAndroidPlatform() {
  var userAgent = navigator.userAgent;
  isMobile = /\b(Android)\b/i.test(userAgent);
  return isMobile;
}

function CheckIsiOSPlatform() {
  var userAgent = navigator.userAgent;
  isMobile =
    /\b(iPhone)\b/i.test(userAgent) ||
    /\b(iPad|iPod)\b/i.test(userAgent) ||
    // iPad on iOS 13 detection
    (userAgent.includes("Mac") && "ontouchend" in document);
  return isMobile;
}
