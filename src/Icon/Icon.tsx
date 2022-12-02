import React, { useMemo } from 'react';
import { DIMENSIONS } from './constants';
import { IconProps } from './types';

export const Icon = ({ icon, size, ...rest }: IconProps) => {
  const dimensions = DIMENSIONS[size];

  const IconProp = icon;

  const Icon = useMemo(() => <IconProp height={dimensions} width={dimensions} />, [dimensions]);

  return <>{Icon}</>;
};
