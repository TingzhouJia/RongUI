import 'jest-styled-components'
import {mount} from 'enzyme'
import React from 'react'
import Tree, { FileTreeValue } from '../tree'
import { mountWithTheme } from '../../utils/testUtils'

describe('File Tree Test', () => {
    it("should render file ",()=>{
        const wrap=mount(<Tree.File  name="file1"></Tree.File>)
        expect(wrap.find("#file-name")).toBeTruthy()
    })

    it("should render folder",()=>{
        const wrap=mount(<Tree.Folder   name="folder1"></Tree.Folder>)
        expect(wrap.find("#folder-name")).toBeTruthy()
    })

    it("should have plus button when folder is not empty",()=>{
        const wrap=mountWithTheme(<Tree.Folder   name="folder1">
            <Tree.File  name="file1"></Tree.File>
        </Tree.Folder>)
        expect(wrap.find("#folder-status")).toBeTruthy()
    })

    it("should show files when click folder",()=>{
        const wrap=mountWithTheme(<Tree.Folder   name="folder1">
        <Tree.File  name="file1"></Tree.File>
    </Tree.Folder>)
        wrap.find("#folder-base").first().simulate("click")
        expect(wrap.find("#tree-file-wrap")).toBeTruthy()
    })

    it("should be imperative",()=>{
        const files:FileTreeValue[] = [{
            type: 'directory',
            name: 'bin',
            files: [{
              type: 'file',
              name: 'cs.js',
            }],
          }, {
            type: 'directory',
            name: 'docs',
            files: [{
              type: 'file',
              name: 'controllers.md',
            }, {
              type: 'file',
              name: 'es6.md',
            }, {
              type: 'file',
              name: 'production.md',
            }, {
              type: 'file',
              name: 'views.md',
            }],
          }]
        const wrap=mountWithTheme(
            <Tree value={files}/>
        )
        expect(wrap.find("#folder-base")).toBeTruthy()
        wrap.find("#folder-base").first().simulate('click')
        expect(wrap.find("#tree-file-wrap")).toBeTruthy()
    })
})
