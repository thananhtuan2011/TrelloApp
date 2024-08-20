import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.js'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssVarsProvider theme={theme}>
    <CssBaseline>
    <App />
    </CssBaseline>
    </CssVarsProvider>
  </StrictMode>,
)
