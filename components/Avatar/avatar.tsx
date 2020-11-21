import React, { useState, useMemo } from 'react'
import { NormalSizes } from '../utils'
import styled from 'styled-components'
import { palette } from '../styles'
import { AvatarContainer, AvatarImg, AvatarText } from './wrapper'

export interface AvatarProps {
    /** Shape of avatar, options:`circle`, `square` */
    shape?: 'circle' | 'square';
    size?: NormalSizes | number;
    /** Src of image avatar */
    src?: string;
    /** Srcset of image avatar */
    srcSet?: string;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    text?: string;
    alt?: string;
}
type NativeAttrs = Omit<
    Partial<React.ImgHTMLAttributes<any> & React.HTMLAttributes<any>>,
    keyof AvatarProps
> & AvatarProps

const getSize = (size: NormalSizes | number): string => {
    const sizes: { [key in NormalSizes]: string } = {
        small: '24px',
        default: '33px',
        large: '40px',
    }
    if (typeof size === 'number') return `${size}px`
    return sizes[size]
}
const safeText = (text: string): string => {
    if (text.length <= 4) return text
    return text.slice(0, 4)
}

const getFont = (size: NormalSizes | number): string => {
    const sizes: { [key in NormalSizes]: string } = {
        small: '14px',
        default: '18px',
        large: '24px',
    }
    if (typeof size === 'number') return `${size/2}px`
    return sizes[size]
}

const InnerAvatar: React.ForwardRefRenderFunction<unknown, NativeAttrs> = (props, ref) => {
    const { shape = "circle", size = "default", src, text = "", alt, className, style, srcSet, icon, ...rest } = props
    const [showText, setShowText] = useState(!!!src)
    const radius = shape === 'square' ? "2px" : '50%'


    const width = getSize(size)
    return (<AvatarContainer img={!!src} size={typeof size === 'number' ? 'default' : size} id="avatar-container" width={width} radius={radius} className={className} style={style}>
        {!showText ? <AvatarImg id="avatar-img" srcSet={srcSet} src={src} alt={alt} radius={radius} {...rest} /> : 
        <AvatarText id="avatar-text"  {...rest} size={getFont(size)}>{text ? safeText(text) : React.cloneElement(icon as any, { style: { fontSize: getFont(size) } })}</AvatarText>}
    </AvatarContainer>)
}

const Avatar = React.forwardRef<unknown, NativeAttrs>(InnerAvatar);
Avatar.displayName = "Avatar"

export default Avatar