import React, { useMemo } from 'react';
import { pxToRem } from '../shared/mixins';
import { DIMENSIONS } from './constants';
import { IconProps } from './types';

export const Icon = ({ icon, size = '1x', ...rest }: IconProps) => {
  const dimensions = pxToRem(DIMENSIONS[size]);

  const IconProp = icon;

  const Icon = useMemo(
    () => <IconProp height={`${dimensions}rem`} width={`${dimensions}rem`} {...rest} />,
    [dimensions, icon]
  );

  return <>{Icon}</>;
};
