import React from 'react';
import { useEffect } from 'react';
// chrome - react developer tools 설치 후 개발자 도구에서 components / 톱니바퀴 하이라이팅 설정을 하면 re-rendering되는 부분을 알 수 있음
const Mycomponent = () => {
  //useEffect(콜백함수, )
  useEffect(() => {
    //Clean-up 함수 : 콜백함수가 리턴하는 함수를 클린업 함수(메모리 초기화)라 함
    return () => {
      console.log('Unmount...');
    }
  }, []);
  return (
    <div>
      <h3>짝수입니다.</h3>
    </div>
  );
};

export default Mycomponent;