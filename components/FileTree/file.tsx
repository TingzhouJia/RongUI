import React, { useMemo } from 'react'
import { useTreeContext } from './treeContext'
import { makeChildPath, stopPropagation } from './utils'
import { TreeFileWrapper, TreeFileName, FileIcon, FileNameWrap, FileNameExtra } from './wrapper'
import TreeIndents from './treeIndent'
import { FileOutlined } from '@ant-design/icons'
interface Props {
    name: string
    extra?: string
    icon?: React.ReactNode
    disabled?: boolean
    parentPath?: string
    level?: number
    className?: string
}
type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TreeFileProps = Props & NativeAttrs

const TreeFile: React.FC<TreeFileProps> = (props) => {
    const { onFileClick, disabled: contextDisabled } = useTreeContext()
    const { name,
        parentPath,
        level = 0,
        extra, icon, disabled, ...rest } = props

    const currentPath = useMemo(() => makeChildPath(name, parentPath), [])
    const clickHandler = (event: React.MouseEvent) => {
        if(disabled||contextDisabled){
            return
        }
        stopPropagation(event)
        onFileClick && onFileClick(currentPath)
    }

    return (
        <TreeFileWrapper id="tree-file-wrap" {...rest} onClick={clickHandler} level={level} disabled={contextDisabled||disabled}>
            <TreeFileName id="tree-file-content">
                <TreeIndents  count={level} />
                <FileIcon id="file-icon">
                    {icon || <FileOutlined />}
                </FileIcon>
                <FileNameWrap id="file-name"  disabled={contextDisabled||disabled}>
                    {name}
                    {extra && <FileNameExtra id="file-name-extra">{extra}</FileNameExtra>}
                </FileNameWrap>
            </TreeFileName>
        </TreeFileWrapper>
    )


}

export default TreeFile