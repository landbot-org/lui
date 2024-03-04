import { ReactNode } from 'react';

export type BannerColorTypes = 'purple.main' | 'green.main';

export interface BannerProps {
  children: ReactNode;
  backgroundColor?: BannerColorTypes;
}
