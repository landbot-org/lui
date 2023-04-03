import React, { useRef } from 'react';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { FormHelperText } from '../FormHelperText';
import { FormLabel } from '../FormLabel';
import { StyledInputGroup, StyledInput } from './TextField.styles';
import { TextFieldProps } from './types';

export const TextField = ({
  description,
  disabled,
  endAdornment,
  error,
  helperText,
  id,
  label,
  startAdornment,
  ...rest
}: TextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
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
      <StyledInputGroup $disabled={disabled} $error={error} onClick={focusInput}>
        {startAdornment && (
          <Box display="flex" alignItems="center" onClick={(e) => e.stopPropagation()} mr={1}>
            {startAdornment}
          </Box>
        )}
        <StyledInput {...rest} disabled={disabled} id={id} ref={inputRef} />
        {endAdornment && (
          <Box display="flex" alignItems="center" onClick={(e) => e.stopPropagation()} ml={1}>
            {endAdornment}
          </Box>
        )}
      </StyledInputGroup>
      {helperText && (
        <FormHelperText variant="text12" color={error ? 'error.main' : 'neutral.main'}>
          {helperText}
        </FormHelperText>
      )}
    </div>
  );
};
