import React from 'react'
import Grid from '../index'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { ThemeStore } from '../../styles'

describe('Grid Test', () => {
    it("render grid",()=>{
        const wrap=renderer.create( <ThemeProvider theme={ThemeStore}><Grid.Container  gap={2} justify="center">
        <Grid xs={6}><div style={{width:"60px",height:"60px",background:"red"}}></div></Grid>
        <Grid xs={6}><div style={{width:"60px",height:"60px",background:"red"}}></div></Grid>
        <Grid xs={6}><div style={{width:"60px",height:"60px",background:"red"}}></div></Grid>
      </Grid.Container></ThemeProvider>).toJSON()
      expect(wrap).toMatchSnapshot()
    })
})
