import { ReactNode } from 'react';

import { StyledIconWrapper, StyledItemContent, StyledPrefixWrapper, StyledSufixWrapper } from './ItemContent.styles';

export interface ItemContentProps {
  children?: ReactNode;
  icon?: ReactNode;
  before?: ReactNode;
  after?: ReactNode;
  collapsed?: boolean;
  toggled?: boolean;
  firstchild?: boolean;
}

export const ItemContent = ({ icon, before, after, children, collapsed, toggled, firstchild }: ItemContentProps) => {
  return (
    <>
      {icon && <StyledIconWrapper $firstchild={firstchild}>{icon}</StyledIconWrapper>}
      {(collapsed || !toggled || !firstchild) && (
        <>
          {before && <StyledPrefixWrapper>{before}</StyledPrefixWrapper>}
          <StyledItemContent $firstchild={firstchild} $collapsed={collapsed}>
            {children}
          </StyledItemContent>
          {after && <StyledSufixWrapper>{after}</StyledSufixWrapper>}
        </>
      )}
    </>
  );
};
