import React from 'react'
import { Comment } from '../../components'
import { themeIt } from './utils/withTheme'
import Avatar from 'components/Avatar/avatar';
import {  EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


export default {
    title: 'Data Display / Collapse',
    component: Comment as any,
    decorators: [themeIt],
    parameters: {
        docs: {
            description: ''
        }
    },
    argTypes: {

    },

};

export const Basic=()=>{
    const actions=[<SettingOutlined/>,<EllipsisOutlined/>]
    return (
        <Comment
          actions={actions}
          author={<a>Han Solo</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <p>
              Rong is a modern CSS in JS UI library for React.js, we provide over 35 components for both toB scenario and toC scenario
            </p>
          }
          datetime={
              <span>2019/03/12</span>
          }
        />
    )
}

export const NestedComments=()=>{
    const Exmaple=({children}:any)=>(
    <Comment  avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      } content={ <p>
        Rong is a modern CSS in JS UI library for React.js, we provide over 35 components for both toB scenario and toC scenario
      </p>} author={<a>Han Solo</a>} >{children}</Comment>
    )
    return (
        <Exmaple>
            <Exmaple>
                <Exmaple/>
                <Exmaple/>
            </Exmaple>
        </Exmaple>
    )
}