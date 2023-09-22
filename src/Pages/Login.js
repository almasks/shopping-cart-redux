import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div  >
      <div style={{margin:"150px"}}>
           <input type='text' placeholder='username' /><br/>
           <input type='text' placeholder='password' /><br/>
           <button>login</button><br/>
           <p >New user<Link to="/register">Register</Link> </p>
      </div >

    </div>
  )
}

export default Login