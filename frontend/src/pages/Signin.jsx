import { useNavigate } from "react-router-dom";
import { BottomWarning } from "../components/Bottomwarning";
import { ButtonComponent } from "../components/Button";
import { Heading } from "../components/heading";
import { Inputbox } from "../components/inputbox";
import { Subheading } from "../components/subheading";
import axios from "axios"
import { useState } from "react";
export function Signin()
{
const navigate=useNavigate();
const [username,setusername]=useState("");
const [PASSWORD,setPassword]=useState("");
    return<div className="bg-slate-300 flex justify-center   h-screen	">
    <div className="flex flex-col justify-center">
        <div className="bg-white p-1 rounded-lg h-max text-center px-2 w-80">
 <Heading label={"Sign in"}></Heading>
<Subheading label={"Enter ur credentials to sign in"}/>
<Inputbox label={"Username"} placeholder={"sadf@gmail.com"}/>
<Inputbox label={"Password"} placeholder={"dsfasfd"}/>
<div className="pt-4">
    <ButtonComponent label={"Sign in"} onClick={async()=>{
        const response=await  axios.post("https://paytm-basic-pi.vercel.app/api/v1/user/signin",{
            username,
            password:PASSWORD
        })
    localStorage.setItem("token",response.data.token)
    navigate("/dashboard")
    }}/>
</div>
<BottomWarning label={"Don't have an account " } buttontext={"Sign up"} to={"/signup"}/>
</div>
</div>
</div>
}