import React, { useState } from 'react'
import { Pagination } from '../../components'
import { themeIt } from './utils/withTheme'
import { Meta } from '@storybook/react/types-6-0';


export default {
    title: 'Navigation / Pagination',
    component: Pagination as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle: "A long list can be divided into several pages using Pagination, and only one page will be loaded at a time.",
        docs: {
            description: {
                component: "<h3>When To Use?</h3><ul><li>When it will take a long time to load/render all items.</li>Browsing data by nagivating through pages<li></li></ul>"
            }
        }
    },
    argTypes: {
        total: {
            description: "Total number of data source to display.<h6>type:</h6>",
            table: {
                type: {
                    summary: "number"
                }
            }
        },
        defaultCurrent: {
            description: "Default current page<h6>type:</h6>",
            table: {
                type: {
                    summary: "number"
                },
                defaultValue: {
                    summary: "1"
                }
            }
        },
        current: {
            description: "Current page.<h6>type:</h6>",
            table: {
                type: {
                    summary: "number"
                },
                defaultValue: {
                    summary: "1"
                }
            }
        },
        disabled:{
            description: "Disable pagination.<h6>type:</h6>",
            table: {
                type: {
                    summary: "boolean"
                },
                defaultValue: {
                    summary: "false"
                }
            }
        },
        defaultPageSize:{
            description: "Default page size.<h6>type:</h6>",
            table: {
                type: {
                    summary: "number"
                },
                defaultValue: {
                    summary: "10"
                }
            }
        },
        pageSize:{
            description: "Page size.<h6>type:</h6>",
            table: {
                type: {
                    summary: "number"
                },
                defaultValue: {
                    summary: "10"
                }
            }
        },
        limit:{
            description: "The number of pages to show.<h6>type:</h6>",
            table: {
                type: {
                    summary: "number"
                },
                defaultValue: {
                    summary: "10"
                }
            }
        },
        onChange:{
            description: "The callback when page changed<h6>type:</h6>",
            table: {
                type: {
                    summary: "(page)=>void"
                },
              
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

    },

} as Meta;


export const Basic = () => {
    return (
        <Pagination total={50} />
    )
}