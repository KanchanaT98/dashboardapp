import './Table.css';
import { useState, useEffect } from 'react';
import axios from 'axios';




const Table = () => {

    interface AtmDetails {
        atmId: number;
        location: string;
        fault: string;
        severity: string;
        timeElapsed: string;
        ticketType: string;
        faultDate: string
      }
    
      const [rows, setRows] = useState<AtmDetails[]>([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get<{ data: AtmDetails[] }>('https://customerapi-eqhqhebdhcbwhzd9.canadacentral-01.azurewebsites.net/api/Customers');
            console.log(response.data);
            setRows(response.data.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, []);

    return(
        <div className='Table-body'>
            <div className="table">
                <div className="table-header">
                    <div className="header-item">ATM ID</div>
                    <div className="header-item">Location</div>
                    <div className="header-item">Fault</div>
                    <div className="header-item">Severity</div>
                    <div className="header-item">Time Elapsed</div>
                    <div className="header-item">Ticket Type</div>
                    <div className="header-item">Fault Date</div>
                </div>
                <div className="table-body">
                    {rows.map((row, idx) => (
                        <div className="table-row" key={row.atmId}>
                            <div className="table-item">{row.atmId}</div>
                            <div className="table-item">{row.location}</div>
                            <div className="table-item">{row.fault}</div>
                            <div className="table-item">{row.severity}</div>
                            <div className="table-item">{row.timeElapsed}</div>
                            <div className="table-item">{row.ticketType}</div>
                            <div className="table-item">{row.faultDate}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    
    )
}

export default Table