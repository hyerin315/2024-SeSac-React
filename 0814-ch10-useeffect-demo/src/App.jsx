import { useState, useEffect, useRef } from 'react'
import Mycomponent from './components/Mycomponent';
//import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const flag = useRef(false);

  //1. Mount 할 때
  useEffect(() => {
    console.log('mount...') //page가 처음 rendering 될 때 딱 한 번 호출됨
  }, []);

  const myClick = () => {
    setCount(count + 1);
  }

  //2. Update 할 때
  useEffect(() => {
    if (!flag.current) { // Update를 한 번만 출력
      flag.current = true;
      return;
    }
    console.log('Update...'); // 페이지가 re-rendering될 때 마다 Update 출력
  });

  return (
    <>
      <h1>Count: {count}</h1>
      {count % 2 == 0 ? <Mycomponent /> : null}
      <button onClick={myClick} type=''>Count Up</button>
    </>
  )
}

export default App
