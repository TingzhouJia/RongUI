import React from 'react'
import { SearchOutlined, LoadingOutlined } from '@ant-design/icons';
import { InputBasicProps } from './input';
import Button from '../Button';

export interface SearchProps extends InputBasicProps {

    onSearch?: (
        value: string,
        event?:
            | React.ChangeEvent<HTMLInputElement>
            | React.MouseEvent<HTMLElement>
            | React.KeyboardEvent<HTMLInputElement>,
    ) => void;
    enterButton?: React.ReactNode;
    loading?: boolean;
}


const Search = React.forwardRef<InputBasicProps, SearchProps>((props, ref) => {

    const inputRef = React.useRef<Input>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { onChange: customOnChange, onSearch: customOnSearch } = props;
        if (e && e.target && e.type === 'click' && customOnSearch) {
            customOnSearch((e as React.ChangeEvent<HTMLInputElement>).target.value, e);
        }
        if (customOnChange) {
            customOnChange(e);
        }
    };

    const onMouseDown: React.MouseEventHandler<HTMLElement> = e => {
        if (document.activeElement === inputRef.current?.input) {
            e.preventDefault();
        }
    };

    const onSearch = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => {
        const { onSearch: customOnSearch, loading, disabled } = props;
        if (loading || disabled) {
            return;
        }
        if (customOnSearch) {
            customOnSearch(inputRef.current?.input.value!, e);
        }
    };
    const renderLoading = () => {
        const { enterButton, size } = props;
    
        if (enterButton) {
          return (
                <Button  mode="primary" size={size}>
                  <LoadingOutlined />
                </Button>
          );
        }
        return <LoadingOutlined  key="loadingIcon" />;
      };
    
      const renderSuffix = (prefixCls: string) => {
        const { suffix, enterButton, loading } = props;
    
        if (loading && !enterButton) {
          return [suffix, renderLoading()];
        }
    
        if (enterButton) return suffix;
    
        const icon = (
          <SearchOutlined className={`${prefixCls}-icon`} key="searchIcon" onClick={onSearch} />
        );
    
        if (suffix) {
          return [
            React.cloneElement(suffix as React.ReactElement,{key:'suffix'}),
            icon,
          ];
        }
    
        return icon;
      };
      const renderAddonAfter = ( size: 'small'|'large'|'medium') => {
        const { enterButton, disabled, addonAfter, loading } = props;
    
    
        if (loading && enterButton) {
          return [renderLoading(), addonAfter];
        }
    
        if (!enterButton) return addonAfter;
    
        let button: React.ReactNode;
        const enterButtonAsElement = enterButton as React.ReactElement;
 
        if (enterButtonAsElement.type === 'button') {
          button = React.cloneElement(enterButtonAsElement, {
            onMouseDown,
            onClick: onSearch,
            key: 'enterButton',
            
          });
        } else {
          button = (
            <Button
              mode="primary"
              size={size}
              disabled={disabled}
              key="enterButton"
              onMouseDown={onMouseDown}
              onClick={onSearch}
            >
              {enterButton === true ? <SearchOutlined /> : enterButton}
            </Button>
          );
        }
    
        if (addonAfter) {
          return [
            button,
            React.cloneElement(addonAfter as React.ReactElement)
          ];
        }
    
        return button;
      };
    
})