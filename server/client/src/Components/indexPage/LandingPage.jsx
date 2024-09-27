import React from 'react'
import Number2 from './Number2';
import Home2 from './Home2';
import Services2 from './Services2';
import Why from './Why';
import Contact2 from './Contact2';
import Testimonials2 from './Testimonials2';
import Footer2 from './Footer2';

function LandingPage() {
  return (
    <div className='container mx-auto w-full flex flex-col'>
      <Home2 />
      <Number2 />
      <Services2 />
      <Why />
      <Contact2 />
      <Testimonials2 />
      <Footer2 />
    </div>
  )
}

export default LandingPage

