import { styled } from 'styled-components';

import { Theme } from '../../shared/theme.types';
import { Box } from '../box';
import { ToastVariant } from './Toast.types';

const getColorFromVariant = ({ $variant, theme }: { $variant: ToastVariant; theme: Theme }) => {
  return {
    ['success']: theme.palette.success.main,
    ['info']: theme.palette.orange.main,
    ['warning']: theme.palette.warning.main,
    ['error']: theme.palette.error.main,
  }[$variant];
};

export const ToastPositionAndLayout = styled(Box).attrs<{ $open?: boolean; $variant: ToastVariant }>({
  display: 'flex',
  elevation: 1,
  p: 2,
  radius: 2,
})`
  background-color: ${({ theme }) => theme.palette.white.main};
  border-top: 2px solid ${getColorFromVariant};
  left: 50% !important;
  top: 50px !important;
  /* margin: auto;
  max-width: 525px; */
  /* opacity: ${({ $open }) => ($open ? 1 : 0)}; */
  /* position: absolute; */
  /* transition-property: opacity, transform;
  transition-duration: 300ms; */
  /* transform: translateY(0.5rem); */
`;
