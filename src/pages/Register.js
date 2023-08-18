import React, { useState } from 'react';
import "./register.css";
import axios from 'axios';
import { Link } from "react-router-dom";

const Register = () => {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [phone , setPhone] = useState("");
  const [age , setAge] = useState("");
  const [address , setAddress] = useState("");
  const [gender , setGender] = useState("");
  const [occupation , setOccupation] = useState("");
  // const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {name,email,password,phone,age,address,gender,occupation};
    const res = await axios.post("https://json-server-s3j4.onrender.com/users" , data);
    if (res) {
      alert("User Registered Successfully")
      console.log(res)
    }
  } 
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
        <form className='form' onSubmit={handleSubmit}>
         <label>Name :</label>
         <input  type='text' onChange={(e) => setName(e.target.value)} />
         <br></br>
         <label>Email :</label>
         <input  type='email' onChange={(e) => setEmail(e.target.value)} />
         <br></br>
         <label>Password :</label>
         <input  type='password' onChange={(e) => setPassword(e.target.value)} />
         <br></br>
         <label>Phone Number :</label>
         <input  type='tel' onChange={(e) => setPhone(e.target.value)} />
         <br></br>
         <label>Age :</label>
         <input type='number' onChange={(e) => setAge(e.target.value)} />
         <br></br>
         <label>Address :</label>
         <input  type='text' onChange={(e) => setAddress(e.target.value)} />
         <br></br>
         <label>Gender</label>
         <select onChange={(e) => setGender(e.target.value)}>
          <option></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
         </select>
         <br></br>
         <label>Occupation :</label>
         <input  type='text' onChange={(e) => setOccupation(e.target.value)} />
         <br></br>
         <button id='formBtn' type='submit'>Register</button>
         <h6><span>If you are already an user then,</span><span><Link to={"/login"}>login</Link></span></h6>
        <p id='orLine'>---------------------------------------- or ----------------------------------------</p>
        <button id='google'>Sign in with google</button>
        </form>
      </div>
    </div>
  )
}

export default Register
