import React from 'react'
import { Popconfirm} from '../../components'
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

export const Basic=()=>{
  
   return (
    <Popconfirm
    title="Are you sure delete this task?"
    
    confirmText="Yes"
    cancelText="No"
  >
    <div style={{marginTop:'200px'}}>Delete</div>
  </Popconfirm>
   )
}