import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './Context/AppContext.jsx'
import ErrorBoundary from './Components/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AppContextProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </AppContextProvider>
   
  </StrictMode>,
)
