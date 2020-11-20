import React, { useState } from 'react'
import { Select } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Data Collection / Select',
    component: Select as any,
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
        <Select style={{width:'200px'}}>
            <Select.Option value="Rong">
                Rong UI 1
            </Select.Option>
            <Select.Option value="Rong2">
                Rong UI 2
            </Select.Option>
        </Select>
    )
}

export const Multiple = () => {
    return (
        <Select multiple style={{width:'200px'}}>
            <Select.Option value="Rong">
                Rong UI 1
            </Select.Option>
            <Select.Option value="Rong2">
                Rong UI 2
            </Select.Option>
        </Select>
    )
}

export const Group = () => {
    return (
        <Select multiple style={{width:'200px'}}>
            <Select.OptGroup label="group">
                <Select.Option value="Rong">
                    Rong UI 1
        </Select.Option>
            </Select.OptGroup>
            <Select.Option value="Rong2">
                Rong UI 2
        </Select.Option>
        </Select>
    )
}