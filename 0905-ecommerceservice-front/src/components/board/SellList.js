import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SellList() {
  const token = localStorage.getItem('token');
  const [list, setList] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8080/board/writer/', { headers: { token: token } })
      .then(function (res) {
        if (res.status === 200) {
          setList(res.data.list);
        } else {
          alert('비정상 응답');
        }
      })
      .catch(function (error) {

        console.error('Error fetching data:', error);
        alert('서버 오류 발생');
      });
  }, []);

  return (
    <div>
      <h2>Fruit</h2>

      <Link to="/board/add" id="add">Product Registration</Link>

      <br />
      <br />

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.num}  /
            <Link to={"/board/detail/" + item.num}>{item.title}</Link> /
            {item.price}  /
            {item.amount}  /
            <img src={'http://localhost:8080/read-img/' + item.img} className="simg" />
          </li>
        ))}
      </ul>

    </div>
  );
}