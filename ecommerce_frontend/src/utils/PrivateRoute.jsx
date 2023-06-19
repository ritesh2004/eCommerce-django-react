import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Login from "../Login";
import Authcontext from "../context/Authcontext";
import Signin from "../Signin";

const PrivateRoute = ({children}) =>{
    // console.log("Private Route Works")
    let {user} = useContext(Authcontext);
    return (
        user? <Outlet/> : (<Login />)
    )
}


export default PrivateRoute;