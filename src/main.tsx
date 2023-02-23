import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <CookiesProvider>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </CookiesProvider>
  </QueryClientProvider>,
);
