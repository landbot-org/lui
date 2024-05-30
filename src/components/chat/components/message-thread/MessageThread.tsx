import { useEffect, useRef } from 'react';

import { ChatMessage } from '../../Chat.types';
import { Message } from './components/Message';

import { StyledMessageThread } from './MessageThread.styles';

export interface MessageThreadProps {
  userId: string;
  messages: ChatMessage[];
}

export const MessageThread = ({ userId, messages }: MessageThreadProps) => {
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      return;
    }

    lastMessageRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages.length]);

  return (
    <StyledMessageThread>
      {messages.map((message) => (
        <Message
          key={message.id}
          mine={userId === message.sender.id}
          message={message}
          ref={messages[messages.length - 1].id === message.id ? lastMessageRef : undefined}
        />
      ))}
    </StyledMessageThread>
  );
};
