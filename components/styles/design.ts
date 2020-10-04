import { ThemesExpressiveness,ThemesBreakpoints, ThemeFontType, ThemesFont } from "../utils"

export const expressiveness:ThemesExpressiveness = {
    linkStyle: 'none',
    linkHoverStyle: 'none',
    dropdownBoxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.02)',
    shadowSmall: '0px 6px 16px -8px rgba(0,0,0,0.08), 0px 9px 28px 0px rgba(0,0,0,0.05), 0px 12px 48px 16px rgba(0,0,0,0.03)',
    shadowMedium: '0px 3px 6px -4px rgba(0,0,0,0.12), 0px 6px 16px 0px rgba(0,0,0,0,08), 0px 9px 28px 8px rgba(0,0,0,0.05)',
    shadowLarge: '0 1px 2px -2px rgba(0, 0, 0, 0.16),0px 3px 6px 0px rgba(0,0,0,0.12),0px 5px 12px 4px rgba(0,0,0,0.09)',
    portalOpacity: 0.25,
  }

  export const defaultFont:ThemesFont = {
    sans:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    mono:
      'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
  }

  export const defaultFontSize:ThemeFontType={
      normal:{
          size:'14px',
          height:'22px',
          weight:'400'
      },
      larger:{
          size:'16px',
          height:'24px',
          weight:'400'
      }
  }
  export const defaultBreakpoints:ThemesBreakpoints = {
    xs: {
      min: '0',
      max: '650px',
    },
    sm: {
      min: '650px',
      max: '900px',
    },
    md: {
      min: '900px',
      max: '1280px',
    },
    lg: {
      min: '1280px',
      max: '1920px',
    },
    xl: {
      min: '1920px',
      max: '10000px',
    },
  }