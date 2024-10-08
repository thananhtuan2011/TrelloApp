import { Box, Container } from '@mui/material'
import './App.css'
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/User/Login';
import ProtectedRoute from './components/Auth/ProtectedRouter';
import Broads from './components/Broads/BoardLayout';
import Appbar from './components/Appbar/Appbar';


function App() {
  return (  
    <Box className='h-screen'>
        <I18nextProvider i18n={i18n}>
        <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute element={Appbar} />} />
        <Route path="/:id" element={ <Broads />}>
        </Route>
        
      </Routes>
    </Router>
        </I18nextProvider>
   </Box>
  )
}

export default App
