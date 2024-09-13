import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Join() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ username: '', password: '', name: '', email: '' });
  const { username, password, name, email } = inputs;


  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const join = (e) => {
    e.preventDefault();

    // HTML5 폼 검증을 통한 제출 처리
    axios.post('http://localhost:8080/join', {}, { params: { username: username, password: password, name: name, email: email } })
      .then((res) => {
        if (res.status === 200) {
          alert('회원가입 완료! 회원정보\n');
        } else {
          alert('가입 취소');
        }
        navigate('/home');
      })
  };



  return (
    <div>
      <h2>Join</h2>
      <form onSubmit={join}>
        ID <input type="text" name="username" value={username} onChange={onChange} required /><br />
        PWD <input type="password" name="password" value={password} onChange={onChange} required /><br />
        NAME <input type="text" name="name" value={name} onChange={onChange} required /><br />
        EMAIL <input type="email" name="email" value={email} onChange={onChange} required /><br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  )
}