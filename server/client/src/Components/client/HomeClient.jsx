import React from 'react'
import Welcome from '../../../public/img/Data Trends.png'
import { useCookies } from 'react-cookie'
import Login from '../auth/Login'
function HomeClient() {
  const [cookies, setCookies] = useCookies("access_token")

  return (
    <>
      {
        cookies.access_token
          ? <div className='home-client'>
            <img className='home-img w-1/2 h-1/2' src={Welcome} alt="welcome" />
            <h1 className='home-title'>welcome to your space</h1>
          </div>
          : <Login />
      }

    </>
  )
}

export default HomeClient
