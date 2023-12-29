import { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { Divider } from '../Divider';
import { Typography } from '../Typography';
import { Collapse } from './Collapse';
import { CollapseContent } from './CollapseContent';
import { CollapseSummary } from './CollapseSummary';
import { CollapseProps } from './types';

export default {
  title: 'Components/Collapse',
  component: Collapse,
  args: {},
} as Meta<typeof Collapse>;

type Story = StoryObj<typeof Collapse>;

export const Uncontrolled: Story = {
  render: (args) => (
    <Collapse {...args}>
      <CollapseSummary py={1.5}>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
      </CollapseSummary>
      <CollapseContent py={1.5}>
        <Typography>
          Maecenas tincidunt, metus ac fermentum ultricies, neque odio vulputate orci, vitae faucibus augue quam eu ex.
          Nullam scelerisque posuere elit, volutpat ultrices elit bibendum sit amet. Fusce bibendum ante ac lorem
          laoreet, at malesuada felis pulvinar. Fusce dapibus risus non vulputate fringilla. Nam in urna sed risus
          efficitur rutrum. Morbi luctus vestibulum dapibus. Mauris ut ligula dui. Integer id dapibus augue. Etiam vel
          aliquam nisl. Quisque ut libero nec risus ultricies congue. Aenean quis fermentum metus.
        </Typography>
      </CollapseContent>
      <Divider />
    </Collapse>
  ),
};

const TemplateWithHooks = (args: CollapseProps) => {
  const [open, setOpen] = useState(Boolean(args.open));

  useEffect(() => {
    setOpen(Boolean(args.open));
  }, [args.open]);

  return (
    <Collapse open={open} setOpen={setOpen}>
      <CollapseSummary py={1.5}>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
      </CollapseSummary>
      <CollapseContent py={1.5}>
        <Typography>
          Maecenas tincidunt, metus ac fermentum ultricies, neque odio vulputate orci, vitae faucibus augue quam eu ex.
          Nullam scelerisque posuere elit, volutpat ultrices elit bibendum sit amet. Fusce bibendum ante ac lorem
          laoreet, at malesuada felis pulvinar. Fusce dapibus risus non vulputate fringilla. Nam in urna sed risus
          efficitur rutrum. Morbi luctus vestibulum dapibus. Mauris ut ligula dui. Integer id dapibus augue. Etiam vel
          aliquam nisl. Quisque ut libero nec risus ultricies congue. Aenean quis fermentum metus.
        </Typography>
      </CollapseContent>
      <Divider />
    </Collapse>
  );
};

export const Controlled: Story = {
  args: {
    open: false,
  },
  render: (args) => <TemplateWithHooks {...args} />,
};
