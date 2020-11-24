import React from 'react'
import { FileTree } from '../../components'
import { themeIt } from './utils/withTheme'
import { SettingOutlined } from '@ant-design/icons';
import { Meta } from '@storybook/react/types-6-0';



export default {
    title: 'Data Display / FileTree',
    component: FileTree as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"A hierarchical list structure component.",
        docs: {
            description: {
                component:"<h3>When To Use?</h3>The Tree component is a way of representing the hierarchical relationship between these things. You can also expand and collapse."
            }
        }
    },
    argTypes: {
        value:{
            description:"Use value to display FileTree.<h6>type:</h6>",
            type:{
                summary:`{
                    type: 'directory'| 'file'
                    name: string
                    extra?: string
                    files?: Array<FileTreeValue>
                    disabled?: boolean
                    icon?: (select: boolean) => React.ReactNode
                  }`
            }
        },
        onClick:{
            description:"A callback return path when click either Folder or File.<h6>type:</h6>",
            type:{
                summary:"(path: string) => void"
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
        sortValue:{
            description:"The className object of container<br/><h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        initialExpand:{
            description:"Expand all directory<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        name:{
            name:"name (Folder and File only)",
            description:"Name of folder or file<h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                },
        
            }
        },
        extra:{
            name:"extra (Folder and File only)",
            description:"Extra component of folder or file<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                },
        
            }
        },
        icon:{
            name:"icon (Folder and File only)",
            description:"Customized icon for folder and file<h6>type:</h6>",
            table:{
                type:{
                    summary:"(select: boolean) => React.ReactNode"
                },
            }
        },
        disabled:{
            description:"Disable a folder or file",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        }
    },

} as Meta;

export const  Basic=()=>{
    return (
        <FileTree >
            <FileTree.File name="app.jsx"></FileTree.File>
            <FileTree.Folder name="components">
            <FileTree.File name="button.jsx"/>
            </FileTree.Folder>
        </FileTree>
    )
}

export const CustomizeIcon=()=>{
    return (
        <FileTree >
            <FileTree.File  icon={<SettingOutlined/>} name="app.jsx"></FileTree.File>
        </FileTree>
    )
}

export const ImperativeStyle=()=>{

    return (
        <FileTree value={[{type:'directory',name:'folder1',files:[{type:'file',name:'file1'}]}]} />
    )
}