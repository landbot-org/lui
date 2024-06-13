import { HTMLAttributes, ReactNode } from 'react';

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  table: Table;
  bulkSelect?: boolean;
}

export type Table = {
  columns: Column[];
  rows: Row[];
};

export type Column = {
  value: string | ReactNode;
  icon?: ReactNode;
  sortable?: boolean;
};

export type Row = {
  cells: Cell[];
  selected?: boolean;
  onSelect?: () => void;
};

export type Cell = {
  icon?: ReactNode;
  value: IndexCell | TextCell | LinkCell | TagCell | ToggleCell | ButtonCell;
};

export type IndexCell = {
  type: 'index';
  key: string;
  value: string;
  href?: string;
};

export type TextCell = {
  type: 'text';
  value: string;
};

export type LinkCell = {
  type: 'link';
  value: string;
  href: string;
};

export type TagCell = {
  type: 'tag';
  value: string;
  variant: 'default' | 'primary' | 'success' | 'warning' | 'danger';
};

export type ToggleCell = {
  type: 'toggle';
  value: boolean;
  onToggle: () => void;
};

export type ButtonCell = {
  type: 'button';
  value: string;
  onClick: () => void;
};
