import { ChatProps } from './Chat.types';
import { MessageThread } from './components/message-thread/MessageThread';
import { SendBox } from './components/send-box/SendBox';

import { StyledChat } from './Chat.styles';

export const Chat = ({ userId, messages, onSendMessage }: ChatProps) => {
  return (
    <StyledChat>
      <MessageThread userId={userId} messages={messages} />
      <SendBox onSend={onSendMessage} />
    </StyledChat>
  );
};
