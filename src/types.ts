interface Tokens {
  /** 사용자 액세스 토큰 */
  accessToken: string;
  /** 액세스 토큰 만료 시간(밀리초) */
  accessTokenExpirationTime: number;
  /** 사용자 리프레시 토큰 */
  refreshToken: string;
  /** 리프레시 토큰 만료 시간(밀리초) */
  refreshTokenExpirationTime: number;
}

interface ComponentProps {
  /** OAuth 사용 허가를 위한 클라이언트 ID */
  clientId: string;
  /** 로그인 성공 시 토큰 저장 플로우를 구현하는 메서드 */
  onSuccess: (tokens: Tokens) => void;
  /** 로그인 실패 시 에러 핸들링을 구현하는 메서드 */
  onError?: (err: Error) => void;
}

export { Tokens, ComponentProps };
