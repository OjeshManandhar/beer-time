import React from 'react';
import ReactDOM from 'react-dom/client';

// packages
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// components
import App from './App.tsx';

// styles
import './index.css';

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
