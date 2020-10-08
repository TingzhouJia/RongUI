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
  background: #fff ;
  border-radius: 2px ;
  ${props => props.hoverable ? hover : null}
  border:${props => props.bordered ? '1px solid #f0f0f0' : 'none'};

`

export const CardHeader = styled.div<{ size?: string }>`
 min-height: ${props => props.size === 'small' ? '36px' : '48px'};
    margin-bottom: -1px; 
    padding: 0 ${props => props.size === 'small' ? '12px' : '24px'};
    color: rgba(0,0,0,0.85);
    font-weight: 500;
    font-size: ${props => props.size === 'small' ? '14px' : '16px'};
    background: #fff ;
    border-bottom: 1px solid rgba(0,0,0,0.45);
    border-radius: 2px 2px 0 0;
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
    padding:${props => props.size === 'small' ? '8px' : '16px'};
    color: rgba(0,0,0,0.85);
    font-weight: normal;
    font-size: ${props => props.size === 'small' ? '14px' : '16px'};
`

export const CardActions = styled.ul`
margin: 0;
    padding: 0;
    list-style: none;
    background: #fff ;
    border-top: 1px solid rgba(0,0,0,0.45);
    ${clearfix}

    & > li {
      float: left;
      margin: 12px 0;
      color: rgba(0,0,0,0.7);
      text-align: center;
      > span {
        position: relative;
        display: block;
        min-width: 32px;
        font-size: 16px;
        line-height: 24px;
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
      }

      &:not(:last-child) {
        border-right: 1px solid rgba(0,0,0,0.45);
      }
    }

`

export const CardHeaderTitle = styled.div`
display: inline-block;
      flex: 1;
      padding: 16px 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
`

export const CardHeaderWrap = styled.div`
   display: flex;
      align-items: center;
`

export const CardMetaAvatar = styled.div`
 float: left;
 padding-right: 16px;
`

export const CardMetaTitle = styled.div`
overflow: hidden;
      color: rgba(0,0,0,0.85);
      font-weight: 500;
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
`

export const CardMetaDescription = styled.div`
    color:rgba(0,0,0,0.45);
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
      border-color: ${expressiveness.shadowLarge};
      box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12),
  0 5px 12px 4px rgba(0, 0, 0, 0.09);
    }
`

