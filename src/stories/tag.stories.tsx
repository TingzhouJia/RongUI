import React, { useState } from 'react'
import {  Tag, Space } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Data Display / Tag',
    component: Tag as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"Tag for categorizing or markup.",
        docs: {
            description: {
                component:"<h3>When To Use?</h3><ul><li>It can be used to tag by dimension or property.</li><li>When categorizing.</li></ul>"
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
        color:{
            description:"Add color to tag<h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        },
        closable:{
            description:"Closable tag<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        closeIcon:{
            description:"Customized icon when closable is true.<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                },
               
            }
        },
        onClose:{
            description:"Callback when close tag<h6>type:</h6>",
            table:{
                type:{
                    summary:"(e)=>void"
                },
            }
        },
        icon:{
            description:"Prefix icon for tag<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        status:{
            description:"Status of a tag<h6>type:</h6>",
            table:{
                type:{
                    summary:"'success'|'error'|'info'|'warning'"
                }
            }
        }

    },
}

export const Basic=()=>{
    return (
        <Tag>Rong tag</Tag>
    )
}
;
export const Status=()=>{
    return (<Space>
        <Tag status="success">Rong success tag</Tag>
        <Tag status="error">Rong error tag</Tag>
        <Tag status="warning">Rong warning tag</Tag>
    </Space>)
};

export const Closable=()=>{
    return (<Tag closable>Rong tag</Tag>)
};

export const Color=()=>{
    return (<Tag color="red">Rong tag</Tag>)
}