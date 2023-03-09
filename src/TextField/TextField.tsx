import React, { useRef } from 'react';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { FormHelperText, FormInput, StyledInput, StyledLabel } from './TextField.styles';
import { TextFieldProps } from './types';

export const TextField = ({
  description,
  disabled,
  endAdornment,
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
        <StyledLabel htmlFor={id}>
          {label && (
            <Typography variant="text14" fontWeight={700}>
              {label}
            </Typography>
          )}
          {description && <Typography variant="text14">{description}</Typography>}
        </StyledLabel>
      )}
      <FormInput $disabled={disabled} onClick={focusInput}>
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
      </FormInput>
      {helperText && (
        <FormHelperText variant="text12" color="neutral.main">
          {helperText}
        </FormHelperText>
      )}
    </div>
  );
};
