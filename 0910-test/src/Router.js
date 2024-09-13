import { Routes, Route } from "react-router-dom"
import Home from "./components/user/Home"
import Login from "./components/user/Login"
import Info from "./components/user/Info"
import List from "./components/todo/List"
import Add from "./components/todo/Add"
import Join from "./components/user/Join"
import Detail from "./components/todo/Detail"

export default function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/user/join" element={<Join />} />
      <Route path="/user/userInfo" element={<Info />} />
      <Route path="/todo/list" element={<List />} />
      <Route path="/todo/detail/:bnum" element={<Detail />} />
      <Route path="/todo/add" element={<Add />} />
    </Routes>
  )
}