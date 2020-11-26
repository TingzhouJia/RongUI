import React, { useState } from 'react'
import { Select } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Data Collection / Select',
    component: Select as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"Select component to select value from options.",
        docs: {
            description: {
                component:"<h3>When To Use?</h3><ul><li>A dropdown menu for displaying choices - same as native <code>select<code> element.</li></ul>"
            }
        }
    },
    argTypes: {
        value:{
            desciption:"The select's value<h6>type:</h6>",
            table:{
                type:{
                    summary:"string|string[]"
                }
            }
        },
        initialValue:{
            desciption:"The select's initial  value<h6>type:</h6>",
            table:{
                type:{
                    summary:"string|string[]"
                }
            }
        },
        placeholder:{
            desciption:"The placeholder of select<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        onChange:{
            description:"Callback when user select<h6>type</h6>",
            table:{
                type:{
                    summary:"(string|string[])=>void"
                }
            }
        },
        size: {
            description: "The size of select<h6>type</h6>",
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
        pure:{
            description:"No arrow shown in Select<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        multiple:{
            description:"Select multiple choice<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        bordered:{
            description:"Border of select<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"true"
                }
            }
        },
        disabled:{
            description:"Disable select<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        label:{
            name:"label (Only in Select.OptGroup)",
            description:"Label for Select.OptGroup<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                },
               
            }
        },

    },

};

export const Basic = () => {
    return (
        <Select style={{ width: '200px' }}>
            <Select.Option value="Rong">
                Rong UI 1
            </Select.Option>
            <Select.Option value="Rong2">
                Rong UI 2
            </Select.Option>
        </Select>
    )
}

export const Multiple = () => {
    return (
        <Select multiple style={{ width: '200px' }}>
            <Select.Option value="Rong">
                Rong UI 1
            </Select.Option>
            <Select.Option value="Rong2">
                Rong UI 2
            </Select.Option>
        </Select>
    )
}

export const Group = () => {
    return (
        <Select multiple style={{ width: '200px' }}>
            <Select.OptGroup label="group">
                <Select.Option value="Rong">
                    Rong UI 1
            </Select.Option>
            </Select.OptGroup>
            <Select.Option value="Rong2">
                Rong UI 2
            </Select.Option>
        </Select>
    )
}