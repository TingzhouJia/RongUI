import React, { useState } from 'react'
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

    const [curVla, setcurVla] = useState('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { onChange: customOnChange, onSearch: customOnSearch } = props;
        setcurVla(e.target.value)
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
            customOnSearch(curVla, e);
        }
    };
    const renderLoading = () => {
        const {loading,  size="default" } = props;
    

        return loading?<Button type="primary"><LoadingOutlined  key="loadingIcon" /></Button>:null;
      };
    
      const renderSuffix = () => {
        const { suffix, enterButton, loading,size,disabled } = props;
        let icon
        if (loading && !enterButton) {
          return [suffix, renderLoading()];
        }
        const enterButtonAsElement = enterButton as React.ReactElement;
        icon= (
          <SearchIconWrapper id="search-icon">
              <SearchOutlined key="searchIcon" onClick={onSearch} />
          </SearchIconWrapper>
        );
        if (enterButton) {
          if (enterButtonAsElement.type === 'button') {
            icon = React.cloneElement(enterButtonAsElement, {
              onMouseDown,
              onClick: onSearch,
              key: 'enterButton',
              id:'enter-btn'
            });
          } else {
            icon = (
              <Button
                type="primary"
                id="enter-btn"
                size={size}
                disabled={disabled}
                key="enterButton"
                onMouseDown={onMouseDown}
                onClick={onSearch}
                style={{marginRight:'5px'}}
              >
                {enterButton === true ? <SearchOutlined /> : enterButton}
              </Button>
            );
          }
        }
        if (suffix) {
          return [
            icon,
            React.cloneElement(suffix as React.ReactElement,{key:'suffix'}),
           
          ];
        }
    
        return icon;
      };
    
      const renderSearch = () => {
        const {
          loading,
          onSearch:CustomSearch,
          enterButton,
        
          size: customizeSize,
          ...restProps
        } = props;
        
        return (
              <Input
                {...restProps}
                onPressEnter={onSearch}
                {...restProps}
                size={customizeSize }
                suffix={renderSuffix()}
                onChange={onChange}
           
              />
 
        );
      };
    return (<>{renderSearch()}</>)
})


export default Search