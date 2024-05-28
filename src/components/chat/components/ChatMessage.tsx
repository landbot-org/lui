import { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

import { StyledChatMessage } from './ChatMessage.styles';

export interface ChatMessageProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const ChatMessage = forwardRef(function ChatMessage(
  { children, ...rest }: ChatMessageProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <StyledChatMessage ref={ref} {...rest}>
      {children}
    </StyledChatMessage>
  );
});
