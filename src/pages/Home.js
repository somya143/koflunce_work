import React from 'react'
import { Link } from 'react-router-dom';
import "./home.css";

const Home = () => {

  return (
    <div className='home'>
      <Link className='signupLink' to={"/signup"} >Register</Link>
      <Link className='loginLink' to={"/login"}>Login</Link>
      <Link className='userDetail' to={"/userDetails"} >User Details</Link>
    </div>
  )
}

export default Home
