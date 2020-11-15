import React from 'react'
import { FileTree } from '../../components'
import { themeIt } from './utils/withTheme'
import { SettingOutlined } from '@ant-design/icons';



export default {
    title: 'Data Display / FileTree',
    component: FileTree as any,
    decorators: [themeIt],
    parameters: {
        docs: {
            description: ''
        }
    },
    argTypes: {

    },

};

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
            <FileTree.File  icon={(select:any)=><SettingOutlined/>} name="app.jsx"></FileTree.File>
        </FileTree>
    )
}

export const ImperativeStyle=()=>{

    return (
        <FileTree value={[{type:'directory',name:'folder1',files:[{type:'file',name:'file1'}]}]} />
    )
}