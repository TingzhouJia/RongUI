import styled, { css } from "styled-components";


export const Holder = styled.div`
 display: flex;
    width: 100%;
    flex:auto;
    padding-top: 0.625rem;
`

export const TabBase = styled.div`
    display:flex;
    overflow: hidden;
`


export const TabHeader = styled.header<{ bordered?: boolean }>`
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            border-bottom: ${props => props.bordered ? "none" : "1px solid rgba(0,0,0,0.45)"} ;

`

export const TabItem = styled.div<{ disabled?: boolean, active?: boolean }>`

            padding: 4px 12px;
            cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
            outline: 0;
            transition: all 200ms ease;
            text-transform: capitalize;
            font-size: 1rem;
            margin: 0 5px;
            color: ${props => props.disabled ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.85)"};
            user-select: none;
            display: flex;
            align-items: center;
            line-height: 1.25rem;
            position: relative;
            &::after {
              
                ${props=>props.active?css`
                background-color: ${props.theme.colors.primary};
            transform: scaleX(1);
                `:css`
                transform: scaleX(0.75);
                `}
                position: absolute;
            content: '';
            bottom: -1px;
            left: 0;
            right: 0;
            width: 100%;
            height: 2px;
        
            transition: all 200ms ease;
            }
`
