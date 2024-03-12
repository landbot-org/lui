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
        0% 0%,
        75.06% 0%,
        75.06% 0%,
        73.653% 1.031%,
        72.356% 2.191%,
        71.176% 3.471%,
        70.123% 4.861%,
        69.208% 6.353%,
        68.437% 7.936%,
        67.822% 9.602%,
        67.372% 11.34%,
        67.094% 13.143%,
        67% 15%,
        67% 15%,
        67.236% 17.919%,
        67.918% 20.689%,
        69.009% 23.272%,
        70.473% 25.63%,
        72.273% 27.728%,
        74.37% 29.527%,
        76.728% 30.991%,
        79.311% 32.082%,
        82.081% 32.764%,
        85% 33%,
        85% 33%,
        86.857% 32.906%,
        88.66% 32.628%,
        90.398% 32.178%,
        92.064% 31.563%,
        93.648% 30.793%,
        95.139% 29.877%,
        96.529% 28.824%,
        97.809% 27.644%,
        98.969% 26.347%,
        100% 24.94%,
        100% 100%,
        0% 100%,
        0% 0%
      );
    `}
`;

export const StyledAvatarStatus = styled(AvatarStatus)`
  position: absolute;
  top: 2px;
  right: 2px;
`;
