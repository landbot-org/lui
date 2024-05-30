import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';
import { v4 as uuid } from 'uuid';

import { Chat, ChatHeader, ChatMessage, ChatMessageThread, ChatSendBox } from '.';

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
        type: 'chat',
        sender: {
          id: BOT_ID,
          displayName: BOT_DISPLAY_NAME,
          // avatarUrl: 'https://avatars.githubusercontent.com/u/115721865?s=200&v=4',
        },
        content: {
          payload: 'Hi again',
          type: 'text',
        },
        createdOn: new Date(),
      },
    ]);

    return (
      <StyledChat>
        <ChatHeader>Header</ChatHeader>
        <ChatMessageThread userId={USER_ID} messages={messages} showDisplayName={true} showMessageDate={true} />
        <ChatSendBox
          onSend={(content) => {
            setMessages([
              ...messages,
              {
                id: String(messages.length + 1),
                type: 'chat',
                sender: {
                  id: USER_ID,
                  displayName: USER_DISPLAY_NAME,
                  avatarUrl: 'https://avatars.githubusercontent.com/u/115721865?s=200&v=4',
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
      </StyledChat>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Chat>;

export const Default: Story = {};

const StyledChat = styled(Chat)`
  height: 100dvh;
`;
