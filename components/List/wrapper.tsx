import styled, { css } from "styled-components";

export const ItemMeta = styled.div`
      display: flex;
      flex: 1;
      align-items: flex-start;
      max-width: 100%;
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
        color: rgba(0,0,0.65);
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
      margin-left: 48px;
      padding: 0;
      font-size: 0;
      list-style: none;

    
        &:first-child {
          padding-left: 0;
        }
`

export const ItemEachAction = styled.li`
        position: relative;
        display: inline-block;
        padding: 0 8px;
        color: rgba(0,0,0.65);
        font-size: 14px;
        line-height: 22px;
        text-align: center;
`

export const ItemActionSplit = styled.em`
        position: absolute;
        top: 50%;
        right: 0;
        width: 1px;
        height: 14px;
        margin-top: -7px;
        background-color: hvs(0,94%);
`

export const ItemMain = styled.div`
 display: block;
      flex: 1;
`

export const ItemExtra = styled.div`
 margin-left: 40px;
`

export const ItemWrap = styled.div<{ flex?: boolean, bordered?: boolean, size?: 'small' | 'default' | 'large' }>`
    ${props => props.flex ? css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${props.size === 'large' ? "16px 24px" : props.size === 'small' ? "8px 16px" : "12px 0"};
    color: rgba(0,0,0,0.85);
    ${props.bordered ? css`border-bottom: 1px solid hsv(0,0,94%);
    &:last-child {
      border-bottom: ${props.bordered ? "1px solid hsv(0,0,94%)" : "none"};
    }`: null}
    `: css`
    display: block;
    max-width: 100%;
    margin-bottom: 16px;
    padding-top: 0;
    padding-bottom: 0;
    border-bottom: none;
    `}
`

export const ItemLi = styled.li<{ flex?: boolean, bordered?: boolean, size?: 'small' | 'default' | 'large' }>`
${props => props.flex ? css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${props.size === 'large' ? "16px 24px" : props.size === 'small' ? "8px 16px" : "12px 0"};
    color: rgba(0,0,0,0.85);
    ${props.bordered ? css`border-bottom: 1px solid hsv(0,0,94%);
    &:last-child {
      border-bottom: ${props.bordered ? "1px solid hsv(0,0,94%)" : "none"};
    }`: null}
    `: css`
    display: block;
    max-width: 100%;
    margin-bottom: 16px;
    padding-top: 0;
    padding-bottom: 0;
    border-bottom: none;
    `}
`

export const ListPagination = styled.div<{bordered?:boolean}>`
    ${props=>props.bordered?css`
        margin: 16px 24px;
    `:null}
`

export const ListHeader = styled.div<{ bordered?: boolean, size?: 'small' | 'default' | 'large' }>`
    background: transparent;
    padding-top: 12px;
    padding-bottom: 12px;
    ${props => props.bordered ? css`
    padding-right: ${props.size === 'large' ? '24px' : props.size === 'small' ? '12px' : 0};
    padding-left: ${props.size === 'large' ? '24px' : props.size === 'small' ? '12px' : 0};
    `: null}
`

export const ListFooter = styled.div<{ bordered?: boolean, size?: 'small' | 'default' | 'large' }>`
    background: transparent;
    padding-top: 12px;
    padding-bottom: 12px;
    ${props => props.bordered ? css`
    padding-right: ${props.size === 'large' ? '24px' : props.size === 'small' ? '12px' : 0};
    padding-left: ${props.size === 'large' ? '24px' : props.size === 'small' ? '12px' : 0};
    `: null}
`

export const ListBase = styled.div<{
    layout?: 'vertical' | 'horizontal', bordered?: boolean,
    after?: boolean, size?: string, split?: boolean
}>`
    position: relative;
    ${props => props.bordered ? css`
        border: 1px solid hsv(0, 0, 85%);
        border-radius: 2px;
    `: null}
* {
  outline: none;
}

`
export const ItemsContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`