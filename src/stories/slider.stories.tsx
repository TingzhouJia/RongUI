import React, { useState } from 'react'
import { Slider, Space } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Data Collection / Slider',
    component: Slider as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"A Slider component for displaying current value and intervals in range.",
        docs: {
            description: {
                component:"<h3>When To Use?</h3><ul><li>When you need to pick a value from ranges</li></ul>"
            }
        }
    },
    argTypes: {
        min:{
            description:"Minimum value of slider<h6>type:</h6>",
            table:{
                type:{
                    summary:"number"
                },
                defaultValue:{
                    summary:"0"
                }
            },
            control:{}
        },
        max:{
            description:"Maximum value of slider<h6>type:</h6>",
            table:{
                type:{
                    summary:"number"
                },
                defaultValue:{
                    summary:"100"
                }
            }
        },
        disabled:{
            description:"If true, the slider will not be interactable<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        style: {
            description: "The  style object of container<br/><h6>type:</h6>",
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
        value:{
            description:"Value of slider<h6>type:</h6>",
            table:{
                type:{
                    summary:"number"
                }
            }
        },
        defaultValue:{
            description:"Default value of slider<h6>type:</h6>",
            table:{
                type:{
                    summary:"number"
                }
            }
        },
        vertical:{
            description:"Vertical style slider<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        onChange:{
            description:"Callback when scroll slider<h6>type:</h6>",
            table:{
                type:{
                    summary:"(value)=>void"
                },
              
            }
        },
        markers:{
            description:"Using marks property to mark a graduated slider.<h6>type:</h6>",
            table:{
                type:{
                    summary:"{ number: ReactNode } | { number: { style: object, label: ReactNode } }"
                },
              
            }
        }
    },

};


export const Basic=()=>{
    const [value, setvalue] = useState(0)
    return (
       <>
        <Slider onChange={(e)=>setvalue(e)} />
        {value}
       </>
        
)
}

export const Vertical=()=>{
    return (<div style={{height:'400px'}}>
    <Slider vertical />
    </div>)
}

export const WithMarker=()=>{
    const marks = {
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: {
          style: {
            color: '#f50',
          },
          label: <strong>100°C</strong>,
        },
      };
    return (<Slider marks={marks} defaultValue={37} />)      
}