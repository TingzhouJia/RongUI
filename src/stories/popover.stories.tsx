import React from 'react'
import { Popover, Button} from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Feedback / Popover',
    component: Popover as any,
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

export const Click=()=>{
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