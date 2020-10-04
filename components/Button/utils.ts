import { ButtonGroupConfig } from "./btn-group-context"
import { BaseButtonProps, NativeButtonProps } from "./button"

export const filterPropsWithGroup = (
    props: React.PropsWithChildren<NativeButtonProps>,
    config: ButtonGroupConfig,
  ): NativeButtonProps => {
    if (!config.isButtonGroup) return props
    return {
      ...props,
      shape:undefined,
      block:false,
      size: config.size || props.size,
    }
  }


  