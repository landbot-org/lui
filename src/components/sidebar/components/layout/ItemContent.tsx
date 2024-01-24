import { ReactNode, useMemo } from 'react';

import { Landbot } from '../../../icon/icons';

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
  const itemIcon = useMemo(() => {
    if (icon) {
      return icon;
    } else if (firstchild) {
      return <Landbot />;
    }

    return null;
  }, [icon, firstchild]);

  return (
    <>
      {itemIcon && <StyledIconWrapper $firstchild={firstchild}>{itemIcon}</StyledIconWrapper>}
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
