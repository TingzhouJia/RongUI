import React, { useState } from 'react'
import { Steps } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Navigation / Steps',
    component: Steps as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"A navigation bar that guides users through the steps of a task.",
        docs: {
            description: {
                component:"<h3>When To Use?</h3>When a given task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier."
            }
        }
    },
    argTypes: {
        style:{
            description:"The style object of container<br/><h6>type:</h6>",
            table:{
                type:{
                    summary:"CSSProperties"
                }
            }
        },
        className:{
            description:"The className object of container<br/><h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        },
        status:{
            description:"Status of current step<h6>type</h6>",
            table:{
                type:{
                    summary:"'error' | 'process' | 'finish' | 'wait'"
                },
                defaultValue:{
                    summary:"process"
                }
            }
        },
        current:{
            description:"Current step<h6>type:</h6>",
            table:{
                type:{
                    summary:"number"
                },
                defaultValue:{
                    summary:"1"
                }
            },
            type:{
                required:true
            }
        },
        initial:{
            description:"Initial step<h6>type:</h6>",
            table:{
                type:{
                    summary:"number"
                },
                defaultValue:{
                    summary:"1"
                }
            },
            type:{
                required:true
            }
        },
        processDot:{
            description:"Dot type progress,customize the progress dot by setting it to a function.<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean | (iconDot, {index, status, title, description}) => ReactNode"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        onChange:{
            description:"Trigger when Step is changed.<h6>type:</h6>",
            table:{
                type:{
                    summary:"(current:number)=>void"
                },
    
            }
        }
    },

};

export const Basic = () => {
    return (
        <Steps  current={1}>
            <Steps.Step  title="finished" description="This is description" />
            <Steps.Step title="In progress" description="This is description" />
            <Steps.Step title="Waiting" description="This is description" />
        </Steps>
    )
}

export const Status = () => {
    return (
        <Steps  current={1}>
            <Steps.Step  status="error" title="error" description="This is description" />
            <Steps.Step title="In progress" description="This is description" />
            <Steps.Step title="Waiting" description="This is description" />
        </Steps>
    )
}

export const Dot = () => {
    return (
        <Steps progressDot current={1}>
            <Steps.Step status="error" title="error" description="This is description" />
            <Steps.Step title="In progress" description="This is description" />
            <Steps.Step title="Waiting" description="This is description" />
        </Steps>
    )
}
export const Changable = () => {
    const [value, setvalue] = useState(1)
    return (
        <Steps current={value} onChange={(e)=>setvalue(e)}>
            <Steps.Step title="finished" description="This is description" />
            <Steps.Step title="In progress" description="This is description" />
            <Steps.Step title="Waiting" description="This is description" />
        </Steps>
    )
}
