import { Meta, StoryObj } from '@storybook/react';

import { Box } from '../box';
import { Button } from '../button';
import { Options } from './Toast.types';
import { ToastProvider, useToastsContext } from './ToastProvider';

const meta: Meta = {
  title: 'Components/Toast',
  // component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  decorators: (Story) => (
    <ToastProvider>
      <Story />
    </ToastProvider>
  ),
  render: function Render() {
    const { addToast } = useToastsContext();

    const handleClick = (text: string, type: Options) => {
      addToast(text, type);
    };

    return (
      <Box display="flex" gap={8}>
        <Button onClick={() => handleClick('success', { appearance: 'success', autoDismiss: false })}>
          Show success toast
        </Button>
        <Button onClick={() => handleClick('info', { appearance: 'info', autoDismiss: true })}>Show info toast</Button>
        <Button onClick={() => handleClick('warning', { appearance: 'warning', autoDismiss: true })}>
          Show warning toast
        </Button>
        <Button onClick={() => handleClick('error', { appearance: 'error', autoDismiss: true })}>
          Show error toast
        </Button>
      </Box>
    );
  },
};
