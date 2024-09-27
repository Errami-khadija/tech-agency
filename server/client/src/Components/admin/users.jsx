import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

 
 
 
export function Users() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const { data: response } = await axios.get('https://tech-agency.onrender.com/user');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div style={{ display: "flex",justifyContent :"center",flexWrap : "wrap"}}>
      {data.map((row) => (
        <Card  style={{ margin :"1rem", padding:"1rem",width:"300px",borderRadius :"4px",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"}} key={row._id}>
          <div style={{overflow:"hidden"}}>
            <div style={{marginBottom: "5px", paddingBottom: "5px", borderBottom: "solid 1px #42a5f5", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <h1 style={{color:"#42a5f5"}}>Username</h1>
            <Typography style={{color:"#42a5f5"}} variant="h5" component="div">
              {row.username}
            </Typography>
            </div>
            <h1 style={{color:"#42a5f5"}}>New User Registred!</h1>
            <h1>Email:</h1>
            <Typography color="textSecondary">
              {row.email}
            </Typography>
            <h1>Phone:</h1>
            <Typography color="textSecondary">
              {row.phone}
            </Typography>
          </div>
        </Card>
      ))}
    </div>
  );
}

 

export default Users;
