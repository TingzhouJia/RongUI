import { useState, useMemo, useEffect, useRef } from "react"
import { CascaderContext, CascaderConfig } from "./context"
import React from 'react'
import { IconWrap, CloseBtn, SelectWrap, ValueWrap } from "../Select/wrapper"
import { UpOutlined, DownOutlined, CloseCircleFilled } from "@ant-design/icons"
import CascaderMenu from "./menu"
import { CSSProperties } from "styled-components"
export interface CascaderOption {
    label: string
    value: string
    disabled?: boolean
    children?: CascaderOption[]
}
export interface CascaderFieldNames {
    value?: string | number;
    label?: string;
    children?: string;
}

export interface CascaderProps {
    value?: string[];
    pure?: boolean
    disabled?: boolean
    bordered?: boolean
    defaultValue?: string[];
    options?: CascaderOption[];
    onChange?: (value: string[], selectOptions: CascaderOption[]) => void;
    popupClassName?: string;
    getPopupContainer?: () => HTMLElement | HTMLElement
    dropdownMenuStyle?: React.CSSProperties;
    dropdownRender?: (menu: React.ReactElement) => React.ReactElement;
    loadData?: (selectOptions: CascaderOption[]) => void;
    children?: React.ReactElement;
    fieldNames?: CascaderFieldNames;
    expandIcon?: React.ReactNode;
    className?: string
    style?: CSSProperties
    placeholder?: string
}

// const SortSource=(source:CascaderOption[])=>{
//     let result={cur:null,children:null}
//     let curList:{label?:string,value?:string}[]=[]
//     let childrenList:{value?:string,children?:CascaderOption[]}[]=[]
//     source.map(item=>{
//         curList.push({label:item.label,})
//     })
// }
const Cascader: React.FC<CascaderProps> = (props) => {
    let index = 0
    const [curValue, setcurValue] = useState(props.value || props.defaultValue || [])
    const { bordered = true, disabled = false, className, style, options } = props
    const [showClear, setshowClear] = useState(curValue.length !== 0)
    const ref = useRef(null)
    const [visible, setVisible] = useState<boolean>(false)
    const handleReset = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        setcurValue([])
        setshowClear(false)
    }

    const UpdateValue = (index: number, value: string) => {
        let cont = curValue
        cont[index] = value
        setcurValue(cont)
    }
    const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        event.nativeEvent.stopImmediatePropagation()
        event.preventDefault()
        if (disabled) return
        setVisible(!visible)
    }
    useEffect(() => {
        document.addEventListener('click', () => setVisible(false))
        return () => {
            document.removeEventListener('click', () => setVisible(false))
        }
    }, [])
    const isEmpty = useMemo(() => {

        return curValue.length === 0
    }, [curValue])

    const selectedChild = useMemo(() => {
        let cur = ""
        curValue.map((item, index) => {
            if (index === 0) {
                cur += item
            } else if (index === curValue.length - 1) {
                cur += item
            } else {
                cur += `/${item}`
            }

        })
        return cur

    }, [curValue])
    const initValue: CascaderConfig = { value: curValue, updateValue: UpdateValue, expandIcon: props.expandIcon }

    return (
        <CascaderContext.Provider value={initValue}>
            <SelectWrap id="select-base" bordered={bordered} disabled={disabled} focused={visible} ref={ref} onClick={clickHandler} style={style} className={className}>
                {isEmpty && (
                    <ValueWrap id="select-placeholder" style={{ color: "rgba(0,0,0,0.25)" }}>
                        {props.placeholder}
                    </ValueWrap>
                )}
                {curValue.length>0 && <ValueWrap id="one-value-selcted">{selectedChild}</ValueWrap>}
                {!!!props.pure && (
                <IconWrap onMouseEnter={() => !isEmpty ? setshowClear(true) : null} onMouseLeave={() => !isEmpty ? setshowClear(false) : null} id="select-arrow">
                    {
                        showClear ? <CloseBtn id="clear-button" onClick={handleReset}> <CloseCircleFilled
                            role="button"
                        /></CloseBtn> : visible ? <UpOutlined /> : <DownOutlined />
                    }
                </IconWrap>
            )}
            </SelectWrap>
            <CascaderMenu visible={visible} items={options} index={index + 1} parent={ref} value={curValue[1]||undefined} />


           
        </CascaderContext.Provider>
    )
}

export default Cascader