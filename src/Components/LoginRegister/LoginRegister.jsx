import React from 'react'
import './LoginRegister.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {
  return (
    <div className='Wrapper'>
       <div className="form-box login">
        <form action="">
          <h1>Login</h1>
           
           <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className='icon'/>
           </div>

           <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock  className='icon'/>
           </div>

           <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="nav#">Forgot Password</a>
           </div>

           <button type='submit'>Login</button>

           <div className="register-link">
            <p>Don't have an account?<a href="nav#">Register</a></p>
           </div>
        </form>
       </div>

       {/* /* REGISTER SECTION */ }

       <div className="form-box register">
        <form action="">
          <h1>Registration</h1>
           
           <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className='icon'/>
           </div>

           <div className="input-box">
            <input type="email" placeholder='Email' required />
            <FaEnvelope className='icon'/>
           </div>

           <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock  className='icon'/>
           </div>

           <div className="remember-forgot">
            <label><input type="checkbox" />I agree to the terms & conditions.</label>
           </div>

           <button type='submit'>Register</button>

           <div className="register-link">
            <p>Don't have an account?<a href="nav#">Register</a></p>
           </div>
        </form>
       </div>
      </div>
  )
};

export default LoginRegister