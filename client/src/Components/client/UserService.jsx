import React from 'react'
import { useCookies } from 'react-cookie'
import Login from "../auth/Login"
import Axios from "axios"
import { useState, useEffect } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function UserService() {
  const [selectedService, setSelectedService] = useState(null);
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [specifications, setSpecifications] = useState("")

  const [cookies, setCookies] = useCookies("access_token")

  const sendOrder = () => {
    Axios.post("http://localhost:1000/sendOrder", {
      service: selectedService.name,
      username: username,
      email: email,
      subject: subject,
      specifications: specifications
    })
      .then(res => {
        alert("Order sent successefuly! ")
        window.location.href = "http://localhost:5173/sidebar/userService"
        console.log(res.data)
      })
  }

  const [services, setServices] = useState([])
  useEffect(() => {
    Axios.get("http://localhost:1000/services")
      .then(res => {
        setServices(res.data)
      })
  }, [services])


  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);



  const [popup, setPopup] = useState(false);

  return (


    <div className='UserServices'>
      {
        cookies.access_token
          ? 
         

      <div className='container mt-4 ' >

        {services.map(service => (
          <Card sx={{ maxWidth: 345 }} key={service._id} className='User-Card bg-gradient-to-br from-blue-gray-800 to-blue-gray-900'>
            {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}

            <CardContent className='content-Card' >
              <Typography gutterBottom variant="h5" component="div">
                {service.name}
              </Typography>
              <Typography variant="body2" color="#d1d1d1">
                {service.description}
              </Typography>
            </CardContent>
            <CardActions>
              <button className='btn-Save Order' onClick={() => { setPopup(true); setSelectedService(service); }}>Order Now</button>
            </CardActions>
          </Card>
        ))}

      </div>
       : <Login />
      }



      {popup &&
        <div className="popup-container">
          <div className='popup action'>
            <h3>UserName: <p>{username}</p></h3>
            <h3>Email: <p>{email}</p></h3>
            <h3>Subject:</h3><input type='text' onChange={e => setSubject(e.target.value)} value={subject} placeholder='type subject here' />
            <h3>Specification:</h3><input type="textarea" onChange={e => setSpecifications(e.target.value)} value={specifications} placeholder='type your specifications here ...' />
            <div className='buttons'>
              <button className='btn-Save' onClick={sendOrder}>Send order</button>
              <button className='action-btn cancel' onClick={() => setPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      }

    </div>

  )
}

export default UserService