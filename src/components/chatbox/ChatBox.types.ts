import { PropsWithChildren } from 'react';

export interface ChatBoxProps extends PropsWithChildren {}

export type ChatMessageType = 'chat' | 'system';
export type ChatContentType = 'text' | 'image' | 'video' | 'audio' | 'file' | 'html';

export interface ChatMessage {
  messageType: ChatMessageType;
  senderId: string;
  senderDisplayName: string;
  messageId: string;
  content: string;
  contentType: ChatContentType;
  createdOn: string;
}
