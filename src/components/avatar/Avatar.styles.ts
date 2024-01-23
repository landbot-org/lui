import { styled } from 'styled-components';

import { AvatarStatus } from './components/Status';

interface StyledAvatarProps {
  $size?: number;
  $rounded?: boolean;
}

export const StyledAvatar = styled.div<StyledAvatarProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ $size }) =>
    $size &&
    `
      width: ${$size}px;
      height: ${$size}px;
    `}
`;

export const StyledAvatarImage = styled.img<StyledAvatarProps>`
  width: 100%;
  height: 100%;
  border-radius: 5px;

  ${({ $size }) =>
    $size &&
    `
      width: ${$size}px;
      height: ${$size}px;
    `}

  ${({ $rounded }) =>
    $rounded &&
    `
      border-radius: 50%;
    `}
`;

export const StyledAvatarStatus = styled(AvatarStatus)`
  position: absolute;
  top: -5px;
  right: -5px;
`;
