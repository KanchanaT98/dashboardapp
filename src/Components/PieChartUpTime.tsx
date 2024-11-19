import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import './PieChartUpTime.css';

interface UpTimeChartOptionsProps{
    upTime: number;
    downTime: number;
}

const PieChartUpTime: React.FC<UpTimeChartOptionsProps> = ({upTime, downTime}) =>{
    const data: ChartData<'doughnut'> = {
        labels: ['Up Time', 'Down Time'],
        datasets: [
            {
                data : [upTime, downTime],
                backgroundColor: ['rgba(1, 149, 235, 1)', 'rgba(201, 190, 209, 1)'],
                
            },
        ],
    };

    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Overall Up-Time',
            color: 'rgba(0)'
          },
        },
      };


    return (
        <div className="pieChart1">
            <Doughnut data={data} options = {options}/>
        </div>
    )
};

export default PieChartUpTime;