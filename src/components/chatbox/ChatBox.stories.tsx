import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import { ChatBox, ChatBoxHeader, ChatBoxMessageThread, ChatBoxSendBox, ChatMessage } from '.';

const meta: Meta<typeof ChatBox> = {
  title: 'Components/ChatBox',
  component: ChatBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: function Render() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    return (
      <StyledChat>
        <ChatBoxHeader>Header</ChatBoxHeader>
        <ChatBoxMessageThread
          userId="1"
          messages={messages}
          showMessageDate={true}
          onLoadPreviousChatMessages={() => {
            setMessages([
              {
                messageId: '1',
                senderId: '1',
                senderDisplayName: 'John Doe',
                messageType: 'chat',
                content: 'Hello',
                contentType: 'text',
                createdOn: new Date().toISOString(),
              },
              {
                messageId: '2',
                senderId: '2',
                senderDisplayName: 'Jane Doe',
                messageType: 'chat',
                content: 'Hi',
                contentType: 'text',
                createdOn: new Date().toISOString(),
              },
              ...messages,
            ]);
          }}
        />
        <ChatBoxSendBox
          onSend={(content) => {
            setMessages([
              ...messages,
              {
                messageId: String(messages.length + 1),
                senderId: '1',
                senderDisplayName: 'John Doe',
                messageType: 'chat',
                content: content.content,
                contentType: content.contentType,
                createdOn: new Date().toISOString(),
              },
            ]);
          }}
        />
      </StyledChat>
    );
  },
};

export default meta;
type Story = StoryObj<typeof ChatBox>;

export const Default: Story = {};

const StyledChat = styled(ChatBox)`
  height: 100dvh;
`;
