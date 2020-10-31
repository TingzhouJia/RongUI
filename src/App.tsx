import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Comment from '../components/Comment'
import './App.css';
import { ThemeStore } from '../components/styles';

import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';

import Tree from '../components/FileTree'



function App() {
  const [visible, setvisible] = useState(false)
  return (
    <ThemeProvider theme={ThemeStore}>


      <Tree>
        <Tree.Folder name="b">
          <Tree.File name="aaaa">

          </Tree.File>
         <Tree.Folder name="c">
         <Tree.File name="aaaa">

</Tree.File>
         </Tree.Folder>
        </Tree.Folder>
      </Tree>

    </ThemeProvider>
  );
}

export default App;
