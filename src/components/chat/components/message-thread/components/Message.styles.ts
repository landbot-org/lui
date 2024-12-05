import { styled } from 'styled-components';
import { pxToRem } from '../../../../../shared/mixins';
import { Box } from '../../../../box';
import { Typography } from '../../../../typography';

interface StyledMessageProps {
  $mine?: boolean;
}

export const StyledMessage = styled(Box).attrs({
  display: 'flex',
  alignItems: 'stretch',
})<StyledMessageProps>`
  width: 100%;
  max-width: 100%;
`;

export const StyledContent = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
})<StyledMessageProps>``;

export const StyledMessageBubble = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  p: 1.5,
})<StyledMessageProps>`
  background-color: ${({ theme }) => theme.palette.white.main};

  ${({ $mine }) =>
    $mine &&
    `
      align-self: flex-end;
      border-radius: ${pxToRem(16)}rem ${pxToRem(16)}rem ${pxToRem(2)}rem ${pxToRem(16)}rem;
    `}

  ${({ $mine }) =>
    !$mine &&
    `
      align-self: flex-start;
      border-radius: ${pxToRem(16)}rem ${pxToRem(16)}rem ${pxToRem(16)}rem ${pxToRem(2)}rem;
    `}
`;

export const StyledMessageText = styled(Typography)`
  text-align: left;
`;

export const StyledAvatar = styled(Box).attrs({
  display: 'flex',
  alignItems: 'flex-end',
})`
  min-width: ${pxToRem(50)}rem;
  max-width: ${pxToRem(50)}rem;
`;

export const StyledAvatarImage = styled.img`
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 20%;
  display: block;
  width: ${pxToRem(40)}rem;
  height: ${pxToRem(40)}rem;
`;

export const StyledDateTime = styled(Typography).attrs({
  mt: 0.5,
})<StyledMessageProps>`
  display: flex;

  ${({ $mine }) =>
    $mine &&
    `
      align-self: flex-end;
    `}

  ${({ $mine }) =>
    !$mine &&
    `
      align-self: flex-start;
    `}
`;
