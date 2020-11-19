import React from 'react'
import { Alert } from '../../components'
import { themeIt } from './utils/withTheme'
export default {
    title: 'Data Display / Alert',
    component: Alert,
    decorators: [themeIt],
    parameters: {
        docs: {
            description: 'alert'
        }
    },
    argTypes: {
        message: { control: 'text', name: 'message', description: 'content of message', type: { name: 'string', required: true }, },
        type: { name: 'type', description: 'info | error | wanring | success ', },
        className: { name: 'className', description: 'classname for alert' },
        onClick: { name: 'onClick', description: 'onclick action' },
        description: { name: 'description', description: '' },
        closeText: { name: 'closeText', description: 'customized close button' },
        afterClose: { name: 'afterClose', description: 'afterClose callback' }
    },

}

export const Basic = () => {
    return (<Alert message="hello" />)
};

export const Status = () => (<>

    <Alert type="info" message="info" />
    <br />
    <Alert type="error" message="error" />
    <br />
    <Alert type="warning" message="warning" />
    <br />
    <Alert type="success" message="success" />
</>);

export const Closable = () => {
    return (<Alert message="close" closable />)
};

export const withDescription = () => {
    return <Alert message="title" description="description" />
};

export const withIcon = () => {
    return (
        <>
        <Alert message="title" showIcon />
        <br/>
        <Alert message="title" description="description" showIcon />
        </>
    )
};

export const closeText = () => {
    return <Alert message="title" showIcon closeText="close" />
};

