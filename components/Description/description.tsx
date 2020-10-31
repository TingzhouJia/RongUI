import React from 'react'
import toArray from '../utils/toArray';
import { DescBase, DesHeader, DesTitle, DesExtra, DescView } from './wrapper';
import DescriptionsItem, { DescriptionsItemProps } from './items';
import Cell from './cell';
export {DescriptionsItemProps}


  export interface BasicDescriptionsProps {
    className?: string;
    style?: React.CSSProperties;
    bordered?: boolean;
    column?:number
    size?: 'large' | 'small' | 'default';
    children?: React.ReactNode;
    title?: React.ReactNode;
    extra?: React.ReactNode;
    layout?: 'horizontal' | 'vertical';
    colon?: boolean;
  }

export interface DescriptionProps extends React.FC<BasicDescriptionsProps> {
    Item: typeof DescriptionsItem
}

  const Description:DescriptionProps=({title,
    extra,
    colon = true,
    column=3,
    bordered=false,
    layout="horizontal",
    children,
    className,
    style,
    size="default",})=>{
       const mapChildren=()=>{
           const comps=React.Children.map(children,(value,index)=>{
             
             if(value!==undefined&&value!==null){
               if(typeof value==='string'||typeof value==='number'){
                 return value
               }
              let {children,label,className,style}:DescriptionsItemProps=(value as React.ReactElement).props
              return <Cell column={column} key={`description-item-${index}`} colon={colon} 
              bordered={bordered} className={className} style={style} size={size} 
              label={label} content={children} direction={layout}/>
             }
           
        })
           return comps
       }
        return (
            <DescBase id="description-base" className={className} style={style}>
               {
                   (title||extra)&& (<DesHeader id="description-header">
                   {title&& <DesTitle bordered={bordered} id="description-title" size={size}>{title}</DesTitle>}
                   {extra&&<DesExtra id="description-extra">{extra}</DesExtra>}
               </DesHeader>)
               }
               <DescView id="description-view" bordered={bordered}>
                {mapChildren()}
               </DescView>
            </DescBase>
        )
  }


Description.Item=DescriptionsItem

export default Description

  

