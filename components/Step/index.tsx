import React from 'react'
export {default} from './steps'
export interface StepsProps {
    type?: 'default' | 'navigation';
    className?: string;
    current?: number;
    initial?: number;
    labelPlacement?: 'horizontal' | 'vertical';
    progressDot?: boolean | Function;
    size?: 'default' | 'small';
    status?: 'wait' | 'process' | 'finish' | 'error';
    style?: React.CSSProperties;
    percent?: number;
    onChange?: (current: number) => void;
  }
  
  export interface StepProps {
    className?: string;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
    status?: 'wait' | 'process' | 'finish' | 'error';
    disabled?: boolean;
    title?: React.ReactNode;
    subTitle?: React.ReactNode;
    style?: React.CSSProperties;
  }