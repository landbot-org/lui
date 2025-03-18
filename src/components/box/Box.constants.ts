import { ElevationType, RadiusType } from './Box.types';

export const BOX_SHADOW_MAPPING: Record<ElevationType, string> = {
  0: 'none',
  1: '0px 1px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px 1px rgba(0, 0, 0, 0.08)',
  2: '0px 2px 2px 0px rgba(0, 0, 0, 0.08), 0px 4px 4px 0px rgba(0, 0, 0, 0.08), 0px 8px 8px 0px rgba(0, 0, 0, 0.04)',
  3: '0px 4px 4px rgba(0, 0, 0, 0.04), 0px 8px 8px rgba(0, 0, 0, 0.06), 0px 16px 16px rgba(0, 0, 0, 0.08)',
  4: '0px 4px 4px rgba(0, 0, 0, 0.04), 0px 8px 8px rgba(0, 0, 0, 0.08), 0px 16px 16px rgba(0, 0, 0, 0.08), 0px 32px 32px rgba(0, 0, 0, 0.08)',
};

export const BORDER_RADIUS_MAPPING: Record<RadiusType, string> = {
  0: '0',
  1: '2',
  2: '4',
  3: '8',
  4: '16',
  5: '24',
};
