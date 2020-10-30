import React from 'react'
import { CardHeader, CardHeaderTitle, CardExtra, CardCover, CardBody, CardActions, CardContain } from './wrapper';
import Meta, { CardMetaProps } from './meta'
export { CardMetaProps }
export type CardType = 'inner';
export type CardSize = 'default' | 'small';

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  bordered?: boolean;
  hoverable?: boolean;
  headStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  loading?: boolean;
  children?: React.ReactNode;
  id?: string;
  className?: string;
  size?: CardSize;
  type?: CardType;
  cover?: React.ReactNode;
  actions?: React.ReactNode[];
}
export interface CardInterface extends React.FC<CardProps> {
  // Grid: typeof Grid;
  Meta: typeof Meta;
}
function getAction(actions: React.ReactNode[]) {
  const actionList = actions.map((action, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <li style={{ width: `${100 / actions.length}%` }} key={`action-${index}`}>
      <span>{action}</span>
    </li>
  ));
  return actionList;
}
const Card: CardInterface = (props) => {
  const {
    hoverable,
    className,
    extra,
    headStyle = {},
    bodyStyle = {},
    title,
    loading,
    bordered = true,
    size = 'default',
    type,
    cover,
    actions,
    children,
  } = props;
  let head
  if (title || title) {
    head = (
      <CardHeader id="card-header" size={size} style={headStyle}>
        {title && <CardHeaderTitle id="card-header-title">{title}</CardHeaderTitle>}
        {extra && <CardExtra id="card-header-extra" size={size}>{extra}</CardExtra>}
      </CardHeader>
    );
  }
  const coverDom = cover ? <CardCover>{cover}</CardCover> : null
  const body = (
    <CardBody size={size} style={bodyStyle}>
      {children}
    </CardBody>
  );
  const actionDom =
    actions && actions.length ? (
      <CardActions >{getAction(actions)}</CardActions>
    ) : null;
  return (<CardContain size={size} hoverable={hoverable} bordered={bordered} className={className}>
    {head}
    {coverDom}
    {body}
    {actionDom}
  </CardContain>)

}
Card.Meta = Meta

export default Card