import { styled } from 'styled-components';

import { Typography } from '../../../../typography';

interface StyledMessageProps {
  $mine?: boolean;
}

export const StyledMessage = styled.div<StyledMessageProps>`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  max-width: 100%;
`;

export const StyledContent = styled.div<StyledMessageProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const StyledMessageBubble = styled.div<StyledMessageProps>`
  display: flex;
  flex-direction: column;
  padding: 12px 15px 12px 15px;

  ${({ $mine }) =>
    $mine === true &&
    `
      align-self: flex-end;
      border-radius: 15px 15px 2px 15px;
      background-color: #f1f0f0;
    `}

  ${({ $mine }) =>
    $mine === false &&
    `
      align-self: flex-start;
      border-radius: 15px 15px 15px 2px;
      background-color: #f1f0f0;
    `}
`;

export const StyledAvatar = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 50px;
  max-width: 50px;
`;

export const StyledAvatarImage = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 20%;
  display: block;
  width: 40px;
  height: 40px;
`;

export const StyledDateTime = styled(Typography)<StyledMessageProps>`
  display: flex;
  margin-top: 10px;

  ${({ $mine }) =>
    $mine === true &&
    `
      align-self: flex-end;
    `}

  ${({ $mine }) =>
    $mine === false &&
    `
      align-self: flex-start;
    `}
`;
