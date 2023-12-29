import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { Icon } from '../Icon';
import { Tag as TagComponent } from './Tag';
import { TagProps } from './types';

export default {
  title: 'Components/Tag',
  component: TagComponent,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
  args: {
    size: 'medium',
    label: 'Tag Name',
    startAdornment: <Icon icon={<FontAwesomeIcon icon={faCheck} />} aria-label="start adornment" />,
    endAdornment: <Icon icon={<FontAwesomeIcon icon={faXmark} />} aria-label="end adornment" />,
  },
} as Meta<typeof TagComponent>;

type Story = StoryObj<typeof TagComponent>;

const Template = (args: TagProps) => {
  const adornmentSize = args.size === 'large' ? '1x' : '0.5x';

  return (
    <TagComponent
      {...args}
      startAdornment={
        <Icon icon={<FontAwesomeIcon icon={faCheck} />} aria-label="start adornment" size={adornmentSize} />
      }
      endAdornment={<Icon icon={<FontAwesomeIcon icon={faXmark} />} aria-label="end adornment" size={adornmentSize} />}
    />
  );
};

export const Figure: Story = {
  args: {
    size: 'large',
  },
  render: (args) => <Template {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByLabelText(/end adornment/i));
    expect(canvas.getByLabelText(/end adornment/i)).toBeInTheDocument();
  },
};
