import React from "react"

export interface TimelineConfig {
    mode?: 'left'|'right'
   
  }
  
  const defaultContext = {}
  
  export const TimelineContext = React.createContext<TimelineConfig>(defaultContext)
  
  export const useTimelineContext = (): TimelineConfig =>
    React.useContext<TimelineConfig>(TimelineContext)