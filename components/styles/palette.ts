import { ThemePalette } from "../utils";

export const BasicLight={
    background:"#fff",
    fontColor:"rgba(0,0,0,0.85)",
    disabledBackground:"#f5f5f5",
    disabledColor:"rgba(0,0,0,.25)",
    borderColor:"#d9d9d9",
    error: '#ff4d4f',
    errorLight: '#ff7875',
    errorLighter: '#ffa39e',
    errorDark: '#f5222d',
    info:"#40a9ff",
    infoDark:"#1890ff",
    infoLight:"#91d5ff",
    infoLighter:"#bae7ff",
    success: '#73d13d',
    successLight: '#95de64',
    successLighter: '#b7eb8f',
    successDark: '#52c41a',
    warning: '#faad14',
    warningLight: '#ffc53d',
    warningLighter: '#ffd666',
    warningDark: '#d48806',
}
export const palette:ThemePalette = {
    primary:'#F15A24',
    primaryLight:"#f48157",
    primaryLighter:"#f7a587",
    primaryDark:" #d8430e",
    ...BasicLight
}

export const BasicDark={
    background:"#141414",
    fontColor:"#fff",
    disabledBackground:"#8c8c8c",
    disabledColor:"rgba(0,0,0,.45)",
    borderColor:"#434343",
    error: '#d32029',
    errorLight: '#791a1f',
    errorLighter: '#58181c',
    errorDark: '#e84749',
    info:"#177ddc",
    infoDark:"#3c9ae8",
    infoLight:"#1765ad",
    infoLighter:"#164c7e",
    success: '#49aa19',
    successLight: '#3c8618',
    successLighter: '#306317',
    successDark: '#6abe39',
    warning: '#d8bd14',
    warningLight: '#aa9514',
    warningLighter: '#7c6e14',
    warningDark: '#e8d639',

}
export const DarkPalette:ThemePalette={
    primary:'#F15A24',
    primaryLight:"#e87949",
    primaryLighter:"#f39e73",
    primaryDark:" #d05022",
   ...BasicDark
}
