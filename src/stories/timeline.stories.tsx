import React, { useState } from 'react'
import { Timeline } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Data Display / Timeline',
    component: Timeline as any,
    decorators: [themeIt],
    parameters: {
        docs: {
            description: ''
        }
    },
    argTypes: {

    },
}

export const Basic = () => {
    return <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>

    </Timeline>
}

export const WithStatus=()=>{
    return <Timeline>
    <Timeline.Item status="disabled">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item status="success">Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item status="error">Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
</Timeline>
}

export const WithLabel=()=>{
    return (
        <Timeline >
        <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
        <Timeline.Item>Technical testing</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
      </Timeline>
    )
}

export const Mode=()=>{
    return  <Timeline mode="right" >
    <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
    <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
    <Timeline.Item>Technical testing</Timeline.Item>
    <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
  </Timeline>
}