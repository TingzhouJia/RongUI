import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Switch from '../components/Switch'
import './App.css';
import { ThemeStore } from '../components/styles';



import message from '../components/Message'
import notification from '../components/Notification'
import Button from '../components/Button';
import Pagination from '../components/Pagination';
import Progress from '../components/Progress';
import Select from '../components/Select/select';
import { EditOutlined } from '@ant-design/icons';
import Skeleton from '../components/Skeleton/skeleton';
import Slider from '../components/Slider';
import Steps from '../components/Step';
import Tabs from '../components/Tabs';
import Timeline from '../components/Timeline';
import Tooltip from '../components/Tooltip';
import Popconfirm from '../components/Popconfirm';

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
  const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
  };
  return (
    <ThemeProvider theme={ThemeStore}>
      <div style={{height:"200px",width:"2px"}}>

      </div>
      <Popconfirm title="Are you going to delete" >
        <span >Tooltip will show on mouse enter.</span>
      </Popconfirm>

      <Tooltip>
      <span >Tooltip will show on mouse enter.</span>
      </Tooltip>
    </ThemeProvider>
  );
}

export default App;
