import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../icon';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: {
    label: 'Tag Name',
    startAdornment: <Icon icon={<FontAwesomeIcon icon={faCheck} />} />,
    endAdornment: <Icon icon={<FontAwesomeIcon icon={faXmark} />} />,
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {};
