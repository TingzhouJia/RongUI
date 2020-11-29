import { UploadProps } from "./upload";
import { useRef, ReactElement, useState, useEffect } from "react";
import { traverseFileTree, attrAccept, getUid } from "./utils";
import { RFile, BasicUploadProps, UploadRequestError, UploadProgressEvent } from "./interface";
import defaultRequest from './xhrUpload'
import React from "react";

const AjaxUploader=React.forwardRef<any,BasicUploadProps>((props,ref) => {

    const [_isMounted, setMount] = useState(true)
    const [uid, setuid] = useState(getUid())
    const [reqs, setreqs] = useState<any>({})
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        uploadFiles(files as any);
        reset();
    };
    const fileInput = useRef<HTMLInputElement>(null)

    const onClick = (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
        const el = fileInput.current;
        if (!el) {
            return;
        }
        const { children, onClick } = props;
        if (children && (children as ReactElement).type === 'button') {
            const parent = el.parentNode as HTMLInputElement;
            parent.focus();
            parent?.querySelector('button')?.blur();
        }
        el.click();
        if (onClick) {
            onClick(e);
        }
    };

    const onFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
        const { multiple } = props;

        e.preventDefault();

        if (e.type === 'dragover') {
            return;
        }

        if (props.directory) {
            traverseFileTree(
                Array.prototype.slice.call(e.dataTransfer.items),
                uploadFiles,
                (_file: RFile) => attrAccept(_file, props.accept as string),
            );
        } else {
            let files = Array.prototype.slice
                .call(e.dataTransfer.files)
                .filter((file: RFile) => attrAccept(file, props.accept as string));

            if (multiple === false) {
                files = files.slice(0, 1);
            }

            uploadFiles(files);
        }
    };
    const uploadFiles = (files: FileList) => {
        const postFiles: Array<RFile> = Array.prototype.slice.call(files);
        postFiles
            .map((file: RFile & { uid?: string }) => {
                // eslint-disable-next-line no-param-reassign
                file.uid = getUid();
                return file;
            })
            .forEach(file => {
                upload(file, postFiles);
            });
    };
    useEffect(() => {
        setMount(true)
        return () => {
            setMount(false)
        }
    }, [])

    const upload = (file: RFile, fileList: Array<RFile>) => {

        if (!props.beforeUpload) {
            // always async in case use react state to keep fileList
            Promise.resolve().then(() => {
                post(file);
            });
            return;
        }

        const before = props.beforeUpload(file, fileList);
        if (before && typeof before !== 'boolean' && before.then) {
            before
                .then(processedFile => {
                    const processedFileType = Object.prototype.toString.call(processedFile);
                    if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                        post(processedFile);
                        return;
                    }
                    post(file);
                })
                .catch(e => {
                    // eslint-disable-next-line no-console
                    Promise.reject(e)
                });
        } else if (before !== false) {
            Promise.resolve().then(() => {
                post(file);
            });
        }
    }
    const post = (file: RFile) => {
        if (!_isMounted) {
            return;
        }

        const { onStart, onProgress, transformFile = originFile => originFile } = props;

        new Promise(resolve => {
            let { action } = props;
            if (typeof action === 'function') {
                action = action(file);
            }
            return resolve(action);
        }).then((action: string) => {
            const { uid } = file;
            const request = props.customRequest || defaultRequest;
            const transform = Promise.resolve(transformFile(file))
                .then(transformedFile => {
                    let { data } = props;
                    if (typeof data === 'function') {
                        data = data(transformedFile);
                    }
                    return Promise.all([transformedFile, data]);
                })
                .catch(e => {
                    console.error(e); // eslint-disable-line no-console
                });

            transform.then(([transformedFile, data]: [RFile, object]) => {
                const requestOption = {
                    action,
                    filename: props.name,
                    data,
                    file: transformedFile,
                    headers: props.headers,
                    withCredentials: props.withCredentials,
                    method: props.method || 'post',
                    onProgress: onProgress
                        ? (e: UploadProgressEvent) => {
                            onProgress(e, file);
                        }
                        : null,
                    onSuccess: (ret: any, xhr: XMLHttpRequest) => {
                        delete reqs[uid];
                        props.onSuccess && props.onSuccess(ret, file, xhr);
                    },
                    onError: (err: UploadRequestError, ret: any) => {
                        delete reqs[uid];
                        props.onError && props.onError(err, ret, file);
                    },
                };

                onStart && onStart(file);
                reqs[uid] = request(requestOption as any);
            });
        });
    }

    const reset = () => {
        setuid(getUid())
    }
    const abort = (file?: any) => {

        if (file) {
            const uid = file.uid ? file.uid : file;
            if (reqs[uid] && reqs[uid].abort) {
                reqs[uid].abort();
            }
            delete reqs[uid];
        } else {
            Object.keys(reqs).forEach(uid => {
                if (reqs[uid] && reqs[uid].abort) {
                    reqs[uid].abort();
                }
                delete reqs[uid];
            });
        }
    }

    const renderUploader = () => {
        const {
            component:Tag,
            prefixCls,
            className,
            disabled,
            id,
            style,
            multiple,
            accept,
            children,
            directory,
            openFileDialogOnClick,
            onMouseEnter,
            onMouseLeave,
            ...otherProps
        } = props;
        const dirProps: any = directory
            ? { directory: 'directory', webkitdirectory: 'webkitdirectory' }
            : {};
        const events = disabled
            ? {}
            : {
                onClick: openFileDialogOnClick ? onClick : () => { },
          
                onMouseEnter,
                onMouseLeave,
                onDrop: onFileDrop,
                onDragOver: onFileDrop,
                tabIndex: '0',
            };
            return (
                <Tag {...events} className={className} role="button" style={style}>
                  <input
                    {...otherProps}
                    id={id}
                    type="file"
                    ref={fileInput}
                    onClick={e => e.stopPropagation()} 
                    key={uid}
                    style={{ display: 'none' }}
                    accept={accept}
                    {...dirProps}
                    multiple={multiple}
                    onChange={onChange}
                  />
                  {children}
                </Tag>
              );
    }

    return (
        renderUploader()
    )
}) 

export default AjaxUploader