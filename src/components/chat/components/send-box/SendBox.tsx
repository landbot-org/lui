import { useState } from 'react';

import { IoSend } from 'react-icons/io5';

import { ChatContent } from '../../Chat.types';

import { StyledInput, StyledSendBox } from './SendBox.styles';

export interface SendBoxProps {
  placeholder?: string;
  disabled?: boolean;
  onSend: (content: ChatContent) => void;
}

export const SendBox = ({ placeholder = 'Type a message...', disabled = false, onSend }: SendBoxProps) => {
  const [content, setContent] = useState('');

  return (
    <StyledSendBox>
      <StyledInput
        placeholder={placeholder}
        disabled={disabled}
        value={content}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && event.currentTarget.value !== '') {
            onSend({
              payload: event.currentTarget.value,
              type: 'text',
            });
            event.currentTarget.value = '';
            setContent('');
          }
        }}
        onChange={(event) => {
          setContent(event.currentTarget.value);
        }}
      />
      <IoSend
        onClick={() => {
          if (content !== '') {
            onSend({
              payload: content,
              type: 'text',
            });
            setContent('');
          }
        }}
        role="button"
      />
    </StyledSendBox>
  );
};
