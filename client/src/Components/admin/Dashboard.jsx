import React from 'react'
import { useState, useEffect } from 'react'
import PeopleIcon from '@mui/icons-material/People';
import ForumIcon from '@mui/icons-material/Forum';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';





function Dashboard() {

  const [count, setCount] = useState(null);

  useEffect(() => {
    async function fetchCount() {
      const res = await fetch('http://localhost:1000/count');
      const { count } = await res.json();
      setCount(count);
    }
    fetchCount();
  }, [count]);

  const [countMessages, setCountMessages] = useState(null);

  useEffect(() => {
    async function fetchCount() {
      const res = await fetch('http://localhost:1000/countmessages');
      const { countMessages } = await res.json();
      setCountMessages(countMessages);
    }
    fetchCount();
  }, [countMessages]);

  const [countService, setCountService] = useState(null);

  useEffect(() => {
    async function fetchCount() {
      const res = await fetch('http://localhost:1000/countService');
      const { countService } = await res.json();
      setCountService(countService);
    }
    fetchCount();
  }, [countService]);

  const [countClient, setCountClient] = useState(null);

  useEffect(() => {
    async function fetchCount() {
      const res = await fetch('http://localhost:1000/countClients');
      const { countClient } = await res.json();
      setCountClient(countClient);
    }
    fetchCount();
  }, [countClient]);


  return (
    <div className='Dashboard'>
      <div className="boxes">
        <div className='box'>
          <div className='text'>
            <h4>{countClient}</h4>
            <h3>Clients</h3>
          </div>
          <div className="icon">
            <PeopleIcon className='icn' />
          </div>
        </div>
        <div className='box'>
          <div className='text'>
            <h4>3</h4>
            <h3>Messages</h3>
          </div>
          <div className="icon">
            <ForumIcon className='icn' />
          </div>
        </div>
        <div className='box'>
          <div className='text'>
            <h4>{countService}</h4>
            <h3>Services</h3>
          </div>
          <div className="icon">
            <MiscellaneousServicesIcon className='icn' />
          </div>
        </div>
        <div className='box'>
          <div className='text'>
            <h4>{count}</h4>
            <h3>Orders</h3>
          </div>
          <div className="icon">
            <SendAndArchiveIcon className='icn' />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard
