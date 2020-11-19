import React, { useState } from 'react'
import { ImgBase, ImgPlaceholder, ImgWrap } from './wrapper';
import { PictureOutlined, LoadingOutlined } from '@ant-design/icons';
export interface ImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'placeholder' | 'onClick'> {
  // Original
  src?: string;

  placeholder?: React.ReactNode;
  fallback?: string;
 // preview?: boolean | ImagePreviewType;
 // onPreviewClose?: (value: boolean, prevValue: boolean) => void;
  //onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
 // getPopupContainer?: () => HTMLElement;
}
type ImageStatus = 'normal' | 'error' | 'loading';

const Image:React.FC<ImageProps>=({

    src,
  alt,
//   onPreviewClose: onInitialPreviewClose,
//   getPopupContainer,

  placeholder,
  fallback,
  width="120px",
  height="120px",
  style,
//   preview = true,
  className: originalClassName,
 // onClick,

  // Img
  crossOrigin,
  decoding,
  loading,
  referrerPolicy,
  sizes,
  srcSet,
  useMap,
  ...otherProps
})=>{
    const isCustomPlaceholder = placeholder && placeholder !== true;

    const [status, setStatus] = useState<ImageStatus>( 'loading');
    const [url, seturl] = useState(src)

    const imgCommonProps = {
        crossOrigin,
        decoding,
        loading,
        referrerPolicy,
        sizes,
        srcSet,
        useMap,
        alt,
        style: height !== undefined ? { height } : undefined,
      };
    
    const onLoad = () => {
        setStatus('normal');
      };
    
      const onError = () => {
        setStatus('error');
      };
    
      const reload=()=>{
        setStatus('normal')
        seturl(prev=>prev+`?time=${Math.random()}`)
      }
    return (
        <>
          <ImgBase
            {...otherProps}
            id='rong-image'
            style={{
              ...style,
              width,
              height,
            }}
          >
            {status === 'error' ? (fallback ? (
              <ImgWrap id="fallback-img" place={placeholder?true:false}  {...imgCommonProps} src={fallback} />
            ) : (
              <ImgPlaceholder id="default-fallback" onClick={reload}>
                <PictureOutlined />
                Reload
              </ImgPlaceholder>
            )):<ImgWrap id="image-base"  place={placeholder?true:false} {...imgCommonProps} onLoad={onLoad} onError={onError} src={url} />
            }

            {status === 'loading' && (
              <ImgPlaceholder id="loading-image" aria-hidden="true">
                {placeholder||<LoadingOutlined />}
              </ImgPlaceholder>
            )}
          </ImgBase>
        </>
      );
}

export default Image