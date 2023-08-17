import React, { useEffect, useState } from 'react';
import { Bar, Pie } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import './styles.scss'
import { CategoryScale } from 'chart.js';
import {
  getDashboardData,
  dashboardData
} from '../../redux/reducers/bookingSlice'
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  Chart.register(CategoryScale);

  const [pieChartData, setPieChartData] = useState({
    labels: [
      'Payment Success',
      'Payment Error',
    ],
    datasets: [
      {
        label: 'Status',
        data: [],
        backgroundColor: ['#50B89D', '#F87171'],
        borderColor: [
          '#FFFFFF',
          '#FFFFFF',
        ],
        borderWidth: 1,
      },
    ],
  })
  const [barChartData, setBarChartData] = useState({
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'April',
      'May',
      'Jun',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'No. of Bookings',
        data: [],
        backgroundColor: ['#E44444'],
      },
    ],
  })


  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        fontSize: '30px',
        labels: {
          usePointStyle: true,
          pointStyle: 'rect',
          padding: 10,
          font: {

          }
        },
      },
      datalabels: {
        display: true,
        color: 'white',
      },
    }
  };
  let dispatch = useDispatch();

  let data = useSelector(dashboardData);


  useEffect(() => {
    dispatch(getDashboardData())
  }, []);

  useEffect(() => {
    if (data) {
      let pie = { ...pieChartData };
      pie.datasets[0].data = data?.pieData;
      setPieChartData(pie);

      let bar = { ...barChartData };
      bar.datasets[0].data = data?.barChart;
      setBarChartData(bar);

    }
  }, [data])




  return (
    <div>

      <div className='row chart-container'>
        <div className='col-lg-6 col-sm-12'>
          <label className="font-medium-16 outer-heading">Analytics</label>
          <div className="mt-2 white-box">
            {
              barChartData.datasets[0].data.length > 0 ?
                <Bar
                  data={barChartData}
                  height="270px"
                  width="200px"
                  options={pieChartOptions} />
                : <label>No Data</label>
            }
          </div>
        </div>
        <div className='col-lg-6 col-sm-12'>
          <label className="font-medium-16 outer-heading">Payment Status</label>
          <div className="mt-2 white-box">
            {
              pieChartData.datasets[0].data.length > 0 ?
                <Pie
                  data={pieChartData}
                  height="270px"
                  width="200px"
                  options={pieChartOptions} />
                : <label>No Data</label>
            }

          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;