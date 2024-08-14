import React from 'react';
import { useState, useRef } from 'react';

// 1. useRef vs useState
//   1) useState : 값 유지, 값이 변경이 되면 변경된 값 기준으로 화면 re-rendering 함
//   2) useRef : 값이 변경되어도 화면의 갱신 작업을 하지 않음. 즉, 값만 변경되고 화면은 유지됨
// 2. 
const MyComponent = () => {
  const [count, setCount] = useState(0);
  const useRefObj = useRef(0); // useRef : 변경 setter가 없음
  //console.log(useRefObj); //current(현재값): 0

  console.log('useState 렌더링');
  console.log('useRef 렌더링');

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>State : Count up</button>

      {/* useRefObj.current : 0 -> 이걸 1 증가 시키겠다*/}
      <h1>useRef Count : {useRefObj.current}</h1>
      <button onClick={() => {
        setCount(useRefObj.current++);
        console.log(useRefObj.current);
      }}>Ref : Count up</button>
    </div>
  );
};

export default MyComponent;