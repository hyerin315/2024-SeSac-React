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
        if (res.status === 200) {
          if (res.data.flag) {
            alert('로그인 성공');
            localStorage.setItem('token', res.data.token);
            navigate('/userhome');
          } else {
            alert('로그인 실패');
          }
        } else {
          alert('비정상 응답');
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