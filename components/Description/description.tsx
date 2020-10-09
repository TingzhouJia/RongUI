import React from 'react'
import toArray from '../utils/toArray';
import { DescBase, DesHeader, DesTitle, DesExtra, DescView } from './wrapper';
import DescriptionsItem, { DescriptionsItemProps } from './items';
import Cell from './cell';
const getFilledItem=(
    node: React.ReactElement,
    size:string
): React.ReactElement =>{
    let clone = node;


        clone = React.cloneElement(node, {
           size
            
        });
        return clone;
    }


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
           const comps=toArray(children).map((value,index)=>{
               let {children,label,className,style}:DescriptionsItemProps=value.props
                return <Cell column={column} key={`description-item-${index}`} colon={colon} 
                bordered={bordered} className={className} style={style} size={size} 
                label={label} content={children} direction={layout}/>
           })
           return comps
       }
        return (
            <DescBase className={className} style={style}>
               {
                   (title||extra)&& (<DesHeader>
                   {title&& <DesTitle>{title}</DesTitle>}
                   {extra&&<DesExtra>{extra}</DesExtra>}
               </DesHeader>)
               }
               <DescView>
                {mapChildren()}
               </DescView>
            </DescBase>
        )
  }


Description.Item=DescriptionsItem

  

