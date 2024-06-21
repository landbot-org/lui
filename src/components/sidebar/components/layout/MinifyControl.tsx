import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Icon } from '../../../icon';

import { StyledIcon, StyledMinifyControl } from './MinifyControl.styles';

export interface MinifyControlProps {
  toggled?: boolean;
  onClick?: () => void;
}

export const SidebarMinifyControl = ({ toggled, onClick }: MinifyControlProps) => {
  return (
    <StyledMinifyControl>
      <StyledIcon role="button" aria-label="minify-button" onClick={onClick}>
        {toggled ? (
          <Icon icon={<FontAwesomeIcon icon={faArrowRight} />} />
        ) : (
          <Icon icon={<FontAwesomeIcon icon={faArrowLeft} />} />
        )}
      </StyledIcon>
    </StyledMinifyControl>
  );
};
