import { styled } from 'styled-components';

import { AvatarSize } from '../Avatar.types';

interface StyledAvatarProps {
  $status?: string;
  $size?: AvatarSize;
}

export const StyledStatus = styled.div<StyledAvatarProps>`
  border-radius: 50%;

  ${({ $size }) =>
    $size === 'sm' &&
    `
      width: 6px;
      height: 6px;
    `}

  ${({ $size }) =>
    $size === 'md' &&
    `
      width: 10px;
      height: 10px;
    `}

${({ $size }) =>
    $size === 'lg' &&
    `
      width: 15px;
      height: 15px;
    `}

  ${({ $status, theme }) =>
    $status === 'online' &&
    `
      background-color: ${theme.palette.success.main};
    `}

  ${({ $status, theme }) =>
    $status === 'offline' &&
    `
      background-color: ${theme.palette.warning.main};
    `}

  ${({ $status, theme }) =>
    $status === 'busy' &&
    `
      background-color: ${theme.palette.pink.main};
    `}

  ${({ $status, theme }) =>
    $status === 'away' &&
    `
      background-color: ${theme.palette.neutral[300]};
    `}
`;
