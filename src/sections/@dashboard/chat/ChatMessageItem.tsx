import { formatDistanceToNowStrict } from 'date-fns';
// @mui
import { styled } from '@mui/material/styles';
import { Avatar, Box, Typography } from '@mui/material';
// @types
import { Conversation, Message, Participant } from '../../../@types/chat';
import useAuth from 'src/hooks/useAuth';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(3),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 320,
  padding: theme.spacing(1.5),
  marginTop: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.neutral,
}));

const InfoStyle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  marginBottom: theme.spacing(0.75),
  color: theme.palette.text.secondary,
}));

const MessageImgStyle = styled('img')(({ theme }) => ({
  height: 200,
  minWidth: 296,
  width: '100%',
  cursor: 'pointer',
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
}));

// ----------------------------------------------------------------------

type ChatMessageItemProps = {
  message: Message;
  participants: Participant[] | null;
  onOpenLightbox: (value: string) => void;
};

export default function ChatMessageItem({
  message,
  participants,
  onOpenLightbox,
}: ChatMessageItemProps) {

  const { user } = useAuth();
  const currentUserId = user?.users_by_pk?.id as string;

  const sender = participants?.find(
    (participant) => participant?.id === message.senderId
  );

  const senderDetails =
    message.senderId === currentUserId
      ? { type: 'me' }
      : { avatar: sender?.avatar, name: sender?.username };

  const isMe = senderDetails.type === 'me';
  const isImage = message.contentType === 'image';
  const firstName = senderDetails.name && senderDetails.name.split(' ')[0];
  const textContent = !!message.body ? message.body : 'Attachment Sended';

  return (
    <RootStyle>
      <Box
        sx={{
          display: 'flex',
          ...(isMe && {
            ml: 'auto',
          }),
        }}
      >
        {senderDetails.type !== 'me' && (
          <Avatar
            alt={senderDetails.name}
            src={senderDetails.avatar}
            sx={{ width: 32, height: 32 }}
          />
        )}

        <Box sx={{ ml: 2 }}>
          <InfoStyle noWrap variant="caption" sx={{ ...(isMe && { justifyContent: 'flex-end' }) }}>
            {!isMe && `${firstName},`}&nbsp;
            {formatDistanceToNowStrict(new Date(message.createdAt), {
              addSuffix: true,
            })}
          </InfoStyle>

          <ContentStyle
            sx={{
              ...(isMe && {
                color: 'grey.800',
                bgcolor: 'primary.lighter',
              }),
            }}
          >
            {isImage ? (
              <MessageImgStyle
                alt="attachment"
                src={message.body as string}
                onClick={() => onOpenLightbox(message.body as string)}
              />
            ) : (
              <Typography variant="body2">{textContent}</Typography>
            )}
          </ContentStyle>
        </Box>
      </Box>
    </RootStyle>
  );
}
