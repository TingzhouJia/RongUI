import React from 'react'
import { Progress } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Feedback / Progress',
    component: Progress as any,
    decorators: [themeIt],
    parameters: {
        docs: {
            description: ''
        }
    },
    argTypes: {

    },

};

export const Basic = () => {
    return (
        <>
            <Progress percentage={30} />
            <Progress percentage={50} status="error" />
            <Progress percentage={70} active />
            <Progress percentage={100} />
            <Progress percentage={50} showInfo={false} />
        </>
    )
}