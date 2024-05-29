import { ChatMessage } from '../../ChatBox.types';
import { Message } from './components/Message';

import { StyledMessageThread } from './MessageThread.styles';

export interface MessageThreadProps {
  userId: string;
  messages: ChatMessage[];
  showMessageDate: boolean;
  onLoadPreviousChatMessages: () => void;
}

export const MessageThread = ({
  userId,
  messages,
  showMessageDate,
  onLoadPreviousChatMessages,
}: MessageThreadProps) => {
  return (
    <StyledMessageThread>
      <button onClick={onLoadPreviousChatMessages}>Load previous messages</button>
      {messages.map((message) => (
        <Message
          key={message.messageId}
          mine={userId === message.senderId}
          showMessageDate={showMessageDate}
          message={message}
        />
      ))}
    </StyledMessageThread>
  );
};
