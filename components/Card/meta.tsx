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
    const avatarDom = avatar ? <CardMetaAvatar id="card-meta-avatar">{avatar}</CardMetaAvatar> : null;
    const titleDom = title ? <CardMetaTitle id="card-meta-title" >{title}</CardMetaTitle> : null;
    const descriptionDom = description ? (
      <CardMetaDescription id="card-meta-desc">{description}</CardMetaDescription>
    ) : null;
    const MetaDetail =
        titleDom || descriptionDom ? (
          <CardMetaDetail id="card-meta-detail">
            {titleDom}
            {descriptionDom}
          </CardMetaDetail>
        ) : null;
      return (
        <CardMetaBase id="card-meta" className={className}>
          {avatarDom}
          {MetaDetail}
        </CardMetaBase>
      );
}

export default Meta