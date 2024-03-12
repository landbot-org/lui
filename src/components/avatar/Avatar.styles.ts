import { styled } from 'styled-components';

import { AvatarSize } from './Avatar.types';
import { AvatarStatus } from './components/Status';

interface StyledAvatarProps {
  $size?: AvatarSize;
  $rounded?: boolean;
  $showStatus?: boolean;
}

export const StyledAvatar = styled.div<StyledAvatarProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
`;

export const StyledAvatarImage = styled.img<StyledAvatarProps>`
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 20%;
  display: block;

  ${({ $size }) =>
    $size === 'sm' &&
    `
      width: 32px;
      height: 32px;
    `}

  ${({ $size }) =>
    $size === 'md' &&
    `
      width: 48px;
      height: 48px;
    `}

  ${({ $size }) =>
    $size === 'lg' &&
    `
      width: 64px;
      height: 64px;
    `}

  ${({ $rounded }) =>
    $rounded &&
    `
      border-radius: 50%;
    `}

  ${({ $showStatus }) =>
    $showStatus &&
    `
      clip-path: polygon(
        100% 0%,
        100% 75.06%,
        100% 75.06%,
        98.969% 73.653%,
        97.809% 72.356%,
        96.529% 71.176%,
        95.139% 70.123%,
        93.648% 69.208%,
        92.064% 68.437%,
        90.398% 67.822%,
        88.66% 67.372%,
        86.857% 67.094%,
        85% 67%,
        85% 67%,
        82.081% 67.236%,
        79.311% 67.918%,
        76.728% 69.009%,
        74.37% 70.473%,
        72.273% 72.273%,
        70.473% 74.37%,
        69.009% 76.728%,
        67.918% 79.311%,
        67.236% 82.081%,
        67% 85%,
        67% 85%,
        67.094% 86.857%,
        67.372% 88.66%,
        67.822% 90.398%,
        68.437% 92.064%,
        69.208% 93.648%,
        70.123% 95.139%,
        71.176% 96.529%,
        72.356% 97.809%,
        73.653% 98.969%,
        75.06% 100%,
        0% 100%,
        0% 0%,
        100% 0%
      );
    `}
`;

export const StyledAvatarStatus = styled(AvatarStatus)`
  position: absolute;
  bottom: 2px;
  right: 2px;
`;
