import { AVATAR_STATUS } from '../Avatar.types';

import { StyledStatus } from './Status.styles';

export interface StatusProps {
  status?: AVATAR_STATUS;
  color?: string;
  className?: string;
}

export const AvatarStatus = ({ status, color, ...rest }: StatusProps) => {
  return <StyledStatus $status={status} $color={color} {...rest}></StyledStatus>;
};
