import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function List() {
  const token = localStorage.getItem('token');
  const [list, setList] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:8080/todo', {}, { headers: { token: token } })
      .then(function (res) {
        if (res.status === 200) {
          setList(res.data.list);
        } else {
          alert('비정상 응답');
        }
      })
  }, []);

  return (
    <div>
      <ul>
        {
          list.map((item) => (
            <li>
              {item.todo}  /
            </li>
          ))
        }
      </ul>

    </div>
  )
}