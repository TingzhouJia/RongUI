export interface PaginationProps {
    total?: number;
    defaultCurrent?: number;
    disabled?: boolean;
    current?: number;
    defaultPageSize?: number;
    pageSize?: number;
    onChange?: (page: number, pageSize?: number) => void;
    hideOnSinglePage?: boolean;
    showSizeChanger?: boolean;
    pageSizeOptions?: string[];
    onShowSizeChange?: (current: number, size: number) => void;
    showQuickJumper?: boolean | { goButton?: React.ReactNode };
    showTitle?: boolean;
    showTotal?: (total: number, range: [number, number]) => React.ReactNode;
    size?: 'default' | 'small';
    responsive?: boolean;
    simple?: boolean;
    style?: React.CSSProperties;
    locale?: Object;
    className?: string;
    itemRender?: (
      page: number,
      type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
      originalElement: React.ReactElement<HTMLElement>,
    ) => React.ReactNode;
    role?: string;
    showLessItems?: boolean;
  }
  
  export type PaginationPosition = 'top' | 'bottom' | 'both';
  
  export interface PaginationConfig extends PaginationProps {
    position?: PaginationPosition;
  }

export const keyCodde= {
    ZERO: 48,
    NINE: 57,
  
    NUMPAD_ZERO: 96,
    NUMPAD_NINE: 105,
  
    BACKSPACE: 8,
    DELETE: 46,
    ENTER: 13,
  
    ARROW_UP: 38,
    ARROW_DOWN: 40,
  };
  