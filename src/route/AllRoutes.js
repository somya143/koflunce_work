import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Register from '../pages/Register';
import Login from '../pages/Login';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/signup' element={<Register />} ></Route>
      <Route path='/login' element={<Login />} ></Route>
    </Routes>
  )
}

export default AllRoutes
