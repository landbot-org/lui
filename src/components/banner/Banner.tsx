import { BannerProps } from './Banner.types';

import { StyledBanner } from './Banner.styles';

export const Banner = ({ backgroundColor = 'purple.main', children }: BannerProps) => (
  <StyledBanner $color={backgroundColor}>{children}</StyledBanner>
);
