import React, { useEffect, useRef, useState } from 'react'
import useRealShape from './realShape'
import styled from 'styled-components'


interface Props {
  isExpanded?: boolean
  delay?: number
}


export type ExpandProps = Props 
const ExpandWrap=styled.div<{visble?:boolean}>`
     padding: 0;
          margin: 0;
          height: 0;
          overflow: hidden;
          visibility: ${props=>props.visble ? 'visible' : 'hidden'};
          transition: height 200ms ease;
`
const ContentWrap=styled.div<{height?:string}>`
     height: ${props=>props.height};
          visibility: visible;
`
const Expand: React.FC<React.PropsWithChildren<ExpandProps>> = ({
  isExpanded=false,
  delay=200,
  children,
}) => {
  const [height, setHeight] = useState<string>(isExpanded ? 'auto' : '0')
  const [selfExpanded, setSelfExpanded] = useState<boolean>(isExpanded)
  const [visible, setVisible] = useState<boolean>(isExpanded)
  const contentRef = useRef<HTMLDivElement>(null)
  const entryTimer = useRef<number>()
  const leaveTimer = useRef<number>()
  const resetTimer = useRef<number>()
  const [state, updateShape] = useRealShape<HTMLDivElement>(contentRef)

  useEffect(() => setHeight(`${state.height}px`), [state.height])
  useEffect(() => {
    // show element or reset height.
    // force an update once manually, even if the element does not change.
    // (the height of the element might be "auto")
    if (isExpanded) {
      setVisible(isExpanded)
    } else {
      updateShape()
      setHeight(`${state.height}px`)
    }

    // show expand animation
    entryTimer.current = window.setTimeout(() => {
      setSelfExpanded(isExpanded)
      clearTimeout(entryTimer.current)
    }, 30)

    // Reset height after animation
    if (isExpanded) {
      resetTimer.current = window.setTimeout(() => {
        setHeight('auto')
        clearTimeout(resetTimer.current)
      }, delay)
    } else {
      leaveTimer.current = window.setTimeout(() => {
        setVisible(isExpanded)
        clearTimeout(leaveTimer.current)
      }, delay / 2)
    }

    return () => {
      clearTimeout(entryTimer.current)
      clearTimeout(leaveTimer.current)
      clearTimeout(resetTimer.current)
    }
  }, [isExpanded])

  return (
    <ExpandWrap visble={selfExpanded}>
      <ContentWrap ref={contentRef} height={height}>
        {children}
      </ContentWrap>
    </ExpandWrap>
  )
}

export  {Expand}