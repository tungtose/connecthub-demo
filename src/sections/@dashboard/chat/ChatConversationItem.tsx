import { formatDistanceToNowStrict } from 'date-fns';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Avatar, ListItemButton, ListItemText, ListItemAvatar } from '@mui/material';
// @types
//
import BadgeStatus from '../../../components/BadgeStatus';
import { GetConversationQuery } from 'src/generated/graphqlSdk';
import useAuth from 'src/hooks/useAuth';

// ----------------------------------------------------------------------

const AVATAR_SIZE = 48;
const AVATAR_SIZE_GROUP = 32;

const RootStyle = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
  transition: theme.transitions.create('all'),
}));

const AvatarWrapperStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  width: AVATAR_SIZE,
  height: AVATAR_SIZE,
  '& .MuiAvatar-img': { borderRadius: '50%' },
  '& .MuiAvatar-root': { width: '100%', height: '100%' },
}));

// ----------------------------------------------------------------------

const getDetails = (conversation: Conversation, currentUserId: string) => {
  const otherParticipants = conversation.conversation_participant.filter(
    (participant) => participant.user_id !== currentUserId
  );
  const displayNames = otherParticipants.map((participant) => participant.participant?.username).join(', ');

  let displayText = '';
  const lastMessage = conversation.messages[conversation.messages.length - 1];
  if (lastMessage) {
    const sender = lastMessage.senderId === currentUserId ? 'You: ' : '';
    const message = lastMessage.contentType === 'image' ? 'Sent a photo' : lastMessage.body;
    displayText = `${sender}${message}`;
  }
  return { otherParticipants, displayNames, displayText };
};

// type Conversation<ArrayType extends GetConversationQuery['conversations']> = ArrayType[number];
type ConversationsArray = GetConversationQuery['conversations'];
type Conversation = ConversationsArray[number];

type ChatConversationItemProps = {
  isSelected: boolean;
  conversation: Conversation;
  isOpenSidebar: boolean;
  onSelectConversation: VoidFunction;
};

export default function ChatConversationItem({
  isSelected,
  conversation,
  onSelectConversation,
  isOpenSidebar,
}: ChatConversationItemProps) {
  const { user } = useAuth();
  const currentUserId = user?.users_by_pk?.id as string;
  const details = getDetails(conversation, currentUserId);

  const displayLastActivity = conversation.messages[conversation.messages.length - 1].createdAt;

  const isGroup = details.otherParticipants.length > 1;
  const isUnread = conversation.unreadCount > 0;
  // const isOnlineGroup =
  //   isGroup && details.otherParticipants.map((item) => item.status).includes('online');
  const isOnlineGroup = false

  return (
    <RootStyle
      disableGutters
      onClick={onSelectConversation}
      sx={{
        ...(isSelected && { bgcolor: 'action.selected' }),
      }}
    >
      <ListItemAvatar>
        <Box
          sx={{
            ...(isGroup && {
              position: 'relative',
              width: AVATAR_SIZE,
              height: AVATAR_SIZE,
              '& .avatarWrapper': {
                position: 'absolute',
                width: AVATAR_SIZE_GROUP,
                height: AVATAR_SIZE_GROUP,
                '&:nth-of-type(1)': {
                  left: 0,
                  zIndex: 9,
                  bottom: 2,
                  '& .MuiAvatar-root': {
                    border: (theme) => `solid 2px ${theme.palette.background.paper}`,
                  },
                },
                '&:nth-of-type(2)': { top: 2, right: 0 },
              },
            }),
          }}
        >
          {details.otherParticipants.slice(0, 2).map((participant) => (
            <AvatarWrapperStyle className="avatarWrapper" key={participant.id}>
              <Avatar alt={participant.participant?.username} src={participant.participant?.avatar} />
              {!isGroup && participant?.participant?.status && (
                <BadgeStatus
                  status={participant.participant.status}
                  sx={{ right: 2, bottom: 2, position: 'absolute' }}
                />
              )}
            </AvatarWrapperStyle>
          ))}
          {isOnlineGroup && (
            <BadgeStatus status="online" sx={{ right: 2, bottom: 2, position: 'absolute' }} />
          )}
        </Box>
      </ListItemAvatar>

      {isOpenSidebar && (
        <>
          <ListItemText
            primary={details.displayNames}
            primaryTypographyProps={{
              noWrap: true,
              variant: 'subtitle2',
            }}
            secondary={details.displayText}
            secondaryTypographyProps={{
              noWrap: true,
              variant: isUnread ? 'subtitle2' : 'body2',
              color: isUnread ? 'textPrimary' : 'textSecondary',
            }}
          />

          <Box
            sx={{
              ml: 2,
              height: 44,
              display: 'flex',
              alignItems: 'flex-end',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                mb: 1.25,
                fontSize: 12,
                lineHeight: '22px',
                whiteSpace: 'nowrap',
                color: 'text.disabled',
              }}
            >
              {formatDistanceToNowStrict(new Date(displayLastActivity), {
                addSuffix: false,
              })}
            </Box>
            {isUnread && <BadgeStatus status="unread" size="small" />}
          </Box>
        </>
      )}
    </RootStyle>
  );
}
