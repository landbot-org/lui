import { useState } from 'react';

import { IoSend } from 'react-icons/io5';

import { ChatContentType } from '../../ChatBox.types';

import { StyledInput, StyledSendBox } from './SendBox.styles';

interface Content {
  content: string;
  contentType: ChatContentType;
}

export interface SendBoxProps {
  placeholder?: string;
  disabled?: boolean;
  onSend: (content: Content) => void;
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
              content: event.currentTarget.value,
              contentType: 'text',
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
              content,
              contentType: 'text',
            });
            setContent('');
          }
        }}
        role="button"
      />
    </StyledSendBox>
  );
};
