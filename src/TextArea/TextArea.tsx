import React from 'react';

import { Box } from '../Box';
import { FormHelperText } from '../FormHelperText';
import { FormLabel } from '../FormLabel';
import { Typography } from '../Typography';
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
