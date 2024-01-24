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

  ${({ $status, theme }) =>
    $status === 'online' &&
    `
      background-color: ${theme.palette.success.main};
    `}

  ${({ $status, theme }) =>
    $status === 'offline' &&
    `
      background-color: ${theme.palette.info.main};
    `}

  ${({ $status, theme }) =>
    $status === 'busy' &&
    `
      background-color: ${theme.palette.error.main};
    `}

  ${({ $status, theme }) =>
    $status === 'away' &&
    `
      background-color: ${theme.palette.warning.main};
    `}
`;
