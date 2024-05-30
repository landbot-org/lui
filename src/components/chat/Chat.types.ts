import { PropsWithChildren } from 'react';

export interface ChatProps extends PropsWithChildren {
  className?: string;
  userId: string;
  messages: ChatMessage[];
  onSendMessage: (content: ChatContent) => void;
}

export type ChatContentType = 'text';

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
  sender: ChatParticipant;
  content: ChatContent;
  createdOn: Date;
}
