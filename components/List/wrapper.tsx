import styled from "styled-components";

export const ItemMeta=styled.div`
      display: flex;
      flex: 1;
      align-items: flex-start;
      max-width: 100%;
`

export const ItemMetaAvatar=styled.div`
margin-right: 16px;
`

export const ItemMetaContent=styled.div`
 flex: 1 0;
        width: 0;
        color: rgba(0,0,0,0.85);
`

export const ItemMetaDescription=styled.div`
        color: rgba(0,0,0.65);
        font-size: 14px;
        line-height: 22px;
`

export const ItemMetaTitle=styled.div`
margin-bottom: 4px;
        color: rgba(0,0,0,0.85);
        font-size: 14px;
        line-height: 22px;
        > a {
          color: rgba(0,0,0.85);
          transition: all 0.3s;
          &:hover {
            color: ${props=>props.theme.colors.primary};
          }
        }
`

export const ItemAction=styled.ul`
flex: 0 0 auto;
      margin-left: 48px;
      padding: 0;
      font-size: 0;
      list-style: none;

     
       
        &:first-child {
          padding-left: 0;
        }
`

export const ItemEachAction=styled.li`
        position: relative;
        display: inline-block;
        padding: 0 8px;
        color: rgba(0,0,0.65);
        font-size: 14px;
        line-height: 22px;
        text-align: center;
`

export const ItemActionSplit=styled.em`
        position: absolute;
        top: 50%;
        right: 0;
        width: 1px;
        height: 14px;
        margin-top: -7px;
        background-color: hvs(0,94%);
`

export const ItemMain=styled.div`
 display: block;
      flex: 1;
`

export const ItemExtra=styled.div`
 margin-left: 40px;
`

export const ItemWrap=styled.div<{flex?:boolean}>`
    display: ${props=>props.flex?'flex':'block'};
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    color: rgba(0,0,0,0.85);
`

export const ItemLi=styled(ItemWrap)``