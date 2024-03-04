import { BannerProps } from './Banner.types';

import { StyledBanner } from './Banner.styles';

export const Banner = (props: BannerProps) => (
  <StyledBanner $color={props.backgroundColor || 'purple.main'} {...props}>
    {props.children}
  </StyledBanner>
);
