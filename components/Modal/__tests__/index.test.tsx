import { ReactWrapper } from "enzyme"
import { mountWithTheme, updateWrapper, nativeEvent } from "../../utils/testUtils"
import React from "react"
import Modal from "../modal"

export const expectModalIsOpened = (wrapper: ReactWrapper) => {
    expect(wrapper.find('#rong-modal-content').length).not.toBe(0)
  }
  
  export const expectModalIsClosed = (wrapper: ReactWrapper) => {
    expect(wrapper.find('#rong-modal-content').length).toBe(0)
  }

describe('Modal test', () => {
    
  it('should trigger event when modal changed', async () => {
    const openHandler = jest.fn()
    const closeHandler = jest.fn()
    const wrapper = mountWithTheme(
      <Modal visible={false} title={'aaaa'} onOk={openHandler} afterClose={closeHandler}>
        
      </Modal>,
    )
    expectModalIsClosed(wrapper)

    wrapper.setProps({ visible:true} as any)
    await updateWrapper(wrapper, 350)
    expectModalIsOpened(wrapper)

  })

  it("should handle onClose",async ()=>{
    const openHandler = jest.fn()
    const closeHandler = jest.fn()
    const wrapper = mountWithTheme(
      <Modal visible={false} title={'aaaa'} cancelText={'aaaa'} onOk={openHandler} afterClose={closeHandler}>
        
      </Modal>,
    )
    wrapper.setProps({ visible:true} as any)
   

   wrapper.find("#modal-render-root").first().simulate('click')
    await updateWrapper(wrapper, 500)
    expectModalIsClosed(wrapper)
    // expect(closeHandler).toHaveBeenCalled()
  })
})
