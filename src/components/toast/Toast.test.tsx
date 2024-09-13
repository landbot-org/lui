import { ReactNode } from 'react';

import { render, screen, waitFor } from '../../test-utils';
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
  it('should render Toast action button when click in Button', async () => {
    const spyActionClick = jest.fn();
    const { user } = renderComponent({
      content: 'This is a sample test',
      options: { action: { text: 'Action test', props: { onClick: spyActionClick } } },
    });

    await user.click(screen.getByRole('button', { name: 'Add toast' }));

    await waitFor(() => expect(screen.getByRole('button', { name: 'Action test' })).toBeVisible());
  });
  it('should call Toast action on click when click in Button and click in action button', async () => {
    const spyActionClick = jest.fn();
    const { user } = renderComponent({
      content: 'This is a sample test',
      options: { action: { text: 'Action test', props: { onClick: spyActionClick } } },
    });

    await user.click(screen.getByRole('button', { name: 'Add toast' }));
    await user.click(screen.getByRole('button', { name: 'Action test' }));

    await waitFor(() => expect(spyActionClick).toHaveBeenCalled());
  });
});