import React from 'react';

import { AvatarStatus as Status } from '../Avatar.types';

import { StyledStatus } from './Status.styles';

export interface StatusProps {
  status?: Status;
  color?: string;
  className?: string;
}

export const AvatarStatus = ({ status, color, ...rest }: StatusProps) => {
  return <StyledStatus $status={status} $color={color} {...rest}></StyledStatus>;
};
