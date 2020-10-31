import React from 'react'
import 'jest-styled-components'
import Divider from '../index'
import { mount } from 'enzyme'

describe('Devider Test', () => {
    it("should render plain divider", () => {
        const wrap = mount(<>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
            <Divider />
        </>)
        expect(wrap.find("#divider-base").first()).toHaveStyleRule("border-top", "1px solid rgba(0,0,0,0.26)")
    })

    it("should render dashed divider", () => {
        const wrap = mount(<>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
       </p>
            <Divider dashed/>
        </>)
        expect(wrap.find("#divider-base").first()).toHaveStyleRule("border-style", "dashed")
    })

    it("should render divider with children", () => {

        const wrap = mount(<>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                probare, quae sunt a te dicta? Refert tamen, quo modo.
           </p>
            <Divider>aaaa</Divider>
        </>)
        expect(wrap.find("#divider-item").first()).toBeTruthy()
    })


})
