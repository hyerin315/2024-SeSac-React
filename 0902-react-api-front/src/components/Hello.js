import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Hello() {
  const navigate = useNavigate(); // useNavigate() : 페이지 이동하는 함수
  let loginId = localStorage.getItem('loginId'); // localStorage : 탭의 묶음에서 정보를 공유함 (sessionStorage : 탭 각각 정보를 갖고 있으며, 공유하지 않음)
  let menu = '';
  const logout = () => {
    localStorage.removeItem('loginId');
    localStorage.removeItem('type');
    navigate('/userhome');
  }

  if (loginId === null) {
    menu = <div>
      <Link to="/member/join">회원가입</Link>&nbsp;
      <Link to="/member/login">로그인</Link>
    </div>;
  } else {
    menu = <div>
      <button onClick={logout}>로그아웃</button>&nbsp;
      <Link to="/member/info">내 정보확인</Link>
    </div>;
  }
  return (
    <div>
      <h2>User Home</h2>
      {menu}
    </div>
  )
}