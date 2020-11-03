import 'jest-styled-components'
import React from 'react'
import Slider from '../slider'
import { mountWithTheme } from '../../utils/testUtils'
import { palette } from '../../styles'
describe('Slider Test', () => {
    it("should render Slider",()=>{
        const wrap=mountWithTheme(<Slider/>)
        expect(wrap.find("#slider-base")).toBeTruthy()
    })

    it("should be vertical",()=>{
        const wrap=mountWithTheme(<Slider vertical/>)
        expect(wrap.find("#slider-base").first()).toHaveStyleRule("width","12px")
    })

    it("should render markers",()=>{
        const marks = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: {
              style: {
                color: '#f50',
              },
              label: <strong>100°C</strong>,
            },
          };
          const wrap=mountWithTheme( <Slider  marks={marks}  />)
          expect(wrap.find("#slider-dot")).toBeTruthy()
    })
    it("should have default value",()=>{
        const wrap=mountWithTheme( <Slider  defaultValue={50} />)
        expect(wrap.find("#track").first().prop('style')).toHaveProperty("right","50%")
    })

    it("should render active marker",()=>{
        const marks = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: {
              style: {
                color: '#f50',
              },
              label: <strong>100°C</strong>,
            },
          };
          const wrap=mountWithTheme( <Slider  marks={marks}  />)
          expect(wrap.find("#slider-dot").first()).toHaveStyleRule("border","2px solid "+palette.primary)
    })
})
