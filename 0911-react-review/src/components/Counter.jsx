import { useState } from "react";

function Counter() {

  // 1. Js - DOM을 잡는 방식
  // function handleCountUp() {
  //   document.querySelector('span').textContent = Number(document.querySelector('span').textContent) + 1
  // }

  // 2. React - useState 사용 방식
  // Java의 Setter 처럼 setCount 선언, count의 초기값을 () 괄호 안에 삽입
  const [count, setCount] = useState(0);
  function handleCountUp() {
    //count++; // 상태 변수로 변경 불가능
    setCount(count + 1);
  }


  return (
    // <div>
    //   <p>You clicked <span>0</span> times </p>
    //   <button onClick={handleCountUp}>
    //     Click me !
    //   </button>
    // </div>

    <div>
      <p>You clicked <span>{count}</span> times </p>
      <button onClick={handleCountUp}>
        Click me !
      </button>
    </div>


  )
}

export default Counter;