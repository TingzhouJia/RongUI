import React from 'react'
import { tuple } from '../utils';
import { palette } from '../styles';
import {CloseOutlined,CheckCircleFilled, CloseCircleFilled, CheckOutlined} from '@ant-design/icons'
import {ProgressText} from './wrapper'
import LineProgress from './line';
const ProgressStatuses = tuple('normal', 'error', 'success');
export type ProgressSize = 'default' | 'small';
export interface ProgressProps {
    //className for render 
    className?: string;
    percentage?:number;
    //animation enable
    active?:boolean;
    format?:(percent:number)=>React.ReactNode
    status?: typeof ProgressStatuses[number];
    //info of progress
    showInfo?: boolean;
    //this color will not replace success or error
    color?: string;
    background?: string;
    width?: number;
    style?: React.CSSProperties;
    size?: ProgressSize;
    steps?: number;
}
const Progress:React.FC<ProgressProps>=(props)=>{
    const {className,percentage=0,active=false,status,showInfo=true,background,color,format}=props
    const getPercentNumber=() =>{
   
        return parseInt(
        status==="success" ? "100" : percentage.toString(),
          10,
        );
      }
    const getColor=()=>{
        if(status==="success"){
            return palette.success
        }
        if(status==="error"){
            return palette.error
        }
        return color||palette.info
    }
    const getProgressStatus=() =>{
    
        if (ProgressStatuses.indexOf(status!) < 0 && getPercentNumber() >= 100) {
          return 'success';
        }
        return status || 'normal';
      }
    function validProgress(progress: number | undefined) {
        if (!progress || progress < 0) {
          return 0;
        }
        if (progress > 100) {
          return 100;
        }
        return progress;
      }
    const renderProgressInfo=()=>{
        let text
        const textFormatter = format || (percentNumber => `${percentNumber}%`);
        if(!showInfo){
            return null
        }
        if(format||status!=='success'||(status as typeof ProgressStatuses[number] )!=="error"){
               text=textFormatter(validProgress(percentage))
        }else if((status as typeof ProgressStatuses[number])==='error'){
            text= <CloseCircleFilled />;
        }else if((status)==='success'){
            text=<CheckCircleFilled />;
        }
        return <ProgressText>{text}</ProgressText>

    }
return (<LineProgress className={className} percentage={getPercentNumber()} status={getProgressStatus()} color={getColor()} {...props}>{renderProgressInfo()}</LineProgress>)

}

export default Progress