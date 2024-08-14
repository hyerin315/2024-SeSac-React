//import './App.css'
import { useState } from "react"
import Counter from "./components/Counter";
import Lighter from "./components/Lighter";
import MyState from "./components/MyState";

// State
// 1. state가 변경되면 화면이 re-rendering 됨
// 2. 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 props와 달리, 
//    state는 자식 컴포넌트에서만 사용할 수 있는 전역변수임
// 3. state가 여러개일 경우, 계속 re-rendering이 발생하기 때문에 분리해야함
// 4. 페이지가 re-renedering 되는 3가지 이유
//    1) Props가 변경될 경우
//    2) State가 변경될 경우
//    3) 부모 Coomponent가 변경될 경우
//    -> 분리하면 매번 re-rendering이 되지 않음

function App() { // 후크는 function안에만 써야함
  // const [state, setState] = useState(0);
  // const [light, setLite] = useState('OFF');
  console.log('update');

  return (
    <>
      {/* 상태가 n개인 경우, re-rendering은? */}
      {/* <h1>{state}</h1>
      <button onClick={() => {
        setState(state + 1);
      }}>Increase</button><br />
      <h1>{light}</h1>
      <button onClick={() => {
        setLite(light === 'ON' ? 'OFF' : 'ON') // light가 ON이면 OFF로 바꾸고, 아니면 ON으로 바꾸세요 / === : 타입과 값을 비교해주는 연산자  
      }}>light change</button> */}

      {/* 각각의 state는 컴포넌트로 분리하자 */}
      {/* <Counter />
      <Lighter /> */}
      <MyState />
    </>
  )
}

export default App
