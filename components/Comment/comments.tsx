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

  const actionDom = actions && actions.length > 0 ? <CommentActions>
    {actions.map((action, index) => (
      <li key={`action-${index}`}>{action}</li> // eslint-disable-line react/no-array-index-key
    ))}
  </CommentActions> : null

  const authorDom = (author || datetime) && <ContentAuthor>
    {author && <AuthorName>{author}</AuthorName>}
    {datetime && <AuthorDate>{datetime}</AuthorDate>}
  </ContentAuthor>

    const avatarDom=avatar?<CommentAvatar><CommentImg>{avatar}</CommentImg></CommentAvatar>:null
  const contentDom = <Content>
    {authorDom}
    <ContentDetail>{content}</ContentDetail>
    {actionDom}
  </Content>

const renderNested = ( nestedChildren: any) => {
  return <NestedChildren>{nestedChildren}</NestedChildren>;
};

  return (<CommentsBase className={className}>
    <CommentInner>
      {avatarDom}
      {contentDom}
    </CommentInner>
    {children&&renderNested(children)}
  </CommentsBase>)
}

export default Comment