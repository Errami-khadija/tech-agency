import Dashboard from "./layouts/dashboard";
import  SideBar  from "./layouts/sidebar";


import LandingPage from './Components/indexPage/LandingPage';
import SignUp from "./Components/auth/SignUp";
import Login from "./Components/auth/Login";
import Admin from "./Components/admin/Admin";
import Orders from "./Components/admin/Orders";
import Messages from './Components/admin/Messages';
import UserService from "./Components/client/UserService";
import ProfileUser from './Components/client/ProfileUser';
import Contact2 from "./Components/indexPage/Contact2";
import Services2 from "./Components/indexPage/Services2";
import Why from "./Components/indexPage/Why";
import Terms from "./Components/indexPage/Terms";
//user 
import Home_user from "./Components/client/HomeClient";

import VerificationPage from "./Components/auth/VerificationPage"; 
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

import Image from './Components/Image'
 import './App.css';
  



function App() {
  return (
    
    <Routes>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="/verify/:verificationToken" element={<VerificationPage />} />
    <Route path="/" element={<LandingPage />} />
    <Route path="/contact" element={<Contact2 />} />
    <Route path="/services" element={<Services2 />} />
    <Route path="/about" element={<Why />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/orders" element={<Orders />} />
    <Route path="/messages" element={<Messages />} />
    <Route path="/userService" element={<UserService />} />
    <Route path="/profileUser" element={<ProfileUser />} />
    <Route path="/dashboard/*" element={<Dashboard />} />
    <Route path="/sidebar/*" element={<SideBar />} />
    <Route path="/home_user" element={<Home_user />} />
    <Route path="/terms" element={<Terms />} />
  </Routes>
    
   
  );
}

export default App;
