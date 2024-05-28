import { useState } from 'react';

import { IoSend } from 'react-icons/io5';

import { StyledChatInput, StyledInput } from './ChatInput.styles';

export interface ChatInputProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onSendMessage: (message: string) => void;
}

export const ChatInput = ({
  value = '',
  placeholder = 'Type a message...',
  disabled = false,
  onSendMessage,
}: ChatInputProps) => {
  const [message, setMessage] = useState(value);

  return (
    <StyledChatInput>
      <StyledInput
        placeholder={placeholder}
        disabled={disabled}
        value={message}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && event.currentTarget.value !== '') {
            onSendMessage(event.currentTarget.value);
            event.currentTarget.value = '';
            setMessage('');
          }
        }}
        onChange={(event) => {
          setMessage(event.currentTarget.value);
        }}
      />
      <IoSend
        onClick={() => {
          if (message !== '') {
            onSendMessage(message);
            setMessage('');
          }
        }}
        role="button"
      />
    </StyledChatInput>
  );
};
