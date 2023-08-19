import React, { useEffect, useState } from 'react';
import "./userDetails.css";

const UserDetail = () => {
    const [userData, setUserData] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('login-data'));
    setUserData(storedUserData);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  if (!userData) {
    return <div>No user data found.</div>;
  }
  return (
    <div className='users'>
      <h1>User Details</h1>
      {userData.email && <p>Email: {userData.email}</p>}
     {userData.phone && <p>Phone: {userData.phone}</p>}
      <p>Password: {showPassword ? userData.password : '********'}
        <button onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide Password' : 'Show Password'}
        </button></p>
    </div>
  )
}

export default UserDetail
