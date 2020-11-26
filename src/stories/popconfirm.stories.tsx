import React from 'react'
import { Popconfirm } from '../../components'
import { themeIt } from './utils/withTheme'
import { SettingFilled } from '@ant-design/icons';


export default {
  title: 'Feedback / Popconfirm',
  component: Popconfirm as any,
  decorators: [themeIt],
  parameters: {
    componentSubtitle:"A simple and compact confirmation dialog of an action.",
    docs: {
      description: {
        component:"<h3>When To Use?</h3>This kind of dialog is more lightweight than the static popped full-screen confirm modal."
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
      control:{}
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
    confirmType: {
      description: "Ok button props.<h6>type:</h6>",
      table: {
        type: {
          summary: "ButtonProps"
        },

      }
    },
    confirmText: {
      description: "Text for confirm button.<h6>type:</h6>",
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    },
    disabled: {
      description: "Disable the popconfirm<h6>type:</h6>",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue:{
          summary:"false"
        }
      }
    },
    cancelText: {
      description: "Text for cancel button.<h6>type:</h6>",
      table: {
        type: {
          summary: "ReactNode"
        }
      },
      control: {}
    },
    cancelType: {
      description: "Cancel button props.<h6>type:</h6>",
      table: {
        type: {
          summary: "ButtonProps"
        },

      }
    },
    onConfirm:{
      description: "Confirm button click callback.<h6>type:</h6>",
      table:{
        type: {
          summary: "()=>void"
        },
      }
    },
    onCancel:{
      description: "Cancel button click callback.<h6>type:</h6>",
      table:{
        type: {
          summary: "()=>void"
        },
      }
    }
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
      <div>Delete</div>
    </Popconfirm>
  )
}

export const Direction = () => {

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



export const CustomIcon = () => {

  return (
    <Popconfirm
      title="Are you sure delete this task?"
      style={{ marginLeft: '200px', marginTop: '200px' }}
      confirmText="Yes"
      cancelText="No"
      icon={<SettingFilled />}
    >
      <div style={{ marginTop: '200px' }}>Delete</div>
    </Popconfirm>
  )
}