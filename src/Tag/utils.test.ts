import { getTagIconSize, getTagTypographyVariant } from './utils';
import { Size } from '../Icon/types';

describe('getTagIconSize', () => {
  it('returns correct size for small tag', () => {
    expect(getTagIconSize('small')).toBe('0.5x' as Size);
  });

  it('returns correct size for medium tag', () => {
    expect(getTagIconSize('medium')).toBe('0.5x' as Size);
  });

  it('returns correct size for large tag', () => {
    expect(getTagIconSize('large')).toBe('1x' as Size);
  });
});

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
