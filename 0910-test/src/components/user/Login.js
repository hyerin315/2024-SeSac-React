import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({ username: '', password: '' });
  const { username, password } = inputs;


  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const login = (e) => {
    e.preventDefault();


    axios.post('http://localhost:8080/login', {}, { params: { username: username, password: password } })
      .then(function (res) {
        if (res.status === 200 && res.data.flag) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('loginId', username);
          alert('로그인 성공');
          navigate('/home');
        } else {
          alert('로그인 실패');
        }
      })
      .catch(function (error) {
        console.error('로그인 요청 중 오류 발생:', error);
        alert('로그인 요청 중 오류 발생');
      });
  }


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        ID: <input type="text" name="username" value={username} onChange={onChange} required /><br />
        PWD: <input type="password" name="password" value={password} onChange={onChange} required /><br />
        <button type="submit">로그인</button>
      </form>
    </div>
  )

}