import { getTagTypographyVariant } from './utils';

describe('getTagTypographyVariant', () => {
  it('returns correct typography variant for small tag', () => {
    expect(getTagTypographyVariant('small')).toBe('text10');
  });

  it('returns correct typography variant for medium tag', () => {
    expect(getTagTypographyVariant('medium')).toBe('text12');
  });

  it('returns correct typography variant for large tag', () => {
    expect(getTagTypographyVariant('large')).toBe('text14');
  });
});
