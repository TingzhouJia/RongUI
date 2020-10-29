import React from 'react';
import Button from '../components/Button/button'
import Alert from '../components/Alert'
import './App.css';

function App() {
  return (
    <div className="App">
      <Alert message="aaaaaa" showIcon type="success" description="aaaa aa aa  a a a a a  a a a a" closable/>
    </div>
  );
}

export default App;
