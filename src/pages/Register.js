import React, { useState } from 'react';
import "./register.css";
import axios from 'axios';
import { Link , useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [phone , setPhone] = useState("");
  const [age , setAge] = useState("");
  const [address , setAddress] = useState("");
  const [gender , setGender] = useState("");
  const [occupation , setOccupation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !phone || !age || !address || !gender || !occupation) {
      toast.error('Please fill in all required fields', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    if (isNaN(age) || age < 12 || age > 100) {
      toast.error('Please enter a valid age between 18 and 100', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      // Validation for phone number format
      toast.error('Please enter a valid 10-digit phone number', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    let data = {name,email,password,phone,age,address,gender,occupation};
    const res = await axios.post("https://json-server-s3j4.onrender.com/users" , data);
    if (res) {
      toast.success('User registered successfully', {
        position: "top-center",
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        navigate('/login')
       }, 3000)
    }else{
      toast.error('Registeration failed. Kindly try again', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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
         <h6><span>If you are already an user then,</span>{" "}<Link to={"/login"}>login</Link></h6>
        <button id='google'>Sign in with google</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register
