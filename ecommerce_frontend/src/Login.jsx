import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Authcontext from "./context/Authcontext";
import { Link } from "react-router-dom";


const Login = () => {

    const [usname, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let {LoginUser} = useContext(Authcontext);

    return (
        <div className="Login">
            <form action="" onSubmit={LoginUser}>
                <h1 style={{ textAlign: 'center' }}>Log In</h1>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Username" name="username" value={usname} onChange={(e)=>{setUsername(e.target.value)}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                </FloatingLabel>
                <Button variant="primary" type="submit">Log In</Button>
                <p>Don't Have an Account? <span> <Link to={'/signin/'}>Sign In</Link> </span></p>
            </form>
        </div>
    )
}

export default Login;