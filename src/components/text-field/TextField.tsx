import { MouseEventHandler, forwardRef, useId, useRef } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { Box } from '../box';
import { FormHelperText } from '../form-helper-text';
import { FormLabel } from '../form-label';
import { Typography } from '../typography';
import { StyledInput, StyledInputGroup } from './TextField.styles';
import { TextFieldProps } from './TextField.types';

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
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
      variant = 'regular',
      styles,
      ...rest
    },
    ref,
  ) => {
    const innerInputRef = useRef<HTMLInputElement>(null);
    const inputRef = useMergeRefs([propInputRef, innerInputRef]);
    const autoId = useId();

    const handleInputGroupClick: MouseEventHandler<HTMLDivElement> = (event) => {
      innerInputRef.current?.focus();
      inputGroupProps?.onClick?.(event);
    };

    return (
      <div className={className} ref={ref}>
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
        <StyledInputGroup
          {...inputGroupProps}
          $disabled={disabled}
          $error={error}
          $variant={variant}
          onClick={handleInputGroupClick}
          style={styles?.input}
        >
          {startAdornment && (
            <Box display="flex" alignItems="center" onClick={(e) => e.stopPropagation()} mr={1}>
              {startAdornment}
            </Box>
          )}
          <StyledInput {...rest} readOnly={readOnly} disabled={disabled} id={id ?? autoId} ref={inputRef} />
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
