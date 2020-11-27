import Step, { Status, BasicStepProps } from "./step";

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
   // direction?: 'horizontal' | 'vertical';
    type?: 'default' | 'navigation';
    status?: Status;
    size?: 'default' | 'small';
    current?: number;
    progressDot?: ProgressDotRender | boolean;
    stepIcon?: StepIconRender;
    initial?: number;
    icons?: {};
    onChange?: (current: number) => void;
}
export const StepContext = React.createContext<StepsConfig>({ size: 'default',total:0,direction:'horizontal' })

export const useStepContext = (): StepsConfig => React.useContext<StepsConfig>(StepContext)

interface StepsConfig {
    size: 'small' | 'default',
    total:number
    direction:'vertical'|'horizontal'
}
export interface StepsProps extends React.FC<Props> {
    Step: typeof Step
}

const Steps: StepsProps = (props) => {
    const {
        type = 'default',
     //   direction = 'horizontal',
        initial=1 ,
        current = 1,
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
    const init=Number(initial)>1?initial:1
    const cur=Number(current)>1?current:1
    const isNav = type === 'navigation';
    const adjustedLabelPlacement = 'horizontal'
    
    return (
        <StepContext.Provider value={{ size: 'default',total:React.Children.toArray(children).length ,direction:adjustedLabelPlacement}}>
            <StepsBase className={props.className} style={props.style} id="steps-base" size={size} direction={adjustedLabelPlacement} dot={!progressDot} nav={isNav} >
                {
                    React.Children.map((children as React.ReactNode), (item, index) => {
                        if (!React.isValidElement(item)) { return item }
                        if (item.props === undefined) { return item }
                        const stepNumber = init + index;
                        const childProps: BasicStepProps = {
                            stepNumber: `${stepNumber }`,
                            stepIndex: stepNumber,
                            key: stepNumber,

                            wrapperStyle: props.style,
                            progressDot,
                            onStepClick: props.onChange && onStepClick,
                            ...item.props,
                        };
                        if (!item.props.status) {
                            if (stepNumber === cur) {
                                childProps.status = status;
                            } else if (stepNumber < cur) {
                                childProps.status = 'finish';
                            } else {
                                childProps.status = 'wait';
                            }
                        }
                        childProps.active = stepNumber === current;
                        return React.cloneElement(item, childProps)
                    })
                }
            </StepsBase>

        </StepContext.Provider>
    )
}
Steps.Step = Step

export default Steps