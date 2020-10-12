import React, { useState } from 'react'
import { ImgBase, ImgPlaceholder, ImgWrap } from './wrapper';
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
  width,
  height,
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

    const [status, setStatus] = useState<ImageStatus>(isCustomPlaceholder ? 'loading' : 'normal');
    const isError = status === 'error';
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
    return (
        <>
          <ImgBase
            {...otherProps}
           
            style={{
              ...style,
              width,
              height,
            }}
          >
            {isError && fallback ? (
              <ImgWrap  place={placeholder?true:false} {...imgCommonProps} src={fallback} />
            ) : (
              <ImgWrap  place={placeholder?true:false} {...imgCommonProps} onLoad={onLoad} onError={onError} src={src} />
            )}
    
            {status === 'loading' && (
              <ImgPlaceholder aria-hidden="true">
                {placeholder}
              </ImgPlaceholder>
            )}
          </ImgBase>
        </>
      );
}

export default Image