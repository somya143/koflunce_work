import React from 'react';
import "./register.css";

const Register = () => {
  return (
    <div className='signupMainBox'>
      <div className='signupImageBox'>
       <img src="https://www.kofluence.com/wp-content/uploads/2023/02/Logo_black.png" alt='company logo' />
       <h1>Trusted By Top Brands!</h1>
       <p>Gear up with Kofluence to catapult your brand’s social presence
           Campaigns that reign, performance that speaks!</p>
      </div>
      <div className='signupFormBox'>
        <h2>Hey, hello 🖐</h2>
        <h6>Enter the information to register yourself.</h6>
        <form className='form'>
         <label>Name :</label>
         <input placeholder='Enter Your Name' type='text' />
         <br></br>
         <label>Email :</label>
         <input placeholder='Enter Your Email' type='email' />
         <br></br>
         <label>Password :</label>
         <input placeholder='Enter Your Password' type='password' />
         <br></br>
         <label>Phone Number :</label>
         <input placeholder='Enter Your Number' type='tel' />
         <br></br>
         <label>Age :</label>
         <input placeholder='Enter Your Age' type='number' />
         <br></br>
         <label>Address :</label>
         <input placeholder='Enter Your Address' type='text' />
         <br></br>
         <label>Gender</label>
         <select>
          <option>Gender :</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
         </select>
         <br></br>
         <label>Occupation :</label>
         <input placeholder='Enter Your Occupation' type='text' />
         <br></br>
         <button id='formBtn'>Register</button>
        <p id='orLine'>---------------------------------------- or ----------------------------------------</p>
        <button id='google'>Sign in with google</button>
        </form>
      </div>
    </div>
  )
}

export default Register
