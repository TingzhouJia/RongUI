import React from 'react'
import { CardMetaAvatar, CardMetaTitle, CardMetaDescription, CardMetaDetail, CardMetaBase } from './wrapper';
export interface CardMetaProps {
    className?: string;
    avatar?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
}
const Meta:React.FC<CardMetaProps>=(props)=>{
    const {className,avatar,title,description}=props
    const avatarDom = avatar ? <CardMetaAvatar >{avatar}</CardMetaAvatar> : null;
    const titleDom = title ? <CardMetaTitle >{title}</CardMetaTitle> : null;
    const descriptionDom = description ? (
      <CardMetaDescription>{description}</CardMetaDescription>
    ) : null;
    const MetaDetail =
        titleDom || descriptionDom ? (
          <CardMetaDetail>
            {titleDom}
            {descriptionDom}
          </CardMetaDetail>
        ) : null;
      return (
        <CardMetaBase className={className}>
          {avatarDom}
          {MetaDetail}
        </CardMetaBase>
      );
}

export default Meta