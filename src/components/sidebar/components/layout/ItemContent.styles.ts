import { styled } from 'styled-components';

interface StyledItemContentProps {
  $collapsed?: boolean;
  $firstchild?: boolean;
}

export const StyledIconWrapper = styled.span<StyledItemContentProps>`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  ${({ $firstchild }) =>
    $firstchild
      ? `
        min-width: 32px;
        max-width: 32px;
        margin: 0 20px 0 20px;

        svg {
          width: 26px !important;
          height: 26px !important;
        }
      `
      : `
        min-width: 16px;
        max-width: 16px;
        margin: 0 10px 0 0;

        svg {
          width: 16px !important;
          height: 16px !important;
        }
      `}
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

export const StyledItemContent = styled.span<StyledItemContentProps>`
  display: flex;
  font-size: 0.875rem;
  font-weight: 500;

  ${({ $firstchild, $collapsed }) =>
    ($firstchild || $collapsed) &&
    `
      padding: 0 20px 0 0;
    `}

  ${({ $firstchild, $collapsed }) =>
    !$firstchild &&
    !$collapsed &&
    `
    white-space: nowrap;
    `}
`;
