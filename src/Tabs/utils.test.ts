import { getPreviousActiveTab, getNextActiveTab } from './utils';

describe('getPreviousActiveTab', () => {
  const tabs = [
    { label: 'Tab1' },
    { label: 'Tab2', disabled: true },
    { label: 'Tab3' },
    { label: 'Tab4' },
    { label: 'Tab5', disabled: true },
    { label: 'Tab6' },
    { label: 'Tab7' },
    { label: 'Tab8' },
  ];

  it('returns the first tab when the active tab is the second and previous tab is disabled', () => {
    const activeTab = 2;
    const expectedResult = 0;
    const result = getPreviousActiveTab(tabs, activeTab);

    expect(result).toEqual(expectedResult);
  });

  it('returns the previous not disabled tab', () => {
    const activeTab = 5;
    const expectedResult = 3;
    const result = getPreviousActiveTab(tabs, activeTab);

    expect(result).toEqual(expectedResult);
  });

  it('returns the active tab if there are no previous not disabled tabs', () => {
    const activeTab = 0;
    const expectedResult = 0;
    const result = getPreviousActiveTab(tabs, activeTab);

    expect(result).toEqual(expectedResult);
  });
});

describe('getNextActiveTab', () => {
  it('returns the next active tab', () => {
    const tabs = [
      { label: 'Tab1' },
      { label: 'Tab2', disabled: true },
      { label: 'Tab3' },
      { label: 'Tab4' },
      { label: 'Tab5' },
      { label: 'Tab6' },
      { label: 'Tab7' },
      { label: 'Tab8' },
    ];
    const activeTab = 0;
    const nextActiveTab = getNextActiveTab(tabs, activeTab);
    expect(nextActiveTab).toBe(2);
  });

  it('returns the same index if there is no next active tab', () => {
    const tabs = [{ label: 'Tab1' }, { label: 'Tab2' }, { label: 'Tab3', disabled: true }];
    const activeTab = 1;
    const nextActiveTab = getNextActiveTab(tabs, activeTab);
    expect(nextActiveTab).toBe(1);
  });
});
