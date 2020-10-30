import React from 'react'
import { CommentActions, ContentAuthor, AuthorName, AuthorDate, Content, ContentDetail, CommentsBase, CommentAvatar, NestedChildren, CommentInner, CommentImg } from './wrapper'
export interface CommentProps {
  actions?: Array<React.ReactNode>;

  author?: React.ReactNode;

  avatar?: React.ReactNode;

  className?: string;

  content: React.ReactNode;

  children?: React.ReactNode;


  style?: React.CSSProperties;

  datetime?: React.ReactNode;
}

const Comment: React.FC<CommentProps> = (props) => {
  const { actions, author, avatar, content, children, style, className, datetime } = props

  const actionDom = actions && actions.length > 0 ? <CommentActions id="comment-actions">
    {actions.map((action, index) => (
      <li key={`action-${index}`}>{action}</li> // eslint-disable-line react/no-array-index-key
    ))}
  </CommentActions> : null

  const authorDom = (author || datetime) && <ContentAuthor id="comment-author-bar">
    {author && <AuthorName id="comment-autor-name">{author}</AuthorName>}
    {datetime && <AuthorDate id="comment-author-date">{datetime}</AuthorDate>}
  </ContentAuthor>

    const avatarDom=avatar?<CommentAvatar id='comment-avatar'>{avatar}</CommentAvatar>:null
  const contentDom = <Content id="comment-body">
    {authorDom}
    <ContentDetail id="comment-detail" >{content}</ContentDetail>
    {actionDom}
  </Content>

const renderNested = ( nestedChildren: any) => {
  return <NestedChildren id="nested-comment">{nestedChildren}</NestedChildren>;
};

  return (<CommentsBase id='comment-base' style={style} className={className}>
    <CommentInner id="comment-inner">
      {avatarDom}
      {contentDom}
    </CommentInner>
    {children&&renderNested(children)}
  </CommentsBase>)
}

export default Comment