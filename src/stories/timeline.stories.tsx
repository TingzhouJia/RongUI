import React, { useState } from 'react'
import { Timeline } from '../../components'
import { themeIt } from './utils/withTheme'
export default {
    title: 'Data Display / Timeline',
    component: Timeline as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"A vertical display to show timeline",
        docs: {
            description: '<h3>When To Use?</h3><ul><li>When a series of information needs to be ordered by time (ascending or descending).</li>'+
            "<li>When you need a timeline to make a visual connection.</li></ul>"
        }
    },
    argTypes: {
        mode:{
            description:"Display of content on which sides<h6>type:</h6>",
            table:{
                summary:"'left' | 'right'"
            },
            defaultValue:{
                summary:"right"
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
        color:{
            description:"The customized color for timeline node<br/><h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        },
        reverse:{
            description:"Reverse nodes<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        status:{
            name:"status (Only in Timeline.Item)",
            description:"Status of current item<h6>type</h6>",
            table:{
                type:{
                    summary:"'success'|'error'|'info'|'disabled'|'warning'"
                },
                defaultValue:{
                    summary:"process"
                }
            }
        },
        label:{
            name:"label (Only in Timeline.Item)",
            description:"Set a label<h6>type</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                },
            
            }
        },

    },
}

export const Basic = () => {
    return (<Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>

    </Timeline>)
}

export const WithStatus=()=>{
    return (<Timeline>
    <Timeline.Item status="disabled">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item status="success">Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item status="error">Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
</Timeline>)
}

export const WithLabel=()=>{
    return (
        <Timeline >
        <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
        <Timeline.Item>Technical testing</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
      </Timeline>
    )
}

export const Mode=()=>{
    return  (<Timeline mode="left" >
    <Timeline.Item >Create a services</Timeline.Item>
    <Timeline.Item >Solve initial network problems</Timeline.Item>
    <Timeline.Item>Technical testing</Timeline.Item>
    <Timeline.Item>Network problems being solved</Timeline.Item>
  </Timeline>)
}