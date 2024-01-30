import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Root level', route: '/root' },
      { label: 'First level', route: '/first' },
      { label: 'Second level', route: '/second' },
    ],
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    items: [
      { label: 'Root level', route: '/root' },
      { label: 'First level', route: '/first' },
      { label: 'Second level', route: '/second' },
    ],
  },
};

export const WithIcon: Story = {
  args: {
    items: [
      { label: 'Root level', route: '/root', icon: <FontAwesomeIcon icon={faFaceSmile} /> },
      { label: 'First level', route: '/first' },
      { label: 'Second level', route: '/second' },
    ],
  },
};

export const DisabledItem: Story = {
  args: {
    items: [
      { label: 'Root level', route: '/root' },
      { label: 'First level', route: '/first', disabled: true },
      { label: 'Second level', route: '/second' },
    ],
  },
};

export const ActiveItem: Story = {
  args: {
    items: [
      { label: 'Root level', route: '/root' },
      { label: 'First level', route: '/first' },
      { label: 'Second level', route: '/second', active: true },
    ],
  },
};

export const WithIconActive: Story = {
  args: {
    items: [
      { label: 'Root level', route: '/root' },
      { label: 'First level', route: '/first' },
      { label: 'Second level', route: '/second', icon: <FontAwesomeIcon icon={faFaceSmile} />, active: true },
    ],
  },
};

export const WithIconDisabled: Story = {
  args: {
    items: [
      { label: 'Root level', route: '/root' },
      { label: 'First level', route: '/first', icon: <FontAwesomeIcon icon={faFaceSmile} />, disabled: true },
      { label: 'Second level', route: '/second' },
    ],
  },
};

export const WithLargeText: Story = {
  args: {
    items: [
      { label: 'Root level', route: '/root' },
      { label: 'First level with very very very large text', route: '/first' },
      { label: 'Second level', route: '/second' },
    ],
  },
};
