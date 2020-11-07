import Button, { ButtonProps } from "../Button";
import React from "react";

export interface ActionButtonProps {
  
    actionFn?: (...args: any[]) => any
    closeModal: Function;
    autoFocus?: boolean;
    buttonProps?: ButtonProps;
  }
  
  const ActionButton: React.FC<ActionButtonProps> = props => {
    const clickedRef = React.useRef<boolean>(false);
    const ref = React.useRef<any>();
  
    const onClick = () => {
      const { actionFn, closeModal } = props;
      if (clickedRef.current) {
        return;
      }
      clickedRef.current = true;
      if (!actionFn) {
        closeModal();
        return;
      }
      let returnValueOfOnOk;
      if (actionFn.length) {
        returnValueOfOnOk = actionFn(closeModal);
        clickedRef.current = false;
      } else {
        returnValueOfOnOk = actionFn();
        if (!returnValueOfOnOk) {
          closeModal();
          return;
        }
      }
      
    };
  
    const {  children, buttonProps } = props;
    return (
      <Button
        {...buttonProps}
        onClick={onClick}
        
        ref={ref}
      >
        {children}
      </Button>
    );
  };

export default ActionButton
  