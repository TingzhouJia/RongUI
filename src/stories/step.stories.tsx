import React, { useState } from 'react'
import { Steps } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Navigation / Steps',
    component: Steps as any,
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
        <Steps current={1}>
            <Steps.Step title="finished" description="This is description"/>
            <Steps.Step title="In progress" description="This is description"/>
            <Steps.Step title="Waiting" description="This is description"/>
        </Steps>
    )
}

export const Status=()=>{
    return (
        <Steps current={1}>
            <Steps.Step status="error" title="error" description="This is description"/>
            <Steps.Step title="In progress" description="This is description"/>
            <Steps.Step title="Waiting" description="This is description"/>
        </Steps>
    )
}
