import api from "../utils/api";
import PATH from "../constants/path";
import store from "../utils/store";
import KEY from "../constants/key";

interface Props {
  authCode?: string;
}

const useToken = () => {
  let tokens = null;
  let error = null;

  return {
    tokens,
    getTokens: async ({
      authCode = new URL(window.location.href).searchParams.get("authCode") ||
        "",
    }: Props) => {
      api()
        .post(PATH.TOKEN, {
          codeVerifier: store(KEY.CODE_VERIFIER).get(),
          authCode: authCode,
        })
        .then((res) => {
          const { data } = res;
          tokens = data;
        })
        .catch((err) => {
          error = err;
        });
    },
  };
};

export { useToken };
