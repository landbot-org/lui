import { v4 as uuid } from 'uuid';

import { render, screen } from '../../test-utils';
import { Chat } from './Chat';
import { ChatContentType, ChatProps } from './Chat.types';

const renderComponent = (props: Partial<ChatProps> = {}) =>
  render(<Chat userId={uuid()} messages={[]} onSendMessage={jest.fn()} {...props} />);

describe('Char', () => {
  beforeEach(() => (window.HTMLElement.prototype.scrollIntoView = jest.fn()));
  it('should render chat', () => {
    renderComponent({ ariaLabel: 'chat' });

    expect(screen.getByLabelText('chat')).toBeVisible();
  });
  it('should render message', () => {
    renderComponent({
      messages: [
        {
          id: uuid().toString(),
          sender: {
            id: uuid().toString(),
            displayName: 'Landbot',
            avatarUrl: '',
          },
          content: {
            payload: 'Hello there!',
            type: ChatContentType.Text,
          },
          createdOn: new Date(),
        },
      ],
    });

    expect(screen.getByText('Hello there!')).toBeVisible();
  });
  it('should render different avatar', () => {
    renderComponent({
      messages: [
        {
          id: uuid().toString(),
          sender: {
            id: uuid().toString(),
            displayName: 'Landbot',
            avatarUrl: 'https://storage.googleapis.com/media.landbot.io/avatars/default/1.png',
          },
          content: {
            payload: 'Hello there!',
            type: ChatContentType.Text,
          },
          createdOn: new Date(),
        },
      ],
    });

    expect(screen.getByRole('img')).toBeVisible();
  });
  it('should render a clear input after pressing Enter', async () => {
    const onSendMessage = jest.fn();
    const { user } = renderComponent({
      onSendMessage: onSendMessage,
    });

    await user.type(screen.getByPlaceholderText('Enter a message'), 'Hello from here{enter}');

    expect(screen.getByPlaceholderText('Enter a message')).toBeEmptyDOMElement();
    expect(onSendMessage).toHaveBeenCalledWith({
      payload: 'Hello from here',
      type: ChatContentType.Text,
    });
  });
});
