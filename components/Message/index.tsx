import {
    NotificationInstance as RNotificationInstance,
    NoticeContent,
} from '../Notification/notification';
import Notification from '../Notification/notification'
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import InfoCircleFilled from '@ant-design/icons/InfoCircleFilled';
import React from 'react';
import { getColor } from '../utils/getColor';

type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';

let messageInstance: RNotificationInstance | null;
let defaultDuration = 3;
let defaultTop: number;
let key = 1;
let getContainer: () => HTMLElement;
let maxCount: number;

export interface ConfigOptions {
    top?: number;
    duration?: number;
    prefixCls?: string;
    getContainer?: () => HTMLElement;
    transitionName?: string;
    maxCount?: number;
    rtl?: boolean;
}

export interface ThenableArgument {
    (val: any): void;
}

export interface MessageType {
    (): void;
    then: (fill: ThenableArgument, reject: ThenableArgument) => Promise<void>;
    promise: Promise<void>;
}

const typeToIcon = {
    info: InfoCircleFilled,
    success: CheckCircleFilled,
    error: CloseCircleFilled,
    warning: ExclamationCircleFilled,
    loading: LoadingOutlined,
};
export interface ArgsProps {
    content: React.ReactNode;
    duration: number | null;
    type: NoticeType;
    prefixCls?: string;
    onClose?: () => void;
    icon?: React.ReactNode;
    key?: string | number;
    style?: React.CSSProperties;
    className?: string;
}

function setMessageConfig(options: ConfigOptions) {
    if (options.top !== undefined) {
        defaultTop = options.top;
        messageInstance = null; // delete messageInstance for new defaultTop
    }
    if (options.duration !== undefined) {
        defaultDuration = options.duration;
    }

    if (options.getContainer !== undefined) {
        getContainer = options.getContainer;
    }

    if (options.maxCount !== undefined) {
        maxCount = options.maxCount;
        messageInstance = null;
    }

}

function getRCNotificationInstance(
    args: ArgsProps,
    callback: (info: { instance: RNotificationInstance }) => void,
) {

    if (messageInstance) {
        callback({
            instance: messageInstance,
        });
        return;
    }
    Notification.newInstance(
        {

            style: { top: defaultTop }, // 覆盖原来的样式
            getContainer,
            maxCount,
        },
        (instance: any) => {
            if (messageInstance) {
                callback({

                    instance: messageInstance,
                });
                return;
            }
            messageInstance = instance;
            callback({

                instance,
            });
        },
    );
}

function getRCNoticeProps(args: ArgsProps, ): NoticeContent {
    const duration = args.duration !== undefined ? args.duration : defaultDuration;
    const IconComponent = typeToIcon[args.type];

    return {
        key: args.key,
        duration,
        style: args.style || {},
        className: args.className,
        content: (
            <div style={{ color: getColor(args.type) }}>
                {args.icon || (IconComponent && <IconComponent />)}
                <span>{args.content}</span>
            </div>
        ),
        onClose: args.onClose,
    };
}

function notice(args: ArgsProps): MessageType {
    const target = args.key || key++;
    const closePromise = new Promise(resolve => {
        const callback = () => {
            if (typeof args.onClose === 'function') {
                args.onClose();
            }
            return resolve(true);
        };

        getRCNotificationInstance(args, ({ instance }) => {
            instance.notice(getRCNoticeProps({ ...args, key: target, onClose: callback }));
        });
    });
    const result: any = () => {
        if (messageInstance) {
            messageInstance.removeNotice(target);
        }
    };
    result.then = (filled: ThenableArgument, rejected: ThenableArgument) =>
        closePromise.then(filled, rejected);
    result.promise = closePromise;
    return result;
}

type ConfigContent = React.ReactNode | string;
type ConfigDuration = number | (() => void);
type JointContent = ConfigContent | ArgsProps;
export type ConfigOnClose = () => void;

function isArgsProps(content: JointContent): content is ArgsProps {
    return (
        Object.prototype.toString.call(content) === '[object Object]' &&
        !!(content as ArgsProps).content
    );
}

const api: any = {
    open: notice,
    config: setMessageConfig,
    destroy(messageKey?: React.Key) {
        if (messageInstance) {
            if (messageKey) {
                const { removeNotice } = messageInstance;
                removeNotice(messageKey);
            } else {
                const { destroy } = messageInstance;
                destroy();
                messageInstance = null;
            }
        }
    },
};

export function attachTypeApi(originalApi: any, type: string) {
    originalApi[type] = (
        content: JointContent,
        duration?: ConfigDuration,
        onClose?: ConfigOnClose,
    ) => {
        if (isArgsProps(content)) {
            return originalApi.open({ ...content, type });
        }

        if (typeof duration === 'function') {
            onClose = duration;
            duration = undefined;
        }

        return originalApi.open({ content, duration, type, onClose });
    };
}

['success', 'info', 'warning', 'error', 'loading'].forEach(type => attachTypeApi(api, type));
api.warn = api.warning;


export interface MessageInstance {
  info(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  success(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  error(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  warning(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  loading(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  open(args: ArgsProps): MessageType;
}

export interface MessageApi extends MessageInstance {
  warn(content: JointContent, duration?: ConfigDuration, onClose?: ConfigOnClose): MessageType;
  config(options: ConfigOptions): void;
  destroy(messageKey?: React.Key): void;
  useMessage(): [MessageInstance, React.ReactElement];
}
