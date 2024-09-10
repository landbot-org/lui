import { styled } from 'styled-components';

import { ColorsTypes, Theme } from '../../shared/theme.types';
import { Box } from '../box';
import { Icon } from '../icon';
import { Typography } from '../typography';
import { ToastVariant } from './Toast.types';

const COLOR_TYPE_FROM_VARIANT: Record<ToastVariant, ColorsTypes> = {
  success: 'success.main',
  info: 'info.main',
  warning: 'warning.main',
  error: 'error.main',
};

const getColorFromVariant = ({ $variant, theme }: { $variant: ToastVariant; theme: Theme }) => {
  return {
    ['success']: theme.palette.success.main,
    ['info']: theme.palette.info.main,
    ['warning']: theme.palette.warning.main,
    ['error']: theme.palette.error.main,
  }[$variant];
};

export const ToastPositionAndLayout = styled(Box).attrs<{ $variant: ToastVariant; $top: number }>({
  display: 'flex',
  elevation: 1,
  p: 2,
  radius: 2,
})`
  background-color: ${({ theme }) => theme.palette.white.main};
  border-top: 2px solid ${getColorFromVariant};
  max-width: 560px;
  width: fit-content;
  position: absolute;
  right: 0;
  left: 0;
  top: ${({ $top }) => $top}px;
  margin: auto;
  display: flex;
  overflow: hidden;
`;

export const ToastIcon = styled(Icon).attrs<{ $variant: ToastVariant }>(({ $variant }) => ({
  color: COLOR_TYPE_FROM_VARIANT[$variant],
}))``;

export const Message = styled(Typography).attrs({ variant: 'text14', fontWeight: 500 })`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const CloseButtonWrapper = styled(Box)`
  margin-left: 0;
`;
