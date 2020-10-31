import { useState, useEffect, useMemo } from "react"
import { useTreeContext } from "./treeContext"
import { makeChildPath, sortChildren, stopPropagation } from "./utils"
import TreeFile from "./file"
import { setChildrenProps } from "../utils"
import { FolderWrapper, FileNameWrap, TreeFileWrapper, FolderStatus, FileIcon, FileNameExtra, FolderContent } from "./wrapper"
import React from "react"
import TreeIndents from "./treeIndent"
import { PlusSquareOutlined, MinusSquareOutlined, FolderOpenOutlined, FolderOutlined } from "@ant-design/icons"
import { Expand } from '../utils'
interface Props {
    name: string
    extra?: string
    parentPath?: string
    disabled?: boolean
    level?: number
    className?: string
    icon?: (select: boolean) => React.ReactNode
}
type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TreeFolderProps = Props & NativeAttrs

const TreeFolder: React.FC<TreeFolderProps> = (props) => {
    const { name,
        children,
        parentPath,
        disabled,
        level: parentLevel = 0,
        icon,
        extra,
        ...rest } = props
    const { initialExpand, isImperative, disabled: contextDisable } = useTreeContext()
    const [expanded, setExpanded] = useState<boolean>(initialExpand)
    useEffect(() => setExpanded(initialExpand), [])
    const currentPath = useMemo(() => makeChildPath(name, parentPath), [])
    const clickHandler = () => setExpanded(!expanded)
    const nextChildren = setChildrenProps(
        children,
        {
            parentPath: currentPath,
            level: parentLevel + 1,

        },
        [TreeFolder, TreeFile],
    )

    const sortedChildren = isImperative ? nextChildren : sortChildren(nextChildren, TreeFolder)

    return (<FolderWrapper onClick={clickHandler} {...rest}>
        <TreeFileWrapper level={parentLevel}>
            <TreeIndents  count={parentLevel} />
            <FolderStatus id="folder-status">
                {!expanded ? <PlusSquareOutlined style={{fontSize:"12px"}} /> : <MinusSquareOutlined style={{fontSize:"12px"}}/>}
            </FolderStatus>
            <FileIcon id="folder-icon">
                {icon ? icon(expanded) : expanded ? <FolderOpenOutlined  /> : <FolderOutlined />}
            </FileIcon>
            <FileNameWrap id="file-name">
                {name}
                {extra && <FileNameExtra>{extra}</FileNameExtra>}
            </FileNameWrap>
        </TreeFileWrapper>
        {/* <Expand isExpanded={expanded}>
           
        </Expand> */}
        {
            expanded? <FolderContent className="content" onClick={stopPropagation}>
            {sortedChildren}
        </FolderContent>:null
        }
    </FolderWrapper>)
}

export default TreeFolder