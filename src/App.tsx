import React from 'react';
import Badge from '../components/Badge'

import './App.css';
import Avatar from '../components/Avatar';

function App() {
  return (
    <div className="App">
    
     <Badge style={{marginTop:"20px"}} size="small" count={20} dot >
      <Avatar/>
     </Badge>
    

    </div>
  );
}

export default App;
