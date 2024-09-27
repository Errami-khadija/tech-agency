import { Card, CardBody, CardFooter, Button, Input, Typography } from "@material-tailwind/react";
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

export function Tables() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [newTitre, setNewTitre] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [name,setNewName] = useState("");
  const [description, setNewUpdateDescription] = useState("");
  const textInputRef = useRef(null);

  const [popup, setPopup] = useState(false)
  const [popup2, setPopup2] = useState(false)
  const [popup3, setPopup3] = useState(false)
  const [popup4, setPopup4] = useState(false)
  const [selectedService, setSelectedService] = useState("");

  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get('https://tech-agency.onrender.com/services');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  const api_base = 'https://tech-agency.onrender.com/';

  const deleteTodo = async id => {
    const data = await fetch(api_base + '/service/delete/' + id, { method: "DELETE" }).then(res => res.json(),
    window.location.href = "/dashboard/Services");
    setData(data.result);
  }

  const addTodo = async () => {
    const data = await fetch(api_base + "/service/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        titre: newTitre,
        description:newDescription
      })
    }).then(res => res.json(),
    window.location.href = "/dashboard/Services");

    setData([...data, data]);
    setNewTitre("");
    setNewDescription
   
  }
  const updateName = async(id, name)=>{
    const data = await fetch("https://tech-agency.onrender.com//service/updateName",{
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        id:id
      })
    }).then(res => res.json(),
     window.location.href = "/dashboard/Services");
    
  }

  
  const updateDescription = async(id, description)=>{
    const data = await fetch("https://tech-agency.onrender.com/service/updateDescription",{
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        description: description,
        id:id
      })
    }).then(res => res.json(),
     window.location.href = "/dashboard/Services");
    
  }


  return (
    <>
    <button className="btn-Save mb-2"onClick={() => { setPopup(true)}} >Add Service</button>
      <Card className="bg-gradient-to-br from-blue-gray-800 to-blue-gray-900">
        <table className="w-auto ml-2 mr-2 ">
          <thead>
            <tr>
              {["Title", "Description", "Delete", "Update"].map((el) => (
                <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <Typography variant="small" className="text-[11px] font-bold uppercase text-gray-50">
                    {el}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row._id} className="m-1 mb-2 text-gray-50">
                <td className="w-32" >{row.name}</td>
                <td className="w-80" >{row.description}</td>
                <td className="w-20" >
                  <Button className="delete" color="red" onClick={() => deleteTodo(row._id)}>Delete</Button>
                </td>
                <td className="w-20">
                  <Button className="button" color="green"  onClick={() => { setPopup2(true); setSelectedService(row);
                     }}>Update</Button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
     


      {popup &&  <div className='popup-container'>
      <div className="grid justify-items-end">
        <Card className="mt-6 w-96 ml-4">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Add New Service
            </Typography>
            <div className="w-72">
              <h1>Name of the service</h1>
              <Input ref={textInputRef} value={newTitre} onChange={(e) => setNewTitre(e.target.value)} />
              <h1>Description</h1>
              <Input  ref={textInputRef} value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="button" onClick={addTodo}>
              Add Service
            </Button>
            <button className="action-btn cancel" id="cancel"  onClick={() => setPopup(false)} >Cancel</button>
          </CardFooter>
        </Card>
      </div>
      </div>}

      {popup2 && 
        <div className='popup-container'>
        <div className='popup action'>
          <div className='input'>
          <h4>Update Name:</h4>
          <div className="buttons">
              <button className='bg-blue-500 p-3 text-white rounded-md' onClick={() => {
              setPopup3(true)
              }} >Update Name</button>
            </div>
          </div>
          <div className='input'>
          <h4>Update Description:</h4>
          <button className='bg-blue-500 p-3 text-white rounded-md' onClick={() => {
              setPopup4(true)
              }} >Update Description</button>
              </div>
            <button className='action-btn cancel' onClick={() => setPopup2(false)}>Cancel</button>
          </div>
          </div>
       }

{popup3 && 
        <div className='popup-container'>
        <div className='popup action'>
          <div className='input'>
          <h4>Update Name:</h4>
          <input type='text' onChange={e => setNewName(e.target.value)} value={name} />
          </div>
          <div>
            <button className="action-btn" onClick={()=>updateName(selectedService._id, name)}>
             Update Name
            </button>
            <button className="action-btn cancel" id="cancel"  onClick={() => setPopup3(false)} >Cancel</button>
            </div>
        
          </div>
          </div>
       }
       {popup4 && 
        <div className='popup-container'>
        <div className='popup action'>
          <div className='input'>
          <h4>Update Description:</h4>
          <input type='textarea' onChange={e => setNewUpdateDescription(e.target.value)} value={description} />
          </div>
          <div>
          <Button className="button" onClick={()=>updateDescription(selectedService._id, description)}>
             Update
            </Button>
            <button className="action-btn cancel" id="cancel"  onClick={() => setPopup4(false)} >Cancel</button>
            </div>
          </div>
          </div>
       }

    </>
  );
}

export default Tables;
