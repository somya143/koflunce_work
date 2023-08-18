import React, { useEffect, useState } from 'react'

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
    <div>
      <h2>User Details</h2>
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
