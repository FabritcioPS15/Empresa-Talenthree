import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Laptop, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import Logo from '../../medios/ttlogo.png';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/500.css';
import '@fontsource/noto-sans/600.css';
import '@fontsource/noto-sans/700.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    {
      name: 'Educación continua',
      path: '/cursos',
      subLinks: [
        { name: 'Desarrollo Personal', path: '/cursos?filter=desarrollo-personal' },
        { name: 'Formación Laboral', path: '/cursos?filter=formacion-laboral' },
        { name: 'Talleres y Diplomas', path: '/cursos?filter=talleres-diplomas' },
        { name: 'Diplomados', path: '/cursos?filter=diplomados' },
      ],
    },
    { name: 'Asesoría y Consultoría', path: '/otras-soluciones' },
    { name: 'Noticias y eventos', path: '/eventos' },
    { name: 'Contáctanos', path: '/contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenSubMenu(null);
  }, [location.pathname]);

  const toggleSubMenu = (path: string) => {
    setOpenSubMenu(openSubMenu === path ? null : path);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isSubActive = (subPath: string) => {
    return location.search.includes(subPath.split('?filter=')[1]);
  };

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg py-3 border-b border-gray-100 dark:border-gray-800' 
      : 'bg-white/95 dark:bg-gray-900/95 py-4 border-b border-gray-100 dark:border-gray-800'
  }`;

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 20,
        delay: 0.2
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        type: 'spring',
        stiffness: 300
      }
    })
  };

  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      height: 'auto',
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const mobileItemVariants = {
    open: { 
      opacity: 1,
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 300
      }
    },
    closed: { 
      opacity: 0,
      y: -20,
      transition: { 
        duration: 0.2
      }
    }
  };

  const mobileSubMenuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const mobileSubItemVariants = {
    open: { 
      opacity: 1,
      x: 0,
      transition: { 
        type: 'spring',
        stiffness: 300
      }
    },
    closed: { 
      opacity: 0,
      x: -10,
      transition: { 
        duration: 0.15
      }
    }
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25
      }
    },
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15
      }
    }
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={logoVariants}
          >
            <Link to="/" className="flex items-center">
              <div className="flex items-center text-primary-600 dark:text-primary-400">
                <img 
                  src={Logo}
                  alt="Logo Talenthree" 
                  className="h-8 w-8 object-contain -mt-2" 
                />
                <span className="ml-2 text-2xl font-bold tracking-tight">Talenthree</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                className="relative group"
              >
                <div className="flex items-center">
                  <Link
                    to={link.path}
                    className={`relative px-4 py-3 text-base font-medium transition-colors flex items-center ${
                      isActive(link.path)
                        ? 'text-primary-700 dark:text-primary-400 font-semibold'
                        : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                    }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <motion.span
                        layoutId="activeNavItem"
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                    {link.subLinks && (
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform transform group-hover:rotate-180" />
                    )}
                  </Link>
                </div>

                {/* Desktop Submenu */}
                {link.subLinks && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-1 hidden group-hover:block origin-top"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 border border-gray-100 dark:border-gray-700 z-50 min-w-[220px]">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.path}
                          to={subLink.path}
                          className={`relative block px-4 py-2.5 text-sm transition-colors ${
                            isSubActive(subLink.path)
                              ? 'bg-primary-50 dark:bg-primary-900/30 text-white dark:text-primary-400 font-medium'
                              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                          }`}
                        >
                          {subLink.name}
                          {isSubActive(subLink.path) && (
                            <motion.span
                              layoutId="activeSubNavItem"
                              className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400"
                              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            />
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Theme Switcher - Desktop */}
            <motion.div 
              className="relative theme-menu hidden lg:block"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="p-2 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors"
                aria-label="Cambiar tema"
              >
                {theme === 'light' ? (
                  <Sun size={20} />
                ) : theme === 'dark' ? (
                  <Moon size={20} />
                ) : (
                  <Laptop size={20} />
                )}
              </button>

              <AnimatePresence>
                {isThemeMenuOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-xl py-1 z-50 border border-gray-200 dark:border-gray-700"
                  >
                    <button
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => {
                        setTheme('light');
                        setIsThemeMenuOpen(false);
                      }}
                    >
                      <Sun size={16} className="mr-2" />
                      Claro
                    </button>
                    <button
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => {
                        setTheme('dark');
                        setIsThemeMenuOpen(false);
                      }}
                    >
                      <Moon size={16} className="mr-2" />
                      Oscuro
                    </button>
                    <button
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => {
                        setTheme('system');
                        setIsThemeMenuOpen(false);
                      }}
                    >
                      <Laptop size={16} className="mr-2" />
                      Sistema
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menú"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-white/20 dark:border-gray-700/50 shadow-2xl overflow-hidden font-sans"
          >
            <motion.div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={mobileItemVariants} className="space-y-1">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        to={link.path}
                        className={`relative flex-1 px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                          isActive(link.path)
                            ? 'bg-primary-50 dark:bg-primary-900/20 text-white dark:text-primary-400'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                        }`}
                        onClick={() => !link.subLinks && setIsOpen(false)}
                      >
                        {link.name}
                        {isActive(link.path) && (
                          <motion.span
                            layoutId="activeMobileNavItem"
                            className="absolute left-3 right-3 bottom-1 h-0.5 bg-white dark:bg-primary-400"
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                          />
                        )}
                      </Link>
                      {link.subLinks && (
                        <button
                          onClick={() => toggleSubMenu(link.path)}
                          className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                          aria-label="Toggle submenu"
                        >
                          {openSubMenu === link.path ? (
                            <ChevronUp size={18} />
                          ) : (
                            <ChevronDown size={18} />
                          )}
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Submenu */}
                    {link.subLinks && (
                      <AnimatePresence>
                        {openSubMenu === link.path && (
                          <motion.div
                            variants={mobileSubMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="ml-4 pl-3 border-l-2 border-gray-200 dark:border-gray-700"
                          >
                            {link.subLinks.map((subLink) => (
                              <motion.div key={subLink.path} variants={mobileSubItemVariants}>
                                <Link
                                  to={subLink.path}
                                  className={`relative block px-3 py-2 text-sm rounded-md transition-colors ${
                                    isSubActive(subLink.path)
                                      ? 'bg-primary-50 dark:bg-primary-900/30 text-white dark:text-primary-400'
                                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                                  }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subLink.name}
                                  {isSubActive(subLink.path) && (
                                    <motion.span
                                      layoutId="activeMobileSubNavItem"
                                      className="absolute left-3 right-3 bottom-1 h-0.5 bg-white dark:bg-primary-400"
                                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    />
                                  )}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div variants={mobileItemVariants}>
                <hr className="border-gray-200 dark:border-gray-700 my-2" />
              </motion.div>

              {/* Theme Options in Mobile Menu */}
              <motion.div variants={mobileItemVariants} className="px-3 py-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tema</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setTheme('light')}
                    className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                      theme === 'light'
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-white dark:text-primary-400'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Sun size={16} className="mr-2" />
                    Claro
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                      theme === 'dark'
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Moon size={16} className="mr-2" />
                    Oscuro
                  </button>
                  <button
                    onClick={() => setTheme('system')}
                    className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                      theme === 'system'
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Laptop size={16} className="mr-2" />
                    Sistema
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;