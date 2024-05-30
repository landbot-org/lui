import { ForwardedRef, MouseEventHandler, forwardRef, useLayoutEffect, useRef, useState } from 'react';

import { FormHelperText } from '../../../form-helper-text';
import { PaperPlane } from '../../../icon/icons/PaperPlane';
import { ChatContent } from '../../Chat.types';

import { StyleInputGroup, StyledHelperText, StyledIcon, StyledSendBox, StyledTextArea } from './SendBox.styles';

export interface SendBoxProps {
  className?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  onSendMessage: (content: ChatContent) => void;
}

export const SendBox = forwardRef(function SendBox(
  {
    className,
    value = '',
    placeholder = 'Enter a message',
    disabled = false,
    error = false,
    helperText = '',
    onSendMessage,
    ...rest
  }: SendBoxProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const innerTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState(value);

  const handleInputGroupClick: MouseEventHandler<HTMLDivElement> = () => {
    innerTextAreaRef.current?.focus();
  };

  useLayoutEffect(() => {
    innerTextAreaRef.current!.style.height = 'auto';
    innerTextAreaRef.current!.style.height = innerTextAreaRef.current?.scrollHeight + 'px';
  }, [message]);

  return (
    <div className={className} ref={ref} {...rest}>
      <StyledSendBox>
        <StyleInputGroup $error={error} onClick={handleInputGroupClick}>
          <StyledTextArea
            ref={innerTextAreaRef}
            placeholder={placeholder}
            disabled={disabled}
            value={message}
            rows={1}
            wrap="soft"
            onKeyDown={(event) => {
              if (event.key === 'Enter' && event.currentTarget.value !== '') {
                onSendMessage({
                  payload: event.currentTarget.value,
                  type: 'text',
                });
                event.currentTarget.value = '';
                setMessage('');
              }
            }}
            onChange={(event) => {
              setMessage(event.currentTarget.value);
            }}
          />
          <StyledIcon
            icon={<PaperPlane />}
            role="button"
            onClick={() => {
              if (message !== '') {
                onSendMessage({
                  payload: message,
                  type: 'text',
                });
                setMessage('');
              }
            }}
          />
        </StyleInputGroup>
        {helperText && (
          <StyledHelperText>
            <FormHelperText variant="text12" color={error ? 'error.main' : 'neutral.main'}>
              {helperText}
            </FormHelperText>
          </StyledHelperText>
        )}
      </StyledSendBox>
    </div>
  );
});
