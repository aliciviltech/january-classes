import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import UserContext from './components/UserContext/UserContext.jsx'
import AuthContext from './components/AuthContext/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
  <AuthContext>
  <UserContext>
    <App />
  </UserContext>
  </AuthContext>
  </BrowserRouter>
  // </StrictMode>,
)
