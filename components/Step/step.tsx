import React from 'react'
import { StepBase, StepContent, StepItem, StepTail, StepIcon, StepTitle, StepSubtitle, StepDescription, StepIconDot, StepItIcon } from './wrapper';
import { ProgressDotRender, useStepContext } from './steps';
import { NormalSizes } from '../utils';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

export interface BasicStepProps {
    className?: string;
    style?: React.CSSProperties;
    wrapperStyle?: React.CSSProperties;
    active?: boolean;
    disabled?: boolean;
    stepIndex?: number;
    stepNumber?: number;
    status?: Status;
    title?: React.ReactNode;
    subTitle?: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onStepClick?: (index: number) => void;
    progressDot?: ProgressDotRender | boolean;
    // stepIcon?: StepIconRender;
}

export type Status = 'error' | 'process' | 'finish' | 'wait';



const Step: React.FC<BasicStepProps> = (props) => {
    const { title, subTitle, description, icon, progressDot, status = "process", stepNumber = 1 } = props
    const {size,total,direction}=useStepContext()
    const Click: React.MouseEventHandler<HTMLDivElement> = (...args) => {
        const { onClick, onStepClick, stepIndex, disabled } = props
        if (disabled) {
            return
        }
        if (onClick) {
            onClick(...args)
        }
        if (onStepClick && stepIndex) {
            onStepClick(stepIndex)
        }

    }
    const renderIcon = () => {
        let iconNode
        const iconDot = <StepIconDot status={status} />;
        // `progressDot` enjoy the highest priority
        if (progressDot) {
            if (typeof progressDot === 'function') {
                iconNode = progressDot(iconDot, {
                    index: stepNumber - 1,
                    status,
                    title,
                    description,
                });
            } else {
                iconNode = {iconDot}
            }
        } 
        else if (icon) {
            iconNode = <StepItIcon status={status} size={size}>{icon}</StepItIcon>;
        } else {
            iconNode = <StepItIcon status={status} size={size}>{status==='finish'?<CheckOutlined />:status==='error'?<CloseOutlined />:stepNumber}</StepItIcon>;
        }
        return iconNode
    }
    return (
        <StepBase notFirst={Number(stepNumber)===total} id="step-base" disabled={props.disabled} custom={icon ? true : false} active={props.active} >
            <StepItem dot={progressDot&&true} id="step-item" onClick={Click}>
                {renderIcon()}
                <StepContent id="step-content">
                    <StepTitle vertical={direction==='vertical'} id="step-title" actived={status==='finish'} islast={Number(stepNumber)===total}>
                        {title}
                        {subTitle && (
                            <StepSubtitle
                               status={status}

                            >
                                {subTitle}
                            </StepSubtitle>
                        )}
                    </StepTitle>
                    {description && <StepDescription status={status} id="step-description">{description}</StepDescription>}
                </StepContent>
            </StepItem>
        </StepBase>
    )
}


export default Step