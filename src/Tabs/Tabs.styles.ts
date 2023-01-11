import styled, { css } from 'styled-components';
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

export const StyledTab = styled.div<{ $active: boolean; $size: SizeTypes; disabled: boolean }>`
  cursor: pointer;
  ${({ $size }) => getTabSizeStyles($size)}
  background-color: transparent;
  ${({ disabled, theme }) =>
    disabled
      ? css`
          cursor: default;
        `
      : css`
          &:active {
            background-color: ${theme.palette.blue[50]};
          }
        `}
  ${({ $active, theme }) =>
    $active
      ? css`
          border-bottom: 2px solid ${theme.palette.pink.main};
        `
      : css`
          border-bottom: 1px solid ${theme.palette.neutral[200]};
        `}
`;

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
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
