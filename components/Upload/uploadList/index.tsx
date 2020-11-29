import React, { isValidElement } from 'react'
import { UploadListProps, UploadFile } from '../interface'
import useForceUpdate from '../../utils/forceUpdate';
import Button, { NativeButtonProps } from '../../Button/button';
import { LoadingOutlined, PictureTwoTone, FileTwoTone, PaperClipOutlined } from '@ant-design/icons';
import { UploadListContainer } from '../wrapper';
import ListItem from './item';
import { UploadListType } from '../upload';

const InternalUploadList: React.ForwardRefRenderFunction<any, UploadListProps> = (props, ref) => {
    const {
        listType="text",

        onDownload,
        onRemove,

        iconRender,
        isImageUrl: isImgUrl,
        items = [],

        removeIcon,
        downloadIcon,

        appendAction,
        itemRender,
    } = props
    const forceUpdate = useForceUpdate();
    React.useEffect(() => {
        if (listType !== 'picture' && listType !== 'picture-card') {
            return;
        }
        (items || []).forEach(file => {
            if (
                typeof document === 'undefined' ||
                typeof window === 'undefined' ||
                !(window as any).FileReader ||
                !(window as any).File ||
                !(file.originFileObj instanceof File || file.originFileObj instanceof Blob) ||
                file.thumbUrl !== undefined
            ) {
                return;
            }
            file.thumbUrl = '';

        });
    }, [listType, items]);
    const onInternalDownload = (file: UploadFile) => {
        if (typeof onDownload === 'function') {
            onDownload(file);
        } else if (file.url) {
            window.open(file.url);
        }
    };

    const onInternalClose = (file: UploadFile) => {
        if (onRemove) {
            onRemove(file);
        }
    };
    const internalIconRender = (file: UploadFile) => {
        if (iconRender) {
            return iconRender(file, listType);
        }
        const isLoading = file.status === 'uploading';
        const fileIcon = isImgUrl && isImgUrl(file) ? <PictureTwoTone /> : <FileTwoTone />;
        let icon: React.ReactNode = isLoading ? <LoadingOutlined /> : <PaperClipOutlined />;
        if (listType === 'picture') {
            icon = isLoading ? <LoadingOutlined /> : fileIcon;
        } else if (listType === 'picture-card') {
            icon = isLoading ? 'loading' : fileIcon;
        }
        return icon;
    };

    const actionIconRender = (
        customIcon: React.ReactNode,
        callback: () => void,
        prefixCls: string,
        title?: string,
    ) => {
        const btnProps: NativeButtonProps = {
            type: 'text',
            size: 'small',

            onClick: (e: React.MouseEvent<HTMLElement>) => {
                callback();
                if (isValidElement(customIcon) && customIcon.props.onClick) {
                    customIcon.props.onClick(e);
                }
            },
        };
        if (isValidElement(customIcon)) {
            const btnIcon = React.cloneElement(customIcon, {
                ...customIcon.props,
                onClick: () => { },
            });

            return <Button {...btnProps}>{btnIcon}</Button>;
        }
        return (
            <Button {...btnProps}>
                <span>{customIcon}</span>
            </Button>
        );
    };
    React.useImperativeHandle(ref, () => ({

        handleDownload: onInternalDownload,
    }));
    return (
        <UploadListContainer>
            {
                items.map((each, index) => {
                    return (
                        <ListItem
                            key={index}
                            file={each}
                            items={items}

                            listType={listType}
                            isImgUrl={isImgUrl}
                            removeIcon={removeIcon}
                            downloadIcon={downloadIcon}
                            iconRender={internalIconRender}
                            actionIconRender={actionIconRender}
                            itemRender={itemRender}
                            onDownload={onInternalDownload}
                            onClose={onInternalClose}
                        />
                    );
                })
            }
            {appendAction}
        </UploadListContainer>
    )
}

const UploadList = React.forwardRef<unknown, UploadListProps>(InternalUploadList);

UploadList.displayName = 'UploadList';

export default UploadList