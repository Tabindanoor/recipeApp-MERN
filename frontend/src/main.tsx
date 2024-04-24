import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Rourter } from 'react-router-dom'
import AppRoutes from './AppRoutes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Rourter>
        <AppRoutes/>
    </Rourter>
  </React.StrictMode>,
)
