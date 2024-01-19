import React, { useEffect, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Divider } from '../Dividerz';
import { Typography } from '../Typographyz';
import { Collapse } from './Collapse';
import { CollapseContent } from './CollapseContent';
import { CollapseSummary } from './CollapseSummary';

const meta: Meta<typeof Collapse> = {
  component: Collapse,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Collapse>;

const Content = () => (
  <>
    <CollapseSummary py={1.5}>
      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
    </CollapseSummary>
    <CollapseContent py={1.5}>
      <Typography>
        Maecenas tincidunt, metus ac fermentum ultricies, neque odio vulputate orci, vitae faucibus augue quam eu ex.
        Nullam scelerisque posuere elit, volutpat ultrices elit bibendum sit amet. Fusce bibendum ante ac lorem laoreet,
        at malesuada felis pulvinar. Fusce dapibus risus non vulputate fringilla. Nam in urna sed risus efficitur
        rutrum. Morbi luctus vestibulum dapibus. Mauris ut ligula dui. Integer id dapibus augue. Etiam vel aliquam nisl.
        Quisque ut libero nec risus ultricies congue. Aenean quis fermentum metus.
      </Typography>
    </CollapseContent>
    <Divider />
  </>
);

export const Uncontrolled: Story = {
  args: {
    children: <Content />,
  },
};

export const Controlled: Story = {
  args: {
    children: <Content />,
  },
  render: function Render(args) {
    const [open, setOpen] = useState(Boolean(args.open));

    useEffect(() => {
      setOpen(Boolean(args.open));
    }, [args.open]);

    return (
      <Collapse open={open} setOpen={setOpen}>
        {args.children}
      </Collapse>
    );
  },
};
