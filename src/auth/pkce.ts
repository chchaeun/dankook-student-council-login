import * as crypto from "crypto";

const base64Encode = (str: Buffer) => {
  return str
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
};

const codeVerifier = base64Encode(crypto.randomBytes(32));

const sha256 = (buffer: string) => {
  return crypto.createHash("sha256").update(buffer).digest();
};

const codeChallenge = base64Encode(sha256(codeVerifier));

export { codeVerifier, codeChallenge, base64Encode, sha256 };
