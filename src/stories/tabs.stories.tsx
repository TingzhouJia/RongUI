import React, { useState } from 'react'
import { Tabs } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Data Display / Tabs',
    component: Tabs as any,
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
        <Tabs value="1">
            <Tabs.Pane tab="tab1" tabKey="1">
                content 1
            </Tabs.Pane>
        </Tabs>
    )
}

