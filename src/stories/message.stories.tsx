import React, { useContext } from 'react'
import { message, Button,Space } from '../../components'
import { themeIt } from './utils/withTheme'
import { ThemeContext } from 'styled-components';


export default {
    title: 'Feedback / message',
    component: message as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"Display global messages as feedback in response to user operations.",
        docs: {
            description: {
                component:"<h3>When To Use?</h3><ul><li>A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.</li></ul><br/><br/>"+
                "<h3>API</h3>Message components is triggered like native js method (window.error(...)):<br/>"+
                "message can be used by assigning a theme to it:<code>const message=useMessage(theme)</code> or <code> message.open(content,theme)</code><br/>"+
                "<ul><li><code>message.info({content,duration,onClose})</code></li>"+
                "<li><code>message.success({content,duration,onClose})</code></li>"+
                "<li><code>message.error({content,duration,onClose})</code></li>"+
                "<li><code>message.warning({content,duration,onClose})</code></li></ul>"
            }
        }
    },
    argTypes: {
        content:{
            description:"The content of message<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            },
            control:{}
        },
        duration:{
            description:"The duration of message<h6>type:</h6>",
            table:{
                type:{
                    summary:"number"
                },
                defaultValue:{summary:"1.5"}
            }
        },
        onClose:{
            description:"The close callback of message<h6>type:</h6>",
            table:{
                type:{
                    summary:"()=>void"
                }
            }
        },
        icon:{
            description:"The custom icon of message<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
    },

};

export const Basic=()=>{
    const theme=useContext(ThemeContext)
  
    const {useMessage}=message
    const {info}=useMessage(theme)
    
    return (
        <Button onClick={()=>info({content:'message it',})}>message</Button>
    )
}

export const MessageType=()=>{
    const theme=useContext(ThemeContext)
  
    const {useMessage}=message
    const {error,warning,success}=useMessage(theme)
    return (
        <Space>
             <Button onClick={()=>error({content:'message error'})}>error</Button>
             <Button onClick={()=>warning({content:'message warning'})}>warning</Button>
             <Button onClick={()=>success({content:'message success'})}>success</Button>
        </Space>
    )
}