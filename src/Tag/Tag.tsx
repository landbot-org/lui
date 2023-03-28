import React from 'react';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { TagWrapper } from './Tag.styles';
import { getTagTypographyVariant } from './utils';
import { TagProps } from './types';

export const Tag = ({
  label,
  backgroundColor = 'purple.main',
  borderColor = 'purple.700',
  color = 'white.main',
  variant = 'filled',
  size = 'medium',
  startAdornment,
  endAdornment,
  ...rest
}: TagProps) => (
  <TagWrapper
    $backgroundColor={backgroundColor}
    $borderColor={borderColor}
    $color={color}
    $size={size}
    $variant={variant}
    {...rest}
  >
    {startAdornment && (
      <Box display="flex" mr={1}>
        {startAdornment}
      </Box>
    )}
    <Typography variant={getTagTypographyVariant(size)} fontWeight={500}>
      {label}
    </Typography>
    {endAdornment && (
      <Box display="flex" ml={1}>
        {endAdornment}
      </Box>
    )}
  </TagWrapper>
);
