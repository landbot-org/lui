import React, { ForwardedRef, HTMLAttributes, forwardRef, useContext } from 'react';

import { LuArrowLeftToLine, LuArrowRightFromLine } from 'react-icons/lu';

import { SidebarContext } from '../Sidebar';

import { StyledMinify } from './Minify.styles';

export type MinifyProps = HTMLAttributes<HTMLDivElement>;

export const SidebarMinify = forwardRef(function Minify({ ...rest }: MinifyProps, ref: ForwardedRef<HTMLDivElement>) {
  const { minified, setMinified } = useContext(SidebarContext);

  return (
    <StyledMinify
      ref={ref}
      {...rest}
      onClick={() => {
        setMinified && setMinified(!minified);
      }}
    >
      {minified ? <LuArrowRightFromLine /> : <LuArrowLeftToLine />}
    </StyledMinify>
  );
});
