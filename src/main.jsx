import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './Routes/router.jsx';
import AuthProvider from './Authentication/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
    <QueryClientProvider client={queryClient}>
<ToastContainer
position="top-center"
autoClose={2000}
/>
<RouterProvider router={router} />
</QueryClientProvider>
</AuthProvider>
  </StrictMode>,
)
