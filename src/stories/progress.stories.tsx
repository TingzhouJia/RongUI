import React from 'react'
import { Progress } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Feedback / Progress',
    component: Progress as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"Display the current progress of an operation flow.",
        docs: {
            description: {
                component:"<h3>When To Use?</h3><ul><li>If it will take a long time to complete an operation, you can use Progress to show the current progress and status.</li><li>When you need to display the completion percentage of an operation.</li></ul>"
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
            },
            control:{}
        },
        className:{
            description:"The className object of container<br/><h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        },
        percentage:{
            description:"Percentage of progress<h6>type:</h6>",
            table:{
                type:{
                    summary:"number"
                }
            },
            type:{
                required:true
            }
        },
        format:{
            description:"Format function to render percentage<h6>type:</h6>",
            table:{
                type:{
                    summary:"(percent:number)=>ReactNode"
                }
            },
        },
        status:{
            description:"Status of progress<h6>type:</h6>",
            table:{
                type:{
                    summary:"'error' | 'success' | 'normal'"
                },
                defaultValue:{
                    summary:"normal"
                }
            }
        },
        showInfo:{
            description:"Show progress percentage or not<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"true"
                }
            }
        },
        color:{
            description:"Color of progress bar<h6>type:</type>",
            table:{
                type:{
                    summary:"string"
                }
            }
        },
        background:{
            description:"Background of progress bar<h6>type:</type>",
            table:{
                type:{
                    summary:"string"
                }
            }
        },
        width:{
            description:"Width of progress bar<h6>type:</type>",
            table:{
                type:{
                    summary:"number"
                }
            }
        }
    },

}

export const Basic = () => {
    return (
        <>
            <Progress percentage={30} />
            <Progress percentage={50} status="error" />
            <Progress percentage={70} active />
            <Progress percentage={100} />
            
        </>
    )
}

export const NotShowInfo=()=>{
    return (<Progress percentage={50} showInfo={false} />)
}