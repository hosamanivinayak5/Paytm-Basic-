import { BrowserRouter, Router, Routes } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { BalanceComponent } from "../components/Balance";
import { Users} from "../components/Users";

export function Dashboard()
{ return<div>   
    <Appbar/>
    <BalanceComponent amount={"234234"}/>
    <Users />  
</div>

}