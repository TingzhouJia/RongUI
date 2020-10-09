
import * as React from 'react';
import { DescriptionsItemProps } from './items';
import Cell from './cell';
import { DescRow } from './wrapper';
export interface RowProps {
    vertical: boolean;
    row: React.ReactElement<DescriptionsItemProps>[];
    bordered?: boolean;
    colon: boolean;
    index: number;
  }
interface CellConfig {
  component: string | [string, string];
  type: string;
  showLabel?: boolean;
  showContent?: boolean;
}

function renderCells(
  items: React.ReactElement<DescriptionsItemProps>[],
  { colon, bordered }: RowProps,
  { component, type, showLabel, showContent }: CellConfig,
) {
  return items.map(
    (
      {
        props: {
          label,
          children,
          className,
          style,
          span = 1,
        },
        key,
      },
      index,
    ) => {
      if (typeof component === 'string') {
        return (
          <Cell
            key={`${type}-${key || index}`}
            className={className}
            style={style}
            span={span}
            colon={colon}
            component={component}
            bordered={bordered}
            label={showLabel ? label : null}
            content={showContent ? children : null}
          />
        );
      }

      return [
        <Cell
          key={`label-${key || index}`}
          className={className}
          style={style}
          span={1}
          colon={colon}
          component={component[0]}
          bordered={bordered}
          label={label}
        />,
        <Cell
          key={`content-${key || index}`}
          className={className}
          style={style}
          span={span * 2 - 1}
          component={component[1]}
          bordered={bordered}
          content={children}
        />,
      ];
    },
  );
}

const Row: React.FC<RowProps> = props => {
    const {  vertical, row, index, bordered } = props;
    if (vertical) {
      return (
        <>
          <DescRow key={`label-${index}`} >
            {renderCells(row, props, { component: 'th', type: 'label', showLabel: true })}
          </DescRow>
          <DescRow key={`content-${index}`} >
            {renderCells(row, props, {
              component: 'td',
              type: 'content',
              showContent: true,
            })}
          </DescRow>
        </>
      );
    }
  
    return (
      <DescRow key={index} >
        {renderCells(row, props, {
          component: bordered ? ['th', 'td'] : 'td',
          type: 'item',
          showLabel: true,
          showContent: true,
        })}
      </DescRow>
    );
  };

export default Row