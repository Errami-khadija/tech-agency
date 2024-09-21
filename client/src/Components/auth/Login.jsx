import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardHeader } from '@material-tailwind/react';
import Spline from '@splinetool/react-spline';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; 

import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Input,
  Typography
} from '@material-tailwind/react';

function Login() {
  const [showPassword, setShowPassword] = useState(false); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [_, setCookies] = useCookies(["access_token"]);
  const [adminCookies, setAdminCookies] = useCookies(["adminCookies"]);

  const navigate = useNavigate(); // Add this to redirect user after successful login

  const Login = async (e) => {
    e.preventDefault();

    // Check if the fields are filled
    if (!username || !password) {
      alert("Username and password are required.");
      return;
    }
// Check for admin login first
if (username === "Adminee_Tech_Agency" && password === "111") {
  // Handle admin login separately
  window.location.href = "http://localhost:5173/dashboard/home";
  setCookies("access_token", response.data.token); // Admin token (can be hardcoded or fetched)
  setAdminCookies("adminCookies", username);
  window.localStorage.setItem("username", username);
  window.localStorage.setItem("emailCookies", "tech.agency@gmail.com");
} else {
  try {
    // For regular user login, make a request to the backend
    const response = await axios.post('http://localhost:1000/login', {
      username,
      password,
    });

    // Check if the login was successful based on the message returned
    if (response.data.message === "Please verify your email before logging in.") {
      alert(response.data.message);
    } else if (response.data.message === "User doesn't exist!") {
      alert(response.data.message);
    } else if (response.data.message === "Username or password is incorrect") {
      alert(response.data.message);
    } else {
      // Successful login for regular users
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userId", response.data.userId);
      window.localStorage.setItem("username", response.data.username);
      window.localStorage.setItem("email", response.data.email);
      navigate("/sidebar/home_user"); // Navigate to home page after login
    }
  } catch (error) {
    console.error("Login failed:", error.response ? error.response.data : error.message);
    alert("Login failed. Please try again.");
  }
}
  };

  return (
    <>
      <div className="w-full flex flex-row signup">
        <div className="w-1/2 p-8 ml-20">
          <Card className="w-full mt-10">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-24 place-items-center"
            >
              <Typography variant="h6" color="white">
                Login to your account
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <h4>Username:</h4>
              <Input
                type="text"
                size="lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <h4>Password:</h4>
              <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                required
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
               <span
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)} 
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />} 
                </span>
                </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" onClick={Login} fullWidth>
                Login
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                You don't have an account?
                <Link to="/signup">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    SignUp
                  </Typography>
                </Link>
              </Typography>
            </CardFooter>
          </Card>
        </div>
        <Spline
          className="w-1/5"
          scene="https://prod.spline.design/S1lJQE08ZV6bzitw/scene.splinecode"
        />
      </div>
    </>
  );
}

export default Login;
