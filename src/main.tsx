import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithNavigate from './Auth0ProviderWithNavigate';
import ContextProvider from './context/Context.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <ContextProvider>
        <App />
        </ContextProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
    
  </StrictMode>,
)

