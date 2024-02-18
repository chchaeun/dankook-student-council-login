import api from "../utils/api";
import PATH from "../constants/path";
import store from "../utils/store";
import KEY from "../constants/key";

const useToken = () => {
  let tokens = null;
  let error = null;

  return {
    tokens,
    error,
    getTokens: async (authCode: string) => {
      api()
        .post(PATH.TOKEN, {
          codeVerifier: store(KEY.CODE_VERIFIER).get(),
          authCode,
        })
        .then((res) => {
          const { data } = res;
          tokens = data;
        })
        .catch((err) => {
          error = err;
        })
        .finally(() => {
          store(KEY.CODE_VERIFIER).delete();
        });
    },
  };
};

export { useToken };
