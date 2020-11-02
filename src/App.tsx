import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'

import './App.css';
import { ThemeStore } from '../components/styles';

import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';


import Layout from '../components/Layout'
import List from '../components/List';
import Avatar from '../components/Avatar';



function App() {
  const [visible, setvisible] = useState(false)
  const [val, setval] = useState('')
  const listData = [];
  for (let i = 0; i < 5; i++) {
    listData.push({
      href: 'https://ant.design',
      title: `ant design part ${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
  }
  const IconText = ({ icon, text }: any) => (
    <>
      {React.createElement(icon)}
      {text}
    </>
  );
  return (
    <ThemeProvider theme={ThemeStore}>
      <List

        itemLayout="horizontal"
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={SettingOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={EditOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={EllipsisOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}

          </List.Item>
        )}
      />

    </ThemeProvider>
  );
}

export default App;
