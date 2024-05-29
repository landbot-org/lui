import { ForwardedRef, forwardRef } from 'react';

import { ChatBoxProps } from './ChatBox.types';

import { StyledChatBox } from './ChatBox.styles';

export const ChatBox = forwardRef(function ChatBox(
  { children, ...rest }: ChatBoxProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <StyledChatBox ref={ref} {...rest}>
      {children}
    </StyledChatBox>
  );
});
