import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, ChevronRight, PlayCircle, X, Sparkles, Users, BrainCircuit, Handshake, Crown, GraduationCap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import CourseCard from '../components/ui/CourseCard';
import EventCard from '../components/ui/EventCard';
import AnimatedNumber from '../components/ui/AnimatedNumber'; // Asegúrate de crear este componente
import CompanyCarousel from '../components/ui/CompanyCarousel';
import { courses, events } from '../data/mockData';
import Logoinicio from './../medios/inicioicon.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const HomePage: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const featuredCourses = courses.slice(0, 3);
  const featuredEvents = events.filter(event => event.isFeatured).slice(0, 2);

  return (
    <>
      <SEO
        title="TYX | La evolución de la gestión del talento"
        description="Centro de formación profesional y consultoría empresarial líder en Perú. TYX: La evolución de la gestión del talento."
        keywords="formación profesional, TYX, cursos, diplomados, coaching, consultoría empresarial, desarrollo organizacional, gestión empresarial, Perú"
        url="/"
      />
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-900 text-white pt-24 pb-12 overflow-hidden h-auto min-h-[500px] flex items-center"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px]"></div>

            {/* Orbs */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-[100px]"></div>
          </div>

          <div className="container-custom relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 mb-6">
                  <Sparkles size={14} className="text-secondary-300" />
                  <span className="text-xs font-semibold tracking-wider text-primary-100">EVOLUCIÓN DEL TALENTO</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                  Impulsa tu <br /> talento con <span className="bg-gradient-to-r from-secondary-300 to-primary-300 text-transparent bg-clip-text">TYX</span>
                </h1>

                <p className="text-lg opacity-80 mb-8 max-w-xl leading-relaxed text-blue-50">
                  Transformamos el desarrollo profesional con metodologías de vanguardia y expertos en gestión del talento.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/cursos"
                      className="btn bg-white text-primary-900 hover:bg-blue-50 px-6 py-3 rounded-xl text-base font-bold shadow-lg shadow-primary-900/20 flex items-center gap-2 transition-all"
                    >
                      Explorar cursos
                      <ChevronRight size={18} />
                    </Link>
                  </motion.div>

                  <motion.button
                    onClick={() => setShowVideoModal(true)}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all backdrop-blur-sm group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <PlayCircle className="w-5 h-5 fill-current" />
                    </div>
                    <span className="font-medium text-sm">Ver video</span>
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative z-10 p-2 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl skew-y-[-2deg] transform hover:skew-y-0 transition-transform duration-500">
                  <img
                    src={Logoinicio}
                    alt="Talenthree Home"
                    className="w-full h-auto rounded-xl shadow-inner"
                  />

                  {/* Floating Badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3"
                  >
                    <div className="p-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">+1,000</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Estudiantes</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Services Section (Asesoría y Consultoría) */}
        <section className="py-24 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Asesoría y <span className="text-primary-600">Consultoría</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Soluciones estratégicas diseñadas para potenciar el crecimiento sostenible de tu organización.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Desarrollo Organizacional", path: "/asesorias/desarrollo-organizacional", description: "Transformamos culturas y optimizamos procesos internos." },
                { title: "Gestión Empresarial", path: "/asesorias/gestion-empresarial", description: "Estrategias de crecimiento y eficiencia operativa." },
                { title: "Gestión Pública", path: "/asesorias/gestion-publica", description: "Modernización del estado y políticas públicas." },
                { title: "Psicología Integral", path: "/asesorias/psicologia-integral", description: "Bienestar emocional y crecimiento humano." },
                { title: "Coaching Profesional", path: "/asesorias/coaching", description: "Potenciamos líderes y equipos de alto desempeño." },
                { title: "Outsourcing RRHH", path: "/asesorias/outsourcing", description: "Gestión integral de talento y planillas." },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/50 hover:bg-primary-600 hover:text-white transition-all duration-300 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl"
                >
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 group-hover:text-primary-50">
                    {service.description}
                  </p>
                  <Link
                    to={service.path}
                    className="inline-flex items-center font-bold text-primary-600 group-hover:text-white"
                  >
                    Saber más <ChevronRight size={18} className="ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/otras-soluciones"
                className="btn bg-primary-600 text-white hover:bg-primary-700 px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all hover:scale-105"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </section>


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
                  <CourseCard course={{
                    ...course,
                    instructor: 'Instructor TYX',
                    level: course.level || '.'
                  } as any} />
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
        {/* Recursos Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Recursos para tu <span className="text-secondary-600">Crecimiento</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Contenido gratuito y pagado para mantenerte a la vanguardia profesional.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Blog", icon: PlayCircle, description: "Artículos y noticias", path: "/blog" },
                { title: "Podcast", icon: BrainCircuit, description: "Mentalidad y éxito", path: "/podcast" },
                { title: "Descargables", icon: GraduationCap, description: "Guías y plantillas", path: "/descargables" },
                { title: "YouTube", icon: Users, description: "Clases y webinars", path: "https://youtube.com/@talenthree-do" },
              ].map((recurso, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-soft border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transition-all"
                >
                  <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-2xl text-primary-600 mb-6">
                    <recurso.icon size={32} />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{recurso.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{recurso.description}</p>
                  <Link
                    to={recurso.path}
                    className="text-primary-600 font-bold hover:underline mt-auto"
                  >
                    Explorar
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="relative py-32 bg-primary-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#4f46e5,transparent)]"></div>
          </div>
          <div className="container-custom relative text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Empieza tu transformación hoy</h2>
              <p className="text-xl md:text-2xl opacity-80 mb-12">
                Únete a miles de profesionales que ya están evolucionando con Talenthree.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  to="/cursos"
                  className="btn bg-white text-primary-900 hover:bg-gray-100 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl transition-all hover:scale-105"
                >
                  Ver Cursos
                </Link>
                <Link
                  to="/contacto"
                  className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-2xl text-xl font-bold transition-all"
                >
                  Contáctanos
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;