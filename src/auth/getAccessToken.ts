import axios from "axios";
import { codeVerifier } from "./pkce";

interface Props {
  authCode?: string | null;
  callback?: Function;
}

const useAccessToken = function () {
  let accessToken;
  let expirationTime;

  const getAccessToken = async ({
    authCode = new URL(window.location.href).searchParams.get("code"),
    callback,
  }: Props) => {
    await axios.post("/token", { codeVerifier, authCode }).then((res) => {
      const {
        data: { accessToken: at, expirationTime: et },
      } = res;
      accessToken = at;
      expirationTime = et;
      callback && callback();
    });
  };

  return {
    accessToken,
    expirationTime,
    getAccessToken,
  };
};

export { useAccessToken };
