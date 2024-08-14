import React, { useState } from 'react';
import useInputValue from '../hooks/useInputValue';

// React Hook
// 1. Hook는 함수 컴포넌트 혹은 Custome Hook(사용자 정의형 훅) 안에서만 호출 가능함
//    오류메세지 : Error : Invalid hook call. Hooks can only be called inside of the body of a function component.  
// 2. Hook는 조건문이나 반복문 내부에서 호출 될 수 없음
// 3. 나만의 Hook를 만들 수 있음. 이때, 반드시 useXxx()로 시작하지 않아도 되지만, useXxx()로 시작하는 게 관례임


function MyHook(props) {
  const [input, myChange] = useInputValue();


  return (
    <div>
      <input type="text" onChange={myChange} value={input} />
    </div>
  );
}

export default MyHook;