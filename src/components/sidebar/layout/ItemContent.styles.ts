import { styled } from 'styled-components';

interface StyledItemContentProps {
  $firstchild?: boolean;
}

export const StyledIconWrapper = styled.span<StyledItemContentProps>`
  text-align: center;
  display: inline-block;

  ${({ $firstchild }) =>
    $firstchild
      ? `
        width: 32px;
        margin: 0 20px 0 20px;

        svg {
          width: 26px !important;
          height: 26px !important;
        }
      `
      : `
        width: 16px;
        margin: 0 10px 0 0;

        svg {
          width: 16px !important;
          height: 16px !important;
        }
      `}
`;

export const StyledIcon = styled.span<StyledItemContentProps>`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledPrefixWrapper = styled.span`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledSufixWrapper = styled.span`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledItemContent = styled.span`
  height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.typography.font.primary};
  font-size: 0.875rem;
  font-weight: 500;
`;
