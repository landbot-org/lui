import React from 'react';
import { Box } from '../Box';
import { BoxProps } from '../Box/types';
import { useCollapseContext } from './CollapseContext';
import { Icon } from '../Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { StyledCollapseSummary } from './Collapse.styles';

export const CollapseSummary = ({ children, ...props }: BoxProps) => {
  const { open, setOpen } = useCollapseContext();

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (props.onClick) {
      props.onClick(e);
    }
    setOpen(!open);
  };

  return (
    <StyledCollapseSummary
      display="flex"
      alignItems="center"
      role="button"
      aria-expanded={open}
      {...props}
      onClick={handleClick}
    >
      <Box flexGrow={1}>{children}</Box>
      <Icon icon={<FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />} />
    </StyledCollapseSummary>
  );
};
