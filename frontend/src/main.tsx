import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Rourter } from 'react-router-dom'
import AppRoutes from './AppRoutes.tsx'
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Rourter>
      <Auth0ProviderWithNavigate>
               <AppRoutes/>
      </Auth0ProviderWithNavigate>
    </Rourter>
  </React.StrictMode>,
)
