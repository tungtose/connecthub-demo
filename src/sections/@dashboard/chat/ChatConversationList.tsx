// next
import { useRouter } from 'next/router';
// @mui
import { List, SxProps } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// @types
import { Conversation } from '../../../@types/chat';
// components
import { SkeletonConversationItem } from '../../../components/skeleton';
//
import ChatConversationItem from './ChatConversationItem';
import { GetConversationQuery } from 'src/generated/graphqlSdk';

// ----------------------------------------------------------------------

type Props = {
  conversations: GetConversationQuery['conversations'];
  isOpenSidebar: boolean;
  activeConversationId: string | null;
  sx?: SxProps;
};

export default function ChatConversationList({
  conversations,
  isOpenSidebar,
  activeConversationId,
  sx,
  ...other
}: Props) {
  const { push } = useRouter();

  const handleSelectConversation = (conversationId: string) => {
    // let conversationKey = '';
    // const conversation = conversations.byId[conversationId];
    // if (conversation.type === 'GROUP') {
    //   conversationKey = conversation.id;
    // } else {
    //   const otherParticipant = conversation.participants.find(
    //     (participant) => participant.id !== '8864c717-587d-472a-929a-8e5f298024da-0'
    //   );
    //   if (otherParticipant?.username) {
    //     conversationKey = otherParticipant?.username;
    //   }
    // }
    push(PATH_DASHBOARD.chat.view(conversationId));
  };

  const loading = false;

  return (
    <List disablePadding sx={sx} {...other}>
      {
        conversations.map((conversation, index) =>
          <ChatConversationItem
            key={conversation.id}
            isOpenSidebar={isOpenSidebar}
            conversation={conversation}
            isSelected={activeConversationId === conversation.id}
            onSelectConversation={() => handleSelectConversation(conversation.id)}
          />

        )
      }
    </List>
  );
}
// <SkeletonConversationItem key={index} />
