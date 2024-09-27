import React from 'react'
import Card from '@mui/material/Card';
import {useState, useEffect}from 'react'
import axios from 'axios'
import {useCookies} from 'react-cookie'
import logo from '../../../public/img/logoo.png'
import { Link } from 'react-router-dom';

function ProfileUser() {
  const [username, setUsername]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [id, setId]= useState("")


  useEffect(() => {
    const storedUsername = localStorage.getItem("usernameCookies");
    const storedEmail = localStorage.getItem("emailCookies");

    if (storedUsername && storedEmail ) {
      setUsername(storedUsername);
      setEmail(storedEmail);
    }
  }, []);
  const [cookies,setCookies] = useCookies("access_token")

const removeCookies=()=>{
  setCookies("access_token","")
  window.localStorage.removeItem("usernameCookies")
  window.location.reload(false)

}

  const updateProfile=async(id)=>{
       
  await  axios.put("https://tech-agency.onrender.com/updateprofile", {username: username, password:password,id:id})
  .then(res=>{
    alert("Profile updated successefuly! ");
    removeCookies();
    window.location.href = "/login";
  })

  }

  return (
    <div>

             
      <div className='ProfileUser'>
        <Link to={"/login"}><button className='btn-Save logout' onClick={()=>{removeCookies}}>Logout</button></Link>

        <h3>Personal Informations:</h3>
        <Card  className="bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 " >
        <div className="info">
              <div className="personal-info">
                <div className="img">
                <img src={logo} alt="" />
                </div>
               <div className="contact">
               <h4>Email:<p>tech.agency@gmail.com</p></h4>
               </div>
              </div>
            <h4>Username:<input type='text' value="Admin_Tech_Agency" onChange={e=>setUsername(e.target.value)} /></h4> 
             <h4>Password:<input type='text' value="" onChange={e=>setPassword(e.target.value)} /></h4>
            <button className='btn-Save'onClick={()=>{
            updateProfile(id)}}>Save</button>
            </div>
        </Card>
      </div>
      


    </div>
  )
}

export default ProfileUser
