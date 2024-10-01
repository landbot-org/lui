import React, { HTMLProps } from 'react';
import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../button';
import { Icon } from '../icon';
import { Popover, PopoverTrigger } from '../popover';
import { PopoverContentProps } from '../popover';
import { usePopoverContext } from '../popover/PopoverContext';
import { Typography } from '../typography';
import { CellProps } from './Table.Types';
import { StyledPopoverButtonWrapper, StyledPopoverCell, StyledTableText } from './Table.styles';
import { StyledFloatingContent } from './Table.styles';

const FloatingContent = (props: HTMLProps<HTMLDivElement> & PopoverContentProps) => {
  const { context: floatingContext, ...context } = usePopoverContext();

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal id={props.id} root={props.root}>
      <FloatingFocusManager context={floatingContext}>
        <StyledFloatingContent
          ref={context.refs.setFloating}
          style={context.floatingStyles}
          {...context.getFloatingProps(props)}
        >
          {props.children}
        </StyledFloatingContent>
      </FloatingFocusManager>
    </FloatingPortal>
  );
};

export const TablePopoverCell = ({ size, value, flexGrow }: CellProps) => {
  return (
    <Popover hasArrow={false} mainAxisOffset={-40} placement="bottom-end" fitInContaier>
      <FloatingContent width={size}>
        <Typography color="blue.main" variant="text14" fontWeight={400}>
          {value}
        </Typography>
        <StyledPopoverButtonWrapper>
          <Button
            variant="text"
            color="purple.main"
            startIcon={<Icon icon={<FontAwesomeIcon icon={faCopy} />} />}
            onClick={() => {
              navigator.clipboard.writeText(value.toString());
            }}
          />
        </StyledPopoverButtonWrapper>
      </FloatingContent>
      <PopoverTrigger>
        <StyledPopoverCell $width={size} flexGrow={flexGrow}>
          <StyledTableText fontWeight={400}>{value}</StyledTableText>
        </StyledPopoverCell>
      </PopoverTrigger>
    </Popover>
  );
};
