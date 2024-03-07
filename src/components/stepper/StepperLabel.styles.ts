import { styled } from 'styled-components';

import { Theme } from '../../shared/theme.types';
import { StepVariant } from './Stepper.types';

const getColorLabelFromVariant = ({ $variant, theme }: { $variant: StepVariant; theme: Theme }) => {
  return {
    active: theme.palette.purple.main,
    completed: theme.palette.purple[700],
    inactive: theme.palette.neutral[400],
    disabled: theme.palette.neutral[300],
    error: theme.palette.error.main,
  }[$variant];
};

export const StepperButton = styled.button<{ $variant: StepVariant }>`
  padding: 8px;
  margin: 0;
  border: 0;

  color: ${getColorLabelFromVariant};
  background-color: transparent;
  border-radius: 4px;

  &:hover {
    cursor: ${({ disabled, $variant }) => (disabled || $variant === 'error' ? 'default' : 'pointer')};
    background-color: ${({ theme, $variant, disabled }) =>
      $variant === 'error' || disabled ? 'transparent' : theme.palette.purple[100]};
  }
`;

export const StepperLabelWrapper = styled.div<{ $variant: StepVariant }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  border-bottom: 3px solid ${getColorLabelFromVariant};
`;
