export interface ChatProps {
  className?: string;
  ariaLabel?: string;
  userId: string;
  messages: ChatMessage[];
  onSendMessage: (content: ChatContent) => void;
}

export enum ChatContentType {
  Text = 'text',
}

export interface ChatContent {
  payload: string;
  type: ChatContentType;
}

export interface ChatParticipant {
  id: string;
  displayName?: string;
  avatarUrl?: string;
}

export interface ChatMessage {
  id: string;
  sender: ChatParticipant;
  content: ChatContent;
  createdOn: Date;
}
