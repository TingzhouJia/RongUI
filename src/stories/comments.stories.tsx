import React from 'react'
import { Comment, Avatar } from '../../components'
import { themeIt } from './utils/withTheme'

import { EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


export default {
  title: 'Data Display / Comments',
  component: Comment as any,
  decorators: [themeIt],
  parameters: {
    componentSubtitle: "A comment displays user feedback and discussion to website content.",
    docs: {
      description: '<h3>When To Use?</h3>Comments can be used to enable discussions on an entity such as a page, blog post, issue or other.'
    }
  },
  argTypes: {
    style: {
      description: "The  style object of container<br/><h6>type:</h6>",
      control: {},
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
    actions:{
      description:"A list of action below each comment<h6>type:</h6>",
      table: {
        type: {
          summary: "ReactNode[]"
        }
      }
    },
    author:{
      description:"Author name of comment<h6>type:</h6>",
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    },
    avatar:{
      description:"Avatar of comment<h6>type:</h6>",
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    },
    content:{
      description:"Content of comment<h6>type:</h6>",
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    },
    datetime:{
      description:"Timestamp of comment<h6>type:</h6>",
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    },
  },

};

export const Basic = () => {
  const actions = [<SettingOutlined />, <EllipsisOutlined />]
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

export const NestedComments = () => {
  const Exmaple = ({ children }: any) => (
    <Comment avatar={
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    } content={<p>
      Rong is a modern CSS in JS UI library for React.js, we provide over 35 components for both toB scenario and toC scenario
      </p>} author={<a>Han Solo</a>} >{children}</Comment>
  )
  return (
    <Exmaple>
      <Exmaple>
        <Exmaple />
        <Exmaple />
      </Exmaple>
    </Exmaple>
  )
}