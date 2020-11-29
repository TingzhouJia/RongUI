import { UploadFile, RFile } from "./interface";

export function fileToObject(file: RFile): UploadFile {
    return {
        ...file,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        name: file.name,
        size: file.size,
        type: file.type,
        uid: file.uid,
        percent: 0,
        originFileObj: file,
    } as UploadFile;
}

export function getFileItem(file: UploadFile, fileList: UploadFile[]) {
    const matchKey = file.uid !== undefined ? 'uid' : 'name';
    return fileList.filter(item => item[matchKey] === file[matchKey])[0];
}

export function removeFileItem(file: UploadFile, fileList: UploadFile[]) {
    const matchKey = file.uid !== undefined ? 'uid' : 'name';
    const removed = fileList.filter(item => item[matchKey] !== file[matchKey]);
    if (removed.length === fileList.length) {
        return null;
    }
    return removed;
}
const extname = (url: string = '') => {
    const temp = url.split('/');
    const filename = temp[temp.length - 1];
    const filenameWithoutSuffix = filename.split(/#|\?/)[0];
    return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
};

const isImageFileType = (type: string): boolean => type.indexOf('image/') === 0;

export const isImageUrl = (file: UploadFile): boolean => {
    if (file.type && !file.thumbUrl) {
        return isImageFileType(file.type);
    }
    const url: string = (file.thumbUrl || file.url) as string;
    const extension = extname(url);
    if (
        /^data:image\//.test(url) ||
        /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(extension)
    ) {
        return true;
    }
    if (/^data:/.test(url)) {
        // other file types of base64
        return false;
    }
    if (extension) {
        // other file types which have extension
        return false;
    }
    return true;
};


const now = +new Date();
let index = 0;

export  function getUid() {
  // eslint-disable-next-line no-plusplus
  return `rong-upload-${now}-${++index}`;
}



interface InternalDataTransferItem extends DataTransferItem {
  isFile: boolean;
  file: (cd: (file: RFile & { webkitRelativePath?: string }) => void) => void;
  createReader: () => any;
  fullPath: string;
  isDirectory: boolean;
  name: string;
  path: string;
}

function loopFiles(item: InternalDataTransferItem, callback:any) {
  const dirReader = item.createReader();
  let fileList:any[] = [];

  function sequence() {
    dirReader.readEntries((entries: Array<InternalDataTransferItem>) => {
      const entryList = Array.prototype.slice.apply(entries);
      fileList = fileList.concat(entryList);

      // Check if all the file has been viewed
      const isFinished = !entryList.length;

      if (isFinished) {
        callback(fileList);
      } else {
        sequence();
      }
    });
  }

  sequence();
}

export const traverseFileTree = (files: Array<InternalDataTransferItem>, callback:any, isAccepted:any) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _traverseFileTree = (item: InternalDataTransferItem, path?: string) => {
    // eslint-disable-next-line no-param-reassign
    item.path = path || '';
    if (item.isFile) {
      item.file(file => {
        if (isAccepted(file)) {
          if (item.fullPath && !file.webkitRelativePath) {
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: true,
              },
            });
            // eslint-disable-next-line no-param-reassign
            file.webkitRelativePath = item.fullPath.replace(/^\//, '');
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: false,
              },
            });
          }
          callback([file]);
        }
      });
    } else if (item.isDirectory) {
      loopFiles(item, (entries: Array<InternalDataTransferItem>) => {
        entries.forEach(entryItem => {
          _traverseFileTree(entryItem, `${path}${item.name}/`);
        });
      });
    }
  };
  files.forEach(file => {
    _traverseFileTree(file.webkitGetAsEntry());
  });
};

function endsWith(str: string, suffix: string) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  }
  
export const attrAccept= (file: RFile, acceptedFiles: string | Array<string>) => {
    if (file && acceptedFiles) {
      const acceptedFilesArray = Array.isArray(acceptedFiles)
        ? acceptedFiles
        : acceptedFiles.split(',');
      const fileName = file.name || '';
      const mimeType = file.type || '';
      const baseMimeType = mimeType.replace(/\/.*$/, '');
  
      return acceptedFilesArray.some(type => {
        const validType = type.trim();
        if (validType.charAt(0) === '.') {
          return endsWith(fileName.toLowerCase(), validType.toLowerCase());
        }
        if (/\/\*$/.test(validType)) {
          // This is something like a image/* mime type
          return baseMimeType === validType.replace(/\/.*$/, '');
        }
        return mimeType === validType;
      });
    }
    return true;
  };

