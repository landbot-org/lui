import { ChatMessage } from '../../../ChatBox.types';

import { StyledMessage } from './Message.styles';

export interface MessageProps {
  mine: boolean;
  showMessageDate: boolean;
  message: ChatMessage;
}

export const Message = ({ showMessageDate, message }: MessageProps) => {
  return (
    <StyledMessage>
      <div>
        {showMessageDate && <span>{message.createdOn}</span>}
        <div>
          <span>{message.senderDisplayName}</span>
          <p>{message.content}</p>
        </div>
      </div>
    </StyledMessage>
  );
};
