import React, { useState } from 'react'
import { Tabs } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Data Display / Tabs',
    component: Tabs as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"Tabs make it easy to switch between different views.",
        
    },
    argTypes: {
        tab:{
            name:"tab (Only in Tabs.Pane)",
            description:"Name in Tabs header<h6>type:</h6>",
            type:{
                required:true
            },
            table:{
                type:{
                    summary:"ReactNode"
                }
            },
            control:{}
        },
        tabKey:{
            name:"tabKey (Only in Tabs.Pane)",
            description:"Unique tab key for each tab<h6>",
            table:{
                type:{
                    summary:"string"
                }
            },
            type:{
                required:true
            }
        },
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
        onChange:{
            description:"Callback when tab is changed<h6>type:</h6>",
            table:{
                type:{
                    summary:"(value:string)=>void"
                }
            }
        },
        value:{
            description:"Active tab key <h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        },
        defaultValue:{
            description:"Default active tab key <h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        }

    },

};

export const Basic=()=>{
    return (
        <Tabs  defaultValue="1" >
            <Tabs.Pane  tab="tab1" tabKey="1">
                content 1
            </Tabs.Pane>
            <Tabs.Pane tab="tab2" tabKey="2">
                content 2
            </Tabs.Pane>
        </Tabs>
    )
}

export const Disabled=()=>{
    return (
        <Tabs defaultValue="1">
            <Tabs.Pane tab="tab1" tabKey="1">
                content 1
            </Tabs.Pane>
            <Tabs.Pane tab="tab2" tabKey="2">
                content 2
            </Tabs.Pane>
            <Tabs.Pane disabled tab="tab2" tabKey="2">
                content 3
            </Tabs.Pane>
        </Tabs>
    )
}

