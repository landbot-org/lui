import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import { Chat, ChatHeader, ChatInput, ChatMessages } from '.';
import { ChatMessageProps } from './components/ChatMessage';

const meta: Meta<typeof Chat> = {
  title: 'Components/Chat',
  component: Chat,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: function Render() {
    const [messages, setMessages] = useState<ChatMessageProps[]>([
      {
        children: 'Hello',
      },
    ]);

    return (
      <StyledChat>
        <ChatHeader>Header</ChatHeader>
        <ChatMessages messages={messages} />
        <ChatInput
          onSendMessage={(message) => {
            setMessages([
              ...messages,
              {
                children: message,
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
