import React from 'react'
import { Divider } from '../../components'
import { themeIt } from './utils/withTheme'
import { Meta } from '@storybook/react/types-6-0';


export default {
    title: 'Layout / Divider',
    component: Divider as any,
    decorators: [themeIt],
    parameters:{
        componentSubtitle:"A divider line separates different content.",
        docs:{
            description:{
                component:"<h3>When To Use?</h3><br/><ul><li>Divide sections of article.</li><li>Divide inline text and links such as the operation column of table.</li></ul>"
                ,
                
            },
            source:{
                type:"code"
            }
        }
    },

    argTypes: {

        type:{
            table:{
                defaultValue: { summary: '"horizontal"' },
            },
            description:'The direction type of divider: <br/><h6>type:</h6><code>"horizontal"</code> | <code>"vertical"</code> ',
            control:{},
            type:'string'
        },
        plain:{
            table:{
                defaultValue: { summary: true },
            },
            description:"Divider text show as plain style<br/><h6>type:</h6><code>Boolean</code>"
        },
        style:{
            description:"The style object of container<br/><h6>type:</h6><code>CSSProperties</code>",
            
        },
        className:{
            description:"The className object of container<br/><h6>type:</h6><code>string</code>",
        },
        orientation:{
            description:`The position of title inside divider<br/><h6>type:</h6><code>"left"</code> | <code>"center"</code> | <code>"right"</code>`,
            table:{
                defaultValue: { summary: '"center' },
            },
        },
        dashed:{
            table:{
                defaultValue: { summary: false },
            },
            description:"Whether line is dashed<br/><h6>type:</h6><code>Boolean</code>"
        },
    },

} as Meta;

export const Basic = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
        </>
    )
}


export const Dashed = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider dashed />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
        </>
    )
}

export const Vertical = () => {
    return (
        <>
            Text
            <Divider type="vertical" />
            <a href="#">Link</a>
            <Divider type="vertical" />
            <a href="#">Link</a>
        </>
    )
}

export const Orientation = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
            <Divider orientation="left">Left Text</Divider>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
            <Divider orientation="right">Right Text</Divider>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
        </>
    )
}