import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routing/routes';

const queryClient = new QueryClient();

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 3,
//       cacheTime: 300_000, // garbage collection of 5mins
//       staleTime: 10 * 1000,
//       refetchOnMount: false,
//       refetchOnReconnect: true,
//       refetchOnWindowFocus: false,
//     },
//   },
// });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
