import Step, { Status, BasicStepProps } from "./step";
import toArray from "../utils/toArray";
import { cloneElement } from "react";
import { StepsBase } from "./wrapper";
import React from "react";

export type StepIconRender = (info: {
    index: number;
    status: Status;
    title: React.ReactNode;
    description: React.ReactNode;
    node: React.ReactNode;
}) => React.ReactNode;

export type ProgressDotRender = (
    iconDot: any,
    info: {
        index: number;
        status: Status;
        title: React.ReactNode;
        description: React.ReactNode;
    },
) => React.ReactNode;
interface Props {

    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
    direction?: 'horizontal' | 'vertical';
    type?: 'default' | 'navigation';
    labelPlacement?: 'horizontal' | 'vertical';
    status?: Status;
    size?: 'default' | 'small';
    current?: number;
    progressDot?: ProgressDotRender | boolean;
    stepIcon?: StepIconRender;
    initial?: number;
    icons?: {};
    onChange?: (current: number) => void;
}


export interface StepsProps extends React.FC<Props> {
    step: typeof Step
}

const Steps: StepsProps = (props) => {
    const {
        type = 'default',

        direction = 'horizontal',
        labelPlacement = 'horizontal',
        initial = 0,
        current = 0,
        status = 'process',
        size = 'default',
        progressDot = false,
        children
    } = props

    const onStepClick = (next: number) => {
        const { onChange, current } = props;
        if (onChange && current !== next) {
            onChange(next);
        }
    };
    const isNav = type === 'navigation';
    const adjustedLabelPlacement = progressDot ? 'vertical' : labelPlacement;

    return (
        <StepsBase size={size} direction={adjustedLabelPlacement} label={direction==="horizontal"} dot={!progressDot} nav={isNav} >
            {
                toArray(children).map((item, index) => {
                    const stepNumber = initial + index;
                    const childProps = {
                        stepNumber: `${stepNumber + 1}`,
                        stepIndex: stepNumber,
                        key: stepNumber,
                     
                        wrapperStyle: props.style,
                        progressDot,
        
                    
                        onStepClick: props.onChange && onStepClick,
                        ...item.props,
                    };
                    if (!item.props.status) {
                        if (stepNumber === current) {
                          childProps.status = status;
                        } else if (stepNumber < current) {
                          childProps.status = 'finish';
                        } else {
                          childProps.status = 'wait';
                        }
                      }
                      childProps.active = stepNumber === current;
                      return cloneElement(item,childProps)
                })
            }
        </StepsBase>
    )
}
Steps.step = Step

export default Steps