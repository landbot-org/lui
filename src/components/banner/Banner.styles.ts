import { styled } from 'styled-components';

import { BannerProps } from './Banner.types';

export const StyledDiv = styled.div<BannerProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
  padding: 40px 60px;
  margin: 52px auto;
  border-radius: 12px;
  background: linear-gradient(79deg, #464d98 41.71%, #555ca3 47.72%, #cdcff8 94.93%);
`;
