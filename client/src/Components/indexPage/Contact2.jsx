import React from 'react';
import Inbox from '../../../public/img/letter.png';
import axios from 'axios';
import { useState } from 'react';

function Contact2() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:1000/send', {
        email,
        subject,
        message,
      });

      // Check if the email was sent successfully
      if (response.status === 200) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send the message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred while sending the message.');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col bg-blue-800 relative rounded-3xl py-8 px-12 my-10">
      <h1 className="text-white text-6xl font-bold">Let's Work Together</h1>
      <p className="text-gray-100 font-light text-left w-1/2 text-sm my-2">
        We would love to hear from you! Feel free to reach out to us using the contact
        information provided below. Our dedicated team is ready to answer any questions
        you may have or provide further information about our IT solutions and services.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-6">
        <div className="flex gap-4 w-2/3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="bg-blue-600 border-none outline-none p-4 w-1/2 rounded-2xl"
            placeholder="email"
            required
          />
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            className="bg-blue-600 border-none outline-none p-4 w-1/2 rounded-2xl"
            placeholder="subject"
            required
          />
        </div>
        <div className="flex gap-6 w-2/3">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            className="bg-blue-600 border-none outline-none p-4 w-2/3 rounded-2xl"
            placeholder="your message"
            required
          />
          <button type="submit" className="bg-white text-blue-800 py-4 px-6 w-1/3 rounded-2xl">
            send
          </button>
        </div>
      </form>
      <img src={Inbox} alt="inbox" className="absolute right-0 bottom-10" />
    </div>
  );
}

export default Contact2;
