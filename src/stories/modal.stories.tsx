import React, { useState } from 'react'
import { Modal, Button } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Feedback / Modal',
    component: Modal as any,
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
    const [visible, setvisible] = useState(false)

    return (
        <>
        <Button onClick={()=>setvisible(true)}>Open Modal</Button>
        <Modal
        title="Basic Modal"
        visible={visible}
        onOk={()=>setvisible(false)}
        onCancel={()=>setvisible(false)}
        >
             <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        </>
    )
}
