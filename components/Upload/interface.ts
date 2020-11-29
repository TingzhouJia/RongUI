import { UploadFileStatus, UploadListType } from "./upload";
import { ReactNode } from "react";

export interface UploadFile {
    uid: string;
    size: number;
    name: string;
    fileName?: string;
    lastModifiedDate?: Date;
    url?: string;
    status?: UploadFileStatus;
    percent?: number;
    thumbUrl?: string;
    originFileObj?: File | Blob;
    response?: any;
    error?: any;
    linkProps?: any;
    type: string;
    xhr?: any;
    preview?: string;
}
export interface BasicUploadProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onError' | 'onProgress'> {
  name?: string;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  component?: any;
  action?: string | ((file: RFile) => string);
  method?: string;
  directory?: boolean;
  data?: object | ((file: RFile | string | Blob) => object);
  headers?: any;
  accept?: string;
  multiple?: boolean;
  onStart?: (file: RFile) => void;
  onError?: (error: Error, ret: object, file: RFile) => void;
  onSuccess?: (response: object, file: RFile, xhr: object) => void;
  onProgress?: (event: UploadProgressEvent, file: RFile) => void;
  beforeUpload?: (file: RFile, FileList: RFile[]) => boolean | Promise<RFile>;
  customRequest?: () => void;
  withCredentials?: boolean;
  openFileDialogOnClick?: boolean;
  transformFile?: (file: RFile) => string | Blob | RFile | PromiseLike<string | Blob | RFile>;
  prefixCls?: string;
  id?: string;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
}
export interface RFile extends File {
    readonly lastModifiedDate?: Date
    uid: string
}

export interface UploadListProps {
    listType?: UploadListType;
    onDownload?: (file: UploadFile) => void;
    onRemove?: (file: UploadFile) => void | boolean;
    items?: Array<UploadFile>;
    //progress?: UploadListProgressProps;
    removeIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode) | boolean;
    downloadIcon?: React.ReactNode | ((file: UploadFile) => React.ReactNode) | boolean;


    iconRender?: (file: UploadFile, listType?: UploadListType) => React.ReactNode;
    isImageUrl?: (file: UploadFile) => boolean;
    appendAction?: React.ReactNode;
    itemRender?: (origin: ReactNode, file: UploadFile, fileList: UploadFile[]) => ReactNode;
}
export interface UploadRequestError extends Error {
    status?: number;
    method?: string;
    url?: string;
}
export interface UploadProgressEvent extends ProgressEvent {
    percent: number;
}

export interface UploadRequestOption<T = any> {
    onProgress?: (event: UploadProgressEvent) => void;
    onError?: (event: UploadRequestError | ProgressEvent, body?: T) => void;
    onSuccess?: (body: T, xhr: XMLHttpRequest) => void;
    data?: object;
    filename?: string;
    file: RFile;
    withCredentials?: boolean;
    action: string;
    headers?: any;
    method: string;
}
