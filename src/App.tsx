import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'

import './App.css';
import { ThemeStore } from '../components/styles';

import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';


import Image from '../components/Image'



function App() {
  const [visible, setvisible] = useState(false)

  return (
    <ThemeProvider theme={ThemeStore}>



     <Image  src="https://images.unsplash.com/photo-1602524206684-fdf6393c7d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"/>



    </ThemeProvider>
  );
}

export default App;
