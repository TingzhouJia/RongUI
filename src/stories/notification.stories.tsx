import React, { useContext } from 'react'
import { notification, Button, Space } from '../../components'
import { themeIt } from './utils/withTheme'
import { ThemeContext } from 'styled-components';


export default {
  title: 'Feedback / Notification',
  component: notification as any,
  decorators: [themeIt],
  parameters: {
    componentSubtitle: "Display global notification as feedback in response to user operations.",
    docs: {
      description: {
        component: "<h3>When To Use?</h3><ul><li>A notification with complex content.</li>" +
          "<li>A notification providing a feedback based on the user interaction. Or it may show some details about upcoming steps the user may have to follow.</li>" +
          "</ul><br/><br/>" +
          "<h3>API</h3>Message components is triggered like native js method (window.error(...)):<br/>" +
          "message can be used by assigning a theme to it:<code>const notif=useNotification(theme)</code> or <code> nofication.open(content,theme)</code><br/>" +
          "<ul><li><code>notif.info({message,duration,onClose})</code></li>" +
          "<li><code>notif.success({message,duration,onClose})</code></li>" +
          "<li><code>notif.error({message,duration,onClose})</code></li>" +
          "<li><code>notif.warning({message,duration,onClose})</code></li></ul>"
      }
    }
  },
  argTypes: {
    message: {
      description: "The message of Notification(Required)<h6>type:</h6>",
      table: {
        type: {
          summary: "ReactNode"
        }
      },
      type: { required: true },
      control: {}
    },
    description: {
      description: "The content of Notification<h6>type:</h6>",
      table: {
        type: {
          summary: "ReactNode"
        }
      },
      type: { required: true },
      control: {}
    },
    duration: {
      description: "The duration of notification<h6>type:</h6>",
      table: {
        type: {
          summary: "number"
        },
        defaultValue: { summary: "1.5" }
      }
    },
    onClose: {
      description: "The close callback of notification<h6>type:</h6>",
      table: {
        type: {
          summary: "()=>void"
        }
      }
    },
    icon: {
      description: "The custom icon of notification<h6>type:</h6>",
      table: {
        type: {
          summary: "ReactNode"
        }
      }
    },
    placement: {
      description: "The placement of  notification<h6>type:</h6>",
      table: {
        type: {
          summary: "'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'"
        }
      }
    },
  },

};


export const Basic = () => {
  const theme = useContext(ThemeContext)

  const openNotification = () => {
    notification.open({
      message: 'Notification Title',

      description:
        'This is the content of the notification.',

    }, theme);

  };
  return (
    <Button onClick={() => openNotification()}>Open Notification</Button>
  )
}

export const WithStatus = () => {
  const theme = useContext(ThemeContext)
  const notif = notification.useNotification(theme)
  const { info, error, success, warning } = notif
  return (
    <Space>
      <Button onClick={() => info({ message: "Info", })}>Info</Button>
      <Button onClick={() => error({ message: "Error" })}>Error</Button>
      <Button onClick={() => warning({ message: "Warning" })}>Warning</Button>
      <Button onClick={() => success({ message: "Success" })}>Success</Button>
    </Space>
  )
}