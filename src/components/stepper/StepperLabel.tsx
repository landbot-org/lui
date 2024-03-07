import { Icon } from '../icon';
import { Typography } from '../typography';
import { StepperLabelProps } from './Stepper.types';

import { StepperButton, StepperLabelWrapper } from './StepperLabel.styles';

export const StepperLabel = ({ icon, label, variant = 'inactive', onClick }: StepperLabelProps) => {
  return (
    <StepperButton $variant={variant} onClick={onClick} disabled={variant === 'disabled'}>
      <StepperLabelWrapper $variant={variant}>
        <Icon size="1.25x" icon={icon} />
        <Typography variant="subtitle2" fontWeight={700} ellipsize>
          {label}
        </Typography>
      </StepperLabelWrapper>
    </StepperButton>
  );
};
