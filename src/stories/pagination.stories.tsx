import React, { useState } from 'react'
import { Pagination} from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Navigation / Pagination',
    component: Pagination as any,
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
        <Pagination total={20} />
    )
}