import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './custom.scss' 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Application entry point
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)