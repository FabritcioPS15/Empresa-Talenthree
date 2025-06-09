import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const getMainPadding = () => {
    const authRoutes = ['/iniciar-sesion', '/registro'];
    if (authRoutes.includes(location.pathname)) {
      return 'pt-20';
    }
    return 'pt-24 pb-16';
  };

  const getPageTitle = () => {
    const path = location.pathname;
    switch (path) {
      case '/nosotros': return 'Nosotros';
      case '/cursos': return 'Cursos';
      case '/eventos': return 'Eventos';
      case '/instructores': return 'Instructores';
      case '/contacto': return 'Contacto';
      case '/carrito': return 'Carrito';
      default: return '';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-primary-800">
        <Header />
    
        <main className={`${getMainPadding()} px-0 sm:px-2 md:px-0 -mb-12`}>
          {location.pathname !== '/' && (
            <div className="container mx-auto px-2 -mb-6">
              <div className="flex items-center text-sm text-gray-900 dark:text-white-700">
                <Link to="/" className="hover:text-primary-600 dark:hover:text-primary-200">
                  Inicio
                </Link>
                <ChevronRight size={16} className="mx-3" />
                <span className="text-white dark:text-white font-medium">
                  {getPageTitle()}
                </span>
              </div>
            </div>
          )}
          
          {children}
        </main>
    
        <Footer />
    

        {/* Botón de WhatsApp */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 15 }}
          className="fixed left-4 bottom-4 z-50 group" // MÁS ABAJO
        >
          <div className="relative">
            <a
              href="https://wa.me/51958077828?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-[#25D366] text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:bg-purple-700" // COLOR MORADO AL HOVER
            >
              {/* Ícono oficial WhatsApp */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16 2.933C8.805 2.933 2.933 8.805 2.933 16c0 2.75.804 5.309 2.18 7.472L2 30l6.774-2.074A13.017 13.017 0 0 0 16 29.067c7.195 0 13.067-5.872 13.067-13.067S23.195 2.933 16 2.933zm0 23.734a10.616 10.616 0 0 1-5.408-1.48l-.388-.231-4.019 1.231 1.291-3.912-.252-.402A10.616 10.616 0 0 1 5.383 16c0-5.878 4.789-10.667 10.667-10.667S26.717 10.122 26.717 16 21.928 26.667 16 26.667zm5.808-7.918c-.308-.154-1.821-.895-2.104-.996-.283-.103-.489-.154-.695.154-.205.308-.796.996-.976 1.201-.18.205-.358.231-.666.077-.308-.154-1.298-.478-2.47-1.524-.913-.813-1.529-1.813-1.708-2.121-.18-.308-.019-.474.135-.628.138-.137.308-.358.462-.538.154-.18.205-.308.308-.513.103-.205.051-.385-.026-.538-.077-.154-.695-1.675-.952-2.292-.251-.603-.506-.521-.695-.531l-.594-.01c-.205 0-.538.077-.82.385s-1.077 1.053-1.077 2.565 1.102 2.974 1.254 3.179c.154.205 2.162 3.297 5.239 4.621.732.316 1.303.504 1.748.645.735.234 1.404.201 1.933.122.59-.088 1.821-.743 2.08-1.46.257-.718.257-1.333.18-1.46-.077-.128-.283-.205-.59-.358z" />
              </svg>
            </a>

            {/* Mensaje flotante */}
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-md whitespace-nowrap shadow-lg">
                ¿Necesitas ayuda?
                <div className="absolute right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 transform rotate-45" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Botón para volver arriba */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-4 right-6 z-50 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Layout;
