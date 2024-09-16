import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Button } from '../button';
import { ToastProvider, useToastsContext } from '../toast';
import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  component: Overlay,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Default: Story = {};

export const WithToast: Story = {
  decorators: (Story) => (
    <ToastProvider>
      <Story />
    </ToastProvider>
  ),
  render: function Render() {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const { addToast } = useToastsContext();

    const handleClick = () => {
      setIsOverlayOpen(true);
      addToast(<>Example toast</>, {
        hideIcon: true,
        hideCloseButton: true,
        variant: 'error',
        action: { text: 'Refresh', props: { onClick: () => window.location.reload() } },
        style: { zIndex: 100 },
      });
    };

    return (
      <Box display="flex" gap={8}>
        {isOverlayOpen && <Overlay />}
        <Button onClick={handleClick}>Show overlay and toast</Button>
      </Box>
    );
  },
};
