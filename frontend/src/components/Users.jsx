import { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { ButtonComponent } from "./Button";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    
    useEffect(() => {
        axios.get("https://paytm-basic-pi.vercel.app/api/v1/user/bulk?filter="+filter).then(response=>{
            setUsers(response.data.user);
        })
    }, [filter]);
    
    return (
        <>
            <div className="font-bold mt-6 text-lg">Users</div>
            <div className="my-2">
                <input
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder="Search users..."
                    className="w-full px-2 py-1 border rounded border-slate-200"
                />
            </div>
            <div>
                {users.map((user) => (
                    <User key={user._id} user={user} />
                ))}
            </div>
        </>
    );
};

function User({ user }) {
   const navigate=useNavigate();
    return (
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstname[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div>
                        {user.firstname} {user.lastname}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center h-full">
                <ButtonComponent label={"Send Money"} onClick={(e)=>{
                navigate("/send?id="+user._id+"&name="+user.firstname)
                }
                } />
            </div>
        </div>
    );
}
