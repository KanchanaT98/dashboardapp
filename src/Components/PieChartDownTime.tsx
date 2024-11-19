import React from "react";
import './PieChartDownTime.css';
import { ChartData, ChartOptions } from 'chart.js';
import { Pie } from "react-chartjs-2";

interface PieChartDownTimeProps{
    criticalTickets: number;
    nonCriticalTickets: number;
}

const PieChartDownTime: React.FC<PieChartDownTimeProps> = ({criticalTickets, nonCriticalTickets}) => {
    
    const data: ChartData<'pie'> = {
        labels: ['Critical Tickets', 'Non-Critical Tickets'],
        datasets: [
            {
                data : [criticalTickets, nonCriticalTickets],
                backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(29, 194, 129, 1)'],
                
            }
        ],
    };

    const options: ChartOptions<'pie'> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
              },
              title: {
                display: true,
                text: 'Critical Tickets Open',
                color: 'rgba(0)'
              },
        },
    };
    
    return(
        <div className="PieChart2">
            <Pie data={data} options={options}/>
        </div>
    )
};
export default PieChartDownTime;