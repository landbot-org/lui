import { ChatMessage, ChatMessageProps } from '../components/ChatMessage';

import { StyledMessages } from './ChatMessages.styles';

export interface MessagesProps {
  messages: ChatMessageProps[];
}

export const ChatMessages = ({ messages }: MessagesProps) => {
  return (
    <StyledMessages>
      {messages.map((message, index) => (
        <ChatMessage key={index}>{message.children}</ChatMessage>
      ))}
    </StyledMessages>
  );
};
