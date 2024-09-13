
import { Link, useNavigate } from "react-router-dom";
import List from "../todo/List";
import Add from "../todo/Add"

export default function UserHome() {
  const navigate = useNavigate();
  let token = localStorage.getItem('token');
  let menu = '';
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loginId');
    navigate('/home');
  }


  if (token === null) {
    menu = <div>
      <Link to="/user/join">회원가입</Link>&nbsp;
      <Link to="/user/login">로그인</Link>
    </div>;
  } else {
    menu = <div>
      <Link onClick={logout}>로그아웃</Link>&nbsp;
      <Link to="/user/info">내 정보확인</Link>&nbsp;
      <h2>Todo</h2>
      <Add />
      <List />
    </div>;
  }
  return (
    <div>
      {menu}
    </div>
  )
}