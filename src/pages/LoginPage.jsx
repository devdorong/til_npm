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
