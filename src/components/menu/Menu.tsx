import { BoxProps } from '../box';
import { StyledContainer } from './Menu.styles';

export const Menu = (props: BoxProps) => {
  return <StyledContainer role="menu" {...props} />;
};
