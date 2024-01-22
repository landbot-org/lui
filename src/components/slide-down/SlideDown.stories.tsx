import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';
import { SlideDown } from './SlideDown';

const meta: Meta<typeof SlideDown> = {
  title: 'Components/SlideDown',
  component: SlideDown,
  tags: ['autodocs'],
  args: {
    visible: false,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  render: function Render(args) {
    const [visible, setVisible] = useState(args.visible);

    return (
      <>
        <Button onClick={() => setVisible(!visible)}>Toggle</Button>
        <SlideDown visible={visible}>
          <p>SlideDown</p>
        </SlideDown>
      </>
    );
  },
};

export default meta;
type Story = StoryObj<typeof SlideDown>;

export const Default: Story = {};
