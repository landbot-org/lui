import React from 'react';
import { render, screen } from '../test-utils';
import { cleanup } from '@testing-library/react';
import { Tabs } from './Tabs';

afterEach(cleanup);

describe('Tabs component', () => {
  window.HTMLElement.prototype.scrollTo = jest.fn();

  const tabProps = [
    {
      label: 'Tab 1',
      disabled: false,
    },
    {
      label: 'Tab 2',
      disabled: false,
    },
    {
      label: 'Tab 3',
      disabled: true,
    },
  ];

  it('should render the correct number of tabs', () => {
    render(<Tabs tabs={tabProps} onChange={jest.fn} />);
    const tabs = screen.getAllByRole('tab');

    expect(tabs).toHaveLength(tabs.length);
  });

  it('should set the correct active tab when clicked', async () => {
    const { user } = render(<Tabs tabs={tabProps} onChange={jest.fn} />);
    const tabs = screen.getAllByRole('tab');

    await user.click(tabs[1]);

    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
  });

  it('should not set active tab when a disabled tab is clicked', async () => {
    const { user } = render(<Tabs tabs={tabProps} onChange={jest.fn} />);
    const tabs = screen.getAllByRole('tab');

    await user.click(tabs[2]);

    expect(tabs[2]).not.toHaveAttribute('aria-selected', 'true');
  });
});
