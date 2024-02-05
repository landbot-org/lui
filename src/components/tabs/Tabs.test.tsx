import { cleanup } from '@testing-library/react';

import { mockResizeObserver, render, screen } from '../../test-utils';
import { Tabs } from './Tabs';

afterEach(cleanup);

describe('Tabs component', () => {
  beforeEach(() => {
    mockResizeObserver();
  });
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

  it('should show the configured tabs when it is loaded', () => {
    render(<Tabs tabs={tabProps} onChange={jest.fn} value={0} />);
    const tabs = screen.getAllByRole('tab');

    expect(tabs).toHaveLength(tabs.length);
  });

  it('should show as selected the active tab', () => {
    render(<Tabs tabs={tabProps} onChange={jest.fn} value={1} />);
    const tabs = screen.getAllByRole('tab');

    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
  });

  it('should fire an onChange event when user clicks on a tab', async () => {
    const onChangeSpy = jest.fn();
    const { user } = render(<Tabs tabs={tabProps} onChange={onChangeSpy} value={0} />);

    await user.click(screen.getByRole('tab', { name: 'Tab 2' }));

    expect(onChangeSpy).toHaveBeenCalledTimes(1);
    expect(onChangeSpy).toHaveBeenCalledWith(1);
  });

  it('should not fire an onChange event when user clicks a disabled tab', async () => {
    const onChangeSpy = jest.fn();
    const { user } = render(<Tabs tabs={tabProps} onChange={jest.fn} />);

    await user.click(screen.getByRole('tab', { name: 'Tab 3' }));

    expect(onChangeSpy).toHaveBeenCalledTimes(0);
  });
});
