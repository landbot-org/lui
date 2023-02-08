import styled, { css, keyframes } from 'styled-components';
import { Theme } from '../shared/theme.types';
import { Typography } from '../Typography';
import { SizeTypes } from './types';
import { getButtonSizeStyles, getTabSizeStyles } from './utils';

export const ArrowButton = styled.div<{ $disabled: boolean; $size: SizeTypes }>`
  ${({ $size }) => getButtonSizeStyles($size)}
  ${({ $disabled, theme }) =>
    $disabled
      ? css`
          pointer-events: none;
          color: ${theme.palette.neutral[300]};
        `
      : css`
          color: ${theme.palette.blue.main};
        `}
  align-self: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 16px;
  &:hover {
    color: ${({ theme }: { theme: Theme }) => theme.palette.pink.main};
  }
  &:active {
    background-color: ${({ theme }: { theme: Theme }) => theme.palette.blue[50]}};
  }
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

const slideInRight = keyframes`
    from { transform: translateX(-50%); }
    to { transform: translateX(0); }
`;

const slideInLeft = keyframes`
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
`;

interface BorderBottomProps {
  $active: boolean;
  $direction: 'right' | 'left';
}

export const BorderBottom = styled.div<BorderBottomProps>`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  background-color: ${({ $active, theme }) => ($active ? theme.palette.pink.main : 'transparent')};
  animation: ${({ $direction, $active }) => $active && ($direction === 'left' ? slideInLeft : slideInRight)} 0.3s ease;
`;

export const StyledTab = styled.div<{
  $showBottomLine: boolean;
  $active?: boolean;
  $size: SizeTypes;
  disabled?: boolean;
}>`
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
  ${({ $active, $showBottomLine, theme }) =>
    !$active &&
    $showBottomLine &&
    css`
      border-bottom: 1px solid ${theme.palette.neutral[200]};
    `}
`;

export const TabsContainer = styled.div.attrs(() => ({
  tabIndex: 0,
}))`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;
