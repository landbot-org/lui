import { Meta, StoryObj } from '@storybook/react';

import { Box } from '../box';
import { Button } from '../button';
import { Icon } from '../icon';
import { Sparkles } from '../icon/icons';
import { Typography } from '../typography';
import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
  component: Banner,
  title: 'Components/Banner',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  render: () => (
    <Banner>
      <Box display="flex" flexDirection="column" gap={15} my={2}>
        <Box display="flex" gap={5} alignItems="center">
          <Icon icon={<Sparkles />} size="2x" />
          <Typography variant="h3" color="white.main" fontWeight={700}>
            Got a minute?
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" color="white.main">
            Help us create the best AI Assistant for you and your business needs
          </Typography>
        </Box>
        <Box mt={2}>
          <Button color="pink.main" size="large" rel="noopener noreferrer">
            <Typography variant="text16" color="white.main">
              Take a survey
            </Typography>
          </Button>
        </Box>
      </Box>
    </Banner>
  ),
};

export const Center: Story = {
  render: () => (
    <Banner justifyContent="center">
      <Box>
        <Box display="flex" gap={5} alignItems="center" justifyContent="center">
          <Icon icon={<Sparkles />} size="2x" />
          <Typography variant="h3" color="white.main" fontWeight={700}>
            Got a minute?
          </Typography>
        </Box>
        <Box mt={1} mb={3}>
          <Typography variant="subtitle1" color="white.main">
            Help us create the best AI Assistant for you and your business needs
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button color="pink.main" size="large" rel="noopener noreferrer">
            <Typography variant="text16" color="white.main">
              Take a survey
            </Typography>
          </Button>
        </Box>
      </Box>
    </Banner>
  ),
};

export const Right: Story = {
  render: () => (
    <Banner justifyContent="flex-end">
      <Box>
        <Box display="flex" gap={5} alignItems="center" justifyContent="flex-end">
          <Icon icon={<Sparkles />} size="2x" />
          <Typography variant="h3" color="white.main" fontWeight={700}>
            Got a minute?
          </Typography>
        </Box>
        <Box mt={1} mb={3}>
          <Typography variant="subtitle1" color="white.main">
            Help us create the best AI Assistant for you and your business needs
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button color="pink.main" size="large" rel="noopener noreferrer">
            <Typography variant="text16" color="white.main">
              Take a survey
            </Typography>
          </Button>
        </Box>
      </Box>
    </Banner>
  ),
};
