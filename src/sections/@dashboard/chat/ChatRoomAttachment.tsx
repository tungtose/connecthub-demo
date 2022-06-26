import uniq from 'lodash/uniq';
import flatten from 'lodash/flatten';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Divider, Collapse, Typography } from '@mui/material';
// utils
import { fDateTime } from '../../../utils/formatTime';
import { getFileFullName, getFileThumb } from '../../../utils/getFileFormat';
// @types
import { Message } from '../../../@types/chat';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { GetConversationByIdQuery } from 'src/generated/graphqlSdk';

import axios from 'axios';
import fileDownload from 'js-file-download';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  height: '100%',
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
  paddingBottom: theme.spacing(2),
}));

const FileItemStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(2),
  padding: theme.spacing(0, 2.5),
}));

const FileThumbStyle = styled('div')(({ theme }) => ({
  width: 40,
  height: 40,
  flexShrink: 0,
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[500_16],
}));

const CollapseButtonStyle = styled(Button)(({ theme }) => ({
  ...theme.typography.overline,
  height: 40,
  flexShrink: 0,
  borderRadius: 0,
  padding: theme.spacing(1, 2),
  justifyContent: 'space-between',
  color: theme.palette.text.disabled,
}));

type Props = {
  conversation: GetConversationByIdQuery;
  isCollapse: boolean;
  onCollapse: VoidFunction;
};

// ----------------------------------------------------------------------

export default function ChatRoomAttachment({ conversation, isCollapse, onCollapse }: Props) {
  const messages = conversation.conversations_by_pk?.messages;

  if (!messages) return null;

  const totalAttachment = uniq(
    flatten(messages.map((item) => item.attachments))
  ).length;



  return (
    <RootStyle>
      <CollapseButtonStyle
        fullWidth
        color="inherit"
        onClick={onCollapse}
        endIcon={
          <Iconify
            icon={isCollapse ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
            width={16}
            height={16}
          />
        }
      >
        attachment ({totalAttachment})
      </CollapseButtonStyle>

      {!isCollapse && <Divider />}

      <Scrollbar>
        <Collapse in={isCollapse}>
          {messages.map((file) => (
            <div key={file.id}>
              {file?.attachments?.map((fileUrl: string) => (
                <AttachmentItem key={fileUrl} file={file} fileUrl={fileUrl} />
              ))}
            </div>
          ))}
        </Collapse>
      </Scrollbar>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type AttachmentItemProps = {
  file: Message;
  fileUrl: string;
};

function AttachmentItem({ file, fileUrl }: AttachmentItemProps) {

  const fileName = getFileFullName(fileUrl) || "file";

  const handleDownload = async (url: string, fileName: string) => {
    const res = await axios.get(url, { responseType: 'blob' });

    fileDownload(res.data, fileName);

  }
  return (
    <FileItemStyle key={fileUrl} onClick={() => handleDownload(fileUrl, fileName)}>
      <FileThumbStyle>{getFileThumb(fileUrl)}</FileThumbStyle>
      <Box sx={{ ml: 1.5, maxWidth: 150 }}>
        <Typography variant="body2" noWrap>
          {fileName}
        </Typography>
        <Typography noWrap variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
          {fDateTime(file.createdAt)}
        </Typography>
      </Box>
    </FileItemStyle>
  );
}
