import React, { ReactNode, useContext } from 'react';

import { SidebarContext } from '../Sidebar';
import { LevelContext } from '../menu/Menu';

import {
  StyledIcon,
  StyledIconWrapper,
  StyledItemContent,
  StyledPrefixWrapper,
  StyledSufixWrapper,
} from './ItemContent.styles';

export type ItemContentProps = {
  children?: ReactNode;
  icon?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
};

export const ItemContent = ({ icon, prefix, suffix, children }: ItemContentProps) => {
  const level = useContext(LevelContext);

  const { minified } = useContext(SidebarContext);

  return (
    <>
      {icon && (
        <StyledIconWrapper $firstchild={level === 0}>
          <StyledIcon>{icon}</StyledIcon>
        </StyledIconWrapper>
      )}
      {(!minified || (minified && level > 0)) && (
        <>
          {prefix && <StyledPrefixWrapper>{prefix}</StyledPrefixWrapper>}
          <StyledItemContent>{children}</StyledItemContent>
          {suffix && <StyledSufixWrapper>{suffix}</StyledSufixWrapper>}
        </>
      )}
    </>
  );
};
