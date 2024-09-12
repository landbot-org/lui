import { styled } from 'styled-components';

import type { Theme } from '../../shared/theme.types';
import { BannerColorTypes } from './Banner.types';

const getBackgroundFromColor = ({ theme, $color }: { theme: Theme; $color: BannerColorTypes }) => {
  return {
    'purple.main': `linear-gradient(79.15deg, ${theme.palette.purple[700]} 7.59%, ${theme.palette.purple.main} 94.03%)`,
    'green.main': `linear-gradient(105.09deg, ${theme.palette.teal[600]} 20.34%, ${theme.palette.teal.main} 89.56%)`,
  }[$color];
};

export const StyledBanner = styled.div<{ $color: BannerColorTypes }>`
  border-radius: 12px;
  padding: 40px 60px;
  background: ${getBackgroundFromColor};
`;
