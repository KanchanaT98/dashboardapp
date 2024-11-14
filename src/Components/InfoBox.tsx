//import { useState } from 'react';
import './InfoBox.css'

// const [criticalTerminals, setCriticalTerminals] = useState<number | null>();
// const [fullyFunctionalTerminals, setFullyFunctionalTerminals] = useState<number | null>();
// const [nonCriticalTerminals, setNonCriticalTerminals] = useState<number | null>();
// const [totalTerminals, setTotalTerminals] = useState<number | null>();



const InfoBox = () =>{
    return(
        <div className='infobox-body'>
            <div className='info-box'>
                <div className='info-box-critical-terminal'>
                    <h4 id='info-box-critical-terminal-heading'>Critical Terminal</h4>
                    <p id='info-box-critical-terminal-data'><b>5</b></p>
                </div>
                <div className='info-box-fullyFunctional-terminal'>
                    <h4 id='info-box-fullyFunctional-terminal-data'>Fully Functional Terminals 45</h4>
                </div>
                <div className='info-box-non-critical-terminal'>
                    <h4 id='info-box-non-critical-terminal-data'>Non Critical Terminals 22</h4>
                </div>
                <div className='info-box-total-terminal'>
                    <h4 id='info-box-total-terminal-data'>Total Terminals 50</h4>
                </div>
            </div>
        </div>
    )
}
export default InfoBox;