import React from 'react'
import Home from "../Pages/Home"
import Services from "../Pages/Service"
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"
import Contact from "../Pages/Contact"
import Doctor from "../Pages/Doctor/Doctor"
import DoctorDetails from "../Pages/Doctor/DoctorDetails"
import MyAccount from '../Dashboard/UserAccount/MyAccount'
import DashBoard from '../Dashboard/DoctorAccount/DashBoard'
import ProtectedRoute from './ProtectedRoute'

import {Routes,Route as Router} from "react-router-dom"

const Route = () => {
  return (
    <Routes>
      <Router path ="/" element ={<Home/>}/>
      <Router path="/home" element={<Home/>}/>
      <Router path="/doctor" element={<Doctor/>}/>
      <Router path="/doctor/:id" element={<DoctorDetails/>}/>
      <Router path="/login" element={<Login/>}/>
      <Router path="/register" element={<Signup/>}/>
      <Router path="/services" element={<Services/>}/>
      <Router path="/contact" element={<Contact/>}/>
      <Router path="/user/profile/me" element={
        <ProtectedRoute allowedRoles={["patient"]}>
        <MyAccount/>
        </ProtectedRoute>}/>
      <Router path="/doctor/profile/me" element={
        <ProtectedRoute allowedRoles={["doctor"]}>
      <DashBoard/>
      </ProtectedRoute>}/>
    </Routes>
  )
}

export default Route
