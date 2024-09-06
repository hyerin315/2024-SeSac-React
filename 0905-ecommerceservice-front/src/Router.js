import { Routes, Route } from "react-router-dom"
import UserHome from "./components/member/UserHome"
import Login from "./components/member/Login"
import Info from "./components/member/Info"
import List from "./components/board/List"
import Add from "./components/board/Add"
import Join from "./components/member/Join"
import MyBag from "./components/board/MyBag"
import SellList from "./components/board/SellList"
import Detail from "./components/board/Detail"

export default function Router() {
  return (
    <Routes>
      <Route path="/userhome" element={<UserHome />} />
      <Route path="/member/login" element={<Login />} />
      <Route path="/member/join" element={<Join />} />
      <Route path="/member/info" element={<Info />} />
      <Route path="/board/list" element={<List />} />
      <Route path="/board/selllist" element={<SellList />} />
      <Route path="/board/detail/:bnum" element={<Detail />} />
      <Route path="/board/add" element={<Add />} />
      <Route path="/board/mybag" element={<MyBag />} />
    </Routes>
  )
}