import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const add = () => {
    axios.post('http://localhost:8080/addTodo', { headers: { token: token } })
      .then(function (res) {
        if (res.status === 200) {
          if (res.data.flag) {
            alert('글작성 완료');
          } else {
            alert('글작성 실패');
          }
        } else {
          alert('글작성 취소');
        }
      })
  }


  return (
    <div>
      <form onSubmit={add}>
        <input type="text" name="todo" /><br />
        <button type="submit">작성</button>
      </form>

    </div>
  )
}
