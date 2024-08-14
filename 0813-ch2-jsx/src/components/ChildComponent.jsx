// React에서는 컴포넌트는 첫 글자가 대문자여야 함
// function 베이스로 생성할 때 rsf 사용
// jsx는 주석 문법이 다름 {/* */} 사용

// 태그를 리턴하는 컴포넌트
function ChildComponent() {
  return (
    <div>
      <h3>Child Component</h3>
      <img src="images/react.png" /> {/* 반드시 images 폴더는 public 폴더 하위에 위치해야함 */}
    </div>
  );
}

export default ChildComponent; // 하나만 리턴할 때 default를 씀