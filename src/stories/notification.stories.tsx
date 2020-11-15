import React from 'react'
import { notification, Button } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Feedback / Notification',
    component: notification as any,
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
    const openNotification = () => {
        notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        
        });
      };
      return (
        <Button onClick={()=>openNotification()}>Open Notification</Button>
      )
}