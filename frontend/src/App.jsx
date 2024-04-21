import {BrowserRouter, Routes,Route, Link} from "react-router-dom"
import {Signup} from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import { Send } from "./pages/Send"
import './App.css'
function App() {

  return (
    <BrowserRouter>
    <Routes >
      <Route path="/signup" element={<Signup/>}><>SIGNUP</></Route>
      <Route path="/signin" element={<Signin/>}>SIGIN</Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/send" element={<Send/>}></Route>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
