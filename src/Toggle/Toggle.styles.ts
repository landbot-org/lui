import { styled } from 'styled-components';

import { Theme } from '../shared/theme.types';

interface Props {
  $size: 'small' | 'medium';
}

export const ToggleStyled = styled.div<Props>`
  width: ${({ $size }) => ($size === 'medium' ? '40px' : '28px')};
  height: ${({ $size }) => ($size === 'medium' ? '24px' : '16px')};
  position: relative;
  display: inline-block;

  input {
    opacity: 0;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }: { theme: Theme }) => theme.palette.neutral[400]};
    transition: 0.2s;
    border-radius: 16px;
  }

  span:before {
    position: absolute;
    content: '';
    height: ${({ $size }) => ($size === 'medium' ? '16px' : '10px')};
    width: ${({ $size }) => ($size === 'medium' ? '16px' : '10px')};
    left: ${({ $size }) => ($size === 'medium' ? '4px' : '3px')};
    bottom: ${({ $size }) => ($size === 'medium' ? '4px' : '3px')};
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: ${({ theme }: { theme: Theme }) => theme.palette.purple.main};
  }

  input:disabled + span {
    background-color: ${({ theme }: { theme: Theme }) => theme.palette.neutral[100]};
  }

  input:focus + span {
    box-shadow: 0px 0px 4px rgba(156, 163, 175, 0.5);
  }

  input:focus:checked + span {
    box-shadow: 0px 0px 4px rgba(99, 97, 240, 0.7);
  }

  input:checked + span:before {
    transform: translateX(${({ $size }) => ($size === 'medium' ? '16px' : '12px')});
  }
`;
