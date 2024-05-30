import { ForwardedRef, forwardRef } from 'react';

import { Typography } from '../../../../typography';
import { ChatMessage } from '../../../Chat.types';
import defaultAvatar from './avatar.png';

import {
  StyledAvatar,
  StyledAvatarImage,
  StyledContent,
  StyledDateTime,
  StyledMessage,
  StyledMessageBubble,
} from './Message.styles';

export interface MessageProps {
  mine: boolean;
  message: ChatMessage;
}

export function formatDate(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes}`;
}

export const Message = forwardRef(function Content(
  { mine, message, ...rest }: MessageProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <StyledMessage $mine={mine} ref={ref} {...rest}>
      <StyledAvatar>{!mine && <StyledAvatarImage src={message.sender.avatarUrl ?? defaultAvatar} />}</StyledAvatar>
      <StyledContent>
        <StyledMessageBubble $mine={mine}>
          <Typography variant="text14">{message.content.payload}</Typography>
          <StyledDateTime $mine={mine} variant="text10" color={'neutral.main'}>
            {formatDate(message.createdOn)}
          </StyledDateTime>
        </StyledMessageBubble>
      </StyledContent>
    </StyledMessage>
  );
});
