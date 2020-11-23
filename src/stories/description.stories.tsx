import React from 'react'
import { Description } from '../../components'
import { themeIt } from './utils/withTheme'



export default {
    title: 'Data Display / Description',
    component: Comment as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle: "Display multiple read-only fields in groups.",
        docs: {
            description: {
                component: "<h3>When To Use?</h3>Commonly displayed on the details page."
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
        bordered: {
            description: "Whether show border of card or not<h6>type:</h6>",
            table: {
                type: {
                    summary: "boolean"
                },
                defaultValue: {
                    summary: "true"
                }
            }
        },
        column: {
            description: "Number of item each line<h6>type:</h6>",
            table: {
                type: {
                    summary: "number"
                },
                defaultValue: {
                    summary: "3"
                }
            }
        },
        size:{
            description:"Size of Description<h6>type:</h6>",
            table: {
                type: {
                    summary: '"small" | "default" | "large"'
                },
                defaultValue: {
                    summary: "default"
                }
            }
        },
        title:{
            description:"Title of Description<h6>type:</h6>",
            table: {
                type: {
                    summary: 'ReactNode'
                },
             
            }
        },
        extra:{
            description:"Extra node of Description<h6>type:</h6>",
            table: {
                type: {
                    summary: 'ReactNode'
                },
            }
        },
        layout:{
            description:"Layout of Description<h6>type:</h6>",
            table: {
                type: {
                    summary: '"vertical" | "horizontal"'
                },
                defaultValue:{
                    summary:"horizontal"
                }
            }
        },
        colon:{
            description:" Add ':' to end of label",
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue:{
                    summary:"true"
                }
            }
        },
        label:{
            name:'label (Only in Description.Item)',
            description:"The description of the content",
            table: {
                type: {
                    summary: 'ReactNode'
                },
            
            }
        }

    },

};

export const Basic=()=>{
    return (
        <Description title="Rong UI">
            <Description.Item label="intro"> This is the description</Description.Item>
            <Description.Item label="intro2"> This is the description2</Description.Item>
            <Description.Item label="intro3"> This is the description3</Description.Item>
        </Description>
    )
}

export const Vertical=()=>{
    return (
        <Description title="Rong UI" layout="vertical">
        <Description.Item label="intro"> This is the description</Description.Item>
        <Description.Item label="intro2"> This is the description2</Description.Item>
        <Description.Item label="intro3"> This is the description3</Description.Item>
    </Description>
    )
}

export const Bordered=()=>{
    return (
        <Description title="Rong UI" bordered>
        <Description.Item label="intro"> This is the description</Description.Item>
        <Description.Item label="intro2"> This is the description2</Description.Item>
        <Description.Item label="intro3"> This is the description3</Description.Item>
    </Description>
    )
}