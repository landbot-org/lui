import { forwardRef, useId } from 'react';
import { Box } from '../box';
import { FormHelperText } from '../form-helper-text';
import { FormLabel } from '../form-label';
import { Typography } from '../typography';
import { StyledTextArea } from './TextArea.styles';
import { TextAreaProps } from './TextArea.types';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ description, disabled, error, helperText, id, label, fullHeight, resize = 'none', ...rest }, ref) => {
    const autoId = useId();

    return (
      <Box display="flex" flexDirection="column" flexGrow={fullHeight ? 1 : undefined}>
        {(label || description) && (
          <FormLabel htmlFor={id ?? autoId}>
            {label && (
              <Typography variant="text14" fontWeight={700}>
                {label}
              </Typography>
            )}
            {description && <Typography variant="text14">{description}</Typography>}
          </FormLabel>
        )}
        <Box display="flex" flexGrow={fullHeight ? 1 : undefined}>
          <StyledTextArea
            {...rest}
            disabled={disabled}
            $disabled={disabled}
            $error={error}
            id={id ?? autoId}
            ref={ref}
            $resize={resize}
          />
        </Box>
        {helperText && (
          <FormHelperText variant="text12" color={error ? 'error.main' : 'neutral.main'}>
            {helperText}
          </FormHelperText>
        )}
      </Box>
    );
  },
);
TextArea.displayName = 'TextArea';
