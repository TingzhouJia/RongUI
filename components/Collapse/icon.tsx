import React from 'react'
import styled from 'styled-components'

interface Props {
  active?: boolean
}
const Wrap=styled.svg<{active?:boolean}>`
 transition: transform 200ms ease;
 transform: rotateZ(${props=>props.active ? '0' : '-90deg'});
 & {
     outline:none;
 }
`
const CollapseIcon: React.FC<Props> = ({active}) => {
  return (
    <Wrap
    active={active}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      style={{ color: 'currentColor' }}>
      <path d="M6 9l6 6 6-6" />
    </Wrap>
  )
}

export default CollapseIcon