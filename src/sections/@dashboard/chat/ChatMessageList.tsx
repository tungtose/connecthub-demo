import { useEffect, useState, useRef } from 'react';
// @types
import { Conversation } from '../../../@types/chat';
//
import Scrollbar from '../../../components/Scrollbar';
import LightboxModal from '../../../components/LightboxModal';
import ChatMessageItem from './ChatMessageItem';
import { GetConversationByIdQuery } from 'src/generated/graphqlSdk';

// ----------------------------------------------------------------------

type Props = {
  conversation: GetConversationByIdQuery;
};

export default function ChatMessageList({ conversation }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [openLightbox, setOpenLightbox] = useState(false);

  const [selectedImage, setSelectedImage] = useState<number>(0);

  const messages = conversation.conversations_by_pk?.messages;
  const participants = conversation
    .conversations_by_pk?.conversation_participant
    .map(val => val.participant);

  useEffect(() => {
    const scrollMessagesToBottom = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    };
    scrollMessagesToBottom();
  }, [messages]);

  if (!messages || !participants) return null;

  const imagesLightbox = messages
    .filter((messages) => messages.contentType === 'image')
    .map((messages) => messages.body);

  const handleOpenLightbox = (url: string) => {
    const selectedImage = imagesLightbox.findIndex((index) => index === url);
    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };

  return (
    <>
      <Scrollbar scrollableNodeProps={{ ref: scrollRef }} sx={{ p: 3, height: 1 }}>
        {messages.map((message) => (
          <ChatMessageItem
            key={message.id}
            message={message}
            participants={participants}
            onOpenLightbox={handleOpenLightbox}
          />
        ))}
      </Scrollbar>

    </>
  );
}
// <LightboxModal
//   images={imagesLightbox}
//   mainSrc={imagesLightbox[selectedImage]}
//   photoIndex={selectedImage}
//   setPhotoIndex={setSelectedImage}
//   isOpen={openLightbox}
//   onCloseRequest={() => setOpenLightbox(false)}
// />
