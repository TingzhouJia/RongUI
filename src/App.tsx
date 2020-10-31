import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Comment from '../components/Comment'
import './App.css';
import { ThemeStore } from '../components/styles';

import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import Avatar from '../components/Avatar';
import Description from '../components/Description';



function App() {
  return (
    <ThemeProvider theme={ThemeStore}>
      <div className="App" >
       

         <Description colon bordered layout="vertical" style={{width:"300px"}} title="Description ">
            <Description.Item >
                content 1
            </Description.Item>
            <Description.Item label="title 2">
                content 1
            </Description.Item>
            <Description.Item label="title 3">
                content 1
            </Description.Item>
         </Description>

      </div>
    </ThemeProvider>
  );
}

export default App;
