import React from 'react';
import "./login.css";
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className='loginMainBox'>
       <div className='loginImageBox'>
       <img src="https://www.kofluence.com/wp-content/uploads/2023/02/Logo_black.png" alt='company logo' />
       <h1>Trusted By Top Brands!</h1>
       <p>Gear up with Kofluence to catapult your brand’s social presence
           Campaigns that reign, performance that speaks!</p>
      </div>
      <div className='loginFormBox'>
        <h2>Hey, Welcome 🙏</h2>
        <h6>Enter the credential you entered while signup.</h6>
        <form className='loginForm'>
         <label>Email :</label>
         <input  type='email' />
         <br></br>
         <label>Phone Number :</label>
         <input  type='tel' />
         <br></br>
         <label>Password :</label>
         <input  type='password' />
         <br></br>
         <button id='loginBtn'>Login</button>
         <h6><span>If you are new to website, kindly</span>{" "}<Link to={"/signup"} >register</Link></h6>
        <p id='orLine'>---------------------------------------- or ----------------------------------------</p>
        <button id='google'>Sign in with google</button>
        </form>
      </div>
    </div>
  )
}

export default Login
