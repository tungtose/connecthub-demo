// next
import Router, { useRouter } from 'next/router';
//
import { useEffect } from 'react';
// @mui
import { Box, Divider } from '@mui/material';
// redux
import { RootState, useDispatch, useSelector } from '../../../redux/store';
import {
  addRecipients,
  onSendMessage,
  getConversation,
  getParticipants,
  markConversationAsRead,
  resetActiveConversation,
} from '../../../redux/slices/chat';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// @types
import { Conversation, Participant, SendMessage } from '../../../@types/chat';
//
import ChatRoom from './ChatRoom';
import ChatMessageList from './ChatMessageList';
import ChatHeaderDetail from './ChatHeaderDetail';
import ChatMessageInput from './ChatMessageInput';
import ChatHeaderCompose from './ChatHeaderCompose';
import useAuth from 'src/hooks/useAuth';
import { GetConversationByIdQuery, useGetConversationByIdQuery } from 'src/generated/graphqlSdk';
import { useQuery } from 'react-query';
import { useGetConversationSubcription } from 'src/hooks/useGetConversationSubcription';

// ----------------------------------------------------------------------

const conversationSelector = (state: RootState): Conversation => {
  const { conversations, activeConversationId } = state.chat;
  const conversation = activeConversationId ? conversations.byId[activeConversationId] : null;
  if (conversation) {
    return conversation;
  }
  const initState: Conversation = {
    id: '',
    messages: [],
    participants: [],
    unreadCount: 0,
    type: '',
  };
  return initState;
};

export default function ChatWindow() {
  const { user } = useAuth();
  const currentUserId = user?.users_by_pk?.id as string;
  const dispatch = useDispatch();
  const { pathname, query } = useRouter();
  const { conversationKey } = query;

  const conversation = useSelector((state: RootState) => conversationSelector(state));
  const { data: conversation2 } = useQuery("getConversationById", () => [], {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
  })

  const { isSubscribing, isSubscribingSuccess } = useGetConversationSubcription(conversationKey as string);

  const data = conversation2 as unknown as GetConversationByIdQuery;

  const mode = conversationKey ? 'DETAIL' : 'COMPOSE';
  const displayParticipants1 = data?.conversations_by_pk?.conversation_participant.filter(
    participant => participant.user_id !== currentUserId
  ).map(participant => participant.participant);

  // const displayParticipants = participants.filter(
  //   (item) => item?.id !== '8864c717-587d-472a-929a-8e5f298024da-0'
  // );

  // useEffect(() => {
  //   const getDetails = async () => {
  //     dispatch(getParticipants(`${conversationKey}`));
  //     try {
  //       await dispatch(getConversation(`${conversationKey}`));
  //     } catch (error) {
  //       console.error(error);
  //       Router.push(PATH_DASHBOARD.chat.new);
  //     }
  //   };
  //   if (conversationKey) {
  //     getDetails();
  //   } else if (activeConversationId) {
  //     dispatch(resetActiveConversation());
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [conversationKey]);

  // useEffect(() => {
  //   if (activeConversationId) {
  //     dispatch(markConversationAsRead(activeConversationId));
  //   }
  // }, [dispatch, activeConversationId]);

  const handleAddRecipients = (recipients: Participant[]) => {
    dispatch(addRecipients(recipients));
  };


  if (isSubscribing || !displayParticipants1) return null;


  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      {mode === 'DETAIL' ? (
        <ChatHeaderDetail participants={displayParticipants1} />
      ) : null}

      <Divider />

      <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
        <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
          <ChatMessageList conversation={data} />

          <Divider />

          <ChatMessageInput
            conversationId={conversationKey as string}
            disabled={pathname === PATH_DASHBOARD.chat.new}
          />
        </Box>

        {mode === 'DETAIL' && (
          <ChatRoom conversation={data} participants={displayParticipants1} />
        )}
      </Box>
    </Box>
  );
}
