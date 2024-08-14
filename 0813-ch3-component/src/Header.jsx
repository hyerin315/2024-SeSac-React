// Components는 Tag를 return하는 함수 
// 사용자가 보기엔 component를 사용한 것으로 보이지 않음 -> vite가 처리해줌

const Header = () => {
  return (
    <>
      <header>
        <h1><a href="/">WEB</a></h1>
      </header>
    </>
  );
};

export default Header;