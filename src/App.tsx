import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Comment from '../components/Comment'
import './App.css';
import { ThemeStore } from '../components/styles';

import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import Avatar from '../components/Avatar';



function App() {
  return (
    <ThemeProvider theme={ThemeStore}>
      <div className="App" >
        <Comment style={{ width: '200px' }} avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
          datetime="2013/09/21"
          actions={[
            <SettingOutlined />,
            <EditOutlined />,
            <EllipsisOutlined />
          ]}
          author={<a>Han Solo</a>}
          content={
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes beautifully
              and efficiently.
        </p>
          }>

          <Comment style={{ width: '200px' }} avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
            datetime="2013/09/21"
            actions={[
              <SettingOutlined />,
              <EditOutlined />,
              <EllipsisOutlined />
            ]}
            author={<a>Han Solo</a>}
            content={
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
        </p>
            }></Comment>
        </Comment>

      </div>
    </ThemeProvider>
  );
}

export default App;
