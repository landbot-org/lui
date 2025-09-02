import { CSSProperties, ReactNode } from 'react';
import { StyledContainer } from './Menu.styles';

interface MenuProps {
  children: ReactNode;
  styles?: {
    container?: CSSProperties;
  };
}

export const Menu = ({ children, styles }: MenuProps) => {
  return (
    <StyledContainer role="menu" style={styles?.container}>
      {children}
    </StyledContainer>
  );
};
