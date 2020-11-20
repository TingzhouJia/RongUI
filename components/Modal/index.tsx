import confirm,{ useSuccess, ModalFunctions,useConfirm,useError,useInfo,useWarning } from "./confirm";
import BaseModal,{ ModalFuncProps, destroyFns } from "./modal";
import { DefaultTheme } from "styled-components";



type ModalType = typeof BaseModal &
  ModalFunctions & { destroyAll: () => void;  };

const Modal = BaseModal as ModalType;

Modal.info = function infoFn(props: ModalFuncProps,theme:DefaultTheme) {
  return confirm(useInfo(props),theme);
};

Modal.success = function successFn(props: ModalFuncProps,theme:DefaultTheme) {
  return confirm(useSuccess(props),theme);
};

Modal.error = function errorFn(props: ModalFuncProps,theme:DefaultTheme) {
  return confirm(useError(props),theme);
};

Modal.warning=function warnFn(props: ModalFuncProps,theme:DefaultTheme) {
  return confirm(useWarning(props),theme);
}

Modal.confirm = function confirmFn(props: ModalFuncProps,theme:DefaultTheme) {
  return confirm(useConfirm(props),theme);
};

Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
};

export default Modal


