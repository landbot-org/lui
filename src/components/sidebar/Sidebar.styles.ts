import { styled } from 'styled-components';

interface StyledSidebarProps {
  $collapsed?: boolean;
  $toggled?: boolean;
}

export const StyledSidebar = styled.aside<StyledSidebarProps>`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.typography.font.primary};
  font-weight: 500;
  color: ${({ theme }) => theme.palette.white.main};
  height: 100%;
  width: fit-content;
  text-align: left;
  transition: width, left, right, 0.3s;
  position: relative;
  z-index: 1010;

  ${({ $collapsed, $toggled }) => {
    if ($collapsed) {
      if ($toggled) {
        return `
          width: 240px;
          min-width: 240px;
          position: fixed;
          left: 0;
        `;
      } else {
        return `
          width: 240px;
          min-width: 240px;
          position: fixed;
          left: -240px;
        `;
      }
    } else {
      if ($toggled) {
        return `
          width: fit-content;
          min-width: 72px;
        `;
      } else {
        return `
          width: 240px;
          min-width: 240px;
        `;
      }
    }
  }}
`;

export const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.palette.blue[800]};
  height: 100%;
  position: relative;
  z-index: 101;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledLayout = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 101;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

export const StyledOverlay = styled.div<StyledSidebarProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;

  ${({ $toggled }) =>
    $toggled &&
    `
      display: block;
    `}
`;
