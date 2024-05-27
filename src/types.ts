import { CSSProperties } from "react";

interface AuthorizeResponse {
  authCode: string;
  codeVerifier: string;
}

interface ComponentProps {
  /** OAuth 사용 허가를 위한 클라이언트 ID */
  clientId: string;
  /** 로그인 성공 시 리다이렉트 될 URI */
  redirectUri: string;
  /** 로그인 버튼 스타일을 덮어쓰는 Property **/
  style?: CSSProperties;
  /** 리다이렉트 이후 authCode를 파라미터로 가져오는 메서드 */
  onSuccess: (res: AuthorizeResponse) => void;
  /** 로그인 실패 시 에러 핸들링을 구현하는 메서드 */
  onError?: (err: Error) => void;
}

export { AuthorizeResponse, ComponentProps };
