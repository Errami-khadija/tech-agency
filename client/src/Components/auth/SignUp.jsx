import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; 
import { Card, CardHeader, CardBody, CardFooter, Input, Button, Typography } from '@material-tailwind/react';

export function SignUp() {
  const [showPassword, setShowPassword] = useState(false); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const createUser = async (e) => {
    e.preventDefault();

    // Check if the fields are filled
    if (!username || !password || !email) {
      alert('All fields are required.');
      return;
    }

    // Check if the email is valid
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('https://tech-agency.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      const data = await response.json();

      if (response.status === 200) {
        alert(data.message);  // "Registration successful, please verify your email."
      } else if (response.status === 400) {
        alert(data.error);  // "User already exists"
      } else {
        alert('Something went wrong, please try again.');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again later.');
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
                New account
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input
                type="text"
                required
                label="Username"
                size="lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="email"
                required
                label="Email"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
               <div className="relative">
              <Input
                 type={showPassword ? "text" : "password"}
                required
                label="Password"
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
              <Button variant="gradient" onClick={createUser} fullWidth>
                Sign Up
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Already have an account?
                <Link to="/login">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    Login
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

export default SignUp;
