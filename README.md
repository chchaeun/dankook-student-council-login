# dankook-student-council-login

[단국대학교 총학생회](https://danvery.com) 로그인 컴포넌트

## Getting Started

### Installation

- NPM

```shell
npm install dankook-student-council-login
```

- Yarn

```shell
yarn add dankook-student-council-login
```

### Environment

- React

## Usage

```typescript
import DankookStudentCouncilLogin from "dankook-student-council-login";

<DankookStudentCouncilLogin
  clientId={clientId}
  redirectUri={redirectUri}
  onSuccess={onSuccess}
/>;
```

## Property

| name        | type          | description                                           | note                                |
| ----------- | ------------- | ----------------------------------------------------- | ----------------------------------- |
| clientId    | string        | OAuth 사용 허가를 위한 클라이언트 ID                  | [개발자](@chchaeun)에 문의하여 발급 |
| redirectUri | string        | 로그인 성공 시 리다이렉트 될 URI                      | 해당 컴포넌트가 작성된 URI          |
| style?      | CSSProperties | 로그인 버튼 스타일을 덮어쓰는 오브젝트                |                                     |
| onSuccess   | Function      | 리다이렉트 이후 authCode를 파라미터로 가져오는 메서드 |                                     |
| onError?    | Function      | 로그인 실패 시 에러 핸들링을 구현하는 메서드          |                                     |

## 토큰 발급 플로우

### onSuccess

로그인 성공 시 authCode와 codeVerifier가 onSuccess의 인자로 반환되며, 이를 사용해서 Access Token과 Refresh Token을 발급받습니다.

```typescript
interface AuthorizeResponse {
  authCode: string;
  codeVerifier: string;
}

const onSuccess = (res: AuthorizeResponse) => {
  getToken(res);
};
```

### 토큰 발급 API

`POST https://danvery.com/api/oauth/token`

- Parameters

  | name         | type   | note                                   |
  | ------------ | ------ | -------------------------------------- |
  | grantType    | string | `authorization code` 사용              |
  | clientId     | string | [개발자](@chchaeun)에 문의하여 발급    |
  | clientSecret | string | [개발자](@chchaeun)에 문의하여 발급    |
  | redirectUri  | string |                                        |
  | code         | string | onSuccess의 인자로 받은 `authCode`     |
  | codeVerifier | string | onSuccess의 인자로 받은 `codeVerifier` |

- Responses

  | code | response key | response type |
  | ---- | ------------ | ------------- |
  | 200  | accessToken  | string        |
  |      | refreshToken | string        |
  |      | tokenType    | string        |
  |      | scope        | string        |
