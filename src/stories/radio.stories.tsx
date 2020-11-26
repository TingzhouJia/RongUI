import React, { useState } from 'react'
import { Radio } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Data Collection / Radio',
    component: Radio as any,
    decorators: [themeIt],
    parameters: {
        
        docs: {
            description: {
                component:"<h3>When To Use?</h3><ul><li>Used to select a single state from multiple options.</li>"+
                "<li>Radio is visible to the user and can facilitate the comparison of choice.</li></ul>"
            }
        }
    },
    argTypes: {
        style:{
            description:"The style object of container<br/><h6>type:</h6>",
            table:{
                type:{
                    summary:"CSSProperties"
                }
            },
            control:{}
        },
        className:{
            description:"The className object of container<br/><h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        },
        checked:{
            description:"Current Radio is checked<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        disabled:{
            description:"Current Radio is disabled<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        value:{
            description:"Value of Radio<h6>type:</h6>",
            table:{
                type:{
                    summary:"string | number"
                },
            }
        },
        onChange:{
            description:"Onchange callback of Radio<h6>type:</h6>",
            table:{
                type:{
                    summary:"(e)=>void"
                },
            }
        },
        options:{
            descriptions:"Using option list to provide choices<h6>type:</h6>",
            table:{
                type:{
                    summary:"{label:string,value:string|number,disabled?:boolean,style?:CSSProperties}[]"
                }
            }
        },
        useRow:{
            descriptions:"Show all radio in one row<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        }
    },

};

export const Basic = () => {
    return (
        <Radio >Radio</Radio>
    )
}

export const RadioGroup = () => {
    const [value, setvalue] = useState(0)
    const onChange = (e: any) => {
        setvalue(e)

    };
    return (
        <Radio.Group value={value} onChange={onChange}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
        </Radio.Group>
    )
}

export const OptionMode=()=>{
    const [value, setvalue] = useState(0)
    const onChange = (e: any) => {
        setvalue(e)

    };
    const options=[{label:'A',value:1},{label:'B',value:2}]
    return (
        <Radio.Group options={options} value={value} onChange={onChange}>
            
        </Radio.Group>
    )
}

export const GroupUseRow=()=>{
    const [value, setvalue] = useState(0)
    const onChange = (e: any) => {
        setvalue(e)

    };
    const options=[{label:'A',value:1},{label:'B',value:2}]
    return (
        <Radio.Group useRow options={options} value={value} onChange={onChange}>
            
        </Radio.Group>
    )
}

export const Disabled=()=>{
    return (
        <>
        <Radio disabled>Disabled Radio</Radio>
        <Radio checked disabled>Disabled Radio</Radio>
        </>
    )
}