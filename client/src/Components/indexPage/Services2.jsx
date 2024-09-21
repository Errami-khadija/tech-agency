import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

function Services2() {
    return (
        <div className='flex flex-col py-10'>
            <div className="heading">
                <h1 className='text-black text-6xl font-bold'>Our<span className='text-blue-500'> Services</span></h1>
                <p className='text-gray-600 font-light text-left w-1/2 text-sm my-2'>At Tech-Agency company,
                    we specialize in providing a wide range of IT solutions to help businesses streamline their operations and achieve their goals.
                    We are committed to delivering high-quality, innovative IT solutions that
                    meet the needs of our clients. Contact us today to learn more about our services and how we can help your business succeed.
                </p>
            </div>
            <div className="py-6 inline-grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div className="p-6 border cursor-pointer service-box border-gray-400 w-full  rounded-3xl flex flex-col justify-center items-star hover:bg-white drop-shadow-2xl">
                    <div className="p-4 bg-blue-gray-100 flex service-icon justify-center items-start rounded-3xl">
                        <CodeIcon className='text-blue-gray-600 text-xl icon ' sx={{ fontSize: 40, color: "#3b82f6" }} />
                    </div>
                    <h1 className="text-3xl text-blue-gray-900 font-semibold my-4">Software Developement</h1>
                    <p className='my-2 text-gray-600 font-light text-left text-sm'>Our company offers comprehensive software development services 
                            that cater to the unique needs of businesses across various industries.
                             With a team of highly skilled and experienced software engineers, 
                             we specialize in creating, designing, and implementing customized computer programs and applications.</p>
                </div>
                <div className="p-6 border cursor-pointer service-box border-gray-400 w-full  rounded-3xl flex flex-col justify-center items-star hover:bg-white drop-shadow-2xl">
                    <div className="p-4 bg-blue-gray-100 flex service-icon justify-center items-start rounded-3xl">
                        <CloudDoneIcon className='text-blue-gray-600 text-xl icon ' sx={{ fontSize: 40, color: "#3b82f6" }} />
                    </div>
                    <h1 className="text-3xl text-blue-gray-900 font-semibold my-4">Cloud management.</h1>
                    <p className='my-2 text-gray-600 font-light text-left text-sm'>Our company specializes in providing comprehensive cloud
                             management services that empower businesses to harness the full potential of cloud computing.
                              With our expertise, we help organizations effectively leverage cloud infrastructure, platforms, 
                            and services.</p>
                </div>
                <div className="p-6 border cursor-pointer service-box border-gray-400 w-full  rounded-3xl flex flex-col justify-center items-star hover:bg-white drop-shadow-2xl">
                    <div className="p-4 bg-blue-gray-100 flex service-icon justify-center items-start rounded-3xl">
                        <GppGoodIcon className='text-blue-gray-600 text-xl icon ' sx={{ fontSize: 40, color: "#3b82f6" }} />
                    </div>
                    <h1 className="text-3xl text-blue-gray-900 font-semibold my-4">IT security.</h1>
                    <p className='my-2 text-gray-600 font-light text-left text-sm'>Our company specializes in providing comprehensive IT security services that safeguard businesses against cyber threats and protect their valuable assets. With our expertise, 
                            we offer a range of solutions tailored to the unique security needs of modern organizations.</p>
                </div>
                <div className="p-6 border cursor-pointer service-box border-gray-400 w-full  rounded-3xl flex flex-col justify-center items-star hover:bg-white drop-shadow-2xl">
                    <div className="p-4 bg-blue-gray-100 flex service-icon justify-center items-start rounded-3xl">
                        <MiscellaneousServicesIcon className='text-blue-gray-600 text-xl icon ' sx={{ fontSize: 40, color: "#3b82f6" }} />
                    </div>
                    <h1 className="text-3xl text-blue-gray-900 font-semibold my-4">SAAS Services.</h1>
                    <p className='my-2 text-gray-600 font-light text-left text-sm'>Our company specializes in providing cutting-edge Software-as-a-Service (SaaS) solutions that empower businesses to streamline their operations, enhance productivity, and drive growth. With our SaaS services, we offer scalable and flexible software 
                            solutions that are accessible anytime, anywhere, through a secure online platform.</p>
                </div>
                
            </div>
        </div>
    )
}

export default Services2
