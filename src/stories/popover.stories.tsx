import React from 'react'
import { Popover, Button } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
  title: 'Feedback / Popover',
  component: Popover as any,
  decorators: [themeIt],
  parameters: {
    componentSubtitle:"Floating card popped by clicking or hovering.",
    docs: {
      
      description:{
        component:"<h3>When To Use?</h3>A simple popup menu to provide extra information or operations. You can provide more information in Popover than Tooltip"
      }
    }
  },
  argTypes: {
    style: {
      description: "The style object of container<br/><h6>type:</h6>",
      table: {
        type: {
          summary: "CSSProperties"
        }
      },
      control: {}
    },
    className: {
      description: "The className object of container<br/><h6>type:</h6>",
      table: {
        type: {
          summary: "string"
        }
      }
    },
    placement: {
      description: "Placement of popconfirm<h6>type:</h6>",
      table: {
        type: {
          summary: "'top' |'topStart' |'topEnd'| 'left' | 'leftStart' | 'leftEnd' | 'bottom'|'bottomStart'|'bottomEnd'|'right'|'rightStart'|'rightEnd'"
        }
      }
    },
    trigger:{
      description:"Trigger method<h3>type:</h6>",
      table:{
        type:{
          summary:"'click' | 'hover'"
        },
        defaultValue:{
          summary:"hover"
        }
      }
    },
    title:{
      description:"Title of Popover<h3>type:</h6>",
      table:{
        type:{
          summary:"ReactNode"
        },
      }
    },
    content:{
      description:"Content of Popover<h3>type:</h6>",
      table:{
        type:{
          summary:"ReactNode"
        },
      }
    }
  },

};

export const Basic = () => {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <Popover content={content} title="Title">
      <Button type="primary">Hover me</Button>
    </Popover>
  )
}

export const Click = () => {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <Popover content={content} trigger="click" title="Title">
      <Button type="primary">Hover me</Button>
    </Popover>
  )
}

export const Direction = () => {
  const title: React.ReactNode = <span>prompt title</span>;

  const buttonWidth = 70;
  return (
    <div style={{ marginTop: '100px', marginLeft: '100px' }}>
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <Popover placement="topStart" title={title}>
          <Button>TL</Button>
        </Popover>
        <Popover placement="top" title={title}>
          <Button>Top</Button>
        </Popover>
        <Popover placement="topEnd" title={title}>
          <Button>TR</Button>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <Popover placement="leftStart" title={title}>
          <Button>LT</Button>
        </Popover>
        <Popover placement="left" title={title}>
          <Button>Left</Button>
        </Popover>
        <Popover placement="leftEnd" title={title}>
          <Button>LB</Button>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
        <Popover placement="rightStart" title={title}>
          <Button>RT</Button>
        </Popover>
        <Popover placement="right" title={title}>
          <Button>Right</Button>
        </Popover>
        <Popover placement="rightEnd" title={title}>
          <Button>RB</Button>
        </Popover>
      </div>
      <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Popover placement="bottomStart" title={title}>
          <Button>BL</Button>
        </Popover>
        <Popover placement="bottom" title={title}>
          <Button>Bottom</Button>
        </Popover>
        <Popover placement="bottomEnd" title={title}>
          <Button>BR</Button>
        </Popover>
      </div>
    </div>
  )
};