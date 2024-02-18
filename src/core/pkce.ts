import CryptoJS from "crypto-js";

const codeVerifier = CryptoJS.lib.WordArray.random(32).toString(
  CryptoJS.enc.Base64
);
const codeChallenge = CryptoJS.SHA256(codeVerifier).toString(
  CryptoJS.enc.Base64
);

export { codeVerifier, codeChallenge };
