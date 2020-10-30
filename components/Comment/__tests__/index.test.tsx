import 'jest-styled-components'
import React from 'react'
import { mount } from 'enzyme'
import Comment from '../index'

describe('Comment Test', () => {
    it("shoudl render comment", () => {
        const wrap = mount(<Comment style={{ width: '200px' }} avatar={
            <img
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
            />
        }
            datetime={<span>2013/09/21</span>}
            actions={[
                <a>aaa</a>

            ]}
            author={<a>Han Solo</a>}
            content={
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully
                    and efficiently.
          </p>
            }></Comment>)
        expect(wrap.find("#comment-detail > p")).toBeTruthy()
        expect(wrap.find("#comment-avatar > img")).toBeTruthy()
        expect(wrap.find("#comment-author-date > span")).toBeTruthy()
        expect(wrap.find("#comment-autor-name > a")).toBeTruthy()
        expect(wrap.find("#comment-detail > p")).toBeTruthy()
    })

    it("should have level when using nested comment", () => {
        const wrap = mount(<Comment
            content={
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully
                    and efficiently.
          </p>
            }>
            <Comment 
                content={
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
          </p>
                }></Comment>
        </Comment>)
        expect(wrap.find("#nested-comment")).toBeTruthy()
    })
})
