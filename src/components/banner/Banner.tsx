import { StyledBanner } from './Banner.styles';
import { BannerProps } from './Banner.types';

export const Banner = ({ backgroundColor, children, ...props }: BannerProps) => (
  <StyledBanner $color={backgroundColor || 'purple.main'} {...props}>
    {children}
  </StyledBanner>
);
