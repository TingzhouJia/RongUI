import styled from "styled-components";


export const MenuWrapper=styled.ul<{withSub?:boolean}>`
    border-radius: 2px;
    margin: 0;
    list-style: none;
    display: inline-block;
    min-width: 111px;
    height: 180px;
    padding: 4px 0;
    overflow: auto;
    vertical-align: top;

`

export const MenuItemWrapper=styled.li<{disabled?:boolean,focused?:boolean}>`
    font-weight: 600;
    padding: 5px 12px;
    padding-right:24px;
    overflow: hidden;
    position:relative;
    line-height: 22px;
    white-space: nowrap;
    text-overflow: ellipsis;
   & , &>* {
    cursor: ${
        props=>props.disabled?"not-allowed":"pointer"
    };
   } 
&:hover {
    background: #f5f5f5;
}
`
export const MenuItemIcon=styled.span`
    right: 12px;
    color: rgba(0,0,0,.45);
    font-size: 10px;
`