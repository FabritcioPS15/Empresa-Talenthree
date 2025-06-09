import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EventCard from '../components/ui/EventCard';
import { events } from '../data/mockData';
import { Search, CalendarRange, Rocket, Clock, MapPin} from 'lucide-react';

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

const EventosPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState<string>('');

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesDate = true;
    const currentDate = new Date();
    const eventDate = new Date(event.startDateTime);

    switch(dateFilter) {
      case 'upcoming':
        matchesDate = eventDate >= currentDate;
        break;
      case 'thisMonth':
        matchesDate = eventDate.getMonth() === currentDate.getMonth() && 
                      eventDate.getFullYear() === currentDate.getFullYear();
        break;
      case 'nextMonth':
        const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
        matchesDate = eventDate.getMonth() === nextMonth.getMonth() && 
                      eventDate.getFullYear() === nextMonth.getFullYear();
        break;
    }
    
    return matchesSearch && matchesDate;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => 
    new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime()
  );

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
            className="inline-block mb-6"
          >
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Eventos Exclusivos<span className="text-secondary-400"></span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Conéctate con líderes de la industria y amplía tu red profesional
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
                placeholder="Buscar eventos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white transition-all"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CalendarRange size={20} className="text-gray-500" />
              </div>
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white w-full"
              >
                <option value="">Todos los eventos</option>
                <option value="upcoming">Próximos</option>
                <option value="thisMonth">Este mes</option>
                <option value="nextMonth">Mes siguiente</option>
              </select>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Eventos Destacados */}
      <AnimatePresence>
        {events.some(event => event.isFeatured) && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-12 bg-gray-50 dark:bg-gray-950"
          >
            <div className="container-custom">
              <h2 className="text-2xl font-bold mb-8">Eventos Destacados</h2>
              <motion.div
                className="grid lg:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
              >
                {events
                  .filter(event => event.isFeatured)
                  .map(event => (
                    <motion.div key={event.id} variants={itemVariants}>
                      <EventCard event={event} />
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Todos los Eventos */}
      <section className="py-12 bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <AnimatePresence mode='wait'>
            {sortedEvents.length > 0 ? (
              <motion.div
                key="events"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h2 className="text-2xl font-bold mb-8">Todos los Eventos</h2>
                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                >
                  {sortedEvents.map(event => (
                    <motion.div
                      key={event.id}
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <EventCard event={event} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="no-events"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white dark:bg-gray-900 rounded-xl shadow-soft"
              >
                <MapPin className="mx-auto mb-4 text-gray-400" size={40} />
                <h3 className="text-2xl font-semibold mb-2">No se encontraron eventos</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Prueba ajustando los filtros o los términos de búsqueda
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Calendario */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                Calendario de Eventos
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Mantente actualizado con nuestra agenda interactiva
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-soft-lg p-6 border border-gray-200 dark:border-gray-800"
          >
            <div className="text-center py-10">
              <motion.div
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="inline-block mb-6"
              >
                <CalendarRange size={64} className="text-primary-600 dark:text-primary-400" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Calendario Interactivo</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Próximamente: Integración con Google Calendar y recordatorios
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="btn btn-primary inline-flex items-center group"
              >
                <Clock className="mr-2 transition-transform group-hover:rotate-45" />
                Suscríbete para Actualizaciones
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            className="bg-gradient-to-r from-primary-700 to-secondary-700 rounded-2xl p-8 md:p-12 text-white shadow-soft-lg overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  ¿Tienes una idea para un evento?
                </h2>
                <p className="opacity-90 mb-6">
                  Colaboramos con profesionales innovadores para crear experiencias únicas
                </p>
              </div>
              <div className="flex justify-center md:justify-end relative z-10">
                <motion.a
                  href="/contacto"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Rocket className="mr-2" />
                  Propón tu Evento
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

export default EventosPage;