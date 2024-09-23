import React from 'react'
import Card from '@mui/material/Card';
import {useState, useEffect}from 'react'
import axios from 'axios'
import {useCookies} from 'react-cookie'
import Login from '../auth/Login'
import User from '../../../public/img/user.avif'

function ProfileUser() {
  const [username, setUsername]= useState("")
  const [email, setEmail]= useState("")
  const [phone, setPhone]= useState("")
  const [password, setPassword]= useState("")
  const [id, setId]= useState("")


  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedId = localStorage.getItem("userId");
    const storedEmail = localStorage.getItem("email");

    if (storedUsername && storedId &&  storedEmail ) {
      setUsername(storedUsername);
      setId(storedId);
      setEmail(storedEmail);
    }
  }, []);
  const [cookies,setCookies] = useCookies("access_token")

const removeCookies=()=>{
  setCookies("access_token","")
  window.localStorage.removeItem("userId")
  window.localStorage.removeItem("username")
  window.localStorage.removeItem("email")
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
      {
             cookies.access_token
             ? <button className='btn-Save logout' onClick={removeCookies}>Logout</button>
             : <Login/>
        }

        <h3>Personal Informations:</h3>
        <Card  className="bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 " >
        <div className="info">
              <div className="personal-info">
                <div className="img">
                  <img src={User} alt="" />
                </div>
               <div className="contact">
               <h4>Email:<p>{email}</p></h4>
               </div>
              </div>
            <h4>Username:<input type='text' value={username} onChange={e=>setUsername(e.target.value)} /></h4> 
             <h4>Password:<input type='text' value={password} onChange={e=>setPassword(e.target.value)} /></h4>
            <button className='btn-Save'onClick={()=>{
            updateProfile(id)}}>Save</button>
            </div>
        </Card>
      </div>


    </div>
  )
}

export default ProfileUser
