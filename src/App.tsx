import React from 'react';
import {ThemeProvider,DefaultTheme} from 'styled-components'

import './App.css';
import { ThemeStore } from '../components/styles';
import Button from '../components/Button';


function App() {
  return (
   <ThemeProvider theme={ThemeStore}>
      <div className="App" style={{width:"10vw"}}>
      <Button.Group>
        <Button  mode="dashed" size="large">aaaa</Button>
        <Button  type="success" >aaaa</Button>
      </Button.Group>
    

    </div>
   </ThemeProvider>
  );
}

export default App;
