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

const Charts = () => {
    return(
        <div className='charts-body'>
            <div className='barchart'>
                <BarChart faultyCount={faultyCount} workingCount={workingCount}/>
            </div>
            <div className='piechart1'>
                <PieChartUpTime upTime={upTime} downTime={downTime}/>
            </div>
            <div className='piechart2'>
                <PieChartDownTime criticalTickets={criticalTickets} nonCriticalTickets={nonCriticalTickets}/>
            </div>
        </div>
    )
};

export default Charts