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
        <TreeFileWrapper  {...rest} onClick={clickHandler} level={level} disabled={contextDisabled||disabled}>
            <TreeFileName>
                <TreeIndents count={level} />
                <FileIcon>
                    {icon || <FileOutlined />}
                </FileIcon>
                <FileNameWrap  disabled={contextDisabled||disabled}>
                    {name}
                    {extra && <FileNameExtra>{extra}</FileNameExtra>}
                </FileNameWrap>
            </TreeFileName>
        </TreeFileWrapper>
    )


}

export default TreeFile