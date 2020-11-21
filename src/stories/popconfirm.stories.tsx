import React from 'react'
import { Popconfirm } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
  title: 'Feedback / Popconfirm',
  component: Popconfirm as any,
  decorators: [themeIt],
  parameters: {
    docs: {
      description: ''
    }
  },
  argTypes: {

  },

};

export const Basic = () => {

  return (
    <Popconfirm
      title="Are you sure delete this task?"
      style={{ marginLeft: '200px', marginTop: '200px' }}
      confirmText="Yes"
      cancelText="No"
    >
      <div style={{ marginTop: '200px' }}>Delete</div>
    </Popconfirm>
  )
}

export const Direction = () => {
  const text: React.ReactNode = <span>prompt text</span>;

  const buttonWidth = 70;
  return (
    <div style={{ marginTop: '100px', marginLeft: '100px' }}>
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <Popconfirm
          title="Are you sure delete this task?"

          confirmText="Yes"
          cancelText="No"
          placement="topStart"
        >
          <div >TL</div>
        </Popconfirm>
        <Popconfirm
          placement="top"
          title="Are you sure delete this task?"

          confirmText="Yes"
          cancelText="No"
        >
          <div >Top</div>
        </Popconfirm>
        <Popconfirm
          title="Are you sure delete this task?"
          placement="topEnd"
          confirmText="Yes"
          cancelText="No"
        >
          <div >TR</div>
        </Popconfirm>

      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <Popconfirm
          title="Are you sure delete this task?"
          placement="leftStart"
          confirmText="Yes"
          cancelText="No"
        >
          <div >LT</div>
        </Popconfirm>
        <Popconfirm
          title="Are you sure delete this task?"
          placement="left"
          confirmText="Yes"
          cancelText="No"
        >
          <div >Left</div>
        </Popconfirm>
        <Popconfirm
          title="Are you sure delete this task?"
          placement="leftEnd"
          confirmText="Yes"
          cancelText="No"
        >
          <div >LB</div>
        </Popconfirm>
      </div>
      <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
        <Popconfirm
          title="Are you sure delete this task?"
          placement="rightStart"
          confirmText="Yes"
          cancelText="No"
        >
          <div >RT</div>
        </Popconfirm>
        <Popconfirm
          title="Are you sure delete this task?"
          placement="right"
          confirmText="Yes"
          cancelText="No"
        >
          <div >Right</div>
        </Popconfirm>
        <Popconfirm
          title="Are you sure delete this task?"
          placement="rightEnd"
          confirmText="Yes"
          cancelText="No"
        >
          <div >RB</div>
        </Popconfirm>
      </div>
      <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Popconfirm
          title="Are you sure delete this task?"
          placement="bottomStart"
          confirmText="Yes"
          cancelText="No"
        >
          <div >BL</div>
        </Popconfirm>
        <Popconfirm
          title="Are you sure delete this task?"
          placement="bottom"
          confirmText="Yes"
          cancelText="No"
        >
          <div >Bottom</div>
        </Popconfirm>
        <Popconfirm
          title="Are you sure delete this task?"
          placement="bottomEnd"
          confirmText="Yes"
          cancelText="No"
        >
          <div >BR</div>
        </Popconfirm>
      </div>
    </div>
  )
};