import React, { useState } from 'react';

const MyState = () => {
  let name = "Jimin";
  let age = 28;
  // 5. 상태관리를 위한 변수선언, 변경할 때 useSate라는 Hook을 사용함
  //    const [변수명, 변수를 변경할 setter 함수명] = useState(초기값);
  const [address, setAddress] = useState('Seoul');
  const [num, setNum] = useState(0);
  const [check, setCheck] = useState(true);
  const [array, setArray] = useState([10, 20]);
  const [user, setUser] = useState({ name: 'Younghee', age: 30 });

  // 1) 상태가 아니므로 console에서는 값이 보이지만, 화면이 re-rendering 되지는 않음
  const changeNmae = (evt) => {
    console.log(evt.target);
    name = 'Chulsu';
  }
  const changeAge = (num, evt) => {
    console.log(num);
    age = num;
  }

  // 2) useState를 사용하여 화면이 re-rendering됨
  // 중괄호 생략 가능
  //const changeAddress = () => {setAddress('Busan')};
  const changeAddress = () => setAddress('Busan');
  const increase = (howMany) => setNum(num + howMany);
  const decrease = () => setNum(num - 1);
  const changeChecke = () => setCheck(!check); // ! : 논리 Not

  // 3) 이벤트 핸들러
  // state의 다양한 타입 공부
  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    const newArray = array.concat(random);
    setArray(newArray);
  }
  const deleteArray = (idx) => {
    // array.filter(조건 : itme, index, array) 
    const newArray = array.filter((item, i) => idx === i ? false : true); // idx가 일치하지 않는 애만 뽑음
    setArray(newArray);
  }
  const changeArray = (idx, value) => {
    const newArray = array.map((item, i) => idx === i ? value : item); // idx가 i랑 같으면 value로 바꾸고, 나머진 그대로
    setArray(newArray);
  }

  // 새로운 객체에 멤버 추가
  const addObject = (key, value) => {
    // {name: 'Younghee', age:30}
    //spread operator : 장점 - 똑같이 다른 곳에 쓸 수 있음
    const newObj = { ...user, [key]: value }; // 대괄호 : 객체 (.점은 간략 버전이고, 원래 대괄호여야함)
    setUser(newObj);
  }
  const changeObject = (key, value) => {
    //spread operator : 장점 - 똑같이 다른 곳에 쓸 수 있음
    const newObj = { ...user, [key]: value };
    setUser(newObj);
  }
  const deleteObject = (key) => {
    delete user[key]; // Object에서 key로 지우면 다 지워짐 (원래 다른 경우, 공간이 남음)
    const newObj = { ...user }; // 주의 : 주소복사가 아닌 값  복사가 되어야 하므로 펼쳐야함 (key 기준으로 copy될 수 있게)
    setUser(newObj);
  }

  return (
    <div>
      <h2>Function State</h2>
      <div>
        Name : {name}<br />
        Age : {age}<br />
        Address : {address}<br />
        Counter : {num}<br />
        {/* check : true, false는 출력이 안되기 때문에 결과에 맞게 텍스트로 출력하게 함 */}
        Check : {check ? '동의' : '동의 안함'}<br />
        {/* array : 렌더링이 안되기 때문에 하나하나 넣어줘야함 */}
        {/* array[2] : 값이 없으므로 출력 안됨 (추가해야 뜸) */}
        Array : {array[0]} / {array[1]} / {array[2]} <br />
        User : {user.name} / {user.age} / {user.address} <br />
      </div>
      <div>
        {/* 이벤트 쓰는 방법 */}
        <button onClick={changeNmae}>Change Name</button>
        <button onClick={(evt) => { changeAge(50, evt); }}>Change Age</button>
        <button onClick={changeAddress}>Change Adderess</button>
        <button onClick={() => { increase(5) }}>Increase : 5</button>
        <button onClick={decrease}>Decrease :</button>
        <button onClick={changeChecke}>Change Check</button>
      </div>
      <br />
      <div>
        <button onClick={addArray}>Add Aray</button>
        {/* 중괄호 생략 가능 */}
        {/* <button onClick={() => {changeArray(1, 100)}}>Change Aray</button> */}
        <button onClick={() => changeArray(1, 100)}>Change Aray</button>
        <button onClick={() => deleteArray(1)}>Delete Aray</button>
      </div>
      <br />
      <div>
        <button onClick={() => addObject('address', '서울시 영등포구')}>Add Object</button>
        <button onClick={() => changeObject('address', '강남구 역삼동')}>Change Object</button>
        <button onClick={() => deleteObject('address')}>Delete Object</button>
      </div>
    </div>
  );
};

export default MyState;