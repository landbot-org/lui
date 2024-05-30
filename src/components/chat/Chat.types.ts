import { PropsWithChildren } from 'react';

export interface ChatProps extends PropsWithChildren {}

export type ChatMessageType = 'chat' | 'system';
export type ChatContentType = 'text' | 'image' | 'video' | 'audio' | 'file' | 'html';

export interface ChatContent {
  payload: string;
  type: ChatContentType;
}

export interface ChatParticipant {
  id: string;
  displayName: string;
  email?: string;
  avatarUrl?: string;
}

export interface ChatMessage {
  id: string;
  type: ChatMessageType;
  sender: ChatParticipant;
  content: ChatContent;
  createdOn: Date;
}
