import React from 'react';
import {ThemeProvider,DefaultTheme} from 'styled-components'

import './App.css';
import { ThemeStore } from '../components/styles';
import Button from '../components/Button';
import Card from '../components/Card';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import Avatar from '../components/Avatar';
import Checkbox from '../components/Checkbox';


function App() {
  return (
   <ThemeProvider theme={ThemeStore}>
      <div className="App" >
     <Checkbox checked value="1" onChange={e=>console.log(e)}>aaaa</Checkbox>
    

    </div>
   </ThemeProvider>
  );
}

export default App;
