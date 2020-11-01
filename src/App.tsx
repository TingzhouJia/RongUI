import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Comment from '../components/Comment'
import './App.css';
import { ThemeStore } from '../components/styles';

import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';

import Tree from '../components/FileTree'
import { FileTreeValue } from '../components/FileTree/tree';



function App() {
  const [visible, setvisible] = useState(false)
  const files:FileTreeValue[] = [{
    type: 'directory',
    name: 'bin',
    files: [{
      type: 'file',
      name: 'cs.js',
    }],
  }, {
    type: 'directory',
    name: 'docs',
    files: [{
      type: 'file',
      name: 'controllers.md',
    }, {
      type: 'file',
      name: 'es6.md',
    }, {
      type: 'file',
      name: 'production.md',
    }, {
      type: 'file',
      name: 'views.md',
    }],
  }]
  return (
    <ThemeProvider theme={ThemeStore}>


    
         <Tree value={files}/>



    </ThemeProvider>
  );
}

export default App;
