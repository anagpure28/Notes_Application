import React, { useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
  
    const handleSubmit = () => {
      const payload = {
          email, pass
      }
      
      fetch("http://localhost:4200/users/login",{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
      }).then(res=> res.json())
      .then(res=> {
        console.log(res)
        localStorage.setItem("token", res.token)
      })
      .catch(err=> console.log(err))
      setEmail("")
      setPass("")
    }
  
    return (
      <div>
          <h3>Login Form</h3>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
          <br />
          <label htmlFor="pass">Password</label>
          <br />
          <input type="password" name="pass" value={pass} onChange={(e)=> setPass(e.target.value)} />
          <br />
          <button onClick={handleSubmit}>Login In!</button>
      </div>
    )
}
