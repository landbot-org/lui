import { LuArrowLeftToLine, LuArrowRightFromLine } from 'react-icons/lu';

import { StyledMinifyControl } from './MinifyControl.styles';

export interface MinifyControlProps {
  toggled?: boolean;
  onClick?: () => void;
}

export const SidebarMinifyControl = ({ toggled, onClick }: MinifyControlProps) => {
  return (
    <StyledMinifyControl role="button" aria-label="minify-button" onClick={onClick}>
      {toggled ? <LuArrowRightFromLine /> : <LuArrowLeftToLine />}
    </StyledMinifyControl>
  );
};
