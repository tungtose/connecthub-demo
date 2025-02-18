import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { PATH_DASHBOARD } from 'src/routes/paths'

// ----------------------------------------------------------------------

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname == '/') {
      router.push(PATH_DASHBOARD.chat.root);
    }
  });

  return null;
}
