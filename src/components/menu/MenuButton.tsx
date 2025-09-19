import { forwardRef } from 'react';
import { Button, ButtonProps } from '../button';

export const MenuButton = forwardRef<HTMLElement, ButtonProps>(
  ({ color = 'menu-item', textAlign = 'left', variant: _, ...props }, ref) => {
    return <Button ref={ref} variant="menu-item" textAlign={textAlign} color={color} role="menuitem" {...props} />;
  },
);
