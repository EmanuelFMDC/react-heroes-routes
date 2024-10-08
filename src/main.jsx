import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css'

import { AppRouter } from './router/AppRouter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter/>
  </StrictMode>,
)
