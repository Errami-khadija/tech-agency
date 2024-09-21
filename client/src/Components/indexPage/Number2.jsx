import React from 'react'
import NumbersCounter from './Counter'
import { useState, useEffect } from 'react';

import PeopleIcon from '@mui/icons-material/People';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import SendIcon from '@mui/icons-material/Send';
import BadgeIcon from '@mui/icons-material/Badge';

function Number2() {
    const [countClient, setCountClient] = useState(null);

    useEffect(() => {
      async function fetchCount() {
        const res = await fetch('http://localhost:1000/countClients');
        const { countClient } = await res.json();
        setCountClient(countClient);
      }
      fetchCount();
    }, [countClient]);
    const [count, setCount] = useState(null);
  
    useEffect(() => {
      async function fetchCount() {
        const res = await fetch('http://localhost:1000/count');
        const { count } = await res.json();
        setCount(count);
      }
      fetchCount();
    }, [count]);
  return (
    <div className='py-10 numbers relative'> 
      <h1 className='text-black text-6xl mt-10 w-full font-bold'>Tech-Agency in <span className='text-blue-500'> Numbers</span></h1>
    <div className='py-4 inline-grid grid-cols-4 w-full  gap-14'>
    <div className="p-4 border border-gray-400 w-full  rounded-3xl flex flex-col justify-center items-center">
        <div className='flex flex-row'>
          <PeopleIcon className='text-blue-gray-600 text-xl mr-4 ' sx={{ fontSize: 50, color: "#38bdf8" }} />
         <NumbersCounter   finalNumber={countClient} />
        </div>
       
        <p className='my-2 text-gray-600 text-lg'>global Clients</p>
      </div>
    <div className="p-4 border border-gray-400 w-full rounded-3xl flex flex-col justify-center items-center">
    <div className='flex flex-row'>
          <SendIcon className='text-blue-gray-600 text-xl mr-4 ' sx={{ fontSize: 50, color: "#38bdf8" }} />
         <NumbersCounter   finalNumber={count} />
        </div>
        <p className='my-2 text-gray-600 text-lg'>global Orders</p>
      </div>
    <div className="p-4 border border-gray-400 w-full rounded-3xl flex flex-col justify-center items-center">
    <div className='flex flex-row'>
          <HourglassBottomIcon className='text-blue-gray-600 text-xl mr-4 ' sx={{ fontSize: 50, color: "#38bdf8" }} />
         <NumbersCounter   finalNumber={+3} />
        </div>
        <p className='my-2 text-gray-600 text-lg'>Years of Experience</p>
      </div>
    <div className="p-4 border border-gray-400 w-full rounded-3xl flex flex-col justify-center items-center">
    <div className='flex flex-row'>
          <BadgeIcon className='text-blue-gray-600 text-xl mr-4 ' sx={{ fontSize: 50, color: "#38bdf8" }} />
         <NumbersCounter   finalNumber={12} />
        </div>
        <p className='my-2 text-gray-600 text-lg'>Our Team</p>
      </div>
    </div>
    </div>
  )
}

export default Number2
