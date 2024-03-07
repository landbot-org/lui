import { useState } from 'react';

import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../icon';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'First level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'Second level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
    ],
  },
};

export const WithContent: Story = {
  args: {
    activeStep: 1,
    steps: [
      {
        variant: 'active',
        label: 'Root level',
        icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} />,
        content: 'Step 0',
      },
      {
        variant: 'active',
        label: 'First level',
        icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} />,
        content: 'Step 1',
      },
      {
        variant: 'active',
        label: 'Second level',
        icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} />,
        content: 'Step 2',
      },
    ],
  },
};

export const Inactive: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'inactive', label: 'First level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'inactive', label: 'Second level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
    ],
  },
};

export const Completed: Story = {
  args: {
    steps: [
      { variant: 'completed', label: 'Root level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'completed', label: 'First level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'Second level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
    ],
  },
};

export const Disabled: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'disabled', label: 'First level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'disabled', label: 'Second level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
    ],
  },
};

export const Error: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'error', label: 'First level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'error', label: 'Second level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
    ],
  },
};

export const WithoutIcons: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level' },
      { variant: 'active', label: 'First level' },
      { variant: 'active', label: 'Second level' },
    ],
  },
};

export const TwoSteps: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'First level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
    ],
  },
};

export const FourSteps: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'First level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'Second level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'Third level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
    ],
  },
};

export const FiveSteps: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'First level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'Second level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'Third level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'Fourth level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
    ],
  },
};

export const SixSteps: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'First level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'Second level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'Third level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'Fourth level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
      { variant: 'active', label: 'Fifth level', icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} /> },
    ],
  },
};

export const InteractiveWithContent: Story = {
  render: function Render(args) {
    const [activeStep, setActiveStep] = useState(0);

    return <Stepper activeStep={activeStep} steps={args.steps} onClickStep={setActiveStep} />;
  },
  args: {
    steps: [
      {
        label: 'Root level',
        icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} />,
        content: 'Step 0',
      },
      {
        label: 'First level',
        icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} />,
        content: 'Step 1',
      },
      {
        label: 'Second level',
        icon: <Icon icon={<FontAwesomeIcon icon={faCircleCheck} />} />,
        content: 'Step 2',
      },
    ],
  },
};
