import { ReactNode } from 'react';
import { render, screen, waitFor } from '../../test-utils';
import { Box } from '../box';
import { Button } from '../button';
import { Options } from './Toast.types';
import { ToastProvider, useToastsContext } from './ToastProvider';

const TestComponent = ({ content, options }: { content: ReactNode; options?: Options }) => {
  const { addToast } = useToastsContext();

  const handleClick = () => {
    addToast(content, options);
  };

  return <Button onClick={handleClick}>Add toast</Button>;
};

const renderComponent = (props: { content: ReactNode; options?: Options }) =>
  render(
    <ToastProvider>
      <TestComponent {...props} />
    </ToastProvider>,
  );

describe('Toast', () => {
  it('should render Toast text when click in Button', async () => {
    const { user } = renderComponent({ content: 'This is a sample test' });

    await user.click(screen.getByRole('button', { name: 'Add toast' }));

    await waitFor(() => expect(screen.getByText('This is a sample test')).toBeVisible());
  });
  it('should render Toast close button when click in Button', async () => {
    const { user } = renderComponent({ content: 'This is a sample test' });

    await user.click(screen.getByRole('button', { name: 'Add toast' }));

    await waitFor(() => expect(screen.getByLabelText('toast-close')).toBeVisible());
  });
  it('should render Toast icon when click in Button', async () => {
    const { user } = renderComponent({ content: 'This is a sample test' });

    await user.click(screen.getByRole('button', { name: 'Add toast' }));

    await waitFor(() => expect(screen.getByLabelText('toast-icon')).toBeVisible());
  });
  it('should not render Toast icon when click in Button when hideIcon is true', async () => {
    const { user } = renderComponent({ content: 'This is a sample test', options: { hideIcon: true } });

    await user.click(screen.getByRole('button', { name: 'Add toast' }));

    await waitFor(() => expect(screen.queryByLabelText('toast-icon')).toBeNull());
  });
  it('should render Toast action button when click in Button', async () => {
    const spyActionClick = jest.fn();
    const { user } = renderComponent({
      content: 'This is a sample test',
      options: {
        action: (
          <Button size="small" variant={'contained'} color={'purple.main'} onClick={spyActionClick}>
            Action test
          </Button>
        ),
      },
    });

    await user.click(screen.getByRole('button', { name: 'Add toast' }));

    await waitFor(() => expect(screen.getByRole('button', { name: 'Action test' })).toBeVisible());
  });

  it('should render two Toast action buttons when click in Button', async () => {
    const { user } = renderComponent({
      content: 'This is a sample test',
      options: {
        action: (
          <Box display="flex" gap={8}>
            <Button
              size="small"
              variant={'contained'}
              color={'purple.main'}
              onClick={() => alert('Action toast clicked!')}
            >
              Action test
            </Button>
            <Button size="small" variant={'outlined'} color={'purple.main'} onClick={() => alert('Refresh clicked!')}>
              Refresh
            </Button>
          </Box>
        ),
      },
    });

    await user.click(screen.getByRole('button', { name: 'Add toast' }));

    await waitFor(() => expect(screen.getByRole('button', { name: 'Action test' })).toBeVisible());
    await waitFor(() => expect(screen.getByRole('button', { name: 'Refresh' })).toBeVisible());
  });
  it('should call Toast action on click when click in Button and click in action button', async () => {
    const spyActionClick = jest.fn();
    const { user } = renderComponent({
      content: 'This is a sample test',
      options: {
        action: (
          <Button size="small" variant={'contained'} color={'purple.main'} onClick={spyActionClick}>
            Action test
          </Button>
        ),
      },
    });

    await user.click(screen.getByRole('button', { name: 'Add toast' }));
    await user.click(screen.getByRole('button', { name: 'Action test' }));

    await waitFor(() => expect(spyActionClick).toHaveBeenCalled());
  });
});
