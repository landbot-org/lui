import { ReactNode, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Typography } from '../typography';
import { Sheet } from './Sheet';
import { SheetContent } from './SheetContent';

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  args: {
    open: false,
    width: 500,
  },
  argTypes: {
    width: {
      control: { type: 'number', min: 100, max: 3000, step: 10 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

const OpenSheet = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        OpenSheet
      </button>
      <Sheet open={open} setOpen={setOpen} width={500}>
        <SheetContent>{children}</SheetContent>
      </Sheet>
    </>
  );
};

export const Default: Story = {
  args: {
    children: (
      <OpenSheet>
        {Array.from({ length: 20 }, (_, i) => (
          <Box key={i} p={4}>
            <Typography variant="h5" mb={1}>
              Dialog
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,
            </Typography>
          </Box>
        ))}
        <Box p={4}>
          <Typography variant="h5" mb={1}>
            Dialog
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam,
          </Typography>
        </Box>
      </OpenSheet>
    ),
  },
};
