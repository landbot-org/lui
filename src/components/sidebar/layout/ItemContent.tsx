import React, { ReactNode } from 'react';

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
  minified?: boolean;
  firstchild?: boolean;
};

export const ItemContent = ({ icon, prefix, suffix, children, minified, firstchild }: ItemContentProps) => {
  return (
    <>
      {icon && (
        <StyledIconWrapper $firstchild={firstchild}>
          <StyledIcon>{icon}</StyledIcon>
        </StyledIconWrapper>
      )}
      {(!minified || (minified && !firstchild)) && (
        <>
          {prefix && <StyledPrefixWrapper>{prefix}</StyledPrefixWrapper>}
          <StyledItemContent>{children}</StyledItemContent>
          {suffix && <StyledSufixWrapper>{suffix}</StyledSufixWrapper>}
        </>
      )}
    </>
  );
};
