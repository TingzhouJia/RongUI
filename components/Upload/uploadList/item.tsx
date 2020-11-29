import { UploadFile } from "../interface";
import { UploadListType } from "../upload";
import { ReactNode } from "react";
import React from "react";
import { TextIcon, ListItemFile, ListItemImage, ListItemA, ListItemCardAction, ListItemAction, ListItemSpan, ListItemUpload, ListItemInfo, ListItemProgress, ListItemContainer } from "../wrapper";
import { DownloadOutlined, DeleteOutlined } from "@ant-design/icons";
import  {Tooltip,Progress}  from "../../../components";

export interface ListItemProps {
    className?: string;
    style?: React.CSSProperties;

    file: UploadFile;
    items: UploadFile[];
    listType?: UploadListType;
    isImgUrl?: (file: UploadFile) => boolean;
    iconRender: (file: UploadFile) => React.ReactNode
    removeIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode) | boolean;
    downloadIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode) | boolean;
    actionIconRender: (
        customIcon: React.ReactNode,
        callback: () => void,
        prefixCls: string,
        title?: string | undefined,
    ) => React.ReactNode;
    itemRender?: (origin:ReactNode,file: UploadFile,fileList:UploadFile[]) => ReactNode;
    //onPreview: (file: UploadFile, e: React.SyntheticEvent<HTMLElement>) => void;
    onClose: (file: UploadFile) => void;
    onDownload: (file: UploadFile) => void;

}

const ListItem = React.forwardRef((props: ListItemProps, ref: React.Ref<HTMLDivElement>) => {
    const {
        className,
        style,
        listType,
        file,
        items,
        iconRender,
        actionIconRender,
        itemRender,
        isImgUrl,
        removeIcon: customRemoveIcon,
        downloadIcon: customDownloadIcon,

        onDownload,
        onClose,
    } = props
    const progressRafRef = React.useRef<any>();
    const [showProgress, setShowProgress] = React.useState(false);
    React.useEffect(() => {
        progressRafRef.current = setTimeout(() => {
            setShowProgress(true);
        }, 300);

        return () => {
            window.clearTimeout(progressRafRef.current);
        };
    }, []);

    const iconNode = iconRender(file);
    let icon = <TextIcon>{iconNode}</TextIcon>;
    if (listType === 'picture' || listType === 'picture-card') {
        if (file.status === 'uploading' || (!file.thumbUrl && !file.url)) {

            icon = <ListItemFile notLoading={file.status !== 'uploading'}>{iconNode}</ListItemFile>;
        } else {
            const thumbnail = isImgUrl?.(file) ? (
                <ListItemImage
                    src={file.thumbUrl || file.url}
                    alt={file.name}

                />
            ) : (
                    iconNode
                );

            icon = (
                <ListItemA
                    isFile={isImgUrl && !isImgUrl(file)}
                    // onClick={e => onPreview(file, e)}
                    href={file.url || file.thumbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {thumbnail}
                </ListItemA>
            );
        }
    }
    const removeIcon = customRemoveIcon
        ? actionIconRender(
            (typeof customRemoveIcon === 'function' ? customRemoveIcon(file) : customRemoveIcon) || (
                <DeleteOutlined />
            ),
            () => onClose(file),

            'remove',
        )
        : null;

    const downloadIcon =
        customDownloadIcon && file.status === 'done'
            ? actionIconRender(
                (typeof customDownloadIcon === 'function'
                    ? customDownloadIcon(file)
                    : customDownloadIcon) || <DownloadOutlined />,
                () => onDownload(file),
                'download',
            )
            : null;
    // const downloadOrDelete = listType !== 'picture-card' && (
    //     <ListItemCardAction
    //         key="download-delete"
    //        isPic={listType === 'picture'}
    //     >
    //         {downloadIcon}
    //         {removeIcon}
    //     </ListItemCardAction>
    // );
    const actions = listType === 'picture-card' && file.status !== 'uploading' && (
        <ListItemAction>
          {file.status === 'done' && downloadIcon}
          {removeIcon}
        </ListItemAction>
      );
      let message;
      if (file.response && typeof file.response === 'string') {
        message = file.response;
      } else {
        message = (file.error && file.error.statusText) || 'upload error';
      }
      const iconAndPreview = (
        <ListItemSpan >
          {icon}
        </ListItemSpan>
      );
      const loadingProgress =
      'percent' in file ? (
        <Progress  showInfo={false}  percentage={file.percent} />
      ) : null;
      const dom = (
        <ListItemUpload status={file.status as any} type={listType as any}>
          <ListItemInfo>{iconAndPreview}</ListItemInfo>
          {actions}
          {showProgress && (file.status === 'uploading')&&(
                  <ListItemProgress>
                    {loadingProgress}
                  </ListItemProgress>
                )}
        </ListItemUpload>
      );
      const item =
      file.status === 'error' ? (
        <Tooltip text={message} >
          {dom}
        </Tooltip>
      ) : (
        dom
      );

      return (
          <ListItemContainer className={className} style={style}>
                {itemRender ? itemRender(item, file, items) : item}
          </ListItemContainer>
      )
})

export default ListItem