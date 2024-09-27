import React from 'react'
import { Link } from 'react-router-dom'

function Footer2() {
  return (
    <div className="flex flex-col">
    <div className='py-4 inline-grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6'>
      <div className="w-full flex flex-col">
      <a  className="font-bold text-xl text-blue-500"><Link to="/">TECH-AGENCY</Link></a>
      <p className='text-gray-600 font-light text-left text-sm my-2'>Bring your vision to life with Dropleet Sarl.
                    Our team of skilled professionals can help you turn your ideas into reality.
                    From custom software development to innovative web design.
      </p>

      </div>
      <div className="w-full">
      <h4 className='font-bold text-lg text-blue-gray-800'>Services</h4>
       <ul className='flex flex-col my-2'>
           <li className='py-1'><a className='text-blue-gray-600 font-light text-base  '><Link to="/services">Software Developement</Link></a></li>
           <li className='py-1'><a  className='text-blue-gray-600 font-light text-base  '><Link to="/services">IT Security</Link></a></li>
           <li className='py-1'><a  className='text-blue-gray-600 font-light text-base  '><Link to="/services">Cloud Management</Link></a></li>
           <li className='py-1'><a  className='text-blue-gray-600 font-light text-base  '><Link to="/services">Saas Services</Link></a></li>
       </ul>
      </div>
      <div className="w-full">
      <h4 className='font-bold text-lg text-blue-gray-800'>Website Map</h4>
       <ul className='flex flex-col my-2'>
           <li className='py-1'><a href="#" className='text-blue-gray-600 font-light text-base  '><Link to="/">Home</Link></a></li>
           <li className='py-1'><a href="#" className='text-blue-gray-600 font-light text-base  '><Link to="/services">Services</Link></a></li>
           <li className='py-1'><a href="#" className='text-blue-gray-600 font-light text-base  '><Link to="/about">About us</Link></a></li>
           <li className='py-1'><a href="#" className='text-blue-gray-600 font-light text-base  '><Link to="/contact">Contact Us</Link></a></li>
       </ul>
      </div>
      <div className="w-full">
      <h4 className='font-bold text-lg text-blue-gray-800'>Useful links</h4>
       <ul className='flex flex-col my-2'>
           <li className='py-1'><a href="#" className='text-blue-gray-600 font-light text-base  '><Link to="/signup">Sign up</Link></a></li>
           <li className='py-1'><a href="#" className='text-blue-gray-600 font-light text-base  '><Link to="/login">Login</Link></a></li>
           <li className='py-1'><a href="#" className='text-blue-gray-600 font-light text-base  '><Link to="/">Landing page</Link></a></li>
           <li className='py-1'><a href="#" className='text-blue-gray-600 font-light text-base  '><Link to="/terms">Privacy Policy</Link></a></li>
       </ul>
      </div>
    </div>
    <hr />
    <p className='text-center text-blue-gray-700 font-light text-base py-4'><span className='text-blue-800'>TECH-AGENCY @2024</span>All Rights Reserved</p>
    </div>
  )
}

export default Footer2
