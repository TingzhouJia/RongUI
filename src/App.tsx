import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'

import './App.css';
import { ThemeStore } from '../components/styles';

import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';


import Input from '../components/Input/input'



function App() {
  const [visible, setvisible] = useState(false)

  return (
    <ThemeProvider theme={ThemeStore}>

  <Input   allowClear addonBefore={<SettingOutlined/>} prefix={<EllipsisOutlined/>} suffix={<EditOutlined/>}  addonAfter={<SettingOutlined/>}/>

     <Input.Password style={{marginTop:"50px"}} ></Input.Password>
  <Input.Search enterButton suffix={<EditOutlined/>}  allowClear style={{marginTop:"50px"}} addonAfter={<SettingOutlined/>}></Input.Search>
    </ThemeProvider>
  );
}

export default App;
