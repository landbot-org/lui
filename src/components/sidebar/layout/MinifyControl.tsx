import React from 'react';

import { LuArrowLeftToLine, LuArrowRightFromLine } from 'react-icons/lu';

import { StyledMinifyControl } from './MinifyControl.styles';

export type MinifyControlProps = {
  minified?: boolean;
  onClick?: () => void;
};

export const SidebarMinifyControl = ({ minified, onClick }: MinifyControlProps) => {
  return (
    <StyledMinifyControl role="button" aria-label="minify-button" onClick={onClick}>
      {minified ? <LuArrowRightFromLine /> : <LuArrowLeftToLine />}
    </StyledMinifyControl>
  );
};
