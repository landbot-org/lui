import { styled } from 'styled-components';

interface StyledMenuItemProps {
  $active?: boolean;
  $firstchild?: boolean;
}

export const StyledMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledItem = styled.div<StyledMenuItemProps>`
  position: relative;
  display: flex;
  flex-grow: 1;
  align-items: center;
  cursor: pointer;
  min-height: 30px;

  &:hover {
    color: ${({ theme }) => theme.palette.pink.main};
  }

  ${({ $firstchild }) =>
    $firstchild &&
    `
      min-height: 50px;
    `}

  ${({ $active, $firstchild, theme }) =>
    $active &&
    $firstchild &&
    `
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        width: 0;
        height: 0;
        transform: translateY(-50%);
        border-style: solid;
        border-color: transparent;
        border-width: 8px 8px 8px 0px;
        border-right-color: ${theme.palette.white.main};
      }
    `}

  ${({ $active, theme }) =>
    $active &&
    `
      color: ${theme.palette.pink.main};
    `}
`;

export const StyledInnerItem = styled.div`
  padding: 5px 0px 5px 30px;
`;
