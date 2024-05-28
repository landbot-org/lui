import { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

import { StyledChatHeader } from './ChatHeader.styles';

export interface ChatHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const ChatHeader = forwardRef(function ChatHeader(
  { children, ...rest }: ChatHeaderProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <StyledChatHeader ref={ref} {...rest}>
      {children}
    </StyledChatHeader>
  );
});
