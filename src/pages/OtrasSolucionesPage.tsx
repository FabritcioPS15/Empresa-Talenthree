import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InstructorCard from '../components/ui/InstructorCard';
import { instructors } from '../data/mockData';
import { Search, BookOpen, Users } from 'lucide-react';
import { HiSearch, HiChartBar, HiRefresh, HiBadgeCheck } from "react-icons/hi";
import { FaHandshake } from "react-icons/fa";
import { GiArcheryTarget } from "react-icons/gi";
import { Link } from 'react-router-dom';

// Animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  hover: { scale: 1.02 }
};

const InstructoresPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState<string>('');
  
  const specialties = [...new Set(instructors.map(instructor => instructor.specialty))];

  const filteredInstructors = instructors.filter(instructor => {
    const searchLower = searchTerm.toLowerCase();
    
    // Verificar coincidencias en diferentes campos
    const nameMatch = instructor.name.toLowerCase().includes(searchLower);
    const bioMatch = instructor.bio?.toLowerCase().includes(searchLower) ?? false;
    const specialtyMatch = instructor.specialty.toLowerCase().includes(searchLower);
    
    // Combinar condiciones de búsqueda
    const matchesSearch = nameMatch || bioMatch || specialtyMatch;
    const matchesSpecialty = specialtyFilter ? instructor.specialty === specialtyFilter : true;
    
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-secondary-800 text-white py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="container-custom text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-block mb-6"
          >
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Conoce a Nuestros Expertos<span className="text-secondary-400"></span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Aprende de los mejores profesionales en la industria con experiencia práctica
          </p>
        </motion.div>
      </section>

      {/* Filtros */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
      >
        <div className="container-custom">
          <motion.div
            className="flex flex-col md:flex-row justify-between gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={itemVariants} className="relative flex-grow max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Buscar por nombre, especialidad o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white transition-all"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <select
                value={specialtyFilter}
                onChange={(e) => setSpecialtyFilter(e.target.value)}
                className="pl-4 pr-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white min-w-[200px] w-full"
              >
                <option value="">Todas las especialidades</option>
                {specialties.map((specialty, index) => (
                  <option key={index} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Grid de Instructores */}
      <section className="py-12 bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <AnimatePresence mode='wait'>
            {filteredInstructors.length > 0 ? (
              <motion.div
                key="instructors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Mostrando {filteredInstructors.length} de {instructors.length} asesorías y consultorías
                </p>
                
                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                >
                  {filteredInstructors.map((instructor) => (
                    <motion.div
                      key={instructor.id}
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <InstructorCard instructor={instructor} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 bg-white dark:bg-gray-900 rounded-xl shadow-soft"
              >
                <BookOpen className="mx-auto mb-4 text-gray-400" size={40} />
                <h3 className="text-2xl font-semibold mb-2">No se encontraron resultados</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Prueba ajustando los filtros o usando términos diferentes
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

<section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
  {/* Elementos decorativos de fondo mejorados */}
  <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5">
    <div className="absolute -right-20 -top-20 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
    <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl animate-float-slower"></div>
    <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-tertiary-500 rounded-full mix-blend-multiply filter blur-3xl animate-float-medium"></div>
  </div>

  <div className="container-custom relative z-10">
    {/* Título principal mejorado */}
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="inline-flex items-center justify-center mb-4">
        <span className="h-px w-20 bg-gradient-to-r from-primary-400 to-secondary-400 mr-4"></span>
        <span className="text-primary-600 dark:text-primary-400 font-medium tracking-wider">NUESTRO ENFOQUE ESTRATÉGICO</span>
        <span className="h-px w-20 bg-gradient-to-r from-secondary-400 to-primary-400 ml-4"></span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 leading-tight">
        Metodología que <span className="underline decoration-wavy decoration-tertiary-500">garantiza resultados</span>
      </h2>
    </motion.div>

    {/* Tarjeta de Metodología mejorada */}
    <motion.div
      className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 md:p-12 rounded-3xl shadow-2xl mb-8 border border-gray-100 dark:border-gray-700 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      {/* Decoraciones de esquina mejoradas */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-bl-full filter blur-xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-500/10 rounded-tr-full filter blur-xl"></div>
      
      {/* Icono decorativo animado */}
      <motion.div 
        className="flex justify-center mb-6"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="p-5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
          </svg>
        </div>
      </motion.div>
      
      {/* Título con efecto mejorado */}
      <h3 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        <span className="relative inline-block pb-2">
          <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-400 via-tertiary-400 to-secondary-400 rounded-full"></span>
          <span className="relative font-extrabold tracking-tight">METODOLOGÍA COMPROBADA</span>
        </span>
      </h3>
      
     <div className="grid md:grid-cols-2 gap-6">
  {[
    {
      icon: <HiSearch className="text-primary-500 w-8 h-8" />,
      title: "Diagnóstico Profundo",
      text: "Análisis exhaustivo de la organización para identificar necesidades reales y oportunidades."
    },
    {
      icon: <GiArcheryTarget className="text-primary-500 w-8 h-8" />,
      title: "Diseño Personalizado",
      text: "Propuestas de intervención alineadas con sus objetivos estratégicos y cultura organizacional."
    },
    {
      icon: <FaHandshake className="text-primary-500 w-8 h-8" />,
      title: "Implementación Colaborativa",
      text: "Trabajo conjunto con sus equipos para asegurar compromiso y adopción efectiva."
    },
    {
      icon: <HiChartBar className="text-primary-500 w-8 h-8" />,
      title: "Seguimiento Continuo",
      text: "Monitoreo constante con indicadores claros y ajustes oportunos para maximizar resultados."
    },
    {
      icon: <HiRefresh className="text-primary-500 w-8 h-8" />,
      title: "Iteración Ágil",
      text: "Flexibilidad para adaptar estrategias según evolucionan las necesidades del proyecto."
    },
    {
      icon: <HiBadgeCheck className="text-primary-500 w-8 h-8" />,
      title: "Resultados Tangibles",
      text: "Entrega de logros medibles y transferencia de capacidades para sostenibilidad."
    }


        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/50 dark:bg-gray-800/50 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start space-x-4">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h4 className="font-bold text-lg text-primary-600 dark:text-primary-400 mb-1">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA mejorado */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
      </motion.div>
    </motion.div>

    {/* Sección Alcance y Objetivos */}
    <motion.div
      className="grid md:grid-cols-2 gap-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
{/* Tarjeta de Alcance */}
<motion.div
  className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
  variants={itemVariants}
  whileHover={{ y: -8, transition: { duration: 0.3 } }}
>
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
  <div className="flex items-center mb-6">
    <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg mr-4">
      <svg className="w-6 h-6 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
      </svg>
    </div>
    <h3 className="text-xl font-bold text-gray-800 dark:text-white">ALCANCE</h3>
  </div>
  
  <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
    <p className="mb-4">Dirigido a organizaciones públicas, privadas y sociales que buscan mejorar su gestión y desarrollo.</p>
    
    <div className="space-y-4">
      <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg border-l-4 border-black dark:border-primary-500">
        <h4 className="font-semibold text-white dark:text-gray-300">Áreas clave</h4>
        <p className="mt-1 text-white dark:text-primary-300 text-sm">Desarrollo organizacional, gestión empresarial, gestión pública</p>
      </div>
      
      <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg border-l-4 border-black dark:border-primary-500">
        <h4 className="font-semibold text-white dark:text-gray-300">Enfoque</h4>
        <p className="mt-1 text-white dark:text-primary-300 text-sm">Integral, práctico y orientado a resultados</p>
      </div>
      
      <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg border-l-4 border-black dark:border-primary-500">
        <h4 className="font-semibold text-white dark:text-gray-300">Acompañamiento</h4>
        <p className="mt-1 text-white dark:text-primary-300 text-sm">Institucional, grupal o individual</p>
      </div>
    </div>
  </div>
</motion.div>

      {/* Tarjeta de Objetivos */}
      <motion.div
        className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
        variants={itemVariants}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-500 to-primary-500"></div>
        <div className="flex items-center mb-6">
          <div className="p-3 bg-secondary-100 dark:bg-secondary-900/50 rounded-lg mr-4">
            <svg className="w-6 h-6 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">OBJETIVOS</h3>
        </div>
        
        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
          <p className="mb-4">Impulsar el desarrollo sostenible de organizaciones y personas mediante:</p>
          
          <div className="space-y-4">
            <div className="bg-secondary-50 dark:bg-secondary-900/20 p-4 rounded-lg border-l-4 border-black dark:border-secondary-500">
              <h4 className="font-semibold text-white dark:text-gray-300">Identificación</h4>
              <p className="mt-1 text-white dark:text-primary-300 text-sm">Detección de brechas y diseño de soluciones efectivas</p>
            </div>
            
            <div className="bg-secondary-50 dark:bg-secondary-900/20 p-4 rounded-lg border-l-4 border-black dark:border-secondary-500">
              <h4 className="font-semibold text-white dark:text-gray-300">Fortalecimiento</h4>
              <p className="mt-1 text-white dark:text-primary-300 text-sm">Capacidades individuales, de equipo y organizacionales</p>
            </div>
            
            <div className="bg-secondary-50 dark:bg-secondary-900/20 p-4 rounded-lg border-l-4 border-black dark:border-secondary-500">
              <h4 className="font-semibold text-white dark:text-gray-300">Impacto</h4>
              <p className="mt-1 text-white dark:text-primary-300 text-sm">Generación de resultados positivos y duraderos</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default InstructoresPage;