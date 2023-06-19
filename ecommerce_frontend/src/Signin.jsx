import React, { useContext, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Authcontext from './context/Authcontext';
import { Link } from 'react-router-dom';

function Signin() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let {signinUser} = useContext(Authcontext);

  return (
    <div className='Signin'>
      <br />
      <form action="" onSubmit={signinUser} >
        <h1 style={{ textAlign: 'center' }}>Sign In</h1>
        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Username" name='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </FloatingLabel>
        <Button variant="primary" type='submit'>Sign In</Button>
        <p>Already Have an Account? <span> <Link to={'/login/'}>Log In</Link> </span></p>
      </form>
    </div>
  )
}




export default Signin;
