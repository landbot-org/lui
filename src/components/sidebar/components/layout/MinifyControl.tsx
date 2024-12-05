import { LuArrowLeftToLine, LuArrowRightFromLine } from 'react-icons/lu';
import { StyledIcon, StyledMinifyControl } from './MinifyControl.styles';

export interface MinifyControlProps {
  toggled?: boolean;
  onClick?: () => void;
}

export const SidebarMinifyControl = ({ toggled, onClick }: MinifyControlProps) => {
  return (
    <StyledMinifyControl>
      <StyledIcon role="button" aria-label="minify-button" onClick={onClick}>
        {toggled ? <LuArrowRightFromLine /> : <LuArrowLeftToLine />}
      </StyledIcon>
    </StyledMinifyControl>
  );
};
