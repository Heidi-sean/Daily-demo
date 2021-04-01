const CryptoJS = require("crypto-js");
function generateUrl() {
  const requestHost = "tts-api.xfyun.cn";
  const url = "/v2/tts";
  const host = "ws-api.xfyun.cn";
  const date = new Date().toUTCString();
  const app_id = "c78a820c";
  const api_key = "07490b84d967ceaf14025b353bc39396";
  const apiSecret = "YTc2MzgyZGRjOTMzMDA3YTg3ODc3NWYy";
  const signature_origin = `host: ${host}\ndate: ${date}\nGET ${url} HTTP/1.1`;
  const hash = CryptoJS.HmacSHA256(signature_origin, apiSecret);
  const signature = CryptoJS.enc.Base64.stringify(hash);
  const authorization_origin = `api_key="${api_key}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
  const authorization = CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Utf8.parse(authorization_origin)
  );
  const wss = `wss://${requestHost}${url}?authorization=${authorization}&date=${encodeURI(
    date
  )}&host=${host}`;
  return wss;
}