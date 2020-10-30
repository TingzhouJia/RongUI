import React from 'react'
import { SearchOutlined, LoadingOutlined } from '@ant-design/icons';
import Input, { InputBasicProps } from './input';
import { composeRef } from 'rc-util/lib/ref';
import Button from '../Button';
import { SearchIconWrapper } from './wrapper';
import { NormalTypes, NormalSizes } from '../utils';

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
       
            e.preventDefault();
        
    };

    const onSearch = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => {
        const { onSearch: customOnSearch, loading, disabled } = props;
        if (loading || disabled) {
            return;
        }
        if (customOnSearch) {
           // customOnSearch(ref.current?.input.value, e);
        }
    };
    const renderLoading = () => {
        const { enterButton, size="default" } = props;
    
        if (enterButton) {
          return (
                <Button  type="primary" size={size}>
                  <LoadingOutlined />
                </Button>
          );
        }
        return <LoadingOutlined  key="loadingIcon" />;
      };
    
      const renderSuffix = () => {
        const { suffix, enterButton, loading } = props;
    
        if (loading && !enterButton) {
          return [suffix, renderLoading()];
        }
    
        if (enterButton) return suffix;
    
        const icon = (
          <SearchIconWrapper>
              <SearchOutlined key="searchIcon" onClick={onSearch} />
          </SearchIconWrapper>
        );
    
        if (suffix) {
          return [
            React.cloneElement(suffix as React.ReactElement,{key:'suffix'}),
            icon,
          ];
        }
    
        return icon;
      };
      const renderAddonAfter = ( size: NormalSizes) => {
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
              type="primary"
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
      const renderSearch = () => {
        const {
    
          enterButton,
          className,
          size: customizeSize,
          ...restProps
        } = props;
    
        delete (restProps as any).onSearch;
        delete (restProps as any).loading;
    
    
        
        return (
        
              <Input
               
                onPressEnter={onSearch}
                {...restProps}
                size={customizeSize }
    
                addonAfter={renderAddonAfter( customizeSize ||'default' )}
                suffix={renderSuffix()}
                onChange={onChange}
                className={className}
              />
 
        );
      };
    return (<>{renderSearch()}</>)
})


export default Search