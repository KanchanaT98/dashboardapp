import './BarChart.css';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';


interface BarChartProps {
    faultyCount: number;
    workingCount: number;
}

const BarChart: React.FC<BarChartProps> = ({ faultyCount, workingCount }) => {
    const data: ChartData<'bar'> = {
        labels: ['ATM', 'CDM', 'CRM', 'Kiosk'],
        datasets: [
            {
                label: 'Faulty',
                data: [faultyCount, 0, 0, 0],
                backgroundColor: 'rgba(255, 99, 132, 1)',
              },
              {
                label: 'Working',
                data: [workingCount, 0, 0, 0],
                backgroundColor: 'rgba(54, 162, 230, 1)',
              },
        ],
      };

      const options: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
              beginAtZero: true,
            },
        },
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Overall Faulty Terminals',
            color: 'rgba(0)'

          },
        },
      };  

    return <div className='bar-chart'><Bar data={data} options={options}/></div>;
};

export default BarChart;