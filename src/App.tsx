import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import InstructorDetailPage from './pages/instructores/InstructorDetailPage';
import ContactoPage from './pages/ContactoPage';
import CarritoPage from './pages/CarritoPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Faqs from './pages/Faqs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import OtrasSolucionesPage from './pages/OtrasSolucionesPage';

// Asesorías Pages
import DesarrolloOrganizacionalPage from './pages/asesorias/DesarrolloOrganizacionalPage';
import GestionEmpresarialPage from './pages/asesorias/GestionEmpresarialPage';
import GestionPublicaPage from './pages/asesorias/GestionPublicaPage';
import PsicologiaIntegralPage from './pages/asesorias/PsicologiaIntegralPage';
import CoachingPage from './pages/asesorias/CoachingPage';
import OutsourcingPage from './pages/asesorias/OutsourcingPage';

// Cursos de Formación Laboral Pages
import ComercioInternacionalPage from './pages/cursos/ComercioInternacionalPage';
import AuxiliarTIPage from './pages/cursos/AuxiliarTIPage';
import AsistenteRRHHPage from './pages/cursos/AsistenteRRHHPage';
import AsistenteAdministrativoPage from './pages/cursos/AsistenteAdministrativoPage';
import AsistenteContablePage from './pages/cursos/AsistenteContablePage';
import AuxiliarLogisticaPage from './pages/cursos/AuxiliarLogisticaPage';
import CajeroComercialPage from './pages/cursos/CajeroComercialPage';
import InglesTrabajoPage from './pages/cursos/InglesTrabajoPage';

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
    <HelmetProvider>
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
                <Route path="/instructores/:id" element={<Layout><InstructorDetailPage /></Layout>} />
                <Route path="/contacto" element={<Layout><ContactoPage /></Layout>} />
                <Route path="/carrito" element={<Layout><CarritoPage /></Layout>} />
                <Route path="/faqs" element={<Layout><Faqs /></Layout>} />
                <Route path="/privacidad" element={<Layout><PrivacyPolicy /></Layout>} />
                <Route path="/terminos" element={<Layout><TermsOfService /></Layout>} />
                <Route path="/otras-soluciones" element={<Layout><OtrasSolucionesPage /></Layout>} />
                
                {/* Asesorías Routes */}
                <Route path="/asesorias/desarrollo-organizacional" element={<Layout><DesarrolloOrganizacionalPage /></Layout>} />
                <Route path="/asesorias/gestion-empresarial" element={<Layout><GestionEmpresarialPage /></Layout>} />
                <Route path="/asesorias/gestion-publica" element={<Layout><GestionPublicaPage /></Layout>} />
                <Route path="/asesorias/psicologia-integral" element={<Layout><PsicologiaIntegralPage /></Layout>} />
                <Route path="/asesorias/coaching" element={<Layout><CoachingPage /></Layout>} />
                <Route path="/asesorias/outsourcing" element={<Layout><OutsourcingPage /></Layout>} />
                
                {/* Cursos de Formación Laboral Routes */}
                <Route path="/cursos/comercio-internacional" element={<Layout><ComercioInternacionalPage /></Layout>} />
                <Route path="/cursos/auxiliar-ti" element={<Layout><AuxiliarTIPage /></Layout>} />
                <Route path="/cursos/asistente-rrhh" element={<Layout><AsistenteRRHHPage /></Layout>} />
                <Route path="/cursos/asistente-administrativo" element={<Layout><AsistenteAdministrativoPage /></Layout>} />
                <Route path="/cursos/asistente-contable" element={<Layout><AsistenteContablePage /></Layout>} />
                <Route path="/cursos/auxiliar-logistica" element={<Layout><AuxiliarLogisticaPage /></Layout>} />
                <Route path="/cursos/cajero-comercial" element={<Layout><CajeroComercialPage /></Layout>} />
                <Route path="/cursos/ingles-trabajo" element={<Layout><InglesTrabajoPage /></Layout>} />
                
                {/* 404 page */}
                <Route path="*" element={<Layout><div className="container mx-auto py-20 text-center"><h1 className="text-3xl font-bold">Página no encontrada</h1></div></Layout>} />
              </Routes>
            </ScrollToTop>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;