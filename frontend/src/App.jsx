import {BrowserRouter, Routes,Route} from "react-router-dom"
import {Signup} from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import { Send } from "./pages/Send"
import './App.css'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="https://paytm-basic-frontend-tau.vercel.app/signup" element={<Signup/>}>SIGNUP</Route>
      <Route path="https://paytm-basic-frontend-tau.vercel.app/signin" element={<Signin/>}>SIGIN</Route>
      <Route path="https://paytm-basic-frontend-tau.vercel.app/dashboard" element={<Dashboard/>}></Route>
      <Route path="https://paytm-basic-frontend-tau.vercel.app/send" element={<Send/>}></Route>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
