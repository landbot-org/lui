import { Meta, StoryObj } from '@storybook/react';

import { RichTextEditor } from './RichTextEditor';

const meta: Meta<typeof RichTextEditor> = {
  title: 'Components/RichTextEditor',
  component: RichTextEditor,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Default: Story = {};

export const Placeholder: Story = {
  args: {
    placeholder: 'Type something...',
  },
};

export const Disabled: Story = {
  args: {
    readOnly: true,
  },
};

export const Labeled: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    helperText: 'Helper text',
  },
};

export const MaxLength: Story = {
  args: {
    maxLength: 10,
  },
};

export const Error: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    helperText: 'Helper text',
    error: true,
  },
};

export const HtmlFormat: Story = {
  args: {
    onChange: console.log,
    initialValue: '<h1>Heading</h1><p><b>Paragraph</b></p><ul><li>Item 1</li><li>Item 2</li>',
    inputFormat: 'html',
  },
};

export const MarkdownFormat: Story = {
  args: {
    onChange: console.log,
    initialValue: '# Heading\n\n**Paragraph**\n\n- Item 1\n- Item 2',
    inputFormat: 'markdown',
  },
};
