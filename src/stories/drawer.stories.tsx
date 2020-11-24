import React, { useState } from 'react'
import { Drawer, Button, Radio } from '../../components'
import { themeIt } from './utils/withTheme'
import { Meta } from '@storybook/react/types-6-0';


export default {
  title: 'Data Display / Drawer',
  component: Drawer as any,
  decorators: [themeIt],
  parameters: {
    componentSubtitle: "A panel which slides in from the edge of the screen.",
    docs: {
      description: {
        component: '<h3>When To Use?</h3>A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. ' +
          'It contains a set of information or actions. Since the user can interact with the Drawer without leaving the current page, ' +
          'tasks can be achieved more efficiently within the same context. '
      }
    }
  },
  argTypes: {
    closable: {
      control: {},
      description: "Whether a close button is visible on top right of the Drawer dialog or not.<h6>type:</h6>",
      table: {
        defaultValue: {
          summary: "false"
        },
        type: {
          summary: "boolean"
        }
      }
    },
    closeIcon: {
      description: "Customized close icon, need set closable to <code>true</code><h6>type:</h6>",
      table: {
        defaultValue:{
          summary:"<CloseOutlined />"
        },
        type: {
          summary: "ReactNode"
        }
      }
    },
    getContainer: {
      description: "Parent node to portal drawer<h6>type:</h6>",
      table: {
        type: {
          summary: "HTMLElement | () => HTMLElement "
        },
        defaultValue: {
          summary: "body"
        }
      }
    },
    maskClosable: {
      description: "Close mask if click mask cover, only works when property <code>mask</code> is true.<h6>type:</h6>",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: "true"
        }
      }
    },
    mask: {
      description: "Whether show mask or not.<h6>type</h6>",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: "true"
        }
      }
    },
    style: {
      description: "The style object of container<br/><h6>type:</h6>",
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
    footerStyle: {
      description: "The style object of drawer's footer<br/><h6>type:</h6>",
      table: {
        type: {
          summary: "CSSProperties"
        }
      }
    },
    bodyStyle: {
      description: "The style object of drawer's body<br/><h6>type:</h6>",
      table: {
        type: {
          summary: "CSSProperties"
        }
      }
    },
    headerStyle: {
      description: "The style object of drawer's header<br/><h6>type:</h6>",
      table: {
        type: {
          summary: "CSSProperties"
        }
      }
    },
    title: {
      description: "Title of drawer.<h6>type:</h6>",
      table: {

        type: {
          summary: "ReactNode"
        }
      }
    },
    visible: {
      description: "Whether the Drawer  is visible or not<h6>type:</h6>",
      table: {
        defaultValue:{
          summary:"false"
        },
        type: {
          summary: "boolean"
        }
      }
    },
    zIndex:{
      description:"Z-index for Drawer<h6>type:</h6>",
      table:{
        type: {
          summary: "number"
        },
        defaultValue:{
          summary:1000
        }
      }
    },
    onClose:{
      description:"Specify a callback that will be called when click mask or close button<h6>type:</h6>",
      table:{
        type: {
          summary: "(e: React.MouseEvent | React.KeyboardEvent)=>void"
        },
      }
    },
    placement:{
        description:"Position of drawer<h6>type:</h6>",
        table:{
          type:{
            summary:'"left" | "right" | "top" | "bottom" '
          },
          defaultValue:{
            summary:"right"
          }
        }
    },
    afterVisibleChange:{
      description:"Callback when visiblility changed<h6>type:</h6>",
      table:{
        type:{
          summary:"(visible: boolean) => void"
        }
      }
    },
    width:{
      description:"Width of drawer when placement is <code>left</code> or <code>right</code>",
      table:{
        type:{
          summary:"number"
        },
        defaultValue:{
          summary:"256"
        }
      }
    },
    height:{
      description:"Height of drawer when placement is <code>top</code> or <code>bottom</code>",
      table:{
        type:{
          summary:"number"
        },
        defaultValue:{
          summary:"256"
        }
      }
    },

  },

} as Meta;

export const Basic = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}

export const InnerClose = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}

export const NoMaskClose = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable
        maskClosable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}

export const NoMask = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable
        mask={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}

export const Placement=()=>{
  const [placement, setplacement] = useState<any>('right')
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
    <Radio.Group useRow value={placement} onChange={(e)=>setplacement(e)}>
      <Radio value="top" >Top</Radio>
      <Radio value="left" >Left</Radio>
      <Radio value="bottom" >Bottom</Radio>
      <Radio value="right" >Right</Radio>
    </Radio.Group>
    <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}