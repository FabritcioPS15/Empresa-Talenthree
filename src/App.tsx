import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import CursosPage from './pages/CursosPage';
import EventosPage from './pages/EventosPage';
import InstructoresPage from './pages/InstructoresPage';
import ContactoPage from './pages/ContactoPage';
import CarritoPage from './pages/CarritoPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Faqs from './pages/Faqs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Scroll to top when navigating
const ScrollToTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <ScrollToTop>
              <Routes>
                {/* Auth pages without layout */}
                <Route path="/iniciar-sesion" element={<LoginPage />} />
                <Route path="/registro" element={<RegisterPage />} />

                {/* Pages with layout */}
                <Route path="/" element={<Layout><HomePage /></Layout>} />
                <Route path="/nosotros" element={<Layout><NosotrosPage /></Layout>} />
                <Route path="/cursos" element={<Layout><CursosPage /></Layout>} />
                <Route path="/eventos" element={<Layout><EventosPage /></Layout>} />
                <Route path="/instructores" element={<Layout><InstructoresPage /></Layout>} />
                <Route path="/contacto" element={<Layout><ContactoPage /></Layout>} />
                <Route path="/carrito" element={<Layout><CarritoPage /></Layout>} />
                <Route path="/faqs" element={<Layout><Faqs /></Layout>} />
                <Route path="/privacidad" element={<Layout><PrivacyPolicy /></Layout>} />
                <Route path="/terminos" element={<Layout><TermsOfService /></Layout>} />
                
                {/* 404 page */}
                <Route path="*" element={<Layout><div className="container mx-auto py-20 text-center"><h1 className="text-3xl font-bold">Página no encontrada</h1></div></Layout>} />
              </Routes>
            </ScrollToTop>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;