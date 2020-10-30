import { mount } from "enzyme";
import React from "react";
import Checkbox from "..";

describe('Checkbox test',()=>{

    it('should responses hover events', () => {
        const onMouseEnter = jest.fn();
        const onMouseLeave = jest.fn();
    
        const wrapper = mount(<Checkbox onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />);
    
        wrapper.find('label').simulate('mouseenter');
        expect(onMouseEnter).toHaveBeenCalled();
    
        wrapper.find('label').simulate('mouseleave');
        expect(onMouseLeave).toHaveBeenCalled();
      });
    
      it("should handle click events",()=>{
        const onChange = jest.fn();
        const event = {
            preventDefault() {},
            target: { value: 'the-value' }
          };
        const wrapper = mount(<Checkbox onChange={onChange} />);
        wrapper.find("input").at(0).simulate('change',event)
        expect(onChange).toHaveBeenCalled();

      })
      it("should not click when disabled",()=>{
        const onChange = jest.fn();
        const wrapper = mount(<Checkbox disabled onChange={onChange} />);
        wrapper.find("input").at(0).simulate('change')
        expect(onChange.mock.calls.length).toBe(0);
      })

})