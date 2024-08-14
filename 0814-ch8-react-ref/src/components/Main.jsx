import React, { useRef } from 'react';

function Main(props) {
  // // JS 방식
  // const onSubmit = () => {
  //   const name = document.querySelector('#username').value;
  //   console.log(name);
  // }


  // React방식 - useRef : 참조
  const nameRef = useRef(); // useRef 초기화

  const onSubmit = () => {
    // const name = nameRef.current.value; //nameRef.current = text box
    // console.log(name);

    if (!nameRef.current.value || nameRef.current.value === '') { // 값이 없다면
      nameRef.current.style.backgroundColor = 'yellow';
      nameRef.current.focus();
    }
  }
  return (
    <div>
      Name: <input type="text" id="username" ref={nameRef} /><br />
      <input type="button" value="Submit" onClick={onSubmit} />
    </div>
  );
}

export default Main;