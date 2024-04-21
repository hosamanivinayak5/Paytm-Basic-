import { Link } from "react-router-dom"

export function Home()
{ return<div className="flex justify-between">
    <Link to={"/signup"}>SIGNUP</Link>
    <Link to={"/signin"}>SIGNIN</Link>
</div>

}