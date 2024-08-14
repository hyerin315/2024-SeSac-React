import React from 'react';
import { useState } from 'react'; // 현재 Component의 전역변수 : useState

function Button(props) {
  const [count, setCount] = useState(0); // useSatet() : 특수 목적의 함수
  return (
    <div>
      <h1>현재: 카운터: {count}</h1>
      {/* 이벤트 핸들러 : 인라인 방식으로 함수 작성 필요 */}
      <button onClick={(evt) => {
        {/* 핸들러 = 함수 */ }
        setCount(count + 1); // setCount로 count 설정
      }}>{props.title}</button>
      <button onClick={(evt) => {
        setCount(count - 1);
      }}>Count Down</button>
    </div>
  );
}

export default Button;