import React from 'react'
import girlDev from '../../../public/img/Customer Support.png'

function Why() {
    return (
        <div className='flex flex-col why relative py-10'>
            <div className="heading">
                <h1 className='text-black text-6xl font-bold'>Why<span className='text-blue-500'> Us</span></h1>
                <p className='text-gray-600 font-light text-left w-1/2 text-sm my-2'>Welcome to our IT solutions company, where we specialize in delivering innovative technology solutions to meet the evolving needs of businesses. With a passion for excellence and a commitment to client satisfaction, we strive to be the trusted 
                partner that empowers organizations to unlock their full potential.<br></br>
                </p>
            </div>
            <div className="flex justify-center gap-6 items-center py-6">
                <div className="img">
               <img src={girlDev}  alt='img'/>
                </div>
                <div className="flex relative flex-col">
                    <div className="Why-box px-4 flex flex-col items-start justify-start h-40 ">
                        <h2 className='text-gray-800 text-lg font-semibold cursor-pointer hover:text-blue-500'>Best Quality</h2>
                        <p className='text-gray-600 font-light text-left  text-sm my-2'>you can trust that you will receive reliable, innovative,
                        and personalized services that will drive your business forward in the ever-changing world of technology.
                        </p>
                    </div>
                    <div className='shape-circle circle-2' />
                    <div className="Why-box px-4 flex flex-col items-start justify-start h-40 ">
                        <h2 className='text-gray-800 text-lg font-semibold cursor-pointer hover:text-blue-500'>Client Support</h2>
                        <p className='text-gray-600 font-light text-left text-sm my-2'>We believe in building strong and lasting relationships with our clients,
                        providing ongoing support and guidance throughout the entire project lifecycle.
                        </p>
                    </div>
                    <div className="Why-box relative px-4 flex flex-col items-start justify-start h-40 ">
                        <h2 className='text-gray-800 text-lg font-semibold cursor-pointer hover:text-blue-500'>Security</h2>
                        <p className='text-gray-600 font-light text-left  text-sm my-2'>Thank you for considering our IT solutions company. Your data and digital assets are not only our top priority, but we also take utmost care to implement robust security measures and advanced encryption protocols to safeguard
                        your information from unauthorized access, ensuring the highest levels of data protection.
                        </p>
                    <div className='shape-circle circle-3' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Why
