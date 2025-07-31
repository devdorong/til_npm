# 카카오 로그인

- CRA 로 리액트 프로젝트 생성한 경우
  - 환경설정 즉, `.env` 사용법이 다름
- Vite 리액트 프로젝트 생성한 경우
  - 환경설정 즉, `.env` 사용법이 다름

## 1. 카카오 개발자 등록하기 / 로그인하기

- https://developers.kakao.com/
- https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api

## 2. 새로운 애플리케이션 등록하기

- 상단의 주메뉴에서 `앱` 선택후 이동
  <img width="1117" height="303" alt="Image" src="https://github.com/user-attachments/assets/58873dd5-0ff9-48c0-874f-49fe0495cf7e" />
- 내용 작성하기
  <img width="575" height="677" alt="Image" src="https://github.com/user-attachments/assets/bdfa0829-e323-46f6-b3f5-3ac53cecc1ba" />
  <img width="507" height="681" alt="Image" src="https://github.com/user-attachments/assets/d255dbd9-c6a6-4b22-8a7d-a7ab15d78789" />
- 목록 확인하기
  <img width="975" height="484" alt="Image" src="https://github.com/user-attachments/assets/88cba6f8-1f04-4b8b-9624-ef1d4f96054c" />
- 비즈앱 등록하기
  <img width="1183" height="615" alt="Image" src="https://github.com/user-attachments/assets/44b64cd0-c502-46f2-b9df-f5b4d4774368" />
  <img width="1329" height="585" alt="Image" src="https://github.com/user-attachments/assets/a69f9e54-f764-474e-a808-5dbbd2667b2c" />
  <img width="814" height="479" alt="Image" src="https://github.com/user-attachments/assets/54422623-99e4-4cf0-a54b-da58dd4827bd" />
  <img width="573" height="319" alt="Image" src="https://github.com/user-attachments/assets/b495c935-1eea-45c6-a8b0-60ceed567fa3" />

## 3. Rest Api 키 및 JS 키 관리

- `외부노출 금지`
- `/ 폴더`에 `.env` 파일 생성
- `생성되는 파일 위치 절대 주의`
  <img width="262" height="289" alt="Image" src="https://github.com/user-attachments/assets/8eab42ce-9d78-4bfc-8192-1e22dda15b73" />

### 3.1. 접두어는 `REACT_APP_` 으로 `약속`됨

- 예) Next.js 프로젝트에서는 에서는 `NEXT_APP_` 으로 약속됨
- 예) Vite 프로젝트에서는 에서는 `VITE_` 으로 약속됨

```txt
REACT_APP_KKO_LOGIN_REST_API_KEY=본인키
REACT_APP_KKO_LOGIN_JS_API_KEY=본인키
```

### 3.2. `.gitignore` 확인

- `.env` 내용으로 작성확인

<img width="543" height="515" alt="Image" src="https://github.com/user-attachments/assets/7bce0008-704e-4976-8875-4f671fe01287" />

## 4. 카카오 로그인 플랫폼 설정하기

<img width="1062" height="594" alt="Image" src="https://github.com/user-attachments/assets/edd1cca2-9b16-4d69-b670-45ef3431d0b4" />

### 4.1 리다이렉트 URL 설정

- http://localhost:3000 : CRA 버전
- http://localhost:5173 : Vite 버전
- https://www.도메인.com : 개인 도메인
  <img width="885" height="535" alt="Image" src="https://github.com/user-attachments/assets/83baa646-8326-4358-b206-0e0d9cd67f61" />
  <img width="1157" height="376" alt="Image" src="https://github.com/user-attachments/assets/dfc36f03-ae37-41c8-917c-1439cc1a3c59" />

## 5. 동의 항목 설정

<img width="1454" height="402" alt="Image" src="https://github.com/user-attachments/assets/e15629ad-7e2d-436a-b3b4-b7ceb1eef3a0" />
<img width="551" height="652" alt="Image" src="https://github.com/user-attachments/assets/3015f07f-3eb6-49d1-9996-256e78ae0de1" />
<img width="1487" height="401" alt="Image" src="https://github.com/user-attachments/assets/49d999f3-57e1-4c9a-b1be-a65566a6c17e" />

## 6. 카카오 로그인 구현

- /src/kko 폴더 생성
- /src/kko/kkoapi.js

### 6.1. 1단계

```js
// git 에 key 값 공개금지
const rest_api_key = process.env.REACT_APP_KKO_LOGIN_REST_API_KEY;
// 카카오 로그인 성공시 이동할 URL
const redirect_uri = "http://localhost:3000/member/kko";
// 카카오 로그인시 API 호출 경로 : token 활용
const auth_code_path = "https://kauth.kakao.com/oauth/authorize";
// 카카오 로그인 이후 사용자 정보 API 경로
const kko_user_api = "https://kapi.kakao.com/v2/user/me";
// 카카오 로그인 시도시 활용할 URL 자동 생성
export const getKakaoLoginLink = () => {
  const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  return kakaoURL;
};
```

### 6.2. 2단계 : Access Token 활용

```js
// access 토큰 요청
const access_token_url = `https://kauth.kakao.com/oauth/token`;
export const getAccessToken = async authCode => {
  const params = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: rest_api_key,
    redirect_uri: redirect_uri,
    code: authCode,
  });

  const response = await fetch(access_token_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("토큰 요청 실패:", errorData);
    throw new Error("Access Token 요청 실패");
  }

  const data = await response.json();
  return data.access_token;
};

// 사용자 정보 요청
export const getMemberWithAccessToken = async accessToken => {
  try {
    const response = await fetch(kko_user_api, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("사용자 정보 요청 실패:", errorData);
      return errorData;
    }

    const userData = await response.json();
    console.log(userData);
    return userData;
  } catch (error) {
    console.error("fetch 에러:", error);
    return error;
  }
};
```

### 6.3. 전체 코드 (`추후 axios 로 변경 권장`)

```js
// git 에 key 값 공개금지
const rest_api_key = process.env.REACT_APP_KKO_LOGIN_REST_API_KEY;
// 카카오 로그인 성공시 이동할 URL
const redirect_uri = "http://localhost:3000/member/kko";
// 카카오 로그인시 API 호출 경로 : token 활용
const auth_code_path = "https://kauth.kakao.com/oauth/authorize";
// 카카오 로그인 이후 사용자 정보 API 경로
const kko_user_api = "https://kapi.kakao.com/v2/user/me";
// 카카오 로그인 시도시 활용할 URL 자동 생성
export const getKakaoLoginLink = () => {
  const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  return kakaoURL;
};

// access 토큰 요청
const access_token_url = `https://kauth.kakao.com/oauth/token`;
export const getAccessToken = async authCode => {
  const params = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: rest_api_key,
    redirect_uri: redirect_uri,
    code: authCode,
  });

  const response = await fetch(access_token_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("토큰 요청 실패:", errorData);
    throw new Error("Access Token 요청 실패");
  }

  const data = await response.json();
  return data.access_token;
};

// 사용자 정보 요청
export const getMemberWithAccessToken = async accessToken => {
  try {
    const response = await fetch(kko_user_api, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("사용자 정보 요청 실패:", errorData);
      return errorData;
    }

    const userData = await response.json();
    console.log(userData);
    return userData;
  } catch (error) {
    console.error("fetch 에러:", error);
    return error;
  }
};
```

### 6.4. 코드 반영

- /src/pages/LoginPage.jsx 파일 생성

```jsx
import { Link } from "react-router-dom";
import { getKakaoLoginLink } from "../kko/kkoapi";

function LoginPage() {
  //js
  // 카카오 로그인 URL 만들기
  const kkoLoginUrl = getKakaoLoginLink();
  //   console.log(kkoLoginUrl);

  //jsx
  return (
    <div>
      <h1>LoginPage</h1>
      <Link to={kkoLoginUrl}>카카오 로그인</Link>
    </div>
  );
}

export default LoginPage;
```

- /src/pages/member 폴더 생성
- /src/pages/member/After.jsx 파일 생성

```jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAccessToken, getMemberWithAccessToken } from "../../kko/kkoapi";

const After = () => {
  // 사용자 정보 관리
  const [userInfo, setUserInfo] = useState(null);

  // 카카오 인증키 알아내기
  const [URLSearchParams, setURLSearchParams] = useSearchParams();
  const authCode = URLSearchParams.get("code");

  // 인가 키를 받아서 액세스 토큰을 요청한다.
  const getAccessTokenCall = async () => {
    const accessKey = await getAccessToken(authCode);
    // console.log("accessKey : ", accessKey);
    // 사용자 정보 호출
    const info = await getMemberWithAccessToken(accessKey);
    console.log(info);
    setUserInfo(info);
  };

  useEffect(() => {
    getAccessTokenCall();
  }, [authCode]);
  return (
    <div>
      <h1>KKO 로그인 후 </h1>
      <h2>{authCode}</h2>
      <div>닉네임 : {userInfo?.kakao_account.profile.nickname}</div>
      <div>이메일 : {userInfo?.kakao_account.email}</div>
      <div>
        <img src={userInfo?.kakao_account.profile.thumbnail_image_url} />
      </div>
    </div>
  );
};

export default After;
```

### 6.4.1. Router 셋팅

- /src/App.js

```js
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import After from "./pages/member/After";

function App() {
  return (
    <Router>
      <LoginPage />
      <Routes>
        <Route path="/member/kko" element={<After />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
```

## 7. Recoil 활용해 보기

- /src/atoms/kkoLoginAtom.js

```js
import { atom } from "recoil";

export const kkoLoginAtom = atom({
  key: "kkoLoginAtom",
  default: { id: "", nickname: "", thumbnail_image_url: "", email: "" },
});
```

## 8. 로그아웃 처리

```jsx
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { kkoLoginAtom } from "../atoms/kkoLoginAtom";
import { getKakaoLoginLink } from "../kko/kkoapi";

function LoginPage() {
  //js
  const navigate = useNavigate();
  // Recoil State 로 전역 상태 활용하기
  const [userInfo, setUserInfo] = useRecoilState(kkoLoginAtom);
  // 카카오 로그인 URL 만들기
  const kkoLoginUrl = getKakaoLoginLink();
  //   console.log(kkoLoginUrl);
  const handleLogout = () => {
    setUserInfo({ id: "", nickname: "", email: "", thumbnail_image_url: "" });
    navigate("/");
  };
  //jsx
  return (
    <div>
      <h1>LoginPage</h1>
      {userInfo.id ? (
        <button onClick={handleLogout}>"로그아웃"</button>
      ) : (
        <Link to={kkoLoginUrl}>카카오 로그인</Link>
      )}
    </div>
  );
}

export default LoginPage;
```

## 9. 로그인 없이 페이지 접근시 처리

- 강제로 navigate("/login")
- 조건문으로 안내메시지 및 버튼으로 이동권장