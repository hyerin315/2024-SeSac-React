import React, { useState } from 'react';

const Register = () => {
  // 방법 1) state 초기값 각각 설정 및 이벤트 핸들러 각각 선언
  // const [name, setName] = useState('');
  // const [birth, setBirth] = useState('');
  // const [city, setCity] = useState('');
  // const [age, setAge] = useState(0);

  // const changeName = (evt) => setName(evt.target.value)
  // const changeBirth = (evt) => setBirth(evt.target.value)
  // const changeCity = (evt) => setCity(evt.target.value)
  // const changeAge = (evt) => setAge(evt.target.value)

  // 방법 2) state 모두 합치기
  // const [input, setInput] = useState({// useState 초기화는 string, boolean, object 모두 가능
  //   name: '',
  //   birth: '',
  //   city: '',
  //   age: 0
  // });

  // setInput 사용하여 수정
  // const changeName = (evt) => setInput({
  //   ...input, // 전개연산자
  //   name: evt.target.value
  // });
  // const changeBirth = (evt) => setInput({
  //   ...input,
  //   birth: evt.target.value
  // });
  // const changeCity = (evt) => setInput({
  //   ...input,
  //   city: evt.target.value
  // });
  // const changeAge = (evt) => setInput({
  //   ...input,
  //   age: evt.target.value
  // });


  // 3) 이벤트 핸들러까지 합치기
  // input : Object (name, birth, city, age, gender가 들어있는 객체)
  const [input, setInput] = useState({// useState 초기화는 string, boolean, object 모두 가능
    name: '',
    birth: '',
    city: '',
    age: 0,
    gender: '',
  });

  const onMyChange = (evt) => {
    setInput({
      ...input,
      [evt.target.name]: evt.target.value // name=textbox의 value
    })
  }

  // 도시 배열로 만들기
  const cityArray = ['Seoul', 'Busan', 'Incheon', 'Taegu', 'Kwangju'];

  // 출력하기
  const onSubmit = () => {
    const result = `<ul>
<li>이름: ${input.name}</li> 
<li>생년월일: ${input.birth}</li> 
<li>거주지: ${input.city}</li> 
<li>나이: ${input.age}</li> 
<li>성별: ${input.gender}</li> 
</ul>`;
    //document.getElementById() 사용해도 됨
    document.querySelector('#result').innerHTML = result;

  }

  console.log(input);

  return (
    // 방법 1), 2)
    // <div>
    //   <form>
    //     <p>Name: <input type="text" name='name' onChange={changeName} palceholder='이름을 입력하세요.' /></p>
    //     <p>Birth: <input type="date" name='birth' onChange={changeBirth} /></p>
    //     <p>City:
    //       <select onChange={changeCity} name='city'>
    //         <option value="">--Choose--</option>
    //         <option value="서울">Seoul</option>
    //         <option value="부산">Busan</option>
    //         <option value="대전">Daejeon</option>
    //         <option value="광주">Kwanju</option>
    //         <option value="인천">Incheon</option>
    //       </select>
    //     </p>
    //     <p>Age: <input type="number" name='age' max="60" onChange={changeAge} /></p>
    //   </form>
    // </div>

    // 방법 3)
    <div>
      <form>
        <p>Name: <input type="text" name='name' onChange={onMyChange} placeholder='이름을 입력하세요.' /></p>
        <p>Birth: <input type="date" name='birth' onChange={onMyChange} /></p>
        <p>City:
          <select onChange={onMyChange} name='city'>
            <option value="">--Choose--</option>
            {/* <option value="서울">Seoul</option>
            <option value="부산">Busan</option>
            <option value="대전">Daejeon</option>
            <option value="광주">Kwanju</option>
            <option value="인천">Incheon</option> */}

            {/* 배열로 돌리기 */}
            {cityArray.map((item, index) => <option key={index} value={item}>{item}</option>)}
          </select>
        </p>
        <p>Age: <input type="number" name='age' max="60" onChange={onMyChange} /></p>
        <p>Gender:
          <input type="radio" name='gender' value='남성' onChange={onMyChange} />Male&nbsp;
          <input type="radio" name='gender' value='여성' onChange={onMyChange} />Female&nbsp;
        </p>
        <p><button type="button" onClick={onSubmit}>가입하기</button></p>
        <hr />
        <div id="result">결과는 여기에</div>
      </form>
    </div>
  );
};

export default Register;