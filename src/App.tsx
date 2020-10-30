import React from 'react';
import {ThemeProvider,DefaultTheme} from 'styled-components'

import './App.css';
import { ThemeStore } from '../components/styles';
import Button from '../components/Button';
import Card from '../components/Card';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import Avatar from '../components/Avatar';


function App() {
  return (
   <ThemeProvider theme={ThemeStore}>
      <div className="App" >
     <Card
     cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
      actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]} title="card title"  extra={<Button type="link">extra</Button>} style={{width:'300px'}}>
    <Card.Meta avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description">

    </Card.Meta>
     </Card>
    

    </div>
   </ThemeProvider>
  );
}

export default App;
