import { AVATAR_STATUS, AvatarSize } from '../Avatar.types';

import { StyledStatus } from './Status.styles';

export interface StatusProps {
  status?: AVATAR_STATUS;
  size?: AvatarSize;
}

export const AvatarStatus = ({ status, size, ...rest }: StatusProps) => {
  return <StyledStatus $status={status} $size={size} {...rest}></StyledStatus>;
};
