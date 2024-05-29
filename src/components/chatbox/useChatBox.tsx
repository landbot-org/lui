import { PropsWithChildren, createContext, useContext, useState } from 'react';

import { ChatMessage } from './ChatBox.types';

interface ChatContextProps {
  messages: ChatMessage[];
  setMessages: (messages: ChatMessage[]) => void;
}

export const ChatBoxContext = createContext<ChatContextProps | null>(null);

export const ChatBoxProvider = ({ children }: PropsWithChildren) => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  return (
    <ChatBoxContext.Provider
      value={{
        messages: chatMessages,
        setMessages: setChatMessages,
      }}
    >
      {children}
    </ChatBoxContext.Provider>
  );
};

export const useChatBox = () => {
  const context = useContext(ChatBoxContext);

  if (!context) {
    throw new Error('ChatContext must be used within a ChatContext provider');
  }

  const sendMessage = (message: ChatMessage) => {
    context.setMessages([...context.messages, message]);
  };

  return {
    messages: context.messages,
    sendMessage,
  };
};
