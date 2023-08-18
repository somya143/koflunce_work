import React from 'react';
import { Routes, Route } from "react-router-dom";
import Register from '../pages/Register';
import Login from '../pages/Login';
import Home from '../pages/Home';
import UserDetail from '../pages/UserDetail';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/signup' element={<Register />} ></Route>
      <Route path='/login' element={<Login />} ></Route>
      <Route path='/userDetails' element={<UserDetail />} ></Route>
    </Routes>
  )
}

export default AllRoutes
