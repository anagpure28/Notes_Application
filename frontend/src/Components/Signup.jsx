import React, { useState } from 'react';
import {url} from './url';

export const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const handleSubmit = () => {
    const payload = {
        name, email, pass
    }
    
    fetch(`${url}/users/register`,{
    // fetch("http://localhost:4200/users/register",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(res=> res.json())
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
    setName("")
    setEmail("")
    setPass("")
  }

  return (
    <div>
        <h3>Registration Form</h3>
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" name="username" value={name} onChange={(e)=> setName(e.target.value)} />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <br />
        <label htmlFor="pass">Password</label>
        <br />
        <input type="password" name="pass" value={pass} onChange={(e)=> setPass(e.target.value)} />
        <br />
        <button onClick={handleSubmit}>Sign up!</button>
    </div>
  )
}
