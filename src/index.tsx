import React, { useEffect } from "react";
import api from "./utils/api";
import PATH from "./constants/path";
import { codeChallenge, codeVerifier } from "./core/pkce";
import store from "./utils/store";
import KEY from "./constants/key";
import { ComponentProps } from "./types";
import { useToken } from "./core/useToken";
import { Tokens } from "./types";

export default function DankookSCLogin({
  clientId,
  onSuccess,
  onError,
}: ComponentProps) {
  const { tokens, error, getTokens } = useToken();

  useEffect(() => {
    const authCode = new URL(window.location.href).searchParams.get(
      KEY.AUTH_CODE_PARAM
    );

    authCode && getTokens(authCode);
  }, [window.location.href]);

  useEffect(() => {
    tokens && onSuccess(tokens);
    error && onError && onError(error);
  }, [tokens, error]);

  const onClick = () => {
    store(KEY.CODE_VERIFIER).set(codeVerifier);
    api().get(PATH.AUTHORIZE, {
      codeChallenge,
      clientId,
    });
  };

  return (
    <button type="button" onClick={onClick}>
      단국대학교 총학생회 로그인
    </button>
  );
}

export { Tokens };
