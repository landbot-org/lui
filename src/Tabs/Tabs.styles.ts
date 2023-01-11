import styled, { css, keyframes } from 'styled-components';
import { Theme } from '../shared/theme.types';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { SizeTypes } from './types';
import { getButtonSizeStyles, getTabSizeStyles } from './utils';

export const ArrowButton = styled.button<{ $size: SizeTypes }>`
  ${({ $size }) => getButtonSizeStyles($size)}
  align-self: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }: { theme: Theme }) => theme.palette.blue.main};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 16px;
  &:disabled {
    cursor: default;
    color: ${({ theme }: { theme: Theme }) => theme.palette.neutral[300]};
  }
  &:hover:enabled {
    color: ${({ theme }: { theme: Theme }) => theme.palette.pink.main};
  }
  &:active:enabled {
    background-color: ${({ theme }: { theme: Theme }) => theme.palette.blue[50]}};
  }
`;

export const Container = styled(Box)`
  display: flex;
`;

export const StyledTypography = styled(Typography)<{ $active: boolean; $disabled: boolean }>`
  white-space: nowrap;
  ${({ $disabled, theme }) =>
    $disabled
      ? css`
          color: ${theme.palette.neutral[400]};
        `
      : css`
          color: ${theme.palette.blue[500]};
          &:hover {
            color: ${theme.palette.pink.main};
          }
          &:focus {
            background-color: ${theme.palette.blue[50]};
          }
        `}
  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.palette.pink.main};
      font-weight: 500;
    `}
`;

/*
  transform: ${(props) => (props.$active ? 'translateX(0)' : 'translateX(-100%)')};
  animation: ${(props) => (props.$active ? animationRule : '')};
  */
interface BorderProps {
  $active: boolean;
  $index: number;
  $activeTab: number;
}

const slideInLeft = keyframes`
    from { transform: translateX(-50%); }
    to { transform: translateX(0); }
`;

const slideInRight = keyframes`
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
`;

export const BorderBottom = styled.div<BorderProps>`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  background-color: ${({ $active, theme }) => ($active ? theme.palette.pink.main : 'transparent')};
  animation: ${({ $direction, $active }) => ($active ? ($direction === 'left' ? slideInRight : slideInLeft) : '')} 0.3s
    ease;
`;

/*
const animationRule = css(['', ' 0.3s ease-out;'] as any as TemplateStringsArray, slideIn);
*/

//animation: ${slideIn} 0.3s ease-out;

export const StyledTab = styled.div<{ $active: boolean; $size: SizeTypes; disabled: boolean }>`
  position: relative;
  cursor: pointer;
  ${({ $size }) => getTabSizeStyles($size)}
  background-color: transparent;
  ${({ disabled, theme }) =>
    disabled
      ? css`
          cursor: default;
          color: ${theme.palette.neutral[300]};
        `
      : css`
          &:active {
            background-color: ${theme.palette.blue[50]};
          }
        `}
  ${({ $active, theme }) =>
    !$active &&
    css`
      border-bottom: 1px solid ${theme.palette.neutral[200]};
    `}
`;

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Indicator = styled.span`
  position: absolute;
  top: 10px;
  height: 2px;
  width: ${({ $width }) => $width}px;
  background-color: orange;
`;
