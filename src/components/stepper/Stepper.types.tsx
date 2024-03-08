import type { HTMLAttributes, ReactNode } from 'react';

export type StepVariant = 'active' | 'completed' | 'disabled' | 'error' | 'inactive';

type Step = {
  icon?: ReactNode;
  label: string;
  variant?: StepVariant;
};

export interface StepperProps {
  showIcons?: boolean;
  steps: Step[];
  activeStep?: number;
  onClickStep?: (stepClicked: number) => void;
}

export interface StepperLabelProps extends HTMLAttributes<HTMLButtonElement> {
  icon: Step['icon'];
  label: Step['label'];
  variant: Step['variant'];
}
