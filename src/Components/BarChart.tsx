import './BarChart.css';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';


interface BarChartProps {
    data: number[];
    labels: string[];
}

const BarChart: React.FC<BarChartProps> = ({ data = [], labels = [] }) => {
    const chartData: ChartData<'bar'> = {
        labels: labels,
        datasets: [
            {
                label: 'Working',
                data: data.map((d) => d),
                backgroundColor: 'rgba(255, 99, 132, 1)',
              },
              {
                label: 'Faulty',
                data: [5, 0, 0, 0],
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

    return <div className='bar-chart'><Bar data={chartData} options={options}/></div>;
};

export default BarChart;