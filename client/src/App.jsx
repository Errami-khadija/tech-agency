import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "@/layouts/Dashboard";
import  SideBar  from "@/layouts/sidebar";


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
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import Image from './Components/Image'
 import './App.css';
 const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/signup', element: <SignUp /> },
    { path: '/login', element: <Login /> },
    { path: '/verify/:verificationToken', element: <VerificationPage /> },
    { path: '/', element: <LandingPage /> },
    { path: '/contact', element: <Contact2 /> },
    { path: '/services', element: <Services2 /> },
    { path: '/about', element: <Why /> },

    { path: '/admin', element: <Admin /> },

    { path: '/orders', element: <Orders /> },
    { path: '/messages', element: <Messages /> },
    { path: '/userService', element: <UserService /> },
    { path: '/profileUser', element: <ProfileUser /> },
    { path: '/dashboard/*', element: <Dashboard /> },
    { path: '/sidebar/*', element: <SideBar /> },
    { path: '/home_user', element: <Home_user /> },

    { path: '/terms', element: <Terms /> },





   
  ]);
  return routes;
};



function App() {
  return (
    <>
    <Router>
      <AppRoutes />
    </Router>
    
    </>
   
  );
}

export default App;
