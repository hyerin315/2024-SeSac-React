import { json, useNavigate } from "react-router-dom";

export default function Scromp() {
  const navigate = useNavigate();
  const a = () => {
    //alert('asdf');
    navigate('/desc', { state: { id: 1, job: '개발자' } }); //state에 데이터를 객체형태로 담아서 전달
  }
  return (
    <div>
      <button onClick={a}>컴포넌트 이동</button>
    </div>
  )
}