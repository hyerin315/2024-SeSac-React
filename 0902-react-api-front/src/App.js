import './App.css';
import { Link, BrowserRouter } from "react-router-dom"
import Router from './Router';

// App.js : 시작 페이지
function App() {
  return (
    <div className="App">
      {/* BrowserRouter : 각각의 Link to 경로를 선택하면 연결되어 있는 컴포넌트를 Router 차리에 띄워주는 역할 */}
      <BrowserRouter>
        <Link to="/userhome">userhome</Link>&nbsp;
        <Link to="/about/aaa?detail=content&mode=3">About</Link>&nbsp;
        <Link to="/src">Src</Link>&nbsp;
        {/* <Link to="/member/join">Join</Link>&nbsp;
        <Link to="/member/login">Login</Link> */}
        <hr />
        <Router />
      </BrowserRouter>
    </div>

  );
}

export default App;