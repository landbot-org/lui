import React from 'react';
import { theme } from '../shared/theme';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import userEvent from '@testing-library/user-event';
import { within } from '@storybook/testing-library';
import { ThemeProvider } from 'styled-components';
import { Icon } from '../Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Tag as TagComponent } from './Tag';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

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
} as ComponentMeta<typeof TagComponent>;

export const Tag: ComponentStory<typeof TagComponent> = ({ ...args }) => {
  const adornmentSize = args.size === 'large' ? '1x' : '0.5x';
  return (
    <ThemeProvider theme={theme}>
      <TagComponent
        {...args}
        startAdornment={
          <Icon icon={<FontAwesomeIcon icon={faCheck} />} aria-label="start adornment" size={adornmentSize} />
        }
        endAdornment={
          <Icon icon={<FontAwesomeIcon icon={faXmark} />} aria-label="end adornment" size={adornmentSize} />
        }
      />
    </ThemeProvider>
  );
};

Tag.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByLabelText(/end adornment/i));
  expect(canvas.getByLabelText(/end adornment/i)).toBeInTheDocument();
};
