import React from 'react'
import CheckableTag from './checkable';
import { SnippetTypes } from '../utils';
import { CloseIcon, TagBase } from './wrapper';
import { CloseOutlined } from '@ant-design/icons';
import { getColor } from '../utils/getColor';
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    className?: string;
    color?: string;
    status?: SnippetTypes
    closable?: boolean;
    closeIcon?: React.ReactNode;
    visible?: boolean;
    onClose?: (e: React.MouseEvent<HTMLElement>) => void;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
}

export interface TagType
    extends React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLElement>> {
    CheckableTag: typeof CheckableTag;
}

const InnerTag: React.ForwardRefRenderFunction<unknown, TagProps> = ({ 
    children,
    icon,
    color,
    onClose,
    closeIcon,
    closable = false,
    status,
    visible:baseVisible,
    ...props }, ref) => {
    const [visible, setVisible] = React.useState(true);
    React.useEffect(() => {
        if (baseVisible) {
            setVisible(baseVisible!);
        }
    }, [baseVisible]);
    const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        if (onClose) {
            onClose(e);
        }

        if (e.defaultPrevented) {
            return;
        }
        if (!baseVisible) {
            setVisible(false);
        }
    };
    const renderCloseIcon = () => {
        if (closable) {
          return closeIcon ? (
            <CloseIcon onClick={handleCloseClick}>
              {closeIcon}
            </CloseIcon>
          ) : (
            <CloseOutlined  onClick={handleCloseClick} />
          );
        }
        return null;
      };
    const iconNode = icon || null;
    const kids = iconNode ? (
      <>
        {iconNode}
        <span>{children}</span>
      </>
    ) : (
      children
    );
    const tagNode = (
        <TagBase color={status?getColor(status):color} visble={visible} {...props} ref={ref as React.MutableRefObject<any>} >
          {kids}
          {renderCloseIcon()}
        </TagBase>
      );
    return tagNode
}
const Tag = React.forwardRef<unknown, TagProps>(InnerTag) as TagType;
Tag.displayName = 'Tag';

Tag.CheckableTag = CheckableTag;

export default Tag;
