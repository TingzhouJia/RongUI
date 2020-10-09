import styled from "styled-components";

export const CommentsBase=styled.div`
      position: relative;
      background-color: #fff ;
`

export const CommentAvatar=styled.div`
    position: relative;
    flex-shrink: 0;
    margin-right: 12px;
    cursor: pointer;

`
export const CommentImg=styled.img`
        width: 32px;
      height: 32px;
      border-radius: 50%;
`

export const CommentActions=styled.ul`
    margin-top: 12px;
    margin-bottom: inherit;
    padding-left: 0;

    > li {
      display: inline-block;
      color: rgba(0,0,0,0.45);
      > span {
        margin-right: 10px;
        color: rgba(0,0,0,0.45);
        font-size: 12px;
        cursor: pointer;
        transition: color 0.3s;
        user-select: none;

        &:hover {
          color: #595959;
        }
      }
    }
`

export const Content=styled.div`
 position: relative;
    flex: 1 1 auto;
    min-width: 1px;
    font-size: 14px;
    word-wrap: break-word;
`

export const ContentAuthor=styled.div`
     display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-bottom: 4px;
      font-size: 14px;
      & > a,
      & > span {
        padding-right: 8px;
        font-size:12px;
        line-height: 18px;
      }
`

export const AuthorName=styled.span`
 color: rgba(0,0,0,0.85);
        font-size: 14px;
        transition: color 0.3s;
        > * {
          color: rgba(0,0,0,0.85);
          &:hover {
            color:rgba(0,0,0,0.85);
          }
        }
`

export const AuthorDate=styled.span`
        color: rgba(0,0,0,0.45);
        white-space: nowrap;
        cursor: auto;
`

export const ContentDetail=styled.div`
margin-bottom: inherit;
      white-space: pre-wrap;
`

export const NestedChildren=styled.div`
 margin-left: 44px;
`

export const CommentInner=styled.div`
    display: flex;
    padding: 16px 0;

`
