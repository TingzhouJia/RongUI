import styled from "styled-components";

export const ParaWrap=styled.ul<{}>`

        padding: 0;
      > li {
        width: 100%;
        height: 16px;
        list-style: none;
        background: #f2f2f2;

        &:last-child:not(:first-child):not(:nth-child(2)) {
          width: 61%;
        }

        + li {
          margin-top: 16px;
        }
      }
`

export const Elem=styled.span<{size?:'large'|'small'|'default',shape?:'circle'|'square'|'round'}>`
 display: inline-block;
    width: auto;
`

export const ElemBtn=styled(Elem)`
 display: inline-block;
  vertical-align: top;
  background:#f2f2f2;
  border-radius: 2px;
`

export const ElemTitle=styled.h3`
    width: 100%;
      height: 16px;
      margin-top: 16px;
      background: #f2f2f2;
`

export const ElemAvatar=styled.div`
 display: inline-block;
  vertical-align: top;
  background:  #f2f2f2;
`

export const ElemHeader=styled.div`
 display: table-cell;
    padding-right: 16px;
    vertical-align: top;
`

export const ElemContent=styled.div`
 display: table-cell;
    width: 100%;
    vertical-align: top;
`

export const SkeletonBase=styled.div`
  display: table;
  width: 100%;

`