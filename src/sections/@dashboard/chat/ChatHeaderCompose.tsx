import { useState } from 'react';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Avatar, TextField, Typography, Autocomplete, Chip } from '@mui/material';
// @types
import { Participant } from '../../../@types/chat';
// components
import Iconify from '../../../components/Iconify';
import SearchNotFound from '../../../components/SearchNotFound';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 3),
}));

const AutocompleteStyle = styled('div')(({ theme }) => ({
  '& .MuiAutocomplete-root': {
    minWidth: 280,
    marginLeft: theme.spacing(2),
    '&.Mui-focused .MuiAutocomplete-inputRoot': {
      boxShadow: theme.customShadows.z8,
    },
  },
  '& .MuiAutocomplete-inputRoot': {
    transition: theme.transitions.create('box-shadow', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    '& fieldset': {
      borderWidth: `1px !important`,
      borderColor: `${theme.palette.grey[500_32]} !important`,
    },
  },
}));

// ----------------------------------------------------------------------

type Props = {
  contacts: Participant[];
  recipients: Participant[];
  onAddRecipients: (data: Participant[]) => void;
};

export default function ChatHeaderCompose({ contacts, recipients, onAddRecipients }: Props) {
  const [query, setQuery] = useState('');

  const handleAddRecipients = (recipients: Participant[]) => {
    setQuery('');
    onAddRecipients(recipients);
  };
  if (!recipients || !contacts) return null;

  return (
    <RootStyle>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
        To:
      </Typography>

    </RootStyle>
  );
}
