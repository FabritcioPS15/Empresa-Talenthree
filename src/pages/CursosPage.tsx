import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from '../components/ui/CourseCard';
import { courses } from '../data/mockData';
import { Search, Filter, Rocket, GraduationCap } from 'lucide-react';

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
const toSlug = (str: string) => 
  str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
    .replace(/\s+/g, '-') // Reemplazar espacios por guiones
    .replace(/[^a-z0-9-]/g, ''); // Eliminar caracteres especiales

const categorySlugMap: { [key: string]: string } = {
  'desarrollo-personal': 'Desarrollo Personal',
  'formacion-laboral': 'Formación Laboral',
      'talleres-diplomas': 'Formación Especializada',
  'diplomados': 'Diplomados'
};

const CursosPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Filtro por categoría
  const [selectedLevel, setSelectedLevel] = useState<string>(''); // Filtro por nivel

  // Sincronizar el filtro de categoría con la URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categorySlug = params.get('filter') || '';
    
    // Convertir slug a nombre de categoría real
    const categoryName = categorySlugMap[categorySlug] || '';
    setSelectedCategory(categoryName);
  }, [location.search]);

  const handleCategoryChange = (categorySlug: string) => {
    const params = new URLSearchParams(location.search);
    
    if (categorySlug) {
      params.set('filter', categorySlug);
    } else {
      params.delete('filter');
    }
    
    navigate({ search: params.toString() });
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ;
    const matchesCategory = selectedCategory ? 
      toSlug(course.category) === toSlug(selectedCategory) : true; // Normalizar ambas categorías
    const matchesLevel = selectedLevel ? course.level === selectedLevel : true;

    return matchesSearch && matchesCategory && matchesLevel;
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
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block mb-4"
          >
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explora Nuestros Cursos<span className="text-secondary-400"></span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Domina nuevas habilidades con nuestra colección de cursos profesionales
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
            {/* Búsqueda */}
            <motion.div variants={itemVariants} className="relative flex-grow max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white transition-all"
              />
            </motion.div>

            {/* Filtros por categoría */}
            <motion.div variants={itemVariants} className="relative flex-grow">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Filter size={16} className="text-gray-500" />
              </div>
              <select
                value={Object.keys(categorySlugMap).find(key => categorySlugMap[key] === selectedCategory) || ''}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="pl-4 pr-8 py-3 w-full border border-gray-300 dark:border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
              >
                <option value="">Todas las categorías</option>
                {Object.entries(categorySlugMap).map(([slug, name]) => (
                  <option key={slug} value={slug}>{name}</option>
                ))}
              </select>
            </motion.div>

            {/* Filtros por nivel */}
            <motion.div variants={itemVariants} className="relative flex-grow">
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Filter size={16} className="text-gray-500" />
              </div>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="pl-4 pr-8 py-3 w-full border border-gray-300 dark:border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
              >
                <option value="">Todos los niveles</option>
                <option value="Básico">Básico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </select>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Grid de Cursos */}
      <section className="py-12 bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <AnimatePresence mode='wait'>
            {filteredCourses.length > 0 ? (
              <motion.div
                key="courses"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Mostrando {filteredCourses.length} de {courses.length} cursos
                </p>
                
                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                >
                  {filteredCourses.map((course) => (
                    <motion.div
                      key={course.id}
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <CourseCard course={course} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="no-courses"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 bg-white dark:bg-gray-900 rounded-xl shadow-soft"
              >
                <GraduationCap className="mx-auto mb-4 text-gray-400" size={40} />
                <h3 className="text-2xl font-semibold mb-2">No se encontraron cursos</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Prueba ajustando los filtros o los términos de búsqueda
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            className="bg-gradient-to-r from-primary-700 to-secondary-700 rounded-2xl p-8 md:p-12 text-white shadow-soft-lg overflow-hidden"
          >
            <div className="grid md:grid-cols-3 gap-8 items-center relative">
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  ¿Necesitas algo personalizado?
                </h2>
                <p className="opacity-90">
                  Desarrollamos cursos a medida para empresas y grupos profesionales
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <motion.a
                  href="/contacto"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Rocket className="mr-2" />
                  Solicitar Curso Personalizado
                </motion.a>
              </div>
              <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CursosPage;