import { ReactNode } from 'react';
import { Button } from '../button';

interface MenuButtonProps {
  children?: ReactNode;
  color?: 'blue.main' | 'error.main';
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

export const MenuButton = ({ children, color = 'blue.main', ...props }: MenuButtonProps) => {
  return (
    <Button variant="menu-item" textAlign="left" color={color} {...props}>
      {children}
    </Button>
  );
};
