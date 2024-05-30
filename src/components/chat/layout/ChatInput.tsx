import {forwardRef, MouseEventHandler, useLayoutEffect, useRef, useState} from 'react';

import {StyledChatInput, StyledHelperText, StyledTextArea, StyleInputGroup} from './ChatInput.styles';
import {FormHelperText} from "../../form-helper-text";
import {Icon} from "../../icon";
import {PaperPlane} from "../../icon/icons/PaperPlane";

export interface ChatInputProps {
  className: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  onSendMessage: (message: string) => void;
}

export const ChatInput = forwardRef<HTMLDivElement, ChatInputProps>(
    ({
      className,
      value = '',
      placeholder = 'Enter a message',
      disabled = false,
      error = false,
      helperText = '',
      onSendMessage,
    },
    ref,
  ) => {
      const innerTextAreaRef = useRef<HTMLTextAreaElement>(null);
      const [message, setMessage] = useState(value);

      const handleInputGroupClick: MouseEventHandler<HTMLDivElement> = (event) => {
        innerTextAreaRef.current?.focus();
      };

      useLayoutEffect(() => {
        innerTextAreaRef.current!.style.height = "auto";
        innerTextAreaRef.current!.style.height = innerTextAreaRef.current?.scrollHeight + "px";
      }, [message]);

      return (
        <div className={className} ref={ref}>
          <StyledChatInput>
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
                  onSendMessage(event.currentTarget.value);
                  event.currentTarget.value = '';
                  setMessage('');
                }
              }}
              onChange={(event) => {
                setMessage(event.currentTarget.value);
              }}
              />
              <Icon icon={<PaperPlane />} role="button" onClick={() => {
                  if (message !== '') {
                    onSendMessage(message);
                    setMessage('');
                  }
                }
              }/>
            </StyleInputGroup>
            {helperText && (
                <StyledHelperText>
                    <FormHelperText variant="text12" color={error ? 'error.main' : 'neutral.main'} >
                      {helperText}
                    </FormHelperText>
                </StyledHelperText>
            )}
          </StyledChatInput>
        </div>
      );
    }
);
