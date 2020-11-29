import React, { ReactNode, useState } from 'react'
import { UploadFile, RFile } from './interface';
import { CSSProperties } from 'styled-components';
import { getFileItem, fileToObject, removeFileItem } from './utils';
import UploadList from './uploadList';
import AjaxUploader from './ajaxUploader';
import { UploadSelectDiv, UploadPictureWrapper } from './wrapper';
export type UploadType = 'drag' | 'select';
export type UploadListType = 'text' | 'picture' | 'picture-card';
export type UploadFileStatus = 'error' | 'success' | 'done' | 'uploading' | 'removed';
export type UploadedConfiguration = {
    downloadIcon?: boolean | ReactNode | ((file: UploadFile) => React.ReactNode),
    removeIcon?: boolean | ReactNode | ((file: UploadFile) => React.ReactNode),
    errorIcon?: boolean | ReactNode | ((file: UploadFile) => React.ReactNode),
}

export interface UploadProps {
    type?: UploadType
    status?: UploadFileStatus
    method?: 'POST' | 'PUT' | 'PATCH' | 'post' | 'put' | 'patch';
    actionUrl?: string
    data?: object | ((file: UploadFile) => object);
    beforeUpload?: (file: RFile, fileList: RFile[]) => boolean | Promise<any>,
    defaultFileList: UploadFile[]
    multiple?: boolean
    listType?: UploadListType;
    directory?: boolean
    fileList?: UploadFile[]
    transformFile?: (
        file: File,
    ) => string | Blob | File | PromiseLike<string | Blob | File>;
    onChange?: (file: UploadFile, fileList: Array<UploadFile>) => void
    onPreview?: (file: UploadFile) => void;
    onDownload?: (file: UploadFile) => void;
    onRemove?: (file: UploadFile) => void | boolean | Promise<void | boolean>
    className?: string
    style?: CSSProperties
    isImageUrl?: (file: UploadFile) => boolean;
    disabled?: boolean
    itemRender?: (origin: ReactNode, file: UploadFile, fileList: UploadFile[]) => ReactNode;
    iconRender?: (file: UploadFile, listType?: UploadListType) => React.ReactNode;
    uploadedConfig?: UploadedConfiguration | boolean

}
const InternalUpload: React.ForwardRefRenderFunction<any, UploadProps> = (props, ref) => {
    const {
        fileList: fileListProp,
        defaultFileList,
        onRemove,
        listType,
        uploadedConfig,
        isImageUrl,
        onPreview,
        iconRender,
        onChange: customizeChange,
        directory = false,
        multiple = true,
        transformFile,
        beforeUpload: beforeUploadProps,
        onDownload,
        disabled,
        className,
        type,
        children,
        style,
        itemRender,
    } = props;
    const upload = React.useRef<any>();
    const onChange = (file: UploadFile, fileList: UploadFile[]) => {
        customizeChange && customizeChange(file, fileList)
    }
    const [fileList, setFileList] = useState<UploadFile[]>(
        fileListProp || defaultFileList || [],

    );
    const onStart = (file: RFile) => {
        const targetItem = fileToObject(file);
        targetItem.status = 'uploading';

        const nextFileList = fileList

        const fileIndex = nextFileList.findIndex(({ uid }: UploadFile) => uid === targetItem.uid);
        if (fileIndex === -1) {
            nextFileList.push(targetItem);
        } else {
            nextFileList[fileIndex] = targetItem;
        }

        onChange(
            targetItem,
            nextFileList,
        );
    };

    const onSuccess = (response: any, file: UploadFile, xhr: any) => {
        try {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
        } catch (e) {
            /* do nothing */
        }
        const targetItem = getFileItem(file, fileList);
        // removed
        if (!targetItem) {
            return;
        }
        targetItem.status = 'done';
        targetItem.response = response;
        targetItem.xhr = xhr;
        onChange(targetItem,
            fileList);
    };

    const onProgress = (e: { percent: number }, file: UploadFile) => {
        const targetItem = getFileItem(file, fileList);
        // removed
        if (!targetItem) {
            return;
        }
        targetItem.percent = e.percent;
        onChange(targetItem, fileList);
    };

    const onError = (error: Error, response: any, file: UploadFile) => {
        const targetItem = getFileItem(file, fileList);
        // removed
        if (!targetItem) {
            return;
        }
        targetItem.error = error;
        targetItem.response = response;
        targetItem.status = 'error';
        onChange(targetItem, fileList);
    };
    const handleRemove = (file: UploadFile) => {
        Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(ret => {
            // Prevent removing file
            if (ret === false) {
                return;
            }

            const removedFileList = removeFileItem(file, fileList);

            if (removedFileList) {
                file.status = 'removed';
                if (upload.current) {
                    upload.current.abort(file);
                }

                onChange(
                    file,
                    removedFileList,
                );
            }
        })
    }
    const beforeUpload = (file: RFile, fileListArgs: RFile[]) => {
        const { beforeUpload: beforeUploadProp } = props;
        if (!beforeUploadProp) {
            return true;
        }
        const result = beforeUploadProp(file, fileListArgs);
        if (result === false) {
            // Get unique file list
            const uniqueList: UploadFile[] = [];

            fileList.concat(fileListArgs.map(fileToObject))
                .forEach(f => {
                    if (uniqueList.every(uf => uf.uid !== f.uid)) {
                        uniqueList.push(f);
                    }
                });

            onChange(
                file,
                uniqueList,
            );
            return false;
        }
        if (result && (result as PromiseLike<any>).then) {
            return result;
        }
        return true;
    };

    const rcUploadProps = {
        ...props,
        onChange: () => { },
        onStart,
        onError,
        onProgress,
        onSuccess,
        beforeUpload,
    };

    delete rcUploadProps.className;
    delete rcUploadProps.style;



    const renderUploadList = (button?: ReactNode) => {

        if (uploadedConfig) {
            const { removeIcon, downloadIcon, } = uploadedConfig as UploadedConfiguration
            return <UploadList
                listType={listType}
                items={fileList}
                onDownload={onDownload}
                onRemove={handleRemove}

                removeIcon={removeIcon}
                downloadIcon={downloadIcon}
                iconRender={iconRender}

                isImageUrl={isImageUrl}

                appendAction={button}
                itemRender={itemRender}
            />

        }
        return button
    }


    const uploadButton = (
        <UploadSelectDiv listType={listType as any} disabled={disabled} style={children ? undefined : { display: 'none' }}>
            <AjaxUploader {...rcUploadProps} ref={upload} />
        </UploadSelectDiv>
    );
    if (listType === 'picture-card') {
        return (
            <UploadPictureWrapper className={className}>
                {renderUploadList(uploadButton)}
            </UploadPictureWrapper>
        );
    }

    return (
        <span className={className}>
            {uploadButton}
            {renderUploadList()}
        </span>
    );
}   

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    React.PropsWithChildren<UploadProps> & React.RefAttributes<any>
  > {

}

const Upload = React.forwardRef<unknown, UploadProps>(InternalUpload) as CompoundedComponent;

Upload.defaultProps = {
    type: 'select' as UploadType,
    multiple: false,

    data: {},
    listType: 'text' as UploadListType, // or picture
    className: '',
    disabled: false,
  };

  export default Upload
  