import React from 'react'
import { Checkbox} from '../../components'
import { themeIt } from './utils/withTheme'

export default {
    title: 'General / Button',
    component: Checkbox as any,
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
        <Checkbox/>
    )
}

export const Group=()=>{
    const options=[{label:'food',value:'food'},{label:'drinks',value:'drinks'}]
    return (
        <Checkbox.Group options={options}>

        </Checkbox.Group>
    )
}

export const Disabled=()=>(<Checkbox name='disabled' disabled/>)


export const onChange=()=>(<Checkbox name="Rong" onChange={e=>console.log(e.target.checked)} />)