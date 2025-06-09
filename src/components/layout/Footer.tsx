import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../../medios/ttlogo.png';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 400 }
  };

  const tapEffect = {
    scale: 0.95
  };

  return (
<footer className="bg-gradient-to-r from-white to-white text-gray-100 pt-20 pb-12 border-t-2 border-purple-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: 'spring' }}
              >
<img
  src={Logo}
  alt="TALENTHREE"
  className="h-8 w-8 filter mr-2 -mt-2"
/>

              </motion.div>
              <motion.span 
  className="ml-0 font-bold text-2xl text-primary-100 tracking-tight"
  whileHover={{ scale: 1.02 }}
>
  TalentThree
</motion.span>
            </div>
            <motion.p 
              className="text-primary-200 leading-relaxed"
              whileHover={{ x: 5 }}
            >
Impulsa tu futuro ahora. Aprende
con expertos, aplica lo aprendido y
alcanza nuevas metas con
Talenthree.            </motion.p>
            <div className="flex space-x-4 pt-2">
              {[
                { href: "https://facebook.com", icon: <Facebook size={20} />, label: "Facebook" },
                { href: "https://twitter.com", icon: <Twitter size={20} />, label: "Twitter" },
                { href: "https://instagram.com", icon: <Instagram size={20} />, label: "Instagram" },
                { href: "https://linkedin.com", icon: <Linkedin size={20} />, label: "LinkedIn" },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg bg-primary-800 hover:bg-purple-600 text-purple-200 hover:text-white"
                  whileHover={{ 
                    y: -2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={tapEffect}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
          >
            <motion.h3 
              className="text-xl font-semibold text-primary-100 mb-6 pb-2 border-b border-purple-800"
              whileHover={{ scale: 1.02 }}
            >
              Enlaces rápidos
            </motion.h3>
            <ul className="space-y-4">
              {[
                { to: "/", label: "Inicio" },
                { to: "/nosotros", label: "Nosotros" },
                { to: "/cursos", label: "Educación continua" },
                { to: "/instructores", label: "Asesoría y Consultoría" },
                { to: "/eventos", label: "Noticias y eventos" },
                { to: "/contacto", label: "Contáctanos" },
              ].map(({ to, label }, index) => (
                <motion.li 
                  key={label}
                  variants={itemVariants}
                  custom={index}
                >
<NavLink
  to={to}
  className={({ isActive }) =>
    `flex items-center gap-2 font-medium transition-all duration-300 hover:text-purple-400 ${
      isActive ? "text-purple-700 font-semibold" : "text-purple-500"
    }`
  }
>
  {({ isActive }) => (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-center gap-2"
    >
      {label}
      {isActive && (
        <Check size={16} className="text-purple-700" />
      )}
    </motion.div>
  )}
</NavLink>

                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            variants={itemVariants}
          >
            <motion.h3 
              className="text-xl font-semibold text-primary-100 mb-6 pb-2 border-b border-purple-800"
              whileHover={{ scale: 1.02 }}
            >
              Soporte
            </motion.h3>
            <ul className="space-y-4">
              {[
                { to: "/faqs", label: "Preguntas Frecuentes" },
                { to: "/privacidad", label: "Política de Privacidad" },
                { to: "/terminos", label: "Términos de Servicio" },
              ].map(({ to, label }, index) => (
                <motion.li 
                  key={label}
                  variants={itemVariants}
                  custom={index}
                >
<NavLink
  to={to}
  className={({ isActive }) =>
    `flex items-center gap-2 font-medium transition-all duration-300 hover:text-purple-400 ${
      isActive ? "text-purple-700 font-semibold" : "text-purple-500"
    }`
  }
>
  {({ isActive }) => (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-center gap-2"
    >
      {label}
      {isActive && (
        <Check size={16} className="text-purple-700" />
      )}
    </motion.div>
  )}
</NavLink>


                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={itemVariants}
          >
            <motion.h3 
              className="text-xl font-semibold text-primary-100 mb-6 pb-2 border-b border-purple-800"
              whileHover={{ scale: 1.02 }}
            >
              Contacto
            </motion.h3>
            <div className="space-y-5">
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="bg-primary-100 p-2 rounded-lg mr-4"
                  whileHover={{ rotate: 15 }}
                >
                  <MapPin size={18} className="text-white" />
                </motion.div>
                <div>
                  <h5 className="font-medium text-primary-100">Oficina Principal</h5>
                  <p className="text-primary-100 mt-1">Av. Simón Bolívar 460, 401.
                  Pueblo Libre<br /></p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="bg-primary-100 p-2 rounded-lg mr-4"
                  whileHover={{ rotate: 15 }}
                >
                  <Phone size={18} className="text-white" />
                </motion.div>
                <div>
                  <a href="tel:+51 960810996" className="font-medium text-primary-100 hover:text-purple-300 transition-colors">
                  (+51) 960810996
                  </a>
                  <p className="text-primary-100 text-sm mt-1">Lunes a sábado de 8am a 6pm</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="bg-primary-100 p-2 rounded-lg mr-4"
                  whileHover={{ rotate: 15 }}
                >
                  <Mail size={18} className="text-white" />
                </motion.div>
                <div>
                  <a href="mailto:info@talenthree.com" className="font-medium text-primary-100 hover:text-purple-300 transition-colors">
                  informes@talenthree.com
                  </a>
                  <p className="text-primary-100 text-sm mt-1">Respuesta en 24 horas</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-primary-100 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <motion.p 
              className="text-primary-100 text-sm"
              whileHover={{ scale: 1.02 }}
            >
              &copy; {currentYear} Talenthree International. Todos los derechos reservados.
            </motion.p>
            
          </div>
          
          <motion.div 
            className="mt-6 md:mt-0"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-primary-100 text-sm">
              Certificaciones: <span className="text-primary-100">ISO 9001:2023</span> • <span className="text-purple-400"></span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;