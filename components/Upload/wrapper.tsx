import styled, { css } from "styled-components";
import { UploadFileStatus, UploadListType } from "./upload";

export const TextIcon=styled.div``


export const ListItemFile=styled.div<{notLoading:boolean}>`
      width: 48px;
      height: 48px;
      line-height: 54px;
      text-align: center;
      opacity: 0.8;
      & > img {
        display: block;
      width: 48px;
      height: 48px;
      overflow: hidden;
      }

`

export const ListItemA=styled.a<{isFile?:boolean}>``

export const ListItemImage=styled.img`
max-width: 100%;
`

export const ListItemCardAction=styled.span<{isPic:boolean}>``

export const ListItemAction=styled.span``

export const ListItemSpan=styled.span`
        display: block;
        flex: auto;
`

export const ListItemContainer=styled.div<{type:UploadListType}>`
    ${
        props=>props.type==='picture-card'?css`
        display: inline-block;
        width: 104px;
        height: 104px;
        margin: 0 2px 2px 0;
        vertical-align: top;
        `:css`
        &::before {
        display: table;
        width: 0;
        height: 0;
        content: '';
      }
        `
    }
`

export const ListItemUpload=styled.div<{status:UploadFileStatus,type:UploadListType}>`
    position: relative;
    height: 20px;
    margin-top: 2px;
    font-size: 14px;
    ${
        props=>props.type!=='text'?css`
        position: relative;
        height: 66px;
        padding: 2px;
        border: 1px solid ${props.theme.colors.borderColor};
        border-radius: 2px;
      &:hover {
        background: transparent;
      }

        `:null
    }
    ${
        props=>props.status==="uploading"?css`border-style:dashed;`:null
    }
`

export const ListItemInfo=styled.div``

export const ListItemProgress=styled.div``

export const UploadListContainer=styled.div``

export const UploadSelectDiv=styled.div<{disabled?:boolean,listType:UploadListType}>``

export const UploadPictureWrapper=styled.span``