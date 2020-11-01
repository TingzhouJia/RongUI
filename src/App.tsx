import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Comment from '../components/Comment'
import './App.css';
import { ThemeStore } from '../components/styles';

import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';


import Grid from '../components/Grid';



function App() {
  const [visible, setvisible] = useState(false)

  return (
    <ThemeProvider theme={ThemeStore}>



      <Grid.Container gap={2} justify="center">
        <Grid xs={6}><div style={{width:"60px",height:"60px",background:"red"}}></div></Grid>
        <Grid xs={6}><div style={{width:"60px",height:"60px",background:"red"}}></div></Grid>
        <Grid xs={6}><div style={{width:"60px",height:"60px",background:"red"}}></div></Grid>
      </Grid.Container>



    </ThemeProvider>
  );
}

export default App;
