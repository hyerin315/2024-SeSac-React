
//1. Javascript's event에서는 DOM level 2 사용을 권장했으나 React에서는 Dom Level 0의 inline 방식을 권장함
//   다만, onclick이 아니라 onClick임
//
const Header = (props) => {
  // 합성 이벤트 : 
  const clickHandler = (evt) => { // event Hendler : H1을 클릭하면 클릭핸들러 호출
    console.log(evt);
  }
  return (
    <>
      <header>
        <h1 onClick={clickHandler}>{props.title}</h1>
        <h1>{props.title}</h1>
      </header>
    </>
  );
}

export default Header;