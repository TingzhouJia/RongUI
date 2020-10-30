import React from 'react';
import {ThemeProvider,DefaultTheme} from 'styled-components'

import './App.css';
import { ThemeStore } from '../components/styles';
import Button from '../components/Button';


function App() {
  return (
   <ThemeProvider theme={ThemeStore}>
      <div className="App" style={{width:"10vw"}}>
      <Button size="small" mode="primary" block>add</Button>
    

    </div>
   </ThemeProvider>
  );
}

export default App;
