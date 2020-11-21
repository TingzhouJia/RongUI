import React from 'react'
import { Breadcrumb } from '../../components'
import { themeIt } from './utils/withTheme'

export default {
    title: 'Navigation / Breadcrumb',
    component: Breadcrumb as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle: "A breadcrumb displays the current location in wegbpage.",
        docs:{
            description:{
                component:"<h3>When To Use?</h3><br/><ul><li>When the system has more than two nodes in a route.</li><li>When you need to inform the user of where they are.</li><li>When the user may need to navigate back to parent level</li></ul>"
                ,
                
            },
            source:{
                type:"code"
            }
        }
    },
    argTypes: {
        style: {
            description: "The style object of container<br/><h6>type:</h6>",
            table:{
                type:{
                    summary:"CSSProperties"
                }
            },
            control:{}
        },
        className: {
            description: "The className object of container<br/><h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            },
        },
        seperator:{
            description:"separator to divide each router<br/><h6>type:</h6>",
            table: {
                type:{
                    summary:"ReactNode"
                },
                defaultValue: { summary: "/" }
            }
        },
        href:{
            description:"link version BreacrumbItem<br/><h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        }
    },

}

export const Basic=()=>{
    return (
        <Breadcrumb >
        <Breadcrumb.Item href='/a'>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Rong</Breadcrumb.Item>
        <Breadcrumb.Item>UI</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export const CustomizeSeperator=()=>{
    return (
        <Breadcrumb separator="%">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Rong</Breadcrumb.Item>
        <Breadcrumb.Item>UI</Breadcrumb.Item>
        </Breadcrumb>
    )
}