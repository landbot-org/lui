import { styled } from 'styled-components';

export const StyledLogo = styled.div``;

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.pink.main};

  svg {
    width: 32px !important;
    height: 25px !important;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.pink.main};
  }
`;
