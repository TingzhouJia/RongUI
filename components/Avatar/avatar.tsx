import React, { useState, useMemo } from 'react'
import { NormalSizes } from '../utils'
import styled from 'styled-components'
import { palette } from '../styles'

export interface AvatarProps {
    /** Shape of avatar, options:`circle`, `square` */
    shape?: 'circle' | 'square';

    size?: NormalSizes | number;
    gap?: number;
    /** Src of image avatar */
    src?: string;
    /** Srcset of image avatar */
    srcSet?: string;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
    text?: string;
    alt?: string;
    /* callback when img load error */
    /* return false to prevent Avatar show default fallback behavior, then you can do fallback by your self */
    onError?: () => boolean;
}
type NativeAttrs = Omit<
    Partial<React.ImgHTMLAttributes<any> & React.HTMLAttributes<any>>,
    keyof AvatarProps
> & AvatarProps

const getSize = (size: NormalSizes | number): string => {
    const sizes: { [key in NormalSizes]: string } = {
        small: '1.875rem',
        medium: '3.75rem',
        large: '5.625rem',
    }
    if (typeof size === 'number') return `${size}px`
    return sizes[size]
}
const safeText = (text: string): string => {
    if (text.length <= 4) return text
    return text.slice(0, 3)
}

const AvatarContainer = styled.span<{ width: string, radius: string }>`
    width:${props => props.width};
    height:${props => props.width};
    border-radius:${props => props.radius};
    display: inline-block;
    cursor:pointer;
    position: relative;
    overflow: hidden;
    vertical-align: top;
    border:1px solid #d9d9d9;
    background-color: ${palette.background};
    vertical-align: top;
`
const AvatarText=styled.span`
 position: absolute;
 left: 50%;
 top: 50%;
 font-size: 1em;
 text-align: center;
 transform: translate(-50%, -50%) scale(0.65);
 white-space: nowrap;
 user-select: none;
`
const AvatarImg=styled.img<{radius:string}>`
display: inline-block;
width: 100%;
height: 100%;
border-radius: ${props=>props.radius};
`

const InnerAvatar: React.ForwardRefRenderFunction<unknown, NativeAttrs> = (props, ref) => {
    const { shape = "circle", size = "medium", src, text="", alt, className, style,srcSet,...rest } = props
    const [showText, setShowText] = useState(!src)
    const radius = shape === 'square' ? "2px" : '50%'
  

    const width = getSize(size)
    return (<AvatarContainer width={width} radius={radius} className={className} style={style}>
        {!showText?<AvatarImg srcSet={srcSet} src={src}  alt={alt} radius={radius} {...rest} />:<AvatarText {...rest}>{safeText(text)}</AvatarText>}
    </AvatarContainer>)
}

const Avatar = React.forwardRef<unknown, NativeAttrs>(InnerAvatar);
Avatar.displayName="Avatar"

export default Avatar