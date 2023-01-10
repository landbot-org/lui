import React from 'react';
import { Typography } from '../Typography';
import { StyledLink } from './Link.styles';
import { LinkProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '../Icon';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export const Link = ({ bold = false, containsIcon = false, target = '_self', children, href }: LinkProps) => (
  <StyledLink $bold={bold} $containsIcon={containsIcon} href={href} target={target}>
    <Typography color="purple.main" fontWeight={bold ? 700 : 400} variant="text16">
      {children}
    </Typography>
    {containsIcon && <Icon icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />} size={'0.5x'} />}
  </StyledLink>
);
