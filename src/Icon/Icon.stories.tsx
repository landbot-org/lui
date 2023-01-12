import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../shared/theme';
import { Icon } from './Icon';
import * as icons from './icons';
import { IconProps } from './types';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
    },
    gridArea: {
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'select',
      },
    },
    icon: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    componentSubtitle: 'Displays a landbot icon',
  },
} as ComponentMeta<typeof Icon>;

const TemplateCalendly: ComponentStory<typeof Icon> = (args: {
  gridArea?: IconProps['gridArea'];
  size?: IconProps['size'];
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Icon icon={<icons.Calendly />} size={args.size} gridArea={args.gridArea} />
    </ThemeProvider>
  );
};

export const Calendly = TemplateCalendly.bind({});

const TemplateFontAwesome: ComponentStory<typeof Icon> = (args: {
  color?: IconProps['color'];
  gridArea?: IconProps['gridArea'];
  size?: IconProps['size'];
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Icon icon={<FontAwesomeIcon icon={faRobot} />} size={args.size} color={args.color} gridArea={args.gridArea} />
    </ThemeProvider>
  );
};

export const FontAwesome = TemplateFontAwesome.bind({});

const INTEGRATION_ICONS = [
  'Airtable',
  'Hubspot',
  'Dialogflow',
  'Zapier',
  'GoogleSheets',
  'Analytics',
  'Sunco',
  'Calendly',
  'Salesforce',
  'Segment',
  'Airtable',
  'Mailchimp',
  'Stripe',
  'Slack',
  'Whatsapp',
  'WhatsappTesting',
  'Wix',
  'MessengerNew',
  'Messenger',
  'API',
  'MessageHooks',
  'PlatformAPI',
  'Brick',
  'BrickBlue',
  'BrickDefault',
  'BrickOrange',
  'BrickPink',
  'BrickPurple',
  'BrickTeal',
];

const TemplateIntegrationsandBricks = ({ size, gridArea }: IconProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {INTEGRATION_ICONS.map((icon) => {
          const IconRender = icons[icon as keyof typeof icons];
          return (
            <Box key={icon} display="flex" flexDirection="column" alignItems="center" m={4} title={icon}>
              <Typography>{icon}</Typography>
              <Icon icon={<IconRender />} size={size} gridArea={gridArea} />
            </Box>
          );
        })}
      </Box>
    </ThemeProvider>
  );
};

export const IntegrationsAndBricks = TemplateIntegrationsandBricks.bind({});

const TemplateEmojis = ({ size, gridArea }: IconProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {Object.keys(icons).map((icon) => {
          if (!INTEGRATION_ICONS.includes(icon)) {
            const IconRender = icons[icon as keyof typeof icons];
            return (
              <Box key={icon} display="flex" flexDirection="column" alignItems="center" m={4} title={icon}>
                <Typography>{icon}</Typography>
                <Icon icon={<IconRender />} size={size} gridArea={gridArea} />
              </Box>
            );
          }
        })}
      </Box>
    </ThemeProvider>
  );
};

export const Emojis = TemplateEmojis.bind({});
