import React from 'react';

import { AvatarProps } from './Avatar.types';

import { StyledAvatar, StyledAvatarImage, StyledAvatarStatus } from './Avatar.styles';

export const Avatar = ({
  avatar = 'https://storage.googleapis.com/media.yexir.com/avatars/default/1.png',
  name,
  status,
  size = 32,
  color = 'white',
  rounded,
  ...rest
}: AvatarProps) => {
  return (
    <StyledAvatar $size={size} {...rest}>
      <StyledAvatarStatus status={status} color={color} />
      <StyledAvatarImage src={avatar} alt={name} $size={size} $rounded={rounded} />
    </StyledAvatar>
  );
};
