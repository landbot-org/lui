import React, { useRef } from 'react';

import { useMergeRefs } from '@floating-ui/react';

import { Box } from '../box';
import { FormHelperText } from '../form-helper-text';
import { FormLabel } from '../form-label';
import { Typography } from '../typography';
import { TextFieldProps } from './TextField.types';

import { StyledInput, StyledInputGroup } from './TextField.styles';

export const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      className,
      description,
      disabled,
      endAdornment,
      error,
      helperText,
      id,
      label,
      startAdornment,
      inputRef: propInputRef = null,
      inputGroupProps,
      readOnly,
      ...rest
    },
    ref,
  ) => {
    const innerInputRef = useRef<HTMLInputElement>(null);
    const inputRef = useMergeRefs([propInputRef, innerInputRef]);

    const handleInputGroupClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
      innerInputRef.current?.focus();
      inputGroupProps?.onClick?.(event);
    };

    return (
      <div className={className} ref={ref}>
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
        <StyledInputGroup {...inputGroupProps} $disabled={disabled} $error={error} onClick={handleInputGroupClick}>
          {startAdornment && (
            <Box display="flex" alignItems="center" onClick={(e) => e.stopPropagation()} mr={1}>
              {startAdornment}
            </Box>
          )}
          <StyledInput {...rest} readOnly={readOnly} disabled={disabled} id={id} ref={inputRef} />
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
  },
);

TextField.displayName = 'TextField';
