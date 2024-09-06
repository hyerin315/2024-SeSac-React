
import { Link, useNavigate } from "react-router-dom";

export default function UserHome() {
  const navigate = useNavigate();
  let token = localStorage.getItem('token');
  let type = localStorage.getItem('type');
  let myMenu = '';
  let selMenu = '';
  let category = '';

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/userhome');
  }

  if (token === null) {
    myMenu = <div>
      <Link to="/member/join">회원가입</Link>&nbsp;
      <Link to="/member/login">로그인</Link>
    </div>;
  } else {
    myMenu = <div>
      <Link to="/member/info">내 정보확인</Link>&nbsp;
      <button onClick={logout}>로그아웃</button><br />
    </div>;
    if (type === '판매자') {
      selMenu = <div>
        <Link to="/board/selllist">내 상품확인</Link><br />
        <Link to="/board/list">Fruit</Link>
      </div>;
    } else if (type === '구매자') {
      category = <Link to="/board/list">Fruit</Link>
    }
  }
  return (
    <div>
      <h2>Buy & Sell</h2>
      {myMenu}
      {selMenu}&nbsp;
      {category}
    </div>
  )
}