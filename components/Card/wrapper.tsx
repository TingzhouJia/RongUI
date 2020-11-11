import styled, { css } from "styled-components";
import { expressiveness, palette } from "../styles";

export const clearfix = css`
&::before {
    display: table;
    content: '';
  }
  &::after {
    display: table;
    clear: both;
    content: '';
  }
  
`

export const CardContain = styled.div<{ hoverable?: boolean, size?: string, bordered?: boolean }>`
  position: relative;
  background: ${props=>props.theme.colors.background} ;
  font-size:${props=>props.size==='small'?'14px':'16px'};
  border-radius: 2px ;
  ${props => props.hoverable ? hover : null}
  border:${props => props.bordered ? `1px solid ${props.theme.colors.borderColor}` : 'none'};

`

export const CardHeader = styled.div<{ size?: string }>`
    min-height: ${props => props.size === 'small' ? '36px' : '48px'};
    margin-bottom: -1px; 
    padding: ${props => props.size ==='small'? '0 12px' : '0 24px'};
    color: ${props=>props.theme.colors.fontColor};
    font-weight: 500;
    font-size: ${props => props.size === 'small' ? '14px' : '16px'};
    background: #fff ;
    border-bottom: 1px solid ${props=>props.theme.colors.borderColor};
    border-radius: 2px 2px 0 0;
    display: flex;
    align-items: center;
    ${clearfix}
`

export const CardCover = styled.div`
 & > * {
      display: block;
      width: 100%;
    }

    img {
      border-radius: 2px 2px 0 0;
    }
`

export const CardBody = styled.div<{ size?: string }>`
padding:${props => props.size === 'small' ? '12px' : '24px'};

`

export const CardExtra = styled.div<{ size?: string }>`
    float: right;
    margin-left: auto;
    padding:${props=>props.size==='small'?'8px 0':'16px 0'};
    font-weight: 400;
    font-size: ${props => props.size === 'small' ? '12px' : '14px'};
`

export const CardActions = styled.ul<{size?:string}>`
    margin: 0;
    padding: 0;
    list-style: none;
    background: #fff ;
    border-top: 1px solid ${props=>props.theme.colors.borderColor};
    ${clearfix}
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    & > li {
      flex:1;
      margin: ${props=>props.size==='small'?'6px':'12px'} 0;
      color: rgba(0,0,0,0.7);
      text-align: center;
      display: flex;
      justify-content:center;
      align-items:center;
        min-width: 32px;
        font-size: ${props=>props.size==='small'?'14px':'16px'};
        line-height: ${props=>props.size==='small'?'22px':'24px'};
        cursor: pointer;
        &:hover {
          color: ${palette.primary};
          transition: color 0.3s;
        }
        a,
        > .anticon {
          display: inline-block;
          width: 100%;
          color:rgba(0,0,0,0.45);
          line-height: 22px;
          transition: color 0.3s;

          &:hover {
            color: ${palette.primary};
          }
        }

        > .anticon {
          font-size: 14px;
          line-height: 22px;
        }

      &:not(:last-child) {
        border-right: 1px solid #d9d9d9;
      }
    }

`

export const CardHeaderTitle = styled.h3<{small?:boolean}>`
      flex: 1;
      margin:0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding:${props=>props.small?'8px 0':'16px 0'};
`



export const CardMetaAvatar = styled.div`
 float: left;
 padding-right: 16px;
`

export const CardMetaTitle = styled.div`
overflow: hidden;
      color: ${props=>props.theme.colors.fontColor};
      font-weight: 500;
      
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
`

export const CardMetaDescription = styled.div`
    color: ${props=>props.theme.colors.fontColor};
`

export const CardMetaDetail = styled.div`
overflow: hidden;
      > div:not(:last-child) {
        margin-bottom: 8px;
      }
`
export const CardMetaBase = styled.div`
margin: -4px 0;
${clearfix}
`
export const hover = css`
cursor: pointer;
    transition: box-shadow 0.3s, border-color 0.3s;
    &:hover {
      border-color: ${props=>props.theme.colors.borderColor};
      box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12),
  0 5px 12px 4px rgba(0, 0, 0, 0.09);
    }
`

