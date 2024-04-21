import {BrowserRouter, Routes,Route} from "react-router-dom"
import {Signup} from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import { Send } from "./pages/Send"
import './App.css'
import { Home } from "./pages/Home"
function App() {

  return (
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}  ></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/send" element={<Send/>}></Route>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
