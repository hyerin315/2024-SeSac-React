import './App.css' // React의 css 파일 위치

function App() {
  return ( // <> </> : 최상위 루트 -> 무엇을 쓸지 모르겠을 때
    <div className="container"> {/* className : class라는 단어가 react에서 쓰는 class라는 단어와 혼동이 오므로, react에서는 className으로 씀 */}
      <h1>Let&apos;s go React!</h1>
      <p>Hello, World</p>
      <img src="images/react.png" /> {/* 이미지 위치 : assets or public -> images 폴더 생성 후 삽입 */}
    </div>
  )
}

export default App
