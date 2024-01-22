import { styled } from 'styled-components';

interface StyledAvatarProps {
  $status?: string;
  $color?: string;
}

export const StyledStatus = styled.div<StyledAvatarProps>`
  ${({ $color, theme }) =>
    $color === 'blue'
      ? `
        border: 2.8px solid ${theme.palette.blue[800]};
      `
      : `
        border: 2.8px solid ${theme.palette.white.main};
      `}

  border-radius: 50%;
  width: 10px;
  height: 10px;

  ${({ $status }) =>
    $status === 'online' &&
    `
      background-color: #00ff00;
    `}

  ${({ $status }) =>
    $status === 'offline' &&
    `
      background-color: #000000;
    `}

  ${({ $status }) =>
    $status === 'busy' &&
    `
      background-color: #ff0000;
    `}

  ${({ $status }) =>
    $status === 'away' &&
    `
      background-color: #ffff00;
    `}
`;
