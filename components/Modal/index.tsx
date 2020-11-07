import confirm,{ useSuccess, ModalFunctions,useConfirm,useError,useInfo,useWarning } from "./confirm";
import BaseModal,{ ModalFuncProps, destroyFns } from "./modal";



type ModalType = typeof BaseModal &
  ModalFunctions & { destroyAll: () => void;  };

const Modal = BaseModal as ModalType;

Modal.info = function infoFn(props: ModalFuncProps) {
  return confirm(useInfo(props));
};

Modal.success = function successFn(props: ModalFuncProps) {
  return confirm(useSuccess(props));
};

Modal.error = function errorFn(props: ModalFuncProps) {
  return confirm(useError(props));
};

Modal.warning=function warnFn(props: ModalFuncProps) {
  return confirm(useWarning(props));
}

Modal.confirm = function confirmFn(props: ModalFuncProps) {
  return confirm(useConfirm(props));
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


