import './Charts.css';
import BarChart from './BarChart';
import PieChartUpTime from './PieChartUpTime';
import PieChartDownTime from './PieChartDownTime';

const faultyCount: number = 5;
const workingCount: number = 45;
const upTime: number = 94;
const downTime: number = 100-upTime;
const criticalTickets: number = 5;
const nonCriticalTickets: number = 34;
const faultyTerminalsData = [45, 0, 0, 0];
const terminalLabels = ["ATM", "CDM", "CRM", "Kiosk"];

const Charts = () => {
    return(
        <div className='charts-body'>
            <div className='barchart1'>
                <BarChart data={faultyTerminalsData} labels={terminalLabels} />
                <p id='BarChart-text1'><b>Faulty ATMs: {faultyCount}</b>&emsp;&emsp;&emsp;<b>Faulty CDMs: 0</b></p>
                <p id='BarChart-text2'><b>Faulty CRMs: {faultyCount}</b>&emsp;&emsp;&emsp;<b>Faulty Kiosk: 0</b></p>
            </div>
            <div className='piechart1'>
                <PieChartUpTime upTime={upTime} downTime={downTime}/>
                <p id='pieChart-text1'><b>Overall Up-Time: {upTime}%</b></p>
            </div>
            <div className='piechart2'>
                <PieChartDownTime criticalTickets={criticalTickets} nonCriticalTickets={nonCriticalTickets}/>
                <p id='pieChart2-text'><b>Critical Tickets: {criticalTickets} &emsp;&emsp;Non-Critical Tickets: {nonCriticalTickets}</b></p>
            </div>
        </div>
    )
};

export default Charts