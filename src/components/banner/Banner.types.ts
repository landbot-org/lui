import { HTMLAttributes, ReactNode } from 'react';

export type BannerColorTypes = 'purple.main' | 'green.main';

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  backgroundColor?: BannerColorTypes;
}
