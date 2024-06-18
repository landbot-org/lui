import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';
import { v4 as uuid } from 'uuid';

import { Chat, ChatContentType, ChatMessage } from '.';

const USER_ID = uuid();
const USER_DISPLAY_NAME = 'John Doe';

const BOT_ID = uuid();
const BOT_DISPLAY_NAME = 'Landbot';

const meta: Meta<typeof Chat> = {
  title: 'Components/Chat',
  component: Chat,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: function Render() {
    const [messages, setMessages] = useState<ChatMessage[]>([
      {
        id: uuid(),
        sender: {
          id: BOT_ID,
          displayName: BOT_DISPLAY_NAME,
        },
        content: {
          payload: 'Hi again',
          type: ChatContentType.Text,
        },
        createdOn: new Date(),
      },
    ]);

    return (
      <StyledChat
        userId={USER_ID}
        messages={messages}
        onSendMessage={(content) => {
          setMessages([
            ...messages,
            {
              id: uuid(),
              sender: {
                id: USER_ID,
                displayName: USER_DISPLAY_NAME,
                avatarUrl: 'https://storage.googleapis.com/media.landbot.io/avatars/default/1.png',
              },
              content: {
                payload: content.payload,
                type: content.type,
              },
              createdOn: new Date(),
            },
          ]);
        }}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Chat>;

export const Default: Story = {};

const StyledChat = styled(Chat)`
  height: 500px;
`;
