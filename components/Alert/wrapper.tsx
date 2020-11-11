
import { ResultType } from "../utils";
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import ExclamationCircleOutlined from '@ant-design/icons/ExclamationCircleOutlined';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import InfoCircleFilled from '@ant-design/icons/InfoCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import styled, { css } from "styled-components";
import {palette} from '../styles'
import { ReactNode } from "react";
import React from "react";
import {AlertProps} from './alert'
import { getColor, getBg, getBorder } from "../utils/getColor";

export const iconMapFilled = {
    success: <CheckCircleFilled/>,
    info: <InfoCircleFilled/>,
    error: <CloseCircleFilled/>,
    warning: <ExclamationCircleFilled/>,
};

export const iconMapOutlined = {
    success: <CheckCircleOutlined/>,
    info: <InfoCircleOutlined/>,
    error: <CloseCircleOutlined/>,
    warning: <ExclamationCircleOutlined/>,
};


const paddingFinder=(desc?:boolean,icon?:boolean)=>{
    if(desc&&icon){
        return '15px 15px 15px 63px'
    }
    if(desc&&!icon){
        return "15px"
    }
    if(!desc&&icon){
        return "8px 15px 8px 37px"
    }
    return "8px 15px"
}


export const CloseBtn = styled.button`
    position: absolute;
    top: 8px ;
    right: 10px;
    padding: 0;
    overflow: hidden;
    font-size: 14px;
    line-height:22px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`
export const CloseText = styled.span`
    color: #d9d9d9;
    transition: color 0.3s;
    &:hover {
      color: #f0f0f0;
    }
`
export const CloseMsg = styled.span`
    color:#434343;
    display: block;
    margin-left:16px;
    font-size:16px;
    margin-bottom: 4px;
`
export const AlertIcon = styled.span<{type:ResultType,withDescription:boolean}>`
    position: absolute;
    top: ${props=>props.withDescription?"12px":"15px"};
    font-size:${props=>props.withDescription?"24px":"18px"};
    left: ${props=>props.withDescription?"24px":"16px"};
    color:${props=>getColor(props.type,props.theme)};
`
export const CloseDescription = styled.span`
    font-size: 14px;
    line-height: 22px;
`

export const AlertDiv = styled.div<{closed:boolean,message:boolean,description:boolean,type:any,closable:boolean,icon?:boolean}>`
    display: ${props => props.closed?'none':props.message ? 'block' : 'none'}; 
    position: relative;
    padding: ${props=>paddingFinder(props.description,props.icon)};
    background:${props=>getBg(props.type,props.theme)};
    font-size:14px;
    line-height: 22px;
    border: 1px solid ${props=>getBorder(props.type,props.theme)};
    border-radius:2px;
    word-wrap: break-word;
    ${props=>props.closable?css`padding-right: 30px;`:''}
`
