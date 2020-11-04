import React from 'react'
import { StepBase, StepContent, StepItem, StepTail, StepTitle, StepSubtitle, StepDescription, StepIconDot, StepItIcon, Steptitle } from './wrapper';
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
    const isLast=Number(stepNumber)===total
    const renderIcon = () => {
        let iconNode
        const iconDot = <StepIconDot id={`step-dot-${status}`} status={status} vertical={direction==='vertical'} actived={status==='process'} islast={Number(stepNumber)===total}/>;
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
                iconNode = iconDot
            }
        } 
        else if (icon) {
            iconNode = <StepItIcon direction={direction} id="step-custom-icon" status={status} size={size}>{icon}</StepItIcon>;
        } else {
            iconNode = <StepItIcon direction={direction} id={`step-${status}-icon`} status={status} size={size}>{status==='finish'?<CheckOutlined />:status==='error'?<CloseOutlined />:stepNumber}</StepItIcon>;
        }
        return iconNode
    }
    return (
        <StepBase vertical={direction==='vertical'} islast={isLast} dot={progressDot&&true} notFirst={Number(stepNumber)!==1} id="step-base" disabled={props.disabled} custom={icon ? true : false} active={props.active} >
            <StepItem direction={direction} dot={progressDot&&true} id="step-item"  onClick={Click}>
                {(progressDot||direction==='vertical')&&!isLast&&<StepTail direction={direction} id="step-tail" status={status}/>}
                {renderIcon()}
                <StepContent dot={progressDot&&true} id="step-content">
                    <StepTitle dot={progressDot&&true} vertical={direction==='vertical'} id="step-title" actived={status==='finish'} islast={isLast}>
                        <Steptitle status={status} active={status==='process'}>{title}</Steptitle>
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