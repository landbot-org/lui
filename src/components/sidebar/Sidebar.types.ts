import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  toggled?: boolean;
  collapsed?: boolean;
  onToggle?: () => void;
  style?: CSSProperties;
}
