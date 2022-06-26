import { useRef, useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Input, Divider, IconButton, InputAdornment } from '@mui/material';
// utils
import uuidv4 from '../../../utils/uuidv4';
// @types
import { SendMessage } from '../../../@types/chat';
// components
import Iconify from '../../../components/Iconify';
import EmojiPicker from '../../../components/EmojiPicker';
import useAuth from 'src/hooks/useAuth';
import { useGetPresignUrlMutation, useSendMessageMutation } from 'src/generated/graphqlSdk';
import { useUploadS3 } from 'src/hooks/useUploadS3';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  minHeight: 56,
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  paddingLeft: theme.spacing(2),
}));

// ----------------------------------------------------------------------

type Props = {
  disabled: boolean;
  conversationId: string | null;
};

// const CHAT_MESSAGE_PATH = '/dev/connecthub/'

export default function ChatMessageInput({ disabled, conversationId }: Props) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');
  const { user } = useAuth();
  const currentUserId = user?.users_by_pk?.id as string;

  const sendMessageMutation = useSendMessageMutation();
  const getPresignUrlMutation = useGetPresignUrlMutation();
  const uploadS3Mutation = useUploadS3();

  const handleImage = () => {
    imageInputRef.current?.click();
  };

  const handleAttach = () => {
    fileInputRef.current?.click();
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend('text', message);
    }
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || !files[0]) return;

    const file = files[0]
    const fileName = file.name;
    const storagePath = `dev/connecthub/conversation/${conversationId}/${fileName}`;

    const { getPresignUrl } = await getPresignUrlMutation.mutateAsync({
      params: {
        storagePath
      }
    });

    const url = getPresignUrl?.url;
    if (!url) return;

    const uploadRsp = await uploadS3Mutation.mutateAsync({ url, file });
    console.log({ uploadRsp })

    if (uploadRsp.status !== 200) return;

    const cdnPath = `https://storage.datasean.com/${storagePath}`;

    return { cdnPath, fileName };
  }

  const handleSendAttachment = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const payload = await handleUpload(event);
    if (!payload) {
      console.error("Error on handle upload");
      return;
    }

    const { cdnPath, fileName } = payload;

    const body = `Attachment: ${fileName}`

    const transformCdnPath = `{${cdnPath}}`;

    handleSend('file', body, transformCdnPath);
  }

  const handleSendImageMessage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const payload = await handleUpload(event);
    if (!payload) {
      console.error("Error on handle upload");
      return;
    }

    const { cdnPath, fileName } = payload;

    handleSend('image', cdnPath);
  }

  const handleSend = (contentType: 'text' | 'file' | 'image', body: string | null, attachments?: string | null) => {
    if (!body) {
      return '';
    }
    if (conversationId) {
      sendMessageMutation.mutate({
        object: {
          conversation_id: conversationId,
          body,
          contentType,
          attachments,
          senderId: currentUserId,
        }
      });
    }
    return setMessage('');
  };

  return (
    <RootStyle>
      <Input
        disabled={disabled}
        fullWidth
        value={message}
        disableUnderline
        onKeyUp={handleKeyUp}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Type a message"
        startAdornment={
          <InputAdornment position="start">
            <EmojiPicker disabled={disabled} value={message} setValue={setMessage} />
          </InputAdornment>
        }
        endAdornment={
          <Stack direction="row" spacing={1} sx={{ flexShrink: 0, mr: 1.5 }}>
            <IconButton
              disabled={disabled}
              size="small"
              onClick={handleImage}
            >
              <Iconify icon="ic:round-add-photo-alternate" width={22} height={22} />
            </IconButton>
            <IconButton disabled={disabled} size="small" onClick={handleAttach}>
              <Iconify icon="eva:attach-2-fill" width={22} height={22} />
            </IconButton>
          </Stack>
        }
      />

      <Divider orientation="vertical" flexItem />

      <IconButton color="primary" disabled={!message} onClick={() => handleSend('text', message)} sx={{ mx: 1 }}>
        <Iconify icon="ic:round-send" width={22} height={22} />
      </IconButton>

      <input type="file"
        ref={imageInputRef}
        onChange={e => handleSendImageMessage(e)}
        style={{
          display: 'none'
        }}
      />

      <input type="file"
        ref={fileInputRef}
        onChange={e => handleSendAttachment(e)}
        style={{
          display: 'none'
        }}
      />
    </RootStyle>
  );
}
