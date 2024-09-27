import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function BarChart() {

    const [orderCountByDay, setOrderCount] = useState([]);

  useEffect(() => {
    axios.get("https://it-agency-fdb1.onrender.com/chart")
      .then(res => {
        setOrderCount(res.data);
      })
      .catch(error => {
        console.error('Error fetching order data:', error);
      });
  }, []);

  const chartData = {
    labels: orderCountByDay.map(item => item._id), // Array of labels for x-axis
    datasets: [
      {
        label: 'Number of Orders',
        data: orderCountByDay.map(item => item.count), // Array of data for y-axis
        backgroundColor: '#0ea5e9',
        barThickness: 50, 
        barPercentage: 0.1, // Customize the bar color
      },
    ],
  };

        

 

  return (
    <div className="chart-container">
      <h2 className="chart-title">Number of Orders by Month</h2>
      <div className="chart">
      <Bar data={chartData} />
      </div>
    </div>
  );
  }
export default BarChart;
