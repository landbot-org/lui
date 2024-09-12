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
  it('should render Toast when click in Button', async () => {
    const { user } = renderComponent({ content: 'This is a sample test' });

    await user.click(screen.getByRole('button', { name: 'Add toast' }));

    await waitFor(() => expect(screen.getByText('This is a sample test')).toBeVisible());
  });
});
