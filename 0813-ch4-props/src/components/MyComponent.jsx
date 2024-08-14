import React from 'react';
import PropTypes from 'prop-types';

function MyComponent(props) {
  const { // Destructuring
    stringValue,
    booleanValue,
    numberValue,
    arrayValue,
    nodeValue,
    functionValue,
    objectValue
  } = props;
  return (
    <div>
      <ol>
        <li>String Value: {stringValue} </li>
        <li>Number Value: {numberValue} </li>
        <li>Boolean Value: {String(booleanValue)} </li> {/* String으로 변환하지 않으면 결과 안나옴 */}
        <li>Array Value: {arrayValue} </li>
        <li>Node Value: {nodeValue} </li>
        <li>Fucntion Value: {functionValue} </li>
        <li>Object Value: {JSON.stringify(objectValue)} </li> {/* Object를 String으로 바꾸는 방법 : JSON.stringify 사용 */}
      </ol>
    </div>
  );
}

// 다양한 타입 사용하기
MyComponent.propTypes = {
  stringValue: PropTypes.string,
  numberValue: PropTypes.number,
  booleanValue: PropTypes.bool,
  arrayValue: PropTypes.arrayOf(PropTypes.number), // 순회할 때 숫자로 봄
  nodeValue: PropTypes.node,
  functionValue: PropTypes.func,
  objectValue: PropTypes.object,
}
export default MyComponent;