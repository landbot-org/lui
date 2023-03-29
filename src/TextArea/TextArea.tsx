import React from 'react';
import { Box } from '../Box';
import { FormHelperText } from '../FormHelperText';
import { FormLabel } from '../FormLabel';
import { Typography } from '../Typography';
import { StyledTextArea } from './TextArea.styles';
import { TextAreaProps } from './types';

export const TextArea = ({ description, disabled, error, helperText, id, label, ...rest }: TextAreaProps) => (
  <div>
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
    <Box display="flex">
      <StyledTextArea {...rest} disabled={disabled} $disabled={disabled} $error={error} id={id} />
    </Box>
    {helperText && (
      <FormHelperText variant="text12" color={error ? 'error.main' : 'neutral.main'}>
        {helperText}
      </FormHelperText>
    )}
  </div>
);
