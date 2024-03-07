import { StepperProps } from './Stepper.types';
import { StepperLabel } from './StepperLabel';

import { StepperWrapper } from './Stepper.styles';

export const Stepper = ({ steps, activeStep, onClickStep }: StepperProps) => {
  return (
    <>
      <StepperWrapper $numberSteps={steps.length}>
        {steps.map(({ icon, label, variant }, index) => (
          <StepperLabel
            key={label}
            aria-label={label}
            aria-current={activeStep === index}
            aria-disabled={variant === 'disabled'}
            variant={activeStep === index ? 'active' : variant || 'inactive'}
            icon={icon}
            label={label}
            onClick={() => onClickStep?.(index)}
          />
        ))}
      </StepperWrapper>
    </>
  );
};
