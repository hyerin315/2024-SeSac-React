import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Join() {
  const navigate = useNavigate();
  //let id = '', pwd = '', name = '', email = '', type = '';

  //inputs : 객체 타입, inputs의 멤버변수 : {id:'', pwd:'', name:'', email:'', type:''}
  const [inputs, setInputs] = useState({ id: '', pwd: '', name: '', email: '', type: '' });
  const { id, pwd, name, email, type } = inputs; //객체의 멤버변수를 따로따로 꺼내서 동일한 이름의 상수에 매칭 (리액트는 이렇게 씀)

  //함수 정의 : onChange
  const onChange = (e) => { //e : 방금 발생한 이벤트 객체
    const { name, value } = e.target; //이벤트가 발생한 소스 (입력한 박스의 name과 value 값을 가져옴)
    setInputs({
      ...inputs, //다른 요소는 값을 그대로 유지 
      [name]: value //이벤트가 발생한 그 name의 값만 변경
    })
  }

  const join = () => {
    console.log(inputs)
    // let txt = 'id:' + id + '\npwd:' + pwd + '\nname:' + name;
    // txt += '\nemail:' + email + '\ntype:' + type;
    // alert(txt);

    axios.post('http://localhost:8080/join', {}, { params: { id: id, pwd: pwd, name: name, email: email, type: type } })
      .then(function (res) {//res.status:상태값, res.data:백에서 보낸 데이터
        if (res.status === 200) {
          alert('회원가입 완료! 회원정보\n' + `${id}`);
        } else {
          alert('가입 불가한 회원정보입니다. 입력 정보를 확인하세요.');
        }
        navigate('/userhome');
      })
  }

  return (
    <div>
      <h2>Join</h2>
      ID: <input type="text" name="id" value={id} onChange={onChange} /><br />
      PWD: <input type="password" name="pwd" value={pwd} onChange={onChange} /><br />
      NAME: <input type="text" name="name" value={name} onChange={onChange} /><br />
      EMAIL: <input type="text" name="email" value={email} onChange={onChange} /><br />
      TYPE:<label>
        <input type="radio" name="type" value="구매자" checked={type === '구매자'} onChange={onChange} />구매자</label>
      <label>
        <input type="radio" name="type" value="판매자" checked={type === '판매자'} onChange={onChange} />판매자</label>
      <button onClick={join}>회원가입</button>
    </div>
  )
}