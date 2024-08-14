// 자식
// function Button({ props }) { // props : 객체
//   return (
//     <div>
//       {/* props.프로퍼티 이름 */}
//       <button style={{ 'backgroundColor': props.color }}>{props.title}</button>
//     </div>
//   );
// }

function Button({ title, color, children }) { // props : 객체
  return (
    <div>
      {/* props.프로퍼티 이름 */}
      <button style={{ 'backgroundColor': color }}>{title}{children}</button>
      {/* Destructuring : props.color, props.title이어야 하나, destructuring함 */}
    </div>
  );
}

// Properties의 기본값 설정
Button.defaultProps = {
  color: 'yellow',
}


export default Button;
