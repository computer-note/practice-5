'use client';

import {
  QueryClient,
  QueryClientProvider as _QueryClientProvider,
} from '@tanstack/react-query';
import { useState } from 'react';

function QueryClientProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <_QueryClientProvider client={queryClient}>
      {children}
    </_QueryClientProvider>
  );
}

export default QueryClientProvider;
