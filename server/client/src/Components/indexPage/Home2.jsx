import React from 'react'
import { Link } from 'react-router-dom'
import develop from '../../../public/img/dev.png'

function Home2() {
    return (
        <div className='flex flex-col hero'>

            <div className=" flex flex-row justify-between items-center py-4 w-full ">
                <a  className="font-bold text-xl text-blue-500"><Link to="/">TECH-AGENCY</Link></a>
                <div>
                    <ul className="flex flex-row">
                        <li><a className='mx-3 text-base font-medium ' ><Link to="/servicess">Services</Link></a></li>
                        <li><a className='mx-3 text-base font-medium ' ><Link to="/about">About</Link></a></li>
                        <li><a className='mx-3 text-base font-medium ' ><Link to="/contact">Contact</Link></a></li>
                    </ul>
                </div>
                <Link className='px-4 py-3 rounded-2xl mx-4 bg-blue-500 text-white font-medium text-sm cursor-pointer' to="/signup">Get Started</Link>
            </div>
            <div className="  hero  h-full w-full relative flex flex-1 flex-row py-6 items-center justify-center">
                <div className=" flex flex-col left-0 w-1/2  top-0 text-left items-start justify-start ">
                <div className='hero-shapes shape1' />
                    <h1 className='text-black text-6xl mt-8 font-bold'>Transform Your <span className='text-blue-600'> Idea</span> Into Reality</h1>
                    <p className='text-gray-600 relative font-light text-left text-sm grow  my-2'>Bring your vision to life with Tech-Agency.
                        Our team of skilled professionals can help you turn your ideas into reality.
                        From custom software development to innovative web design,
                        we provide comprehensive IT solutions to help you succeed.
                        Get started today and take the first step towards achieving your goals.
                    <div className='hero-shapes shape2' />
                    </p>
                    <Link className='px-4 py-3 rounded-2xl bg-blue-500 text-white font-medium text-sm cursor-pointer' to="/signup">Get Started</Link>
                   
                </div>

                <div className="w-1/2" >
                    <img src={develop} alt='img' className='w-full h-full' />
                </div>

            </div>
        </div>
    )
};

export default Home2;

