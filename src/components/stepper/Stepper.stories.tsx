import { useState } from 'react';
import { fa3, faChainBroken, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import { WhatsApp } from '../icon/icons';
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
      { variant: 'active', label: 'Root level' },
      { variant: 'active', label: 'First level' },
      { variant: 'active', label: 'Second level' },
    ],
  },
};

export const Inactive: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level' },
      { variant: 'inactive', label: 'First level' },
      { variant: 'inactive', label: 'Second level' },
    ],
  },
};

export const Completed: Story = {
  args: {
    steps: [
      { variant: 'completed', label: 'Root level' },
      { variant: 'completed', label: 'First level' },
      { variant: 'active', label: 'Second level' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    steps: [
      {
        variant: 'active',
        label: 'Root level',
      },
      { variant: 'disabled', label: 'First level' },
      { variant: 'disabled', label: 'Second level' },
    ],
  },
};

export const Error: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level' },
      { variant: 'error', label: 'First level' },
      { variant: 'error', label: 'Second level' },
    ],
  },
};

export const WithoutIcons: Story = {
  args: {
    showIcons: false,
    steps: [
      { variant: 'active', label: 'Root level', icon: <FontAwesomeIcon icon={faCircleCheck} /> },
      { variant: 'active', label: 'First level', icon: <FontAwesomeIcon icon={faCircleCheck} /> },
      { variant: 'active', label: 'Second level', icon: <FontAwesomeIcon icon={faCircleCheck} /> },
    ],
  },
};

export const CustomIcons: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level', icon: <FontAwesomeIcon icon={faChainBroken} /> },
      { variant: 'active', label: 'First level', icon: <WhatsApp /> },
      { variant: 'active', label: 'Second level', icon: <FontAwesomeIcon icon={fa3} /> },
    ],
  },
};

export const TwoSteps: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level' },
      { variant: 'active', label: 'First level' },
    ],
  },
};

export const FourSteps: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level' },
      { variant: 'active', label: 'First level' },
      { variant: 'active', label: 'Second level' },
      { variant: 'active', label: 'Third level' },
    ],
  },
};

export const FiveSteps: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level' },
      { variant: 'active', label: 'First level' },
      { variant: 'active', label: 'Second level' },
      { variant: 'active', label: 'Third level' },
      { variant: 'active', label: 'Fourth level' },
    ],
  },
};

export const SixSteps: Story = {
  args: {
    steps: [
      { variant: 'active', label: 'Root level' },
      { variant: 'active', label: 'First level' },
      { variant: 'active', label: 'Second level' },
      { variant: 'active', label: 'Third level' },
      { variant: 'active', label: 'Fourth level' },
      { variant: 'active', label: 'Fifth level' },
    ],
  },
};

export const Interactive: Story = {
  render: function Render(args) {
    const [activeStep, setActiveStep] = useState(0);

    return <Stepper activeStep={activeStep} steps={args.steps} onClickStep={setActiveStep} />;
  },
  args: {
    steps: [
      {
        label: 'Root level',
      },
      {
        label: 'First level',
      },
      {
        label: 'Second level',
      },
    ],
  },
};
