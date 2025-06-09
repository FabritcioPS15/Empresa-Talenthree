import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InstructorCard from '../components/ui/InstructorCard';
import { instructors } from '../data/mockData';
import { Search, Rocket, GraduationCap, BookOpen, Users } from 'lucide-react';

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
    const matchesSearch = instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          instructor.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialtyFilter ? instructor.specialty === specialtyFilter : true;
    
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="dark:bg-gray-900">
      {/* Hero Section con animación */}
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

      {/* Filtros con animaciones */}
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
                placeholder="Buscar instructores..."
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

      {/* Grid de Instructores con AnimatePresence */}
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
                  Mostrando {filteredInstructors.length} de {instructors.length} instructores
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

      {/* Sección Únete al Equipo */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px" }}
          >
            <div>
              <motion.h2
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                className="text-3xl font-bold mb-6"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                  Conviértete en Instructor
                </span>
              </motion.h2>
              
              <motion.ul
                className="space-y-4 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
              >
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600/10 flex items-center justify-center mr-4">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{benefit.text}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a 
                  href="/contacto" 
                  className="btn btn-primary inline-flex items-center group"
                >
                  <Rocket className="mr-2 transition-transform group-hover:rotate-45" />
                  Postúlate Ahora
                </a>
              </motion.div>
            </div>

            <motion.div
              className="hidden md:block relative"
              initial={{ scale: 0.9, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl -rotate-3"></div>
              <img 
                src="/instructor-team.jpg"
                alt="Equipo de instructores"
                className="relative z-10 rounded-2xl shadow-xl transform hover:rotate-2 transition-transform duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const benefits = [
  {
    icon: <Users className="text-primary-600" size={20} />,
    text: "Impacta a miles de estudiantes globalmente"
  },
  {
    icon: <BookOpen className="text-primary-600" size={20} />,
    text: "Desarrolla contenido a tu propio ritmo"
  },
  {
    icon: <GraduationCap className="text-primary-600" size={20} />,
    text: "Certificación como experto en tu campo"
  },
  {
    icon: <Search className="text-primary-600" size={20} />,
    text: "Visibilidad en nuestra plataforma global"
  }
];

export default InstructoresPage;