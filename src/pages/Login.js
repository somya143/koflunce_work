import React, { useEffect, useState } from 'react';
import "./login.css";
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [password,setPassword] = useState("");
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [simulatedRegisteredUsers, setSimulatedRegisteredUsers] = useState([]);
const navigate = useNavigate();

useEffect(() => {
    fetch(`https://json-server-s3j4.onrender.com/users`)
      .then(response => response.json())
      .then(data => setSimulatedRegisteredUsers(data))
      .catch(error => console.error("Error fetching registered users data:", error));
  }, []);
const handleSubmit = async(e) => {
e.preventDefault();
const user = simulatedRegisteredUsers.find(user => (user.email === email || user.phone === phone) && user.password === password);
const data = {
    password, 
    ...(email ? { email } : { phone }), // Storing either email or phone
  };
if (user) {
    setIsAuthenticated(true);
    toast.success('Login successful', {
        position: "top-center",
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    console.log("Login successful");
    localStorage.setItem("login-data",JSON.stringify(data))
    navigate("/userDetails")
  } else {
    setIsAuthenticated(false);
    toast.error('Login failed. Kindly check your credentials', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    console.log("Login failed");
  }
    }
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
        <form className='loginForm' onSubmit={handleSubmit}>
         <label>Email :</label>
         <input  type='email' onChange={(e) => setEmail(e.target.value)} />
         <br></br>
         <label>Phone Number :</label>
         <input  type='tel' onChange={(e) => setPhone(e.target.value)}  />
         <br></br>
         <label>Password :</label>
         <input  type='password' onChange={(e) => setPassword(e.target.value)}  />
         <br></br>
         <button id='loginBtn' type='submit'>Login</button>
         <h6><span>If you are new to website, kindly</span>{" "}<Link to={"/signup"} >register</Link></h6>
        <button id='google'>Sign in with google</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login
