import { ReactNode } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Box } from '../box';
import { Button } from '../button';
import { Spinner } from '../spinner';
import { Tag } from '../tag';
import { Options } from './Toast.types';
import { ToastProvider, useToastsContext } from './ToastProvider';

const meta: Meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const RenderStory = (message: ReactNode, optionsFromStory: Options) => {
  return function Render() {
    const { addToast, removeAllToasts } = useToastsContext();

    const handleClick = (options: Options) => {
      addToast(message, { ...options, ...optionsFromStory });
    };

    return (
      <Box display="flex" gap={8}>
        <Button onClick={() => handleClick({ variant: 'success' })}>Show success toast</Button>
        <Button onClick={() => handleClick({ variant: 'info' })}>Show info toast</Button>
        <Button onClick={() => handleClick({ variant: 'warning' })}>Show warning toast</Button>
        <Button onClick={() => handleClick({ variant: 'error' })}>Show error toast</Button>

        <Button onClick={removeAllToasts}>Clear all</Button>
      </Box>
    );
  };
};

export const Default: Story = {
  decorators: (Story) => (
    <ToastProvider>
      <Story />
    </ToastProvider>
  ),
  render: RenderStory('Information Single line', {}),
};

export const AutoDismiss: Story = {
  decorators: (Story) => (
    <ToastProvider>
      <Story />
    </ToastProvider>
  ),
  render: RenderStory('Information Single line', { autoDismiss: true }),
};

export const WithoutIcon: Story = {
  decorators: (Story) => (
    <ToastProvider>
      <Story />
    </ToastProvider>
  ),
  render: RenderStory('Information Single line', { showIcon: false }),
};

export const WithoutClose: Story = {
  decorators: (Story) => (
    <ToastProvider>
      <Story />
    </ToastProvider>
  ),
  render: RenderStory('Information Single line', { hideCloseButton: true }),
};

export const LongMessageText: Story = {
  decorators: (Story) => (
    <ToastProvider>
      <Story />
    </ToastProvider>
  ),
  render: RenderStory(
    'Multiple lines of text. Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula.',
    {},
  ),
};

export const WithAction: Story = {
  decorators: (Story) => (
    <ToastProvider>
      <Story />
    </ToastProvider>
  ),
  render: RenderStory(
    'Multiple lines of text. Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula.',
    {
      action: {
        variant: 'contained',
        color: 'purple.main',
        text: 'Call to action',
        props: { onClick: () => alert('Action toast clicked!') },
      },
    },
  ),
};

export const WithoutCloseAndWithAction: Story = {
  decorators: (Story) => (
    <ToastProvider>
      <Story />
    </ToastProvider>
  ),
  render: RenderStory('Information Single line', {
    hideCloseButton: true,
    action: {
      variant: 'contained',
      color: 'purple.main',
      text: 'Call to action',
      props: { onClick: () => alert('Action toast clicked!') },
    },
  }),
};

export const Custom: Story = {
  decorators: (Story) => (
    <ToastProvider>
      <Story />
    </ToastProvider>
  ),
  render: RenderStory(
    <Box display="flex" gap={8}>
      Importing X contacts
      <Tag label={'30%'} />
    </Box>,
    {
      icon: <Spinner size="S" />,
    },
  ),
};
