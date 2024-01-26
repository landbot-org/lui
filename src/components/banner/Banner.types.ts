import { HTMLAttributes } from 'react';

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}
