import React from 'react'
import { Checkbox} from '../../components'
import { themeIt } from './utils/withTheme'
import { Meta } from '@storybook/react/types-6-0';

export default {
    title: 'Data Collection / Checkbox',
    component: Checkbox as any,
    decorators: [themeIt],
    parameters: {
        docs: {
            description: {
                component: "<h3>When To Use?</h3><ol><li>Used for selecting multiple values from several options.</li><li>If you use only one checkbox, it is the same as using Switch to toggle between two states.</li></ol>"
            }
        }
    },
    argTypes: {
        style: {
            description: "The  style object of container<br/><h6>type:</h6>",
            control:{},
            table: {
                type: {
                    summary: "CSSProperties"
                }
            }
        },
        className: {
            description: "The className object of container<br/><h6>type:</h6>",
            table: {
                type: {
                    summary: "string"
                }
            }
        },
        defaultChecked:{
            description:'Default state of checkbox<h6>type:</h6>',
            table:{
                type:{
                    summary:"Boolean"
                },
                defaultValue:{summary:"false"}
            }
        },
        checked:{
            description:'State of checkbox<h6>type:</h6>',
            table:{
                type:{
                    summary:"Boolean"
                },
            }
        },
        disabled:{
            description:'Whether checkbox is clickable or not<h6>type:</h6>',
            table:{
                type:{
                    summary:"Boolean"
                },
                defaultValue:{summary:"false"}
            }
        },
        autoFocus:{
            description:'Whether checkbox is focused when first rendered<h6>type:</h6>',
            table:{
                type:{
                    summary:"Boolean"
                },
                defaultValue:{summary:"false"}
            }
        },
        onChange:{
            description:'The callback function that is triggered when the state changes<h6>type:</h6>',
            table:{
                type:{
                    summary:"function(e:Event)"
                },
            }
        },
    },

} as Meta;

export const Basic=()=>{
    return (
        <Checkbox name="checkbox" />
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