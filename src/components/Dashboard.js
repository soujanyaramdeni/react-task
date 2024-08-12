import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';

const Dashboard = () => {
  const lineData = {
    labels: ['6/30/2024', '7/6/2024', '7/13/2024', '7/20/2024', '7/27/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [4, 2, 2, 1, 1],
        borderColor: 'orange',
        fill: false,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: 'orange',
      },
      {
        label: 'Sales',
        data: [1404, 1200, 800, 400, 200],
        borderColor: 'lightblue',
        fill: false,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: 'lightblue',
      }
    ],
  };

  const pieData = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [55.8, 44.2],
        backgroundColor: ['#ff6384', '#36a2eb'],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="dashboard">
      <div className="line-chart">
        <h2>Sales vs Orders</h2>
        <Line data={lineData} />
      </div>
      <div className="pie-chart">
        <h2>Portion of Sales</h2>
        <div className="pie-chart-container">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
