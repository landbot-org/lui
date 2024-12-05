import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Button } from '../button';
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
        <Box>
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

export const Purple: Story = {
  render: () => (
    <Banner backgroundColor="purple.main">
      <Box display="flex" flexDirection="column" gap={15} my={2}>
        <Box>
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

export const Green: Story = {
  render: () => (
    <Banner backgroundColor="green.main">
      <Box display="flex" flexDirection="column" gap={15} my={2}>
        <Box>
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
