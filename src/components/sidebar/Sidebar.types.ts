import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type SidebarProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
  toggled?: boolean;
  collapsed?: boolean;
  onToggle?: (value: boolean) => void;
  style?: CSSProperties;
};
