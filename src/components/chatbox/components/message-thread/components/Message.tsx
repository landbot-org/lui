import { ForwardedRef, forwardRef } from 'react';

import { Typography } from '../../../../typography';
import { ChatMessage } from '../../../ChatBox.types';

import {
  StyledAvatarImage,
  StyledDateTime,
  StyledMessage,
  StyledMessageContent,
  StyledSideContent,
} from './Message.styles';

export interface MessageProps {
  mine: boolean;
  showDisplayName: boolean;
  showMessageDate: boolean;
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
  { mine, showDisplayName, showMessageDate, message, ...rest }: MessageProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <StyledMessage $mine={mine} ref={ref} {...rest}>
      <StyledSideContent $mine={mine}>
        {!mine && <StyledAvatarImage src={message.sender.avatarUrl} />}
      </StyledSideContent>
      <StyledMessageContent $mine={mine}>
        {showDisplayName && <Typography variant="text16">{message.sender.displayName}</Typography>}
        <Typography variant="text14">{message.content.payload}</Typography>
        {showMessageDate && (
          <StyledDateTime $mine={mine} variant="text10" color={'neutral.main'}>
            {formatDate(message.createdOn)}
          </StyledDateTime>
        )}
      </StyledMessageContent>
      <StyledSideContent $mine={mine}>{mine && <StyledAvatarImage src={message.sender.avatarUrl} />}</StyledSideContent>
    </StyledMessage>
  );
});
