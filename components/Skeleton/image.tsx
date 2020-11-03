import React from 'react'
import {ElemImage} from './wrapper'
import { PictureOutlined } from '@ant-design/icons'

export interface SkeletonImageProps {
    size?:'large' | 'small' | 'default'
    className?:string
    style?:React.CSSProperties
}

const SkeletonImage:React.FC<SkeletonImageProps>=(props)=>{
    return <ElemImage id="skeleton-image" {...props} size={props.size||'default'}><PictureOutlined /></ElemImage>
}

export default SkeletonImage