import React from 'react';
import { Typography } from '../Typography';
import { BaseLink } from './Link.styles';
import { LinkProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '../Icon';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export const Link = ({ bold = false, children, containsIcon = false, ...rest }: LinkProps) => (
  <BaseLink {...rest}>
    <Typography fontWeight={bold ? 700 : 400} variant="text16">
      {children}
    </Typography>
    {containsIcon && (
      <Icon color="purple.main" icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} size={'0.5x'} />
    )}
  </BaseLink>
);
