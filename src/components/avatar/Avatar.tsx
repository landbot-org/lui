import defaultAvatar from '../../assets/images/avatar.png';
import { AVATAR_STATUS, AvatarProps } from './Avatar.types';

import { StyledAvatar, StyledAvatarImage, StyledAvatarStatus } from './Avatar.styles';

export const Avatar = ({
  avatar = defaultAvatar,
  status = AVATAR_STATUS.ONLINE,
  showStatus = true,
  size = 'md',
  rounded = false,
  ...rest
}: AvatarProps) => {
  return (
    <StyledAvatar {...rest}>
      {showStatus && <StyledAvatarStatus status={status} size={size} />}
      <StyledAvatarImage src={avatar} $size={size} $rounded={rounded} $showStatus={showStatus} />
    </StyledAvatar>
  );
};
