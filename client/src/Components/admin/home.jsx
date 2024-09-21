import React from 'react';
import { useState, useEffect } from 'react';
import BarChart from './BarChart';
import { Card } from "@material-tailwind/react";
import PeopleIcon from '@mui/icons-material/People';
import ForumIcon from '@mui/icons-material/Forum';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

export function Home() {
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
    <>
      <Card className="bg-gradient-to-br  from-cyan-500 to-blue-500" style={{ margin :"0 auto", padding:"1rem",width:"400px",borderRadius :"4px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"}}>
        <div className='Dashboard' style={{display: "flex", justifyContent: 'space-between'}}>
          <div className='box' style={{color:"#FFFFFF"}} >
            <div className='iconAndNumber'  style={{color:"#FFFFFF"}} >
              <PeopleIcon />
              <h4 >{countClient}</h4>
            </div>
            <h3>Clients</h3>
          </div>
          <div className='box' style={{color:"#FFFFFF"}}  >
            <div className='iconAndNumber'>
              <SendAndArchiveIcon />
              <h4>{count}</h4>
            </div>
            <h3>Orders</h3>
          </div>
          <div className='box'   style={{color:"#FFFFFF"}} >
            <div className='iconAndNumber'  >
              <MiscellaneousServicesIcon />
              <h4>{countService}</h4>
            </div>
            <h3>Services</h3>
          </div>
          <div className='box'  style={{color:"#FFFFFF"}}  >
            <div className='iconAndNumber'>
              <ForumIcon />
              <h4>{countMessages}</h4>
            </div>
            <h3>Messages</h3>
          </div>
        </div> 
      </Card>

      <BarChart />
    </>
  );
}

export default Home;
