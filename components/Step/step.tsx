import React from 'react'
import { StepBase, StepContent, StepItem, StepTail, StepIcon, StepTitle, StepSubtitle, StepDescription, StepIconDot, StepItIcon } from './wrapper';
import { ProgressDotRender } from './steps';
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
    tailContent?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onStepClick?: (index: number) => void;
    progressDot?: ProgressDotRender | boolean;
    // stepIcon?: StepIconRender;
}

export type Status = 'error' | 'process' | 'finish' | 'wait';

const Step: React.FC<BasicStepProps> = (props) => {
    const { title, subTitle, description, tailContent, icon, progressDot, status = "process", stepNumber = 0 } = props
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
        const iconDot = <StepIconDot />;
        // `progressDot` enjoy the highest priority
        if (progressDot) {
            if (typeof progressDot === 'function') {
                iconNode = (
                    <StepItIcon>
                        {progressDot(iconDot, {
                            index: stepNumber - 1,
                            status,
                            title,
                            description,
                        })}
                    </StepItIcon>
                );
            } else {
                iconNode = <StepItIcon>{iconDot}</StepItIcon>;
            }
        } else if (icon) {
            iconNode = <StepItIcon>{icon}</StepItIcon>;
        } else {
            iconNode = <StepItIcon>{stepNumber}</StepItIcon>;
        }
        return iconNode
    }
    return (
        <StepBase disabled={props.disabled} custom={icon ? true : false} active={props.active} >
            <StepItem onClick={Click}>
                <StepTail>{tailContent}</StepTail>
                <StepIcon>{renderIcon()}</StepIcon>
                <StepContent>
                    <StepTitle>
                        {title}
                        {subTitle && (
                            <StepSubtitle
                                title={typeof subTitle === 'string' ? subTitle : undefined}

                            >
                                {subTitle}
                            </StepSubtitle>
                        )}
                    </StepTitle>
                    {description && <StepDescription>{description}</StepDescription>}
                </StepContent>
            </StepItem>
        </StepBase>
    )
}


export default Step