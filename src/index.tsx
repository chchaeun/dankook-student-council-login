import React from "react";
import { codeChallenge } from "./auth/pkce";

const DankookCouncilLogin = () => {
  const onClick = () => {
    window.location.href = `http://locahost:3000/oauth2/authorize?client_id=what&response_type=code&code_challenge=${codeChallenge}&code_challenge_method=S256`;
  };

  return (
    <button type="button" onClick={onClick}>
      단국대학교 총학생회 로그인
    </button>
  );
};

export default DankookCouncilLogin;
