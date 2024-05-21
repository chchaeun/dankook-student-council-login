import CryptoJS from "crypto-js";

const getCodeVerifier = () => {
  return CryptoJS.lib.WordArray.random(32).toString(
    CryptoJS.enc.Base64url
  ) as string;
};
const getCodeChallenge = (codeVerifier: string) => {
  return CryptoJS.SHA256(codeVerifier).toString(
    CryptoJS.enc.Base64url
  ) as string;
};
export { getCodeVerifier, getCodeChallenge };
