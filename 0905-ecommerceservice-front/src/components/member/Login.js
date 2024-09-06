import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({ id: '', pwd: '' });
  const { id, pwd } = inputs;


  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const login = () => {
    axios.post('http://localhost:8080/login', {}, { params: { id: id, pwd: pwd } })
      .then(function (res) {
        if (res.status === 200 && res.data.flag) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('loginId', id);
          localStorage.setItem('type', res.data.type);

          if (res.data.flag && res.data.type === '구매자') {
            alert(`${id}님, 오늘도 즐거운 쇼핑되세요!`);
          } else if (res.data.flag && res.data.type === '판매자') {
            alert(`${id}님, 오늘도 저희 쇼핑몰을 이용해주셔서 감사합니다!`);
          }
          navigate('/userhome');
        } else {
          alert('일치하는 정보가 없습니다. ID와 PW를 확인해주세요.');
        }
      })
  }


  return (
    <div>
      <h2>Login</h2>
      ID: <input type="text" name="id" value={id} onChange={onChange} /><br />
      PWD: <input type="password" name="pwd" value={pwd} onChange={onChange} /><br />
      <button onClick={login}>로그인</button>
    </div>
  )

}