import React from 'react'
import Paragraph, { SkeletonParagraphProps } from './paragraph';
import Title, { SkeletonTitleProps } from './title';
import SkeletonAvatar, { SkeletonAvatarProps } from './avatar';
import SkeletonButton from './button';
import Element from './element'
import { ElemHeader, ElemContent, SkeletonBase } from './wrapper';
export interface SkeletonProps {
    active?: boolean;
    loading?: boolean;
    className?: string;
    children?: React.ReactNode;
    avatar?: SkeletonAvatarProps | boolean;
    title?: SkeletonTitleProps | boolean;
    paragraph?: SkeletonParagraphProps | boolean;
    round?: boolean;
}
// interface Compond extends React.FC<SkeletonProps> {
//     Button: typeof SkeletonButton
//     Avatar: typeof SkeletonAvatar
// }
function getAvatarBasicProps(hasTitle: boolean, hasParagraph: boolean): SkeletonAvatarProps {
    if (hasTitle && !hasParagraph) {
        // Square avatar
        return { size: 'large', shape: 'square' };
    }

    return { size: 'large', shape: 'circle' };
}
function getTitleBasicProps(hasAvatar: boolean, hasParagraph: boolean): SkeletonTitleProps {
    if (!hasAvatar && hasParagraph) {
        return { width: '38%' };
    }

    if (hasAvatar && hasParagraph) {
        return { width: '50%' };
    }

    return {};
}
function getComponentProps<T>(prop: T | boolean | undefined): T | {} {
    if (prop && typeof prop === 'object') {
        return prop;
    }
    return {};
}
function getParagraphBasicProps(hasAvatar: boolean, hasTitle: boolean): SkeletonParagraphProps {
    const basicProps: SkeletonParagraphProps = {};

    // Width
    if (!hasAvatar || !hasTitle) {
        basicProps.width = '61%';
    }

    // Rows
    if (!hasAvatar && hasTitle) {
        basicProps.rows = 3;
    } else {
        basicProps.rows = 2;
    }

    return basicProps;
}

const Skeleton = (props:SkeletonProps) => {
    const {

        loading,
        className,
        children,
        avatar=false,
        title=true,
        paragraph=true,
        active=false,
        round,
    } = props;
    if (loading || !('loading' in props)) {
        const hasAvatar = !!avatar;
        const hasTitle = !!title;
        const hasParagraph = !!paragraph;

        // Avatar
        let avatarNode;
        if (hasAvatar) {
            const avatarProps: SkeletonAvatarProps = {

                ...getAvatarBasicProps(hasTitle, hasParagraph),
                ...getComponentProps(avatar),
            };
            // We direct use SkeletonElement as avatar in skeleton internal.
            avatarNode = (
                <ElemHeader>
                    <Element {...avatarProps} />
                </ElemHeader>
            );
        }

        let contentNode;
        if (hasTitle || hasParagraph) {
            // Title
            let title;
            if (hasTitle) {
                const titleProps: SkeletonTitleProps = {

                    ...getTitleBasicProps(hasAvatar, hasParagraph),
                    ...getComponentProps(title),
                };

                title = <Title {...titleProps} />;
            }

            // Paragraph
            let paragraphNode;
            if (hasParagraph) {
                const paragraphProps: SkeletonParagraphProps = {

                    ...getParagraphBasicProps(hasAvatar, hasTitle),
                    ...getComponentProps(paragraph),
                };

                paragraphNode = <Paragraph {...paragraphProps} />;
            }

            contentNode = (
                <ElemContent>
                    {title}
                    {paragraphNode}
                </ElemContent>
            );
        }
        return (
            <SkeletonBase>
              {avatarNode}
              {contentNode}
            </SkeletonBase>
          );
    }
    
    return children
}



Skeleton.Button = SkeletonButton;
Skeleton.Avatar = SkeletonAvatar;

export default Skeleton