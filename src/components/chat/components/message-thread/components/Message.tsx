import { ForwardedRef, forwardRef } from 'react';

import { Icon } from '../../../../icon';
import { Landbot } from '../../../../icon/icons';
import { ChatMessage } from '../../../Chat.types';

import {
  StyledAvatar,
  StyledAvatarImage,
  StyledContent,
  StyledDateTime,
  StyledMessage,
  StyledMessageBubble,
  StyledMessageText,
} from './Message.styles';

export interface MessageProps {
  mine: boolean;
  message: ChatMessage;
}

export function formatDate(date: Date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

export const Message = forwardRef(({ mine, message, ...rest }: MessageProps, ref: ForwardedRef<HTMLDivElement>) => (
  <StyledMessage $mine={mine} ref={ref} {...rest}>
    {!mine && (
      <StyledAvatar>
        {message.sender.avatarUrl ? (
          <StyledAvatarImage src={message.sender.avatarUrl} />
        ) : (
          <Icon icon={<Landbot />} size="2.5x" />
        )}
      </StyledAvatar>
    )}
    <StyledContent>
      <StyledMessageBubble $mine={mine}>
        <StyledMessageText variant="text16">{message.content.payload}</StyledMessageText>
        <StyledDateTime $mine={mine} variant="text10" color={'neutral.main'}>
          {formatDate(message.createdOn)}
        </StyledDateTime>
      </StyledMessageBubble>
    </StyledContent>
  </StyledMessage>
));

Message.displayName = 'Message';
