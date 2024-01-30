import { Box } from '../box';
import { Icon } from '../icon';
import { BreadcrumbProps } from './Breadcrumb.types';
import { BreadcrumbLabel } from './BreadcrumbLabel';
import { BreadcrumbLabelContainer } from './BreadcrumbLabelContainer';
import { BreadcrumbSeparator } from './BreadcrumbSeparator';

import { StyledBreadcrumbList, StyledBreadcrumbListItem, getLabelColor } from './Breadcrumb.styles';

export const Breadcrumb = ({ items, size = 'large', mode = 'dark' }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <StyledBreadcrumbList $size={size}>
        {items.map(({ label, route, active, disabled, icon }, index) => (
          <StyledBreadcrumbListItem key={route}>
            {!!icon && (
              <Box display="flex" alignItems="center" mr={size === 'large' ? 1 : 0.5}>
                <Icon
                  color={getLabelColor(mode, active, disabled)}
                  size={size === 'large' ? '1.25x' : '1x'}
                  icon={icon}
                />
              </Box>
            )}
            <BreadcrumbLabelContainer route={route} active={active} disabled={disabled}>
              <BreadcrumbLabel size={size} mode={mode} active={active} disabled={disabled}>
                {label}
              </BreadcrumbLabel>
            </BreadcrumbLabelContainer>
            {index < items.length - 1 ? <BreadcrumbSeparator size={size} mode={mode} /> : null}
          </StyledBreadcrumbListItem>
        ))}
      </StyledBreadcrumbList>
    </nav>
  );
};
