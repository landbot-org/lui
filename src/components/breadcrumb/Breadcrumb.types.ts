import { ReactNode } from 'react';

export interface BreadcrumbItem {
  label: ReactNode;
  icon?: ReactNode;
  active?: boolean;
  disabled?: boolean;
  route?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  mode?: 'light' | 'dark';
  size?: 'small' | 'large';
}
