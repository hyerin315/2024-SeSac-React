import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();
  const { bnum } = useParams(); //bnum: 글번호
  const [dto, setDto] = useState({ num: 0, writer: {}, todoDate: '', todo: '' });
  const { num, writer, todoDate, todo } = dto;

  const del = () => {
    axios.delete('http://localhost:8080/todo/' + bnum)
      .then(function (res) {
        if (res.status === 200) {
          if (res.data.flag) {
            alert('삭제완료')
            navigate('/todo/list')
          } else {
            alert('삭제취소')
          }
        } else {
          alert('비정상 응답');
        }
      })
  }

  let menu = '';

  useEffect(() => {
    axios.get('http://localhost:8080/todo/' + bnum)
      .then(function (res) {
        if (res.status === 200) {
          setDto(res.data.dto);
        } else {
          alert('비정상 응답');
        }
      })
  }, []);

  let loginId = localStorage.getItem('loginId');
  if (loginId === writer.id) {
    menu = <button onClick={del}>삭제</button>;
  }

  return (
    <div>
      <h2>board detail</h2>
      num:{num}<br />
      writer:{writer.id}<br />
      wdate:{todoDate}<br />
      todo:{todo}<br />
      {menu}
    </div>
  )
}