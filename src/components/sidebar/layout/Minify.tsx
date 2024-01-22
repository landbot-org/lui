import React, { HTMLAttributes, useContext } from 'react';

import { LuArrowLeftToLine, LuArrowRightFromLine } from 'react-icons/lu';

import { SidebarContext } from '../Sidebar';

import { StyledMinify } from './Minify.styles';

export type MinifyProps = HTMLAttributes<HTMLDivElement>;

export const SidebarMinify = () => {
  const { minified, setMinified } = useContext(SidebarContext);

  return (
    <StyledMinify
      role="button"
      aria-label="minify-button"
      onClick={() => {
        setMinified && setMinified(!minified);
      }}
    >
      {minified ? <LuArrowRightFromLine /> : <LuArrowLeftToLine />}
    </StyledMinify>
  );
};
