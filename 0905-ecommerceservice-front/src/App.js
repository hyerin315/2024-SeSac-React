import './App.css';
import { Link, BrowserRouter } from "react-router-dom"
import Router from './Router';

// App.js : 시작 페이지
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/userhome">eCommerce Platform</Link>&nbsp;
        <hr />
        <Router />
      </BrowserRouter>
    </div>

  );
}

export default App;