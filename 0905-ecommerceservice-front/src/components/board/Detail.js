import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { bnum } = useParams(); //bnum: 글번호
  const [dto, setDto] = useState({ num: 0, writer: {}, wdata: '', title: '', content: '' });
  const { num, writer, title, amount, price, content, img } = dto;

  const del = () => {
    axios.delete('http://localhost:8080/board/' + bnum, { headers: { token: token } })
      .then(function (res) {
        if (res.status === 200) {
          if (res.data.flag) {
            alert('삭제완료')
            navigate('/board/list')
          } else {
            alert('삭제취소')
          }
        } else {
          alert('비정상 응답');
        }
      })
  }

  const edit = () => {
    axios.put('http://localhost:8080/board/', { headers: { token: token } })
      .then(function (res) {
        if (res.status === 200) {
          if (res.data.flag) {
            alert('수정완료')
            navigate('/board/list')
          } else {
            alert('수정취소')
          }
        } else {
          alert('비정상 응답');
        }
      })
  }

  let etitMenu = '';
  let delMenu = '';

  useEffect(() => {
    axios.get('http://localhost:8080/board/' + bnum, { headers: { token: token } })
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
    etitMenu = <button onClick={edit}>수정</button>;
    delMenu = <button onClick={del}>삭제</button>;
  }

  return (
    <div>
      <h2>Product Detail</h2>
      <img src={'http://localhost:8080/read-img/' + img} className="simg" /><br />
      num:{num}<br />
      writer:{writer.id}<br />
      title:{title}<br />
      content:{content}<br />
      amount:{amount}<br />
      price:{price}<br />
      {etitMenu}
      {delMenu}
    </div>
  )
}