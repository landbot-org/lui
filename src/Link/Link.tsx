import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { BaseLink } from './Link.styles';
import { LinkProps } from './types';

export const Link = ({ bold = false, children, containsIcon = false, variant, ...rest }: LinkProps) => (
  <BaseLink {...rest}>
    <Typography fontWeight={bold ? 700 : 400} variant={variant} as="span">
      {children}
    </Typography>
    {containsIcon && (
      <Icon color="purple.main" icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} size={'0.5x'} />
    )}
  </BaseLink>
);
