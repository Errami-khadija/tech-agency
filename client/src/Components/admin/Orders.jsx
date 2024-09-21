import React from 'react'
import { useState, useEffect } from 'react'
import Axios from "axios"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Card, CardBody, CardFooter, Button, Input, Typography } from '@material-tailwind/react';

function Orders() {

  const [orders, setOrders] = useState([])
  const [popup, setPopup] = useState(false)
  const [popup3, setPopup3] = useState(false)
  const [price, setPrice] = useState("")
  const [duration, setDuration] = useState("")
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedSpecifications, setSelectedSpecifications] = useState(null);

 const exportOrders = () => {
  // Select the table element
  const table = document.querySelector('table');

  // Create a canvas element to capture the table as an image
  html2canvas(table).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();

    // Calculate the dimensions of the PDF document
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const ratio = pdfWidth / canvas.width;
    const canvasHeight = canvas.height * ratio;

    // Add the table image to the PDF document
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, canvasHeight);

    // Download the PDF file
    pdf.save('orders.pdf');
  });
};
const exportOrders2 = () => {
  // Create the CSV content with a header row
  const headerRow = Object.keys(orders[0]).join("||");
  const csvContent = `data:text/csv;charset=utf-8,${headerRow}\n${orders.map(order => Object.values(order).join("||")).join("\n")}`;

  // Create a temporary link element to trigger the download
  const link = document.createElement("a");
  link.setAttribute("href", encodeURI(csvContent));
  link.setAttribute("download", "orders.csv");
  document.body.appendChild(link); // Required for Firefox
  link.click();
  document.body.removeChild(link);
};

  useEffect(() => {
    Axios.get("http://localhost:1000/orders")
      .then(res => {
        setOrders(res.data)
      })
  }, [orders])

  const updateOrder = (order, price, duration) => {
    if(order.statut=="rejected by Admin" ||order.statut=="accepted by Client" || order.statut=="rejected by Client" || order.price!=0 || order.duration !=0){
      alert("Can't accept anymore! ")
    }else{
      Axios.put("http://localhost:1000/acceptByAdmin", { price: price, duration: duration, id: order._id })
      .then(alert("Price and duration send to the Client!")
      , window.location.href = "http://localhost:5173/dashboard/Orders")
    }
  }

  const refuse = (order) => {
    if (order.price == 0 && order.duration == 0) {
      if(order.statut=="rejected by Admin"){
        alert("ordre already rejected!")
      }else{
        Axios.put("http://localhost:1000/refuseByAdmin", {
          statut: "rejected by Admin",
          id: order._id
        })
      }
    } else {
     alert("Can't refuse order!");
    }
  }



 


  return (
    <div>
    <div>
      <div className="export">
      <button className='action-btn refuse' onClick={exportOrders}>Export as PDF</button>
        <button className='action-btn accept' onClick={exportOrders2}>Export as CSV</button>
      </div>

      <Card className="bg-gradient-to-br from-blue-gray-800 to-blue-gray-900">
        <table className="w-full min-w-[640px] table-auto m-5">
          <thead>
            <tr>
              {['Service Name','Specifications & Client info','Date','Price','Duration','Statut', 'Action'].map((el) => (
                <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <Typography variant="small" className="text-[11px] font-bold uppercase text-gray-50">
                    {el}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} style={{color:'white'}}>
                <td>{order.service}</td>
                <td><Button className='btn-Save' onClick={() => { setPopup3(true); setSelectedSpecifications(order) }}>Display</Button></td>
                <td>{order.date}</td>
                <td>{order.price}</td>
                <td>{order.duration}</td>
                <td>{order.statut}</td>
                <td>
                <Button className='action-btn accept' onClick={() => { setPopup(true); setSelectedOrder(order) }}>Accept</Button>
                  <Button className='action-btn refuse' onClick={() => { refuse(order) }}>Refuse</Button>
                   
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {popup && 
        <div className='popup-container'>
        <div className='popup action'>
          <div className='input'>
          <h4>Service Price:</h4>
          <input type='text' onChange={e => setPrice(e.target.value)} value={price} />
          </div>
          <div className='input'>
          <h4>Service duration:</h4>
          <input type='text' onChange={e => setDuration(e.target.value)} value={duration} />
          </div>
           <div>
            <div className="buttons">
              <button className='btn-Save' onClick={() => {
                updateOrder(selectedOrder, price, duration)
              }} >Send</button>
              <button className='action-btn cancel' onClick={() => setPopup(false)}>Cancel</button>
            </div>
            </div>
          </div>
        </div>}
        {popup3 && <div className='popup-container'>
          <div className="popup">
          <h4>Client Name:</h4>
            <p>{selectedSpecifications.username}</p>
            <h4>Email:</h4>
            <p>{selectedSpecifications.email}</p>
            <h4>Subject:</h4>
            <p>{selectedSpecifications.subject}</p>
            <h4>Specifications:</h4>
            <p>{selectedSpecifications.specifications}</p>
            <div className="buttons">
              <button className="btn-Save" id='cancel' onClick={() => setPopup3(false)}>Close</button>
            </div>
          </div>

    </div>}
    </div>
    </div>
  );
}

export default Orders;
