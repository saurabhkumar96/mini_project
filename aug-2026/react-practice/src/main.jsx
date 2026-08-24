import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import GandProvider from './context/AndProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GandProvider>
        <App />
      </GandProvider>
    </BrowserRouter>
  </StrictMode>,
)
