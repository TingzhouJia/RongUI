import React, { useState } from 'react'
import {  Tooltip, Button } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Data Display / Tooltip',
    component: Tooltip as any,
    decorators: [themeIt],
    parameters: {
        docs: {
            description: ''
        }
    }

}

export const Basic=()=>{
    return (
      <div style={{marginTop:'100px'}}>
          <Tooltip text="prompt text">
        <span > tooltip will show on mouse enter.</span>
      </Tooltip>
      </div>
    )
};

export const Direction =()=>{
    const text:React.ReactNode = <span>prompt text</span>;

const buttonWidth = 70;
    return (
        <div style={{marginTop:'100px',marginLeft:'100px'}}>
        <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
          <Tooltip placement="topStart" text={text}>
            <Button>TL</Button>
          </Tooltip>
          <Tooltip placement="top" text={text}>
            <Button>Top</Button>
          </Tooltip>
          <Tooltip placement="topEnd" text={text}>
            <Button>TR</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, float: 'left' }}>
          <Tooltip placement="leftStart" text={text}>
            <Button>LT</Button>
          </Tooltip>
          <Tooltip placement="left" text={text}>
            <Button>Left</Button>
          </Tooltip>
          <Tooltip placement="leftEnd" text={text}>
            <Button>LB</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
          <Tooltip placement="rightStart" text={text}>
            <Button>RT</Button>
          </Tooltip>
          <Tooltip placement="right" text={text}>
            <Button>Right</Button>
          </Tooltip>
          <Tooltip placement="rightEnd" text={text}>
            <Button>RB</Button>
          </Tooltip>
        </div>
        <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
          <Tooltip placement="bottomStart" text={text}>
            <Button>BL</Button>
          </Tooltip>
          <Tooltip placement="bottom" text={text}>
            <Button>Bottom</Button>
          </Tooltip>
          <Tooltip placement="bottomEnd" text={text}>
            <Button>BR</Button>
          </Tooltip>
        </div>
      </div>
    )
};

export const Color=()=>{
    return (
        <Tooltip color="red">
            colorful
        </Tooltip>
    )
};

