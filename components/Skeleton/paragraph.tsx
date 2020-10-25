import { ParaWrap } from "./wrapper";
import React from "react";

type widthUnit = number | string;

export interface SkeletonParagraphProps {
  className?: string;
  style?: object;
  width?: widthUnit | Array<widthUnit>;
  rows?: number;
}

const Paragraph = (props: SkeletonParagraphProps) => {
  const getWidth = (index: number) => {
    const { width, rows = 2 } = props;
    if (Array.isArray(width)) {
      return width[index];
    }
    // last paragraph
    if (rows - 1 === index) {
      return width;
    }
    return undefined;
  };
  const {  className, style, rows } = props;
  const rowList = [...Array(rows)].map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={index} style={{ width: getWidth(index) }}/>
  ));
  return (
    <ParaWrap className={className} style={style}>
      {rowList}
    </ParaWrap>
  );
};

export default Paragraph;