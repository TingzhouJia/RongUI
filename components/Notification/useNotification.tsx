
// import * as React from 'react';
// import Notification, { NoticeFunc, NoticeContent,NotifFunc } from './notification';
// import Notice from './notice';

// export default function useNotification(
//   notificationInstance: (Notification & NotifFunc),
// ): [NoticeFunc, React.ReactElement] {
//   const createdRef = React.useRef<Record<React.Key, React.ReactElement>>({});
//   const [elements, setElements] = React.useState<React.ReactElement[]>([]);

//   function notify(noticeProps: NoticeContent) {
//     notificationInstance.add(noticeProps, (div:any, props:any) => {
//       const { key } = props;

//       if (div && !createdRef.current[key]) {
//         const noticeEle = <Notice {...props} holder={div} />;
//         createdRef.current[key] = noticeEle;
//         setElements(originElements => [...originElements, noticeEle]);
//       }
//     });
//   }

//   return [notify, <>{elements}</>];
//}