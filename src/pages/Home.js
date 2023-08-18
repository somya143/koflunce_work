import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <Link to={"/signup"} >Register</Link>
      <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Home
