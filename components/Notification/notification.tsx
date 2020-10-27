import Notice, { NoticeProps } from "./notice";
import { useState, ReactText, useRef, useEffect,useImperativeHandle } from "react";
import { NotificationBase } from "./wrapper";
import React from "react";
import ReactDOM from "react-dom";
import useNotification from "./useNotification";

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
    component: Notification;

    useNotification: () => [NoticeFunc, React.ReactElement];
}
export interface NotificationProps {
    className?: string;
    style?: React.CSSProperties;
    maxCount?: number;
    closeIcon?: React.ReactNode;
}

interface BaseNotif extends Omit<Partial<React.ImgHTMLAttributes<any> & React.HTMLAttributes<any>>,keyof NotificationProps> , NotificationProps {

}

export interface NotifFunc {
    add:(originNotice: NoticeContent, holderCallback?: HolderReadyCallback)=>void
    remove:(key: React.Key)=>void
}

const InnerNotification:React.ForwardRefRenderFunction<NotifFunc,BaseNotif>=(props,ref)=> {
    const {
        style = {
            top: 65,
            left: '50%',
        }
    } = props
    const [notices, setnotices] = useState<{
        notice: NoticeContent;
        holderCallback?: HolderReadyCallback;
    }[]>([])

    useImperativeHandle(
        ref,
        () => ({
            add,
            remove
        }),
    )
   
    const add = (originNotice: NoticeContent, holderCallback?: HolderReadyCallback) => {
        const key: React.Key = originNotice.key || getUuid();
        const notice = { ...originNotice, key };
        const { maxCount } = props;

        setnotices(noticesInstance => {

            const noticeIndex = noticesInstance.map(v => v.notice.key).indexOf(key);
            const updatedNotices = notices.concat();
            if (noticeIndex !== -1) {
                updatedNotices.splice(noticeIndex, 1, { notice, holderCallback });
            } else {
                if (maxCount && noticesInstance.length >= maxCount) {

                    notice.key = (updatedNotices[0].notice.key) as React.ReactText;
                    notice.updateMark = getUuid();
                    updatedNotices.shift();
                }
                updatedNotices.push({ notice, holderCallback });
            }
            return updatedNotices;
        });
    };
    const remove = (key: React.Key) => {
        setnotices((notices) => (
            notices.filter(({ notice }) => notice.key !== key)
        ))
    }
    const noticePropsMap: Record<
        React.Key,
        {
            props: NoticeProps & {
                key: ReactText;
            };
            holderCallback?: HolderReadyCallback;
        }
    > = {};
    const hookRefs = new Map<React.Key, HTMLDivElement>();
    const renderer = () => {
        const { className, closeIcon,  } = props;
        const noticeKeys: React.Key[] = [];

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
            noticePropsMap[key as ReactText] = { props: noticeProps, holderCallback };
        });

        const renderNotice = (key: any) => {
            const { props: noticeProps, holderCallback } = noticePropsMap[key];
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
  extends React.ForwardRefExoticComponent<BaseNotif & React.RefAttributes<HTMLElement> & React.RefAttributes<NotifFunc>> {
    newInstance: (
        properties: BaseNotif & { getContainer?: () => HTMLElement },
        callback: (instance: NotificationInstance) => void,
      ) => void
}
const Notification=React.forwardRef<NotifFunc,BaseNotif>(InnerNotification) as CompoundedComponent



Notification.newInstance=function newNotificationInstance(properties, callback) {
    const { getContainer, ...props } = properties || {};
    const div = document.createElement('div');
    if (getContainer) {
      const root = getContainer();
      root.appendChild(div);
    } else {
      document.body.appendChild(div);
    }
    const [called, setcalled] = useState(false)
 
    const ref = useRef<Notification & NotifFunc & HTMLElement>(null)
  
    useEffect(() => {
        if (called) {
                 return;
        }
        setcalled(true)
        callback({
                notice(noticeProps) {
                    
                   
                  ref?.current?.add(noticeProps);
                },
                removeNotice(key) {
                    ref.current?.remove(key)
                 // notification.remove(key);
                },
                component: ref.current as Notification,
                destroy() {
                  ReactDOM.unmountComponentAtNode(div);
                  if (div.parentNode) {
                    div.parentNode.removeChild(div);
                  }
                },
          
                // Hooks
                useNotification() {
                  return useNotification(ref.current as (Notification & NotifFunc));
                },
              });
      
    }, [ref])

  
    
 
  
    ReactDOM.render(<Notification {...props} ref={ref} />, div);
  };


  export default Notification