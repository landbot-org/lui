import { PropsWithChildren } from 'react';

export interface ChatProps extends PropsWithChildren {}

export interface ChatMessageType {
  key: string;
  text?: string;
  author: 'bot' | 'user';
  timestamp: number;
  type: string;
}
