import React, { useContext } from 'react'
import CheckableTag from './checkable';
import { SnippetTypes } from '../utils';
import { CloseIcon, TagBase } from './wrapper';
import { CloseOutlined } from '@ant-design/icons';
import { getColor } from '../utils/getColor';
import { ThemeContext } from 'styled-components';
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    className?: string;
    color?: string;
    status?: 'success'|'error'|'info'|'warning'
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
    const theme=useContext(ThemeContext)
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
        if (closable||onClose) {
          return  ( <CloseIcon id="close-btn" onClick={handleCloseClick} status={status||color}>
              {closeIcon|| <CloseOutlined id="close-btn"  onClick={handleCloseClick} />}
            </CloseIcon>)
         
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
        <TagBase status={status||color} id="rong-tag" color={status?getColor(status,theme):color?color:"#f0f0f0"} visble={visible} {...props} ref={ref as React.MutableRefObject<any>} >
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
