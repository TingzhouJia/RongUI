import { tuple } from "../utils"
import React from "react"
import TreeFolder from './folder'
import TreeFile from './file'
import { sortChildren } from "./utils"
import { TreeContext } from "./treeContext"
import { TreeBase } from "./wrapper"


export type FileTreeValue = {
  type: 'directory'| 'file'
  name: string
  extra?: string
  files?: Array<FileTreeValue>
  disabled?: boolean
  icon?: (select: boolean) => React.ReactNode
}
interface Props {
  value?: Array<FileTreeValue>
  initialExpand?: boolean
  onClick?: (path: string) => void
  className?: string,
  sortValue?: boolean
}
type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>

export interface TreeProps extends React.FC< Props & NativeAttrs> {
  File: typeof TreeFile
  Folder: typeof TreeFolder
}

const makeChildren = (value: Array<FileTreeValue> = [], sort?: boolean) => {
  if (!value || !value.length) return null
  const newval = sort ? value
    .sort((a, b) => {
      if (a.type !== b.type) return a.type !== 'directory' ? 1 : -1
      return `${a.name}`.charCodeAt(0) - `${b.name}`.charCodeAt(0)
    }) : value
  return (newval.map((item, index) => {
    if (item.type === 'directory')
      return (
        <TreeFolder  icon={item.icon} disabled={item.disabled} name={item.name} extra={item.extra} key={`folder-${item.name}-${index}`}>
          {makeChildren(item.files)}
        </TreeFolder>
      )
    return <TreeFile icon={item.icon} disabled={item.disabled} name={item.name} extra={item.extra} key={`file-${item.name}-${index}`} />
  }))

}


const Tree: TreeProps = ({ children,
  onClick,
  initialExpand = false,
  sortValue = true,
  value,
  className,
  ...props }) => {
  const isImperative = Boolean(value && value.length > 0)
  const onFileClick = (path: string) => {
    onClick && onClick(path)
  }
  const customChildren = isImperative ? makeChildren(value) : sortValue ? sortChildren(children, TreeFolder) : children

  return (<TreeContext.Provider value={{
    onFileClick,
    initialExpand,
    isImperative,
  }}>
    <TreeBase id="tree-base" {...props}>
      {customChildren}
    </TreeBase>

  </TreeContext.Provider>)


}

Tree.File=TreeFile
Tree.Folder=TreeFolder







export default Tree 