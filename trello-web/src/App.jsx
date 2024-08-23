import { Container } from '@mui/material'
import './App.css'
import { I18nextProvider } from 'react-i18next';
import Broads from './components/Broads/broads'
import i18n from './utils/i18n';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/User/Login';
import ProtectedRoute from './components/Auth/ProtectedRouter';


function App() {
  return (  
    <Container className='h-screen' maxWidth="false">
        <I18nextProvider i18n={i18n}>
        {/* <Broads></Broads> */}
        <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute element={Broads} />} />
      </Routes>
    </Router>
        </I18nextProvider>
   </Container>
  )
}

export default App
