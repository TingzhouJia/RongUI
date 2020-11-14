import React, { useState } from 'react'
import { AutoComplete } from '../../components'
import { themeIt } from './utils/withTheme'
export default {
    title: 'Data Collection / AutoComplete',
    component: AutoComplete as any,
    decorators: [themeIt],
    parameters: {
        docs: {
            description: ''
        }
    },
    argTypes: {

    },

};

export const Basic=()=>{
    const mockVal = (str: string, repeat: number = 1) => {
        return {
          value: str.repeat(repeat),
        };
      };
      const [options, setOptions] = useState<{ value: string }[]>([]);
      const onSearch = (searchText: string) => {
        setOptions(
          !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
        );
      };
    
    return <AutoComplete options={options} onSearch={onSearch}/>
}

export const OptionMode=()=>{
    const options = [
        { value: 'Burns Bay Road' },
        { value: 'Downing Street' },
        { value: 'Wall Street' },
      ];
    return <AutoComplete>
        {
            options.map((item,index)=>{
            return <AutoComplete.Option key={index} value={item.value}>{item.value}</AutoComplete.Option>
            })
        }
    </AutoComplete>
}