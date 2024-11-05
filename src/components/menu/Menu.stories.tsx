import { faMagnifyingGlass, faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../icon';
import { Menu } from './Menu';
import { MenuButton } from './MenuButton';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: (
      <>
        <MenuButton startIcon={<Icon icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />}>Search</MenuButton>
        <MenuButton>Action</MenuButton>
        <MenuButton startIcon={<Icon icon={<FontAwesomeIcon icon={faRemove} />} />} color="error.main">
          Delete
        </MenuButton>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {};
