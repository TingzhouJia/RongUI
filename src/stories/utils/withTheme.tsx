import {RongTheme,DefaultLightTheme} from '../../../components'
import React from 'react'



export const themeIt=(Story:any) => (
    <RongTheme theme={DefaultLightTheme} mode="light">
      <Story />
    </RongTheme>
  )