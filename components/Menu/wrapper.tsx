import styled, { css } from "styled-components";


export const ItemDivider = styled.li``

export const ItemWrapper = styled.li<{ actived?: boolean, selected?: boolean, disabled?: boolean }>``

export const ItemGroupWrapper = styled.li`
`

export const ItemGroupTitleWrapper = styled.div``

export const ItemGroupList = styled.ul``


export const SubMenuTitle = styled.div<{ vertical?: boolean }>`
    position: relative;
    display: block;
    height: 40px;
    line-height:40px;
    ${
    props => props.vertical ? css`
        margin:0;
        `: css`
        margin-top: 4px;
        margin-bottom: 4px;
        `
    }
    padding: 0 16px;
    padding-right: 34px;
    width: calc(100% + 1px);
    overflow: hidden;
    line-height: 40px;
    text-overflow: ellipsis;
`

export const SubMenuTitleIcon=styled.span`
    min-width: 14px;
    margin-right: 10px;
    font-size: 14px;
`

export const SubMenuTitleArrow=styled.i`
    position: absolute;
    top: 50%;
    right: 16px;
    width: 10px;   
    transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
`