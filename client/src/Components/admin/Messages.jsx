import React, { useState, useEffect } from 'react';
import Axios from 'axios';
 
import { Card, Button, Typography } from '@material-tailwind/react';

export function Notifications() {
  const [popup, setPopup] = useState(false);
  const [popup2, setPopup2] = useState(false);
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    Axios.get('https://tech-agency.onrender.com/messages').then((res) => {
      setMessages(res.data);
    });
  }, []);

  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { recipient, subject, body };
    try {
      await Axios.post('https://tech-agency.onrender.com/sendEmail', data);
      alert('Email sent successfully');
      window.location.href = "https://tech-agency-1.onrender.com/dashboard/Messages"
    } catch (error) {
      console.error(error);
      alert('Failed to send email');
    }
  };

  return (
    <>
      {popup && <div className="backdrop"></div>}
      {popup2 && <div className="backdrop"></div>}
      <Card className="bg-gradient-to-br from-blue-gray-800 to-blue-gray-900">
        <table className="w-full min-w-[640px] table-auto m-5">
          <thead>
            <tr>
              {[ 'Client name', 'Subject', 'Email', 'Message'].map((el) => (
                <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <Typography variant="small" className="text-[11px] font-bold uppercase text-gray-50">
                    {el}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message._id} style={{color:'white'}}>
                <td>{message.clientName}</td>
                <td>{message.subject}</td>
                <td>{message.email}</td>
                <td>
                <Button className="button mt-2"  onClick={() => {
                    setPopup(true);
                    setSelectedMessage(message.message);
                  }} >
            Display
                  </Button>
                   
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {popup && (
        <div className="popup-container">
          <div className='popup action'> 
            <h4>Message:</h4>
            <p>{selectedMessage}</p>
            <div className="buttons">
              <button className='btn-Save' onClick={() => setPopup2(true)}>Response</button>
              <button className="action-btn cancel" id="cancel" onClick={() => setPopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {popup2 && (
      <div className="popup-container">
      <div className='popup action'> 
              <div className='mb-2' >
              Recipient:
              <div>
              <input type="email" value={recipient} onChange={(event) => setRecipient(event.target.value)} />
              </div>
              </div>
              <div  className='mb-2' >
              Subject:
            <div>
              <input  type="text" value={subject} onChange={(event) => setSubject(event.target.value)} />
              </div>
              </div>
              <div>
              Body:
              <div>
              <input type="textarea" value={body} onChange={(event) => setBody(event.target.value)}/>
              </div>
              </div>
            <div> <button className='btn-Save' onClick={handleSubmit}>Send</button>
            <button className='action-btn cancel' id="cancel" onClick={() => setPopup2(false)}> Cancel
            </button></div>
            
             
    
        </div>
        </div>
      )}
    </>
  );
}

export default Notifications;
