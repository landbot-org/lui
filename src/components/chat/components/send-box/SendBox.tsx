import {
  ChangeEvent,
  ForwardedRef,
  KeyboardEvent,
  MouseEventHandler,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Box } from '../../../box';
import { FormHelperText } from '../../../form-helper-text';
import { PaperPlane } from '../../../icon/icons/PaperPlane';
import { ChatContent, ChatContentType } from '../../Chat.types';
import { StyledIcon, StyledInputGroup, StyledTextArea } from './SendBox.styles';

export interface SendBoxProps {
  className?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  onSendMessage: (content: ChatContent) => void;
}

export const SendBox = forwardRef(
  (
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
  ) => {
    const innerTextAreaRef = useRef<HTMLTextAreaElement>(null);
    const [message, setMessage] = useState(value);

    const handleInputGroupClick: MouseEventHandler<HTMLDivElement> = () => {
      innerTextAreaRef.current?.focus();
    };

    useLayoutEffect(() => {
      innerTextAreaRef.current!.style.height = 'auto';
      innerTextAreaRef.current!.style.height = innerTextAreaRef.current?.scrollHeight + 'px';
    }, [message]);

    const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (event.currentTarget?.value !== '') {
          onSendMessage({
            payload: event.currentTarget?.value,
            type: ChatContentType.Text,
          });
          setMessage('');
        }
      }
    };

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(event.currentTarget.value);
    };

    const onClick = () => {
      if (message !== '') {
        onSendMessage({
          payload: message,
          type: ChatContentType.Text,
        });
        setMessage('');
      }
    };

    return (
      <div className={className} ref={ref} {...rest}>
        <Box display="flex" flexDirection="column" m={3}>
          <StyledInputGroup $error={error} onClick={handleInputGroupClick}>
            <StyledTextArea
              ref={innerTextAreaRef}
              placeholder={placeholder}
              disabled={disabled}
              value={message}
              rows={1}
              wrap="soft"
              onKeyDown={onKeyDown}
              onChange={onChange}
            />
            <StyledIcon icon={<PaperPlane />} role="button" size="1.25x" onClick={onClick} />
          </StyledInputGroup>
          {helperText && (
            <Box display="flex" alignItems="baseline" gap={4}>
              <FormHelperText variant="text12" color={error ? 'error.main' : 'neutral.main'}>
                {helperText}
              </FormHelperText>
            </Box>
          )}
        </Box>
      </div>
    );
  },
);

SendBox.displayName = 'SendBox';
