import { Meta, StoryObj } from '@storybook/react';

import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Interactive: Story = {
  render: function Render(args) {
    return <Table />;
  },
};
