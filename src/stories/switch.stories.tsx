import React, { useState } from 'react'
import { Switch } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Data Collection / Switch',
    component: Switch as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"Switching Selector.",
        docs: {
            description: {
                component:"<h3>When To Use?</h3><ul><li>If you need to represent the switching between two states or on-off state.</li>"+
                "</ul>"
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
            }
        },
        className:{
            description:"The className object of container<br/><h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        },
        disabled:{
            description: "Disable switch.<h6>type:</h6>",
            table: {
                type: {
                    summary: "boolean"
                },
                defaultValue: {
                    summary: "false"
                }
            }
        },
        checked:{
            description: "Check current switch<h6>type:</h6>",
            table: {
                type: {
                    summary: "boolean"
                },
                defaultValue: {
                    summary: "false"
                }
            }
        },
        unCheckedChildren:{
            description:"The content to be shown when the state is unchecked<h6>type:</h6>",
            table: {
                type: {
                    summary: "ReactNode"
                },
            }
        },
        checkedChildren:{
            description:"The content to be shown when the state is checked<h6>type:</h6>",
            table: {
                type: {
                    summary: "ReactNode"
                },
            }
        },
        onChange:{
            description:"Trigger when the checked state is changing.<h6>type:</h6>",
            table: {
                type: {
                    summary: "(checked:boolean,event:Event)=>void"
                },
            }
        },
        defaultChecked:{
            description:"Check current switch<h6>type:</h6>",
            table: {
                type: {
                    summary: "boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        }
    },

};


export const Basic=()=>{
    return <Switch/>
}

export const Disabled=()=>{
    return <Switch disabled/>
}
export const withContent=()=>{
    return <Switch checkedChildren="1" unCheckedChildren="0"/>
}