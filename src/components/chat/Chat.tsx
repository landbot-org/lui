import { ForwardedRef, forwardRef } from 'react';

import { ChatProps } from './Chat.types';

import { StyledChat } from './Chat.styles';

export const Chat = forwardRef(function Chat({ children, ...rest }: ChatProps, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <StyledChat ref={ref} {...rest}>
      {children}
    </StyledChat>
  );
});
