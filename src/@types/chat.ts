// ----------------------------------------------------------------------
//
export type Participant = {
  __typename?: "users" | undefined;
  id: string;
  avatar: string;
  lastActivity: string;
  status: string;
  username: string;
  phone: string;
  position: string;
  email: string | null;
  address: string | null;
} | null;



export type ChatState = {
  isLoading: boolean;
  error: Error | string | null;
  contacts: {
    byId: Record<string, Participant>;
    allIds: string[];
  };
  conversations: {
    byId: Record<string, Conversation>;
    allIds: string[];
  };
  activeConversationId: null | string;
  participants: Participant[];
  recipients: any[];
};

export type Contact = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  address: string;
  phone: string;
  email: string;
  lastActivity: Date | string | number;
  status: string;
  position: string;
};


export type TextMessage = {
  body: string | null;
  attachments: any;
  contentType: string;
  createdAt: string;
  id: string;
  senderId: string;
};

export type ImageMessage = {
  body: string | null;
  attachments: any;
  contentType: string;
  createdAt: string;
  id: string;
  senderId: string;
};

export type Message = TextMessage | ImageMessage;

export type Conversation = {
  id: string;
  participants: Participant[];
  type: string;
  unreadCount: number;
  messages: Message[];
};

export type SendMessage = {
  conversationId: string;
  messageId: string;
  message: string;
  contentType: 'text';
  attachments: string[];
  createdAt: Date | string | number;
  senderId: string;
};
