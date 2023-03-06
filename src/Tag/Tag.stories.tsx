import React from 'react';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { theme } from '../shared/theme';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { ThemeProvider } from 'styled-components';
import { Icon } from '../Icon';

import { Tag as TagComponent } from './Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorsTypes } from '../shared/theme.types';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const iconsMap = (textColor: ColorsTypes = 'white.main') =>
  Object.keys(icons).reduce((acc, key) => {
    const IconComponent = icons[key];
    return {
      ...acc,
      [key]: (
        <Icon
          icon={<FontAwesomeIcon icon={IconComponent} />}
          size="0.5x"
          color={textColor ? textColor : 'white.main'}
        />
      ),
    };
  }, {});

export default {
  title: 'Components/Tag',
  component: TagComponent,
  argTypes: {
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'radio' },
    },
    startIcon: {
      options: Object.keys(iconsMap()),
      mapping: {
        ...iconsMap(),
      },
    },
    endIcon: {
      options: Object.keys(iconsMap()),
      mapping: {
        ...iconsMap(),
      },
    },
  },
  args: {
    label: 'Tag Name',
    startIcon: <FontAwesomeIcon aria-label="start icon" icon={faCheck} />,
    endIcon: <FontAwesomeIcon aria-label="end icon" icon={faXmark} />,
  },
} as ComponentMeta<typeof TagComponent>;

export const Tag: ComponentStory<typeof TagComponent> = ({ ...args }) => {
  return (
    <ThemeProvider theme={theme}>
      <TagComponent {...args} />
    </ThemeProvider>
  );
};
Tag.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByLabelText(/end icon/i));
  expect(canvas.getByLabelText(/end icon/i)).toBeInTheDocument();
};
