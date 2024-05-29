import { styled } from 'styled-components';

import { Typography } from '../../../../typography';

interface StyledMessageProps {
  $mine?: boolean;
}

export const StyledMessage = styled.div<StyledMessageProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: fit-content;

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

export const StyledMessageContent = styled.div<StyledMessageProps>`
  display: flex;
  flex-direction: column;
  padding: 12px 15px 12px 15px;

  ${({ $mine }) =>
    $mine === true &&
    `
      border-radius: 15px 15px 2px 15px;
      background-color: #f1f0f0;
    `}

  ${({ $mine }) =>
    $mine === false &&
    `
      border-radius: 15px 15px 15px 2px;
      background-color: #f1f0f0;
    `}
`;

export const StyledSideContent = styled.div<StyledMessageProps>`
  display: flex;
  flex-direction: column;
  min-width: 50px;
  max-width: 50px;

  ${({ $mine }) =>
    $mine === true &&
    `
      align-items: flex-end;
    `}

  ${({ $mine }) =>
    $mine === false &&
    `
      align-items: flex-start;
    `}
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
