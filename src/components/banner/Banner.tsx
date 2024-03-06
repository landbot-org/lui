import { BannerProps } from './Banner.types';

import { StyledBanner } from './Banner.styles';

export const Banner = ({ backgroundColor, children, ...props }: BannerProps) => (
  <StyledBanner $color={backgroundColor || 'purple.main'} {...props}>
    {children}
  </StyledBanner>
);
