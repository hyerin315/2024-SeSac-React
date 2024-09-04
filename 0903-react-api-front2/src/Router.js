import UserHome from "./components/member/UserHome"
import { Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import Join from "./components/member/Join"
import Login from "./components/member/Login"
import Info from "./components/member/Info"
import List from "./components/board/List"
import Add from "./components/board/Add"
import Detail from "./components/board/Detail"

// Router : 경로와 Component를 매칭해주는 역할 
export default function Router() {
  return (
    <Routes>
      <Route path="/userhome" element={<UserHome />} />
      <Route path="/member/join" element={<Join />} />
      <Route path="/member/login" element={<Login />} />
      <Route path="/member/info" element={<Info />} />
      <Route path="/board/list" element={<List />} />
      <Route path="/board/add" element={<Add />} />
      <Route path="/board/detail/:bnum" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes> // :username : 값을 받겠다
  )
}