import React, { useState, useContext } from 'react'
import { Modal, Button, Space } from '../../components'
import { themeIt } from './utils/withTheme'
import { ThemeContext } from 'styled-components';


export default {
    title: 'Feedback / Modal',
    component: Modal as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"Modal Dialogs",
        docs: {
            description: {
                component:"<h3>When To Use?</h3>When requiring users to interact with the application,"+
                "but without jumping to a new page and interrupting the user's workflow,"
                +" you can use Modal to create a new floating layer over the current page to get user feedback or display information. "
                +"Additionally, if you need show a simple confirmation dialog, you can use Modal.info(),Modal.success() and so on."
            }
        }
    },
    argTypes: {
        title:{
            description:"Title of Modal<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        footer:{
            description:"Customized footer of Modal<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        okText:{
            description:"Text for ok button.<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        cancelText:{
            description:"Text for cancel button.<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            },
            control:{}
        },
        closeIcon:{
            description:"Customized close icon<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                },
                defaultValue:{
                    summary:"<CloseOutlined />"
                }
            }
        },
        closable:{
            description:"Top right close button<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        maskClosable:{
            description:"Close modal when click mask.<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"true | false(When use Modal function)"
                }
            }
        },
        visible:{
            description:"Close modal when click mask.<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        content:{
            description:"Content for modal.<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                },
               
            }
        },
        okButtonProps:{
            description:"Ok button props.<h6>type:</h6>",
            table:{
                type:{
                    summary:"ButtonProps"
                },
               
            }
        },
        cancelButtonProps:{
            description:"Cancel button props.<h6>type:</h6>",
            table:{
                type:{
                    summary:"ButtonProps"
                },
               
            }
        },
        mask:{
            description:"Show mask of modal<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"true"
                }
            }
        },
        centered:{
            description:"Centered Modal<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        type:{
            description:"Type of modal<h6>type:</h6>",
            table:{
                type:{
                    summary:"success | error | warning | info | confirm"
                },
             
            }
        },
        getContainer:{
            description:"Parent node to hold modal portal.<h6>type:</h6>",
            table:{
                type:{
                    summary:"HTMLElement | () => HTMLElement | false"
                },
                defaultValue:{
                    summary:"document.body"
                }
            }
        },
        width:{
            description:"Width of modal.<h6>type:</h6>",
            table:{
                type:{
                    summary:"number"
                },
                defaultValue:{
                    summary:"520"
                }
            }
        },
        onOk:{
            description:"Callback when click ok button<h6>type:</h6>",
            table:{
                type:{
                    summary:"function(e)"
                },
         
            }
        },
        onCancel:{
            description:"Callback when click cancel button<h6>type:</h6>",
            table:{
                type:{
                    summary:"function(e)"
                },
         
            }
        },
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

export const WithStatus=()=>{
    const theme=useContext(ThemeContext)
    return (
        <Space>
            <Button onClick={()=>Modal.info({title:"Info"},theme)}>Info</Button>
            <Button onClick={()=>Modal.warning({title:"Warning"},theme)}>Warning</Button>
            <Button onClick={()=>Modal.success({title:"Success"},theme)}>Success</Button>
            <Button onClick={()=>Modal.error({title:"Error"},theme)}>Error</Button>
        </Space>
    )
}
