import { Box } from '../box';
import { Typography } from '../typography';
import { getLabelColor, getTypographyVariant } from './Breadcrumb.styles';
import { BreadcrumbProps } from './Breadcrumb.types';

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
