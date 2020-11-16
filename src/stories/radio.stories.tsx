import React, { useState } from 'react'
import { Radio } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Data Collection / Radio',
    component: Radio as any,
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
    return (
        <Radio >Radio</Radio>
    )
}

export const RadioGroup=()=>{
    const [value, setvalue] = useState(0)
    const onChange = (e:any) => {
       setvalue(e.target.value)
       
      };
    return (
        <Radio.Group onChange={onChange} value={value} >
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
    )
}