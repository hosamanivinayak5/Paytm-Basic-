import { useState } from "react";
import { BottomWarning } from "../components/Bottomwarning";
import { ButtonComponent } from "../components/Button";
import { Heading } from "../components/heading";
import { Inputbox } from "../components/inputbox";
import { Subheading } from "../components/subheading";
import { Signin } from "./Signin";
import axios from "axios"
import { Route, useNavigate } from "react-router-dom";
export function Signup()
{const [Firstname,setFirstname]=useState("");
const navigate=useNavigate();
const [lastname,setlastname]=useState("");
const [username,setusername]=useState("");
const [PASSWORD,setPassword]=useState("");
     return <div className="bg-slate-300 h-screen flex justify-center"> 
<div className="flex flex-col justify-center">
    <div className="bg-white text-center rounded-lg p-2 h-max px-4 w-80	">
          <Heading label={"Sign up"}/><br/>
         <Subheading label={"Enter ur credentials to sign up"}/>
         <Inputbox onchange={e=>setFirstname(e.target.value)} placeholder={"John"} label={"FIRST NAME"}></Inputbox>
         <Inputbox onchange={e=>setlastname(e.target.value)} placeholder={"Jacobs"} label={"LAST NAME"}></Inputbox>
          <Inputbox placeholder={"Jack@1234.com"} onchange={e=>setusername(e.target.value)} label={"ENTER USERNAME"}></Inputbox>
          <Inputbox placeholder={"FDSAFDSFA"}  onchange={e=>setPassword(e.target.value)} label={"ENTER PASSWORD"}></Inputbox>
          <div className="pt-4">
         <ButtonComponent  label={"SIGN UP"} onClick={async()=>
         {
          const response=await  axios.post("http://localhost:3000/api/v1/user/signup",{
                username,
                firstname:Firstname,
                lastname:lastname,
                password:PASSWORD
            })
        localStorage.setItem("token",response.data.token)
        navigate("/dashboard")
         }}></ButtonComponent>
         </div>
         <BottomWarning label={"Already have an account?"} buttontext={"Sign in"} to={"/signin"}></BottomWarning>
    </div>
    </div>
    </div>
}