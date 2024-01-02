import React from 'react';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Box } from '../Box';
import { BoxProps } from '../Box/types';
import { Icon } from '../Icon';
import { StyledCollapseSummary } from './Collapse.styles';
import { useCollapseContext } from './CollapseContext';

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
