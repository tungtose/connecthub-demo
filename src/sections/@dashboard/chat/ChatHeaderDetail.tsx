import { capitalCase } from 'change-case';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Link, Avatar, Typography, AvatarGroup, IconButton } from '@mui/material';
// utils
import { fToNow } from '../../../utils/formatTime';
// @types
// components
import Iconify from '../../../components/Iconify';
import BadgeStatus from '../../../components/BadgeStatus';
import { Conversation_Participant, GetConversationByIdQuery } from 'src/generated/graphqlSdk';
import useAuth from 'src/hooks/useAuth';
import { Participant } from './types';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  flexShrink: 0,
  minHeight: 92,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 3),
}));

// ----------------------------------------------------------------------
type Props = {
  participants: Participant[];
};

export default function ChatHeaderDetail({ participants }: Props) {
  // const { user } = useAuth();
  // const currentUserId = user?.users_by_pk?.id as string;
  //
  // if (!conversation) return null;
  //
  // const participants = conversation
  //   .conversations_by_pk?.conversation_participant
  //   .filter(participant => participant.user_id !== currentUserId)
  //   .map(val => val.participant);

  if (!participants) return null;

  const isGroup = participants?.length > 1;
  const participant = participants[0];
  if (!participant) return null;

  return (
    <RootStyle>
      {isGroup ? (
        <div>
          <AvatarGroup
            max={3}
            sx={{
              mb: 0.5,
              '& .MuiAvatar-root': { width: 32, height: 32 },
            }}
          >
            {participants.map((participant) => (
              <Avatar key={participant?.username} alt={participant?.username} src={participant?.avatar} />
            ))}
          </AvatarGroup>
          <Link
            variant="body2"
            underline="none"
            component="button"
            color="text.secondary"
            onClick={() => { }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {participants.length} persons
              <Iconify icon="eva:arrow-ios-forward-fill" />
            </Box>
          </Link>
        </div>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ position: 'relative' }}>
            <Avatar src={participant.avatar} alt={participant.username} />
            <BadgeStatus
              status={participant.status}
              sx={{ position: 'absolute', right: 2, bottom: 2 }}
            />
          </Box>
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2">{participant.username}</Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {participant.status !== 'offline'
                ? capitalCase(participant.status)
                : fToNow(participant.lastActivity || '')}
            </Typography>
          </Box>
        </Box>
      )}

      <Box sx={{ flexGrow: 1 }} />
      <IconButton>
        <Iconify icon="eva:phone-fill" width={20} height={20} />
      </IconButton>
      <IconButton>
        <Iconify icon="eva:video-fill" width={20} height={20} />
      </IconButton>
      <IconButton>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>
    </RootStyle>
  );
}

