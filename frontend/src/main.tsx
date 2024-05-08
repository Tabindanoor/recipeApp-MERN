import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Rourter } from 'react-router-dom'
import AppRoutes from './AppRoutes.tsx'
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate.tsx'
import {QueryClient, QueryClientProvider} from "react-query"
import { Toaster } from './components/ui/sonner.tsx'

const queryClient= new QueryClient({
  defaultOptions: {
    queries:{
      refetchOnWindowFocus:false,    
    }
  }
}
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Rourter>
    <QueryClientProvider client={queryClient}> 
      <Auth0ProviderWithNavigate>
      <AppRoutes/>
      <Toaster visibleToasts={1} position="top-right" richColors/>
      </Auth0ProviderWithNavigate>  
      </QueryClientProvider>
    </Rourter>
  </React.StrictMode>,
)
