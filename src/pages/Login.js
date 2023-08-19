import React, { useEffect, useState } from 'react';
import "./login.css";
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
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
if (!emailOrPhone) {
  toast.error('Please enter your email or phone number', {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
  return;
}
  if (!password) {
    toast.error('Please enter your password', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return;
  }
  const user = simulatedRegisteredUsers.find(user => (user.email === emailOrPhone || user.phone === emailOrPhone) && user.password === password);
  const data = {
    password,
    ...(user.email ? { email: user.email } : {}),
    ...(user.phone ? { phone: user.phone } : {}),
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
    setTimeout(() => {

        navigate("/userDetails")
    },3000)
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
          <label>Email or Phone:</label>
          <input
            type='text'
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button id='loginBtn' type='submit'>Login</button>
          <h6><span>If you are new to the website, kindly</span>{" "}<Link to={"/signup"} >register</Link></h6>
          <button id='google'>Sign in with Google</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login
