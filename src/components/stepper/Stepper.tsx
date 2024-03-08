import { ReactNode } from 'react';

import { faCircleCheck as faCircleCheckRegular } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck as faCircleCheckSolid, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StepVariant, StepperProps } from './Stepper.types';
import { StepperLabel } from './StepperLabel';

import { StepperWrapper } from './Stepper.styles';

const getIconFromVariant = ({ icon, variant }: { icon: ReactNode; variant: StepVariant }) => {
  if (icon) {
    return icon;
  }
  return {
    active: <FontAwesomeIcon icon={faCircleCheckRegular} />,
    completed: <FontAwesomeIcon icon={faCircleCheckSolid} />,
    inactive: <FontAwesomeIcon icon={faCircleCheckRegular} />,
    disabled: <FontAwesomeIcon icon={faCircleCheckRegular} />,
    error: <FontAwesomeIcon icon={faWarning} />,
  }[variant];
};

export const Stepper = ({ steps, activeStep, showIcons = true, onClickStep }: StepperProps) => {
  return (
    <StepperWrapper $numberSteps={steps.length}>
      {steps.map(({ icon, label, variant }, index) => (
        <StepperLabel
          key={label}
          aria-label={label}
          aria-current={activeStep === index}
          aria-disabled={variant === 'disabled'}
          variant={activeStep === index ? 'active' : variant || 'inactive'}
          icon={showIcons ? getIconFromVariant({ icon, variant: variant || 'inactive' }) : null}
          label={label}
          onClick={() => onClickStep?.(index)}
        />
      ))}
    </StepperWrapper>
  );
};
