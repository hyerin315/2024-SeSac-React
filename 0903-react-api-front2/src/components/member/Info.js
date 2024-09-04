import axios from "axios";
import { useEffect, useState } from "react";

export default function Info() {
  const loginId = localStorage.getItem('loginId');
  const [dto, setDto] = useState({}); //setDto를 사용해서 내용 변경
  const { id, pwd, name, email, type } = dto;


  //useEffect() : 렌더링 할 때마다 자동으로 실행되는 함수, ex) 렌더링 할 때마다 초기화가 필요한 경우 처리해줌
  //맨 처음 한 번만 실행하려면, 2번째 파라미터를 빈 배열로 넣어주면 됨 (횟수 제약도 가능)
  useEffect(() => {
    axios.get('http://localhost:8080/members/' + loginId)
      .then(function (res) {
        if (res.status === 200) {
          setDto(res.data.dto);
        } else {
          alert('비정상 응답');
        }
      })
  }, []);

  return (
    <div>
      <h3>My Info</h3>
      id:{id}<br />
      pwd:{pwd}<br />
      name:{name}<br />
      email:{email}<br />
      type:{type}<br />
    </div>
  )
}