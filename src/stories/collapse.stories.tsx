import React from 'react'
import { Checkbox, Collapse } from '../../components'
import { themeIt } from './utils/withTheme'
import { CaretRightOutlined, SettingOutlined } from '@ant-design/icons';

export default {
    title: 'Data Display / Collapse',
    component: Collapse as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"A content area which can be collapsed and expanded.",
        docs: {

            description: '<h3>When To Use?</h3><ol><li>Can be used to group or hide complex regions to keep the page clean.</li><li>Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time.</li></ol>'
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
        accordion: {
            description: "Collapse will open only one panel<br/><h6>type:</h6>",
            table: {
                type: {
                    summary: "boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        activeKey:{
            description:"Key of the active panel<h6>type:</h6>",
            table:{
                type:{
                    summary:"string[] | string | number[] | number"
                },
               
            }
        },
        bordered: {
            description: "Whether show border of Collapse or not<h6>type:</h6>",
            table: {
                type: {
                    summary: "boolean"
                },
                defaultValue: {
                    summary: "true"
                }
            }
        },
        defaultActiveKey:{
            description:"Default key of the active panel<h6>type:</h6>",
            table:{
                type:{
                    summary:"string[] | string | number[] | number"
                },
               
            }
        },
        onChange:{
            description:"Callback function executed when active panel is changed<h6>type:</h6>",
            table:{
                type:{
                    summary:"(string[] | string | number[] | number)=>void"
                }
            }
        },
        expandIconPosition:{
            description:"Set expand icon position<h6>type:</h6>",
            table:{
                type:{
                    summary:"'left' | 'right'"
                },
                defaultValue:{
                    summary:'"right"'
                }
            }
        },
        extra:{
            name:"extra (Only works for Collapse.Panel)",
            description:"The extra element in the corner<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                },
               
            }
        },
        expandIcon:{
            description:"Allow to customize collapse icon<h6>type:</h6>",
            table:{
                type:{
                    summary:"({isActive})=>ReacNode"
                },
            }
        },
        header:{
            name:'header (Only in Collapse.Panel)',
            description:"Title of the panel<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                },
            }
        },
        showArrow:{
            name:"showArrow (Only in Collapse.Panel)",
            description:"If false, panel will not show arrow icon<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
            }
        },


    },

};

export const Basic = () => {
    return (
        <Collapse>
            <Collapse.Panel header="panel1">content1</Collapse.Panel>
            <Collapse.Panel header="panel2">content2</Collapse.Panel>
        </Collapse>
    )
}

export const Accordion = () => {
    return (
        <Collapse accordion>
            <Collapse.Panel header="panel1">content1</Collapse.Panel>
            <Collapse.Panel header="panel2">content2</Collapse.Panel>
        </Collapse>
    )
}

export const Borderless=()=>(
    <Collapse bordered={false}>
            <Collapse.Panel header="panel1">content1</Collapse.Panel>
            <Collapse.Panel header="panel2">content2</Collapse.Panel>
        </Collapse>
)

export const CustomizedIcon=()=>{
    return (
        <Collapse expandIcon={({isActive}) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
            <Collapse.Panel header="panel1">content1</Collapse.Panel>
            <Collapse.Panel header="panel2">content2</Collapse.Panel>
        </Collapse>
    )
}

export const NoArrow=()=>{
    return (
        <Collapse >
        <Collapse.Panel showArrow={false} header="panel1">content1</Collapse.Panel>
        <Collapse.Panel header="panel2">content2</Collapse.Panel>
    </Collapse>
    )
}

export const Extra=()=>{
    return (
        <Collapse >
        <Collapse.Panel extra={<SettingOutlined/>} header="panel1">content1</Collapse.Panel>
        <Collapse.Panel header="panel2">content2</Collapse.Panel>
    </Collapse>)
}

export const PositionedArrow=()=>{
    return (
        <Collapse >
        <Collapse.Panel position="right" header="panel1">content1</Collapse.Panel>
        <Collapse.Panel header="panel2">content2</Collapse.Panel>
    </Collapse>)
}