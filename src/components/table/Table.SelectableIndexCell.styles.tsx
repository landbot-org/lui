import styled from 'styled-components';

export const StyledIndexCellContainer = styled.div<{ $selectable: boolean }>`
  ${({ $selectable }) => $selectable && 'cursor: pointer;'}
`;
