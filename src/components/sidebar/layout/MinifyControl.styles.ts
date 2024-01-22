import { styled } from 'styled-components';

export const StyledMinifyControl = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: -30px;
  background: ${({ theme }) => theme.palette.blue[800]};
  width: 30px;
  height: 32px;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
`;
