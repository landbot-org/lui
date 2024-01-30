import { Box } from '../box';
import { Typography } from '../typography';
import { BreadcrumbProps } from './Breadcrumb.types';

import { getLabelColor, getTypographyVariant } from './Breadcrumb.styles';

export const BreadcrumbSeparator = ({
  size,
  mode,
}: {
  size: BreadcrumbProps['size'];
  mode: BreadcrumbProps['mode'];
}) => (
  <Box as="span" mx={1}>
    <Typography variant={getTypographyVariant(size)} color={getLabelColor(mode)}>
      /
    </Typography>
  </Box>
);
