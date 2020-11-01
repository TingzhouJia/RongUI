import React from 'react'
import { TreeIndentSpan } from './wrapper'

interface Props {
  count: number
}

const TreeIndents: React.FC<Props> = ({ count }) => {
  if (count === 0) return null
  return (
    /* eslint-disable react/jsx-no-useless-fragment */
    <>
      {[...new Array(count)].map((_, index) => (
        <TreeIndentSpan id="tree-indent" index={index}></TreeIndentSpan>
      ))}
    </>
    /* eslint-enable */
  )
}

export default TreeIndents