import { Routes, Route } from "react-router-dom"
import UserHome from "./components/member/UserHome"
import Login from "./components/member/Login"
import Info from "./components/member/Info"
import List from "./components/board/List"
import Add from "./components/board/Add"

export default function Router() {
  return (
    <Routes>
      <Route path="/userhome" element={<UserHome />} />
      <Route path="/member/login" element={<Login />} />
      <Route path="/member/info" element={<Info />} />
      <Route path="/board/list" element={<List />} />
      <Route path="/board/add" element={<Add />} />
    </Routes>
  )
}