import { ChatProps } from './Chat.types';
import { MessageThread } from './components/message-thread/MessageThread';
import { SendBox } from './components/send-box/SendBox';

import { StyledChat } from './Chat.styles';

export const Chat = ({ className, ariaLabel = '', userId, messages, onSendMessage }: ChatProps) => {
  return (
    <StyledChat className={className} aria-label={ariaLabel}>
      <MessageThread userId={userId} messages={messages} />
      <SendBox onSendMessage={onSendMessage} />
    </StyledChat>
  );
};
