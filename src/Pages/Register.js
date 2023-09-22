import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
        <div style={{margin:"200px"}}>
            
            <input type='text' placeholder='name' /><br/>
               <input type='email' placeholder='email' /><br/>
               
               <input type='text' placeholder='username' /><br/>
               <input type='text' placeholder='password' /><br/>
               
               <input type='text' placeholder='re-enterpassword' /><br/>
               <button><Link to="/home">Register</Link></button><br/>

        </div>
    </div>
  )
}

export default Register