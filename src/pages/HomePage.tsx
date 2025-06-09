import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, ChevronRight, PlayCircle, X, Sparkles, Users, BrainCircuit, Handshake, Crown, GraduationCap,TrendingUp} from 'lucide-react';
import { motion } from 'framer-motion';
import CourseCard from '../components/ui/CourseCard';
import EventCard from '../components/ui/EventCard';
import AnimatedNumber from '../components/ui/AnimatedNumber'; // Asegúrate de crear este componente
import CompanyCarousel from '../components/ui/CompanyCarousel';
import { courses, events} from '../data/mockData';
import Logoinicio from './../medios/inicioicon.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  }
};

const HomePage: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const featuredCourses = courses.slice(0, 3);
  const featuredEvents = events.filter(event => event.isFeatured).slice(0, 2);

  return (
    <div className="overflow-x-hidden">
      {/* Video Modal */}
      {showVideoModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-2"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute right-4 top-4 z-50 text-white hover:text-primary-300 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
                title="Video institucional"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
{/* Hero Section */}
<motion.section
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -50 }}
  transition={{ duration: 0.8 }}
  className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white pt-2 md:pt-20 pb-16 md:pb-32 overflow-hidden"
>
  {/* Elementos decorativos con iconos */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <Sparkles className="absolute left-1/4 top-20 w-12 h-12 text-primary-300/30 animate-pulse" />
    <Sparkles className="absolute right-32 top-1/3 w-16 h-16 text-secondary-200/30 animate-pulse delay-300" />
    <Sparkles className="absolute left-12 bottom-20 w-10 h-10 text-primary-200/30 animate-pulse delay-500" />
  </div>


  <div className="container-custom relative">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
<div className="mb-2 md:-mt-4 flex items-center gap-2">
<span className="px-2 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium flex items-center gap-2 animate-glow-purple">
    <Sparkles size={18} className="text-yellow-500 animate-pulse" />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white">
      Formamos personas, transformamos culturas, generamos impacto
    </span>
  </span>
</div>

        <h1 className="text-4xl md:text-5xl lg:text-5x2 font-bold mb-6 leading-tight">
        IMPULSA TU TALENTO, CRECE,
DESTACA Y TRANSFORMA TU
ORGANIZACIÓN{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-primary-300 to-secondary-300 text-transparent bg-clip-text">
              l
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-300/30 to-secondary-300/30 blur-2xl rounded-xl"></div>
          </span>
        </h1>

        <p className="text-2x1 opacity-90 mb-8 md:pr-8">
        Elige el curso que fortalecerá tu
desarrollo profesional y haz que tu
empresa alcance su máximo potencial.        </p>

<div className="mb-2 -mt-2 md:mt-0 flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/cursos" 
              className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-2 rounded-xl text-lg font-semibold shadow-lg flex items-center gap-2"
            >
              Explorar cursos
              <ChevronRight size={20} className="-mt-0.5" />
            </Link>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowVideoModal(true)}
          >
            <div className="p-3.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all">
              <PlayCircle className="w-8 h-8" />
            </div>
            <span className="font-medium">Ver video introductorio</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative -mt-8 lg:mt-12"
        >
        <div className="relative group">

          <div className="relative overflow-hidden rounded-2xl transform rotate-1 group-hover:rotate-0 transition-all duration-300">
          </div>
        </div>

        <motion.div 
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="-mt-[80px] w-67 h-auto rounded-2xl shadow-lg"
>
  {/* Imagen a la derecha del texto */}
  <img
    src={Logoinicio}
    alt="Icono de inicio"
    className="w-68 h-auto rounded-2xl shadow-lg"
  />

  {/* Elemento animado flotante (lo puedes dejar o quitar) */}
  <motion.div 
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="absolute -right-4 -bottom-8 bg-white p-4 rounded-xl shadow-2xl border border-gray-100"
  >
    <div className="flex items-center gap-3">
      <div className="p-2 bg-primary-100 rounded-lg">
        <Award className="w-8 h-6 text-white" />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800">+100</p>
        <p className="text-xs text-gray-600">Estudiantes certificados</p>
      </div>
    </div>
  </motion.div>
</motion.div>
      </motion.div>
    </div>
  </div>
</motion.section>


      {/* Company Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 bg-gray-200 dark:bg-gray-950"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Más de{' '}
              <AnimatedNumber value={30} className="text-primary-600 dark:text-primary-400" />{' '}
              empresas capacitadas
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-gray-800 dark:text-gray-400"
            >
Hemos impulsado la evolución del talento y la gestión en organizaciones líderes            </motion.p>
          </div>
          <CompanyCarousel />
        </div>
      </motion.div>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            Nuestra metodología{' '}
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">
              innovadora
              </span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-xl">
              Combinamos lo mejor de la educación tradicional con las nuevas tecnologías de aprendizaje
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: BrainCircuit,
                title: "Moderna y tecnológica",
                text: "Integramos tecnología educativa avanzada y actualizamos contenidos para un mundo en constante cambio.",
                color: "from-blue-100 to-blue-200"
              },
              {
                icon: Handshake,
                title: "Estratégica y profesional",
                text: "Educación integral: método tradicional + innovación digital, junto con mentoría con profesionales de alto impacto.",
                color: "from-purple-100 to-purple-200"
              },
              {
                icon: Crown,
                title: "Disruptiva y ágil",
                text: "Mentores que son agentes de cambio y metodologías prácticas que retan y evolucionan.",
                color: "from-orange-100 to-orange-200"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl text-center border border-gray-200 dark:border-gray-800 hover:border-transparent hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-600 dark:hover:from-primary-900/30 dark:hover:to-secondary-900/30 transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} dark:from-gray-500 dark:to-primary-400 text-black-600 dark:text-yellow-100 mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={32} className="stroke-current" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-900 dark:text-gray-600 leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cursos Populares */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-16"
          >
            <div>
              <h2 className="text-4xl font-bold mb-2">
                Cursos <span className="text-primary-500">Destacados</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-xl">
                Programas más populares entre nuestros estudiantes
              </p>
            </div>
            <motion.div whileHover={{ x: 5 }}>
              <Link 
                to="/cursos" 
                className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-lg"
              >
                Ver todos
                <ChevronRight size={24} className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredCourses.map((course) => (
              <motion.div key={course.id} variants={itemVariants}>
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Eventos y Comunidad */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Únete a nuestra <span className="text-primary-500">comunidad</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-xl">
              Combiamos 
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              className="lg:col-span-2 grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredEvents.map((event) => (
                <motion.div key={event.id} variants={itemVariants}>
                  <EventCard event={event} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-primary-900/20 p-8 rounded-2xl border border-primary-100 dark:border-primary-800"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Beneficios exclusivos</h3>
              <ul className="space-y-6">
                {[
                  { icon: Users, text: "Acceso a comunidad privada" },
                  { icon: Calendar, text: "Eventos mensuales online" },
                  { icon: Award, text: "Descuentos en certificaciones" },
                  { icon: TrendingUp, text: "Orientación y acompañamiento profesional" },
                  { icon: GraduationCap, text: "Networking de Alto Valor" }
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-primary-100 dark:bg-white rounded-lg">
                      <benefit.icon className="w-6 h-6 text-white dark:text-primary-200" />
                    </div>
                    <span className="text-white-700 dark:text-white-300">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA Final */}
      <section className="relative py-24 bg-gradient-to-r from-primary-700 to-secondary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dotnoise-light-grey.png')]"></div>
        <div className="container-custom relative text-center">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
            <p className="text-xl opacity-90 mb-8">
              Obtén acceso inmediato a contenido gratuito
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/eventos" 
                  className="btn bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg flex items-center gap-2"
                >
                  Ir a eventos
                  <Sparkles size={20} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;