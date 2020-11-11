import styled from "styled-components";

export const SeperatorWrapper=styled.span`
display: inline-flex;
 margin: 0 8px;
 user-select: none;
 pointer-events: none;
 color: rgba(0,0,0,0.45);
 align-items: center;
`

export const Nav = styled.nav`
      margin: 0;
          padding: 0;
          line-height: inherit;
          color: #d9d9d9;
          font-size: 14px;
          box-sizing: border-box;
          display: flex;
          align-items: center;

          & > span:last-child {
    color: black;
    opacity:0.85;
    a {
      color: ${props => props.theme.colors.primary};
      cursor:pointer;
    }
  }
`

export const LinkWrapper = styled.a`
 color:${props=>props.theme.colors.fontColor};
    transition: color 0.3s;
    cursor:pointer;
    & >  span,
    >  a {
      margin-left: 4px;
    }
`
export const SpanWrapper = styled.span(LinkWrapper)