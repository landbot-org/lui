import { BannerProps } from './Banner.types';

import { StyledDiv } from './Banner.styles';

export const Banner = (props: BannerProps) => <StyledDiv {...props}>{props.children}</StyledDiv>;
