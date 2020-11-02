import styled, { css } from "styled-components";
import { NormalSizes } from "../utils";

export const ItemMeta = styled.div`
      display: flex;

      flex-direction:row;
      max-width: 100%;
      margin-bottom:10px;
`

export const ItemMetaAvatar = styled.div`
margin-right: 16px;
`

export const ItemMetaContent = styled.div`
        flex: 1 0;
        width: 0;
        color: rgba(0,0,0,0.85);
`

export const ItemMetaDescription = styled.div`
        color: #bfbfbf;
        font-size: 14px;
        line-height: 22px;
`

export const ItemMetaTitle = styled.div`
margin-bottom: 4px;
        color: rgba(0,0,0,0.85);
        font-size: 14px;
        line-height: 22px;
        > a {
          color: rgba(0,0,0.85);
          transition: all 0.3s;
          &:hover {
            color: ${props => props.theme.colors.primary};
          }
        }
`

export const ItemAction = styled.ul`
      flex: 0 0 auto;
  
      margin-top:15px;
      margin-bottom:10px;
      padding: 0;
      font-size: 0;
      list-style: none;

    
      
`

export const ItemEachAction = styled.li`
        position: relative;
        display: inline-block;
        padding: 0 15px;
        color: rgba(0,0,0.65);
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        &:first-child {
          padding-left: 0;
        }
`

export const ItemActionSplit = styled.em`
        position: absolute;
        top: 50%;
        right: 0;
        width: 1px;
        height: 14px;
        margin-top: -7px;
        background-color: #bfbfbf;
`

export const ItemMain = styled.div`
      display: flex;
      flex-direction:column;
      align-self:stretch;
       justify-content:space-between;
      flex: 1;
`

export const ItemExtra = styled.div`
 margin-left: 40px;
`

export const ItemWrap = styled.div<{ flex?: boolean, bordered?: boolean, size?: 'small' | 'default' | 'large' }>`
  padding: ${props=>props.size === 'large' ? "16px 24px" : props.size === 'small' ? "8px 16px" : "12px 20px"};
  ${props=>props.bordered ? css`border-bottom: 1px solid #d9d9d9 ;
    &:last-child {
      border-bottom: ${props.bordered ? "1px solid #d9d9d9" : "none"};
    }`: null}
  color: rgba(0,0,0,0.85);
    ${props => props.flex ? css`
    display: flex;
    align-items: center;
    flex-direction:row;
    justify-content: space-between;
    
    `: css`
    display: block;
    max-width: 100%;
    `}
`



export const ItemLi = styled.li<{ flex?: boolean, bordered?: boolean, size?: 'small' | 'default' | 'large' }>`
color: rgba(0,0,0,0.85);
padding: ${props=>props.size === 'large' ? "16px 24px" : props.size === 'small' ? "8px 16px" : "12px 20px"};

${props => props.flex ? css`
    display: flex;
    align-items: center;
    justify-content: space-between;
   
    `: css`
    display: block;
    max-width: 100%;
    `}
    ${props=>props.bordered ? css`border-bottom: 1px solid #d9d9d9 ;
    &:last-child {
      border-bottom: ${props.bordered ? "1px solid #d9d9d9" : "none"};
    }`: null}
    
`



export const ListPagination = styled.div<{bordered?:boolean}>`
    ${props=>props.bordered?css`
        margin: 16px 24px;
    `:null}
`

export const ListHeader = styled.div<{ bordered?: boolean, size?: 'small' | 'default' | 'large' }>`
    font-size:${props=>props.size === 'large' ? '24px' : props.size === 'small' ? '18px' : '22px'};
    padding: ${props=>props.size === 'large' ? '16px 24px' : props.size === 'small' ? '8px 16px' : '12px 20px'};
    ${
      props=>props.bordered?css`border-bottom:1px solid #d9d9d9 ;`:null
    }
`

export const ListFooter = styled.div<{ bordered?: boolean, size?: 'small' | 'default' | 'large' }>`
    background: transparent;
    ${props => props.bordered ? css`
    padding: ${props.size === 'large' ? '16px 24px' : props.size === 'small' ? '8px 16px' : '12px 20px'};
    `: null}
`



export const ListBase = styled.div<{
    layout?: 'vertical' | 'horizontal', bordered?: boolean,
    after?: boolean, size?: NormalSizes, split?: boolean
}>`
    position: relative;
    ${props => props.bordered ? css`
        border: 1px solid #d9d9d9 ;
       
    `: css`border:none;`}
    border-radius: 2px;
& > * {
  outline: none;
}

`
export const ItemsContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`