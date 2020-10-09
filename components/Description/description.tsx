import React from 'react'
import toArray from '../utils/toArray';
const getFilledItem=(
    node: React.ReactElement,
    span: number | undefined,
    rowRestCol: number,
): React.ReactElement =>{
    let clone = node;

    if (span === undefined || span > rowRestCol) {
        clone = React.cloneElement(node, {
            span: rowRestCol,
        });

    }
    return clone;
}

function getRows(children: React.ReactNode, column: number) {
    const childNodes = toArray(children).filter(n => n);
    const rows: React.ReactElement[][] = [];
  
    let tmpRow: React.ReactElement[] = [];
    let rowRestCol = column;
  
    childNodes.forEach((node, index) => {
      const span: number | undefined = node.props?.span;
      const mergedSpan = span || 1;
  
      // Additional handle last one
      if (index === childNodes.length - 1) {
        tmpRow.push(getFilledItem(node, span, rowRestCol));
        rows.push(tmpRow);
        return;
      }
  
      if (mergedSpan < rowRestCol) {
        rowRestCol -= mergedSpan;
        tmpRow.push(node);
      } else {
        tmpRow.push(getFilledItem(node, mergedSpan, rowRestCol));
        rows.push(tmpRow);
        rowRestCol = column;
        tmpRow = [];
      }
    });
  
    return rows;
  }
  export interface DescriptionsProps {
    className?: string;
    style?: React.CSSProperties;
    bordered?: boolean;
    size?: 'middle' | 'small' | 'default';
    children?: React.ReactNode;
    title?: React.ReactNode;
    extra?: React.ReactNode;
    layout?: 'horizontal' | 'vertical';
    colon?: boolean;
  }

