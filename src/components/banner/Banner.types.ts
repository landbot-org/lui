import { HTMLAttributes } from 'react';

export type BannerColorTypes = 'purple.main' | 'green.main';

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: BannerColorTypes;
}
