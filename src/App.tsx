import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Comment from '../components/Comment'
import './App.css';
import { ThemeStore } from '../components/styles';

import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import Avatar from '../components/Avatar';
import Description from '../components/Description';
import Divider from '../components/Divider';



function App() {
  return (
    <ThemeProvider theme={ThemeStore}>
      <div className="App" >
       
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider dashed ></Divider>

      </div>
    </ThemeProvider>
  );
}

export default App;
