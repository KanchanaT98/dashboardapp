import React from 'react';
import './App.css';
import  Header  from "./Components/Header"
import InfoBox from "./Components/InfoBox"
import Table from './Components/Table';
import './ChartConfig';
import Charts from './Components/Charts';

function App() {

  return (
    <div className="App-body">
      <div className='app-header'><Header/></div>
      <div className='chart-box' ><Charts/></div>
      <div className='app-infoBox'><InfoBox/></div>
      <div className='app-table'><Table/></div>
    </div>
  );
}

export default App;
