import React from 'react';
import { Icon } from '../Icon';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { TagWrapper } from './Tag.styles';
import { getTagIconSize, getTagTypographyVariant } from './utils';
import { TagProps } from './types';

export const Tag = ({
  label,
  backgroundColor = 'purple.main',
  borderColor = 'purple.700',
  iconColor = 'white.main',
  textColor = 'white.main',
  variant = 'filled',
  size = 'medium',
  startIcon,
  endIcon,
  onClickEndIcon,
}: TagProps) => (
  <TagWrapper $backgroundColor={backgroundColor} $borderColor={borderColor} $size={size} $variant={variant}>
    {startIcon && (
      <Box display="flex" mr={1}>
        <Icon icon={startIcon} size={getTagIconSize(size)} color={iconColor} />
      </Box>
    )}
    <Typography variant={getTagTypographyVariant(size)} color={textColor} fontWeight={500}>
      {label}
    </Typography>
    {endIcon && (
      <Box display="flex" ml={1}>
        <Icon icon={endIcon} size={getTagIconSize(size)} color={iconColor} onClick={onClickEndIcon} />
      </Box>
    )}
  </TagWrapper>
);
