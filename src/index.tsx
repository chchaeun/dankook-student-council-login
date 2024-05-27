import React, { useEffect } from "react";
import api from "./utils/api";
import PATH from "./constants/path";
import store from "./utils/store";
import KEY from "./constants/key";
import { ComponentProps } from "./types";
import { AuthorizeResponse } from "./types";
import { DEFAULT_STYLE } from "./utils/style";
import { getCodeChallenge, getCodeVerifier } from "./core/pkce";

export default function DankookStudentCouncilLogin({
  clientId,
  redirectUri,
  style = {},
  onSuccess,
  onError,
}: ComponentProps) {
  useEffect(() => {
    const authCode = new URL(window.location.href).searchParams.get(
      KEY.AUTH_CODE_PARAM
    );

    authCode &&
      onSuccess({ authCode, codeVerifier: store(KEY.CODE_VERIFIER).get() });

    store(KEY.CODE_VERIFIER).delete();
  }, [window.location.href]);

  const onClick = () => {
    const codeVerifier = getCodeVerifier();

    store(KEY.CODE_VERIFIER).set(codeVerifier);

    api()
      .get(PATH.AUTHORIZE, {
        codeChallenge: getCodeChallenge(codeVerifier),
        clientId,
        redirectUri,
        responseType: "code",
        codeChallengeMethod: "S256",
      })
      .then((res) => {
        const { redirectUri } = res;
        if (redirectUri) {
          window.location.href = redirectUri;
          return;
        }
      })
      .catch((err) => {
        onError && onError(err);
      });
  };

  return (
    <button
      type="button"
      onClick={onClick}
      style={{ ...DEFAULT_STYLE, ...style }}
    >
      단국대학교 총학생회 로그인
    </button>
  );
}

export { AuthorizeResponse };
