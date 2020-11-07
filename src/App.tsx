import React, { useState, useEffect } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Switch from '../components/Switch'
import './App.css';
import AutoComplete from '../components/Autocomplete'



import message from '../components/Message'
import notification from '../components/Notification'
import Drawer from '../components/Drawer';
import Modal from '../components/Modal';
import Button from '../components/Button';
import Input from '../components/Input';
import { EditFilled, CheckCircleFilled } from '@ant-design/icons';


function App() {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const mockVal = (str: string, repeat: number = 1) => {
    return {
      value: str.repeat(repeat),
    };
  };
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };
  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };
  const onChange = (data: string) => {
    setValue(data);
  };
  return (
   
   <>
      {/* <span onClick={()=>{setvisible(true)}}> Tooltip will show on mouse enter.</span>
      <span onClick={()=>{Modal.confirm({type:'confirm',title:'aaa'})}}> Tooltip will show on mouse enter.</span>
      <Modal
          title="Basic Modal"
          visible={visible}
          onOk={()=>setvisible(false)}
          onCancel={()=>setvisible(false)}
          footer={[
            <Button >aaaaa</Button>
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */}
         <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
       <Input allowClear addonBefore={<EditFilled/>} prefix={<CheckCircleFilled/>} addonAfter={<EditFilled/>} suffix={<CheckCircleFilled/>} style={{ width: 200 }}/>
      </>
      
   

  );
}

export default App;
