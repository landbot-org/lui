import { screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Button } from '../Button';
import { render } from '../test-utils';
import { Typography } from '../Typography';
import { Tooltip } from './Tooltip';
import { TooltipProps } from './types';

const renderComponent = (props: Partial<TooltipProps> = {}) =>
  render(
    <Tooltip interaction="hover" content={<Typography>This is the content of tooltip</Typography>} {...props}>
      <Button>Interact with me!</Button>
    </Tooltip>
  );

describe('Tooltip', () => {
  it('should render children', () => {
    renderComponent();

    expect(screen.getByText('Interact with me!')).toBeVisible();
  });
  it('should not render tooltip content until interaction', () => {
    renderComponent();

    expect(screen.queryByText('This is the content of tooltip')).not.toBeInTheDocument();
  });

  it('should render tooltip content in hover', async () => {
    const { user } = renderComponent({ interaction: 'hover' });

    await act(async () => {
      await user.hover(screen.getByText('Interact with me!'));
    });

    expect(screen.queryByText('This is the content of tooltip')).toBeVisible();
  });
  it('should not render tooltip content in hover when interaction is click', async () => {
    const { user } = renderComponent({ interaction: 'click' });

    await act(async () => {
      await user.hover(screen.getByText('Interact with me!'));
    });

    expect(screen.queryByText('This is the content of tooltip')).not.toBeInTheDocument();
  });
  it('should render tooltip content in click', async () => {
    const { user } = renderComponent({ interaction: 'click' });

    await act(async () => {
      await user.click(screen.getByText('Interact with me!'));
    });

    expect(screen.queryByText('This is the content of tooltip')).toBeVisible();
  });
});
