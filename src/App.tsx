import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'

import './App.css';
import { ThemeStore } from '../components/styles';
import Button from '../components/Button';
import Card from '../components/Card';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import Avatar from '../components/Avatar';
import Checkbox from '../components/Checkbox';
import Collapse from '../components/Collapse';


function App() {
  return (
    <ThemeProvider theme={ThemeStore}>
      <div className="App" >
        <Collapse style={{width:"300px",marginTop:"20px",marginLeft:'20px'}}>
          <Collapse.Panel  header="aaaaa " position="right">
            <p>aa</p>
            <p>aa</p>
          </Collapse.Panel>
          <Collapse.Panel header="bbb">
            <p>aa</p>
            <p>aa</p>
          </Collapse.Panel>
        </Collapse>


      </div>
    </ThemeProvider>
  );
}

export default App;
