import Notice, { NoticeProps } from "./notice";
import { useState, ReactText, useRef, useEffect, useImperativeHandle } from "react";
import { NotificationBase } from "./wrapper";
import React from "react";
import ReactDOM from "react-dom";


export interface NoticeContent extends Omit<NoticeProps, 'children'> {
    key?: React.Key;
    updateMark?: string;
    content?: React.ReactNode;
}
let seed = 0;
const now = Date.now();

function getUuid() {
    const id = seed;
    seed += 1;
    return `rongNotification_${now}_${id}`;
}

export type NoticeFunc = (noticeProps: NoticeContent) => void;
export type HolderReadyCallback = (
    div: HTMLDivElement,
    noticeProps: NoticeProps & { key: React.Key },
) => void;

export interface NotificationInstance {
    notice: NoticeFunc;
    removeNotice: (key: React.Key) => void;
    destroy: () => void;

    // useNotification: () => [NoticeFunc, React.ReactElement];
}
export interface NotificationProps {
    className?: string;
    style?: React.CSSProperties;
    maxCount?: number;
    closeIcon?: React.ReactNode;
}



export interface NotifFunc {
    add: (originNotice: NoticeContent, holderCallback?: HolderReadyCallback) => void
    remove: (key: React.Key) => void
}
interface NotificationState {
    notice: NoticeContent & {
        userPassKey?: React.Key;
    };
    holderCallback?: HolderReadyCallback;
}

const InnerNotification: React.ForwardRefRenderFunction<NotifFunc, NotificationProps> = (props, ref) => {
    const {
        style = {
            top: 65,
            left: '50%',
        }
    } = props
    const [notices, setnotices] = useState<NotificationState[]>([])

    useImperativeHandle(
        ref,
        () => ({
            add,
            remove
        }),
    )

    const add = (originNotice: NoticeContent, holderCallback?: HolderReadyCallback) => {
        const key: React.Key = originNotice.key || getUuid();
        const notice :NoticeContent & {
            userPassKey?: React.Key;
        } = { ...originNotice, key };
        const { maxCount = 20 } = props;

        setnotices(noticesInstance => {
            
            const noticeIndex = noticesInstance.map(v => v.notice.key).indexOf(key);
            let updatedNotices = noticesInstance.concat();
            if (noticeIndex !== -1) {
                
                updatedNotices.splice(noticeIndex, 1, { notice, holderCallback });
            } else {
                if (maxCount && noticesInstance.length >= maxCount) {
                   
                    notice.key = (updatedNotices[0].notice.key) as React.ReactText;
                    notice.updateMark = getUuid();
                    notice.userPassKey = key;
                    updatedNotices.shift();
                }
                
                updatedNotices=[...updatedNotices,{ notice, holderCallback }];
                
            }
          
            return updatedNotices;
        });
    };
    const remove = (key: React.Key) => {
        setnotices((notices) => (
            notices.filter(({ notice }) => notice.key !== key)
        ))
    }

    const hookRefs = new Map<React.Key, HTMLDivElement>();
    const renderer = () => {
        const { className, closeIcon, } = props;
        const noticeKeys: React.Key[] = [];
        const curNoticeList:any={}
        notices.forEach(({ notice, holderCallback }, index) => {
            const updateMark = index === notices.length - 1 ? notice.updateMark : undefined;
            const { key } = notice;

            const onClose = () => {
                remove(key as React.ReactText)
                notice.onClose && notice.onClose()
            }

            const noticeProps = {

                closeIcon,
                ...notice,
                ...notice.props,
                key,
                updateMark,
                onClose,
                onClick: notice.onClick,
                children: notice.content,
            } as NoticeProps & { key: ReactText };

            // Give to motion
            noticeKeys.push(key as ReactText);
           
            curNoticeList[key as ReactText] = { props: noticeProps, holderCallback };
            //setNoticePropsMap(prev=>({...prev,[key as ReactText]:{props: noticeProps, holderCallback}}))
        });

        const renderNotice = (key: any) => {
            const { props: noticeProps, holderCallback } = curNoticeList[key];
            if (holderCallback) {
                return (
                    <div
                        key={key}

                        ref={div => {
                            if (typeof key === 'undefined') {
                                return;
                            }

                            if (div) {
                                hookRefs.set(key, div);
                                holderCallback(div, noticeProps);
                            } else {
                                hookRefs.delete(key);
                            }
                        }}
                    />
                );
            }

            return (
                <Notice
                    {...noticeProps}
                    className={noticeProps?.className}
                    style={{ ...noticeProps?.style }}
                />
            );
        }
        return <NotificationBase className={className} style={style}>
            {
                noticeKeys.map(keys => (renderNotice(keys)))
            }
        </NotificationBase>
    }
    return <>{renderer()}</>
}

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<NotificationProps & React.RefAttributes<HTMLElement> & React.RefAttributes<NotifFunc>> {
    newInstance: (
        properties: NotificationProps & { getContainer?: () => HTMLElement },
        callback: (instance: NotificationInstance) => void,
    ) => void
}

const Notification = React.forwardRef<NotifFunc, NotificationProps>(InnerNotification) as CompoundedComponent



Notification.newInstance = (properties, callback) => {
    const { getContainer, ...props } = properties || {};
    const div = document.createElement('div');
    if (getContainer) {
        const root = getContainer();
        root.appendChild(div);
    } else {
        document.body.appendChild(div);
    }
    let called = false
    
    function ref(notification: any) {

        if (called) {
            return;
        }
        called = true
        callback({
            notice(noticeProps) {
               
                notification.add(noticeProps);
            },
            removeNotice(key) {
                notification.remove(key);
            },
            destroy() {
                ReactDOM.unmountComponentAtNode(div);
                div?.parentNode?.removeChild(div);
            }
        });
    }



    ReactDOM.render(<Notification {...props} ref={ref} />, div);
};


export default Notification