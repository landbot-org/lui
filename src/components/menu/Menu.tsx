import { CSSProperties } from 'react';
import { BoxProps } from '../box';
import { StyledContainer } from './Menu.styles';

interface MenuProps extends BoxProps {
  width?: CSSProperties['width'];
}

export const Menu = ({ width = 200, ...props }: MenuProps) => {
  return <StyledContainer role="menu" $width={width} {...props} />;
};
