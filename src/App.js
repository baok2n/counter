import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [db, setDb] = useState(228);
  const [resist, setResist] = useState(41);
  const [miss, setMiss] = useState(104);

  const eventHandler = e => {
    switch (e.keyCode) {
      case 65:
        console.log('get here');
        setDb(db + 1);
        break;
      case 83:
        setResist(resist + 1);
        break;
      case 68:
        setMiss(miss + 1);
        break;
      default:
        break;
    }
  }

  return (
    <div className="App" onKeyDown={eventHandler} tabIndex="0" >
      <p>{`[A] def breaks: ${db}`}</p>
      <p>{`[S] resistances: ${resist}`}</p>
      <p>{`[D] misses(no defbreak no resist): ${miss}`}</p>
      <p>{`total hits: ${db + resist + miss}`}</p>
      <p>{`resist rate: ${resist/(db + resist)*100}%`}</p>
    </div>
  );
}

export default App;
