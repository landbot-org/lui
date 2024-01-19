import React from 'react';

import { Box } from '../Boxz';
import { FormHelperText } from '../FormHelperTextz';
import { FormLabel } from '../FormLabelz';
import { Typography } from '../Typographyz';
import { StyledTextArea } from './TextArea.styles';
import { TextAreaProps } from './types';

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ description, disabled, error, helperText, id, label, fullHeight, ...rest }, ref) => (
    <Box display="flex" flexDirection="column" flexGrow={fullHeight ? 1 : undefined}>
      {(label || description) && (
        <FormLabel htmlFor={id}>
          {label && (
            <Typography variant="text14" fontWeight={700}>
              {label}
            </Typography>
          )}
          {description && <Typography variant="text14">{description}</Typography>}
        </FormLabel>
      )}
      <Box display="flex" flexGrow={fullHeight ? 1 : undefined}>
        <StyledTextArea {...rest} disabled={disabled} $disabled={disabled} $error={error} id={id} ref={ref} />
      </Box>
      {helperText && (
        <FormHelperText variant="text12" color={error ? 'error.main' : 'neutral.main'}>
          {helperText}
        </FormHelperText>
      )}
    </Box>
  ),
);
TextArea.displayName = 'TextArea';
