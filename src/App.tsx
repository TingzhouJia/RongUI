import React, { useState, useEffect } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'

import Cascader from '../components/Cascader/cascader';


function App() {
  const [value, setValue] = useState('');
  const allOptions = [
    { text: 'London', value: 'london' },
    { text: 'Sydney', value: 'sydney' },
    { text: 'Shanghai', value: 'shanghai' },
  ]
  const [options, setOptions] = useState<{ value: string }[]>(allOptions);
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
  

  const searchHandler = (currentValue:any) => {
    if (!currentValue) return setOptions([])
    const relatedOptions = allOptions.filter(item => item.value.includes(currentValue))
    setOptions(relatedOptions)
  }
  const optionss = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  return (
   
   <>
      {/* <span onClick={()=>{setvisible(true)}}> Tooltip will show on mouse enter.</span> */}
      {/* <span onClick={()=>{Modal.confirm({type:'confirm',title:'aaa'})}}> Tooltip will show on mouse enter.</span> */}
      {/* <Modal
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
        <Cascader options={optionss}/>
     
         </>
      
   

  );
}

export default App;
