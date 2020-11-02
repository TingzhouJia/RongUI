import React from 'react'
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import ExclamationCircleOutlined from '@ant-design/icons/ExclamationCircleOutlined';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import Notification, { NotificationInstance } from './notification'
import { WithIcon, AutoMargin, Msg, Desc, Btn } from './wrapper';
import { getColor } from '../utils/getColor';
export type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export type IconType = 'success' | 'info' | 'error' | 'warning';
const notificationInstance: {
    [key: string]: Promise<NotificationInstance>;
} = {};
let defaultDuration = 4.5;
let defaultTop = 24;
let defaultBottom = 24;
let defaultPlacement: NotificationPlacement = 'topRight';
let defaultGetContainer: () => HTMLElement;
let defaultCloseIcon: React.ReactNode;


export interface ConfigProps {
    top?: number;
    bottom?: number;
    duration?: number;
    placement?: NotificationPlacement;
    getContainer?: () => HTMLElement;
    closeIcon?: React.ReactNode;

}
const typeToIcon = {
    success: CheckCircleOutlined,
    info: InfoCircleOutlined,
    error: CloseCircleOutlined,
    warning: ExclamationCircleOutlined,
};

export interface ArgsProps {
    message: React.ReactNode;
    description?: React.ReactNode;
    btn?: React.ReactNode;
    key?: string;
    onClose?: () => void;
    duration?: number | null;
    icon?: React.ReactNode;
    placement?: NotificationPlacement;
    style?: React.CSSProperties;
    prefixCls?: string;
    className?: string;
    readonly type?: IconType;
    onClick?: () => void;
    top?: number;
    bottom?: number;
    getContainer?: () => HTMLElement;
    closeIcon?: React.ReactNode;
}

function setNotificationConfig(options: ConfigProps) {
    const { duration, placement, bottom, top, getContainer, closeIcon } = options;
    if (duration !== undefined) {
        defaultDuration = duration;
    }
    if (placement !== undefined) {
        defaultPlacement = placement;
    }
    if (bottom !== undefined) {
        defaultBottom = bottom;
    }
    if (top !== undefined) {
        defaultTop = top;
    }
    if (getContainer !== undefined) {
        defaultGetContainer = getContainer;
    }
    if (closeIcon !== undefined) {
        defaultCloseIcon = closeIcon;
    }
}

function getPlacementStyle(
    placement: NotificationPlacement,
    top: number = defaultTop,
    bottom: number = defaultBottom,
) {
    let style;
    switch (placement) {
        case 'topLeft':
            style = {
                left: 0,
                top,
                bottom: 'auto',
            };
            break;
        case 'topRight':
            style = {
                right: 0,
                top,
                bottom: 'auto',
            };
            break;
        case 'bottomLeft':
            style = {
                left: 0,
                top: 'auto',
                bottom,
            };
            break;
        default:
            style = {
                right: 0,
                top: 'auto',
                bottom,
            };
            break;
    }
    return style;
}
function getNotificationInstance(
    args: ArgsProps,
    callback: (info: { instance: NotificationInstance }) => void,
) {
    const {
        placement = defaultPlacement,
        top,
        bottom,
        getContainer = defaultGetContainer,
        closeIcon = defaultCloseIcon,
    } = args;


    const cacheKey = `rongnotif-${placement}`;
    const cacheInstance = notificationInstance[cacheKey];
    if (cacheInstance) {
        Promise.resolve(cacheInstance).then(instance => {
            callback({ instance });
        });

        return;
    }

    const closeIconToRender = (
        <>
            {closeIcon || <CloseOutlined />}
        </>
    );

    notificationInstance[cacheKey] = new Promise(resolve => {
        Notification.newInstance(
            {

                style: getPlacementStyle(placement, top, bottom),
                getContainer,
                closeIcon: closeIconToRender,
            },
            notification => {
                resolve(notification);
                callback({

                    instance: notification,
                });
            },
        );
    });
}
function getRCNoticeProps(args: ArgsProps) {
    const duration = args.duration === undefined ? defaultDuration : args.duration;

    let iconNode: React.ReactNode = null;
    if (args.icon) {
        iconNode = <WithIcon>{args.icon}</WithIcon>;
    } else if (args.type) {
        iconNode = React.createElement(typeToIcon[args.type] || null, {
            style: { color: getColor(args.type) },
        });
    }

    const autoMarginTag =
        !args.description && iconNode ? (
            <AutoMargin />
        ) : null;

    return {
        content: (
            <div role="alert">
                {iconNode}
                <Msg icon={iconNode ? true : false}>
                    {autoMarginTag}
                    {args.message}
                </Msg>
                <Desc icon={iconNode ? true : false}>{args.description}</Desc>
                {args.btn ? <Btn>{args.btn}</Btn> : null}
            </div>
        ),
        duration,
        closable: true,
        onClose: args.onClose,
        onClick: args.onClick,
        key: args.key,
        style: args.style || {},
        className: args.className,
    };
}

function notice(args: ArgsProps) {
    getNotificationInstance(args, ({ instance }) => {
        instance.notice(getRCNoticeProps(args));
    });
}
const api: any = {
    open: notice,
    close(key: string) {
      Object.keys(notificationInstance).forEach(cacheKey =>
        Promise.resolve(notificationInstance[cacheKey]).then(instance => {
          instance.removeNotice(key);
        }),
      );
    },
    config: setNotificationConfig,
    destroy() {
      Object.keys(notificationInstance).forEach(cacheKey => {
        Promise.resolve(notificationInstance[cacheKey]).then(instance => {
          instance.destroy();
        });
        delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
      });
    },
  };
  
  ['success', 'info', 'warning', 'error'].forEach(type => {
    api[type] = (args: ArgsProps) =>
      api.open({
        ...args,
        type,
      });
  });
  
  api.warn = api.warning;
  //api.useNotification = createUseNotification(getNotificationInstance, getRCNoticeProps);

export interface NotificationInstances {
  success(args: ArgsProps): void;
  error(args: ArgsProps): void;
  info(args: ArgsProps): void;
  warning(args: ArgsProps): void;
  open(args: ArgsProps): void;
}

export interface NotificationApi extends NotificationInstances {
  warn(args: ArgsProps): void;
  close(key: string): void;
  config(options: ConfigProps): void;
  destroy(): void;

  // Hooks
 // useNotification: () => [NotificationInstance, React.ReactElement];
}

export default api as NotificationApi;