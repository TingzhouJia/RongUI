import React from 'react'
import { Input } from '../../components'
import { themeIt } from './utils/withTheme'
import { SettingOutlined } from '@ant-design/icons';



export default {
    title: 'Data Collection / Input',
    component: Input as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"A basic widget for getting the user input.",
        docs: {
            description: ''
        }
    },
    argTypes: {
        bordered: {
            description: "Whether show border of input or not<h6>type:</h6>",
            table: {
                type: {
                    summary: "boolean"
                },
                defaultValue: {
                    summary: "true"
                }
            },
            control:{}
        },
        size: {
            description: "The size of input<h6>type</h6>",
            table: {
                type: {
                    summary: '"small" | "default" | "large"'
                },
                defaultValue: {
                    summary: "default"
                }
            }
        },
        style: {
            description: "The  style object of container<br/><h6>type:</h6>",
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
        addonBefore:{
            description:"The label text displayed before (on the left side of) the input field<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        addonAfter:{
            description:"The label text displayed after (on the right side of) the input field<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        value:{
            desciption:"The input content value<h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        },
        onChange:{
            description:"Callback when user input<h6>type</h6>",
            table:{
                type:{
                    summary:"(e:string)=>void"
                }
            }
        },
        prefix:{
            description:"The prefix icon of the input field<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        suffix:{
            description:"The suffix icon of the input field<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        disabled:{
            description:"Disable an input field<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:"false"
            }
        },
        placeholder:{
            desciption:"The placeholder for input<h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        },
        allowClear:{
            description:"If allow to remove input content with clear icon<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:"false"
            }
        },
        visibilityToggle:{
            name:"visibilityToggle (Only work for Input.Password)",
            description:"Whether show toggle button of visibility<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"true"
                }
            }
        },
        iconRenderer:{
            name:"iconRender (Only work for Input.Password)",
            description:"Custom toggle button<h6>type:</h6>",
            table:{
                type:{
                    summary:"(visible:boolean) => ReactNode"
                },
                defaultValue:{
                    summary:"(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)"
                }
            }
        },
        
    },

};


export const Basic=()=>{
    return <Input/>
}

export const Sizes=()=>{
    return <>
    <Input size="large"/>
    <br/>
    <br/>
    <Input />
    <br/>
    <br/>
    <Input size="small"/>
    </>
}

export const Addon=()=>{
    return (
       <>
        <Input addonBefore="http://" addonAfter=".com" />
       </>
    )
}

export const PrefixSuffix=()=>{
    return (<Input prefix={<SettingOutlined/>} />)
}

export const Clearable=()=>{
    return <Input allowClear/>
}

export const Borderless=()=>{
    return <Input bordered={false} placeholder="borderless" />
}

export const Password=()=>{
    return <Input.Password />
}

export const TextArea=()=>{
    return <Input.TextArea/>
}