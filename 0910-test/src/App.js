import './App.css';
import { Link, BrowserRouter } from "react-router-dom"
import Router from './Router';

// App.js : 시작 페이지
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h3><Link to="/home">● Todo Mate ●</Link></h3>
        <div><Router /></div>
      </BrowserRouter>
    </div>

  );
}

export default App;