import React from 'react'
import Team1 from '../../../public/img/team-1.jpeg'
import Team2 from '../../../public/img/team-2.jpeg'
import Team3 from '../../../public/img/team-3.jpeg'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Testimonials2() {
  return (
    <div className='flex flex-col py-10'>
       <div className="heading">
                <h1 className='text-black text-6xl font-bold'>Our<span className='text-blue-500'> Testimonials</span></h1>
               
            </div>
            <div className="inline-grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 py-6">
                <div className="border-gray-400 bg-white p-6 w-full border  rounded-3xl">
                  <div className="flex flex-row items-center gap-4">
                    <div className="w-1/5 aspect-square ">
                        <img src={Team1} className='w-full h-full rounded-full' alt="testimonialas" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className='text-blue-gray-800 text-2xl font-bold'>Jennifer K.</h2>
                        <p className='text-blue-gray-600 text-lg font-light'>front-end developer</p>
                    </div>
                  </div>
                  <p className='text-lg text-gray-700 my-4 font-normal'>Our experience with your Dropleet company has been exceptional. 
                    From software development to digital transformation, 
                    your team has consistently delivered top-notch solutions tailored to our unique requirements.</p>
                  <div className="flex flex-row gap-1">
                     <StarIcon sx={{ fontSize: 35, color: "#fbbf24" }} />
                     <StarIcon sx={{ fontSize: 35, color: "#fbbf24" }} />
                     <StarIcon sx={{ fontSize: 35, color: "#fbbf24" }} />
                     <StarIcon sx={{ fontSize: 35, color: "#fbbf24" }} />
                     <StarIcon sx={{ fontSize: 35, color: "#fbbf24" }} />
                  </div>
                </div>
                <div className="border-gray-400 bg-white p-6 w-full border  rounded-3xl">
                  <div className="flex flex-row items-center gap-4">
                    <div className="w-1/5 aspect-square ">
                        <img src={Team2} className='w-full h-full rounded-full' alt="testimonialas" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className='text-blue-gray-800 text-2xl font-bold'>David M.</h2>
                        <p className='text-blue-gray-600 text-lg font-light'>front-end developer</p>
                    </div>
                  </div>
                  <p className='text-lg text-gray-700 my-4 font-normal'>The cloud services provided by your company have revolutionized our business. The scalability and flexibility of the
                 cloud platform have allowed us to easily expand our operations without worrying about infrastructure limitations. 
                  </p>
                  <div className="flex flex-row gap-1">
                     <StarIcon sx={{ fontSize: 35, color: "#fbbf24" }} />
                     <StarIcon sx={{ fontSize: 35, color: "#fbbf24" }} />
                     <StarIcon sx={{ fontSize: 35, color: "#fbbf24" }} />
                     <StarIcon sx={{ fontSize: 35, color: "#fbbf24" }} />
                     <StarHalfIcon sx={{ fontSize: 35, color: "#fbbf24" }} />
                  </div>
                </div>
                <div className="border-gray-400 bg-white p-6 w-full border  rounded-3xl">
                  <div className="flex flex-row items-center gap-4">
                    <div className="w-1/5 aspect-square ">
                        <img src={Team3} className='w-full h-full rounded-full' alt="testimonialas" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className='text-blue-gray-800 text-2xl font-bold'>Sarah L.</h2>
                        <p className='text-blue-gray-600 text-lg font-light'>front-end developer</p>
                    </div>
                  </div>
                  <p className='text-lg text-gray-700 my-4 font-normal'>We are extremely satisfied with the cybersecurity services offered by your company. 
                Your proactive approach and robust security measures have protected our sensitive data from potential threats.
                  </p>
                  <div className="flex flex-row gap-1">
                     <StarIcon sx={{ fontSize: 35, color: "#fbbf24" }} />
                     <StarIcon sx={{ fontSize: 35, color: "#fbbf24" }} />
                     <StarIcon sx={{ fontSize: 35, color: "#fbbf24" }} />
                     <StarHalfIcon sx={{ fontSize: 35, color: "#fbbf24" }} />
                     <StarBorderIcon sx={{ fontSize: 35, color: "#fbbf24" }} />
                  </div>
                </div>
                
            </div>
    </div>
  )
}

export default Testimonials2

