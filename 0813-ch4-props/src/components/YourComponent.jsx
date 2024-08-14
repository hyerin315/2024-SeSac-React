import React from 'react';
import datatype from 'prop-types'; // 임의의 이름(ex. datatype으로 사용 가능)

// 필수 프라퍼티 사용하기
function YourComponent(props) {
  const {
    objValue,
    requiredStringValue // 필수 프라퍼티
  } = props;
  return (
    <div>
      {/* 방법 1 */}
      {/* <div>객체값:  {JSON.stringify(objValue)}</div> */}
      {/* 방법 2 */}
      <div>객체값:  {String(Object.entries(objValue))}</div>
      <div>필수값:  {requiredStringValue}</div>
    </div>
  );
}

YourComponent.Prototype = {
  //objValue: datatype.object,
  objValue: datatype.shape({ // 따로따로 데이터타입을 정의할 수도 있음
    name: datatype.string, // 필수로 지정되지 않았기 때문에 없어도 됨
    age: datatype.number,
  }),
  requiredStringValue: datatype.string.isRequired, // 필수 값은 .isRequired 사용
}

export default YourComponent;