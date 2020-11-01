import React from 'react'
import Grid from '../index'
import { mount } from 'enzyme'
import { shallowWithTheme } from '../../utils/testUtils'

describe('Grid Test', () => {
    it("render grid",()=>{
        const wrap=shallowWithTheme( <Grid.Container gap={2} justify="center">
        <Grid xs={6}><div style={{width:"60px",height:"60px",background:"red"}}></div></Grid>
        <Grid xs={6}><div style={{width:"60px",height:"60px",background:"red"}}></div></Grid>
        <Grid xs={6}><div style={{width:"60px",height:"60px",background:"red"}}></div></Grid>
      </Grid.Container>)
      expect(wrap).toMatchSnapshot()
    })
})
