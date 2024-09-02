import Hello from "./components/Hello"
import About from "./components/About"
import { Routes, Route } from "react-router-dom"
import Scromp from "./components/Srcomp"
import DestComp from "./components/DestComp"
import NotFound from "./components/NotFound"
import Join from "./components/Join"
import Login from "./components/Login"
import Info from "./components/Info"

// Router : 경로와 Component를 매칭해주는 역할 
export default function Router() {
  return (
    <Routes>
      <Route path="/userhome" element={<Hello />} />
      <Route path="/about/:username" element={<About />} />
      <Route path="/src" element={<Scromp />} />
      <Route path="/desc" element={<DestComp />} />
      <Route path="/member/join" element={<Join />} />
      <Route path="/member/login" element={<Login />} />
      <Route path="/member/info" element={<Info />} />
      <Route path="*" element={<NotFound />} />
    </Routes> // :username : 값을 받겠다
  )
}