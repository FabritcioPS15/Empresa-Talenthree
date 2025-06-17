import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Target, Heart, Zap } from 'lucide-react';
import DirectorGeneral from '../medios/team/director general.png';
import DirectorAcademico from '../medios/team/director académico.png';
import Directoradeadministracion from '../medios/team/directora de administracion.jpeg';
import DirectoradeProyectos from '../medios/team/Directoradeproyectos.jpeg';

import MisionImage from '../medios/team/Mision.jpeg';
import VisionImage from '../medios/team/Vision.jpeg';

const NosotrosPage: React.FC = () => {
  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Datos
  const values = [
    { icon: BookOpen, title: "Aprendizaje Continuo", description: "Creemos en la mejora constante y la actualización permanente" },
    { icon: Users, title: "Trabajo en Equipo", description: "Colaboración y diversidad como pilares del éxito" },
    { icon: Award, title: "Excelencia", description: "Buscamos la máxima calidad en todo lo que hacemos" },
    { icon: Target, title: "Enfoque Práctico", description: "Aprendizaje aplicado a situaciones reales" },
    { icon: Heart, title: "Pasión por la Tech", description: "Entusiasmo por la tecnología y su potencial" },
    { icon: Zap, title: "Innovación", description: "Buscamos siempre nuevas formas de resolver problemas" }
  ];

  const timeline = [
    { year: "2019", title: "El origen de una idea", description: "Talenthree nació con la convicción de que el talento humano impulsa el desarrollo sostenible, ofreciendo soluciones que conectan el crecimiento profesional con los objetivos de las organizaciones." },

    { year: "2020", title: "Formación y primeros clientes", description: "Iniciamos con capacitaciones y asesorías para pymes, enfocadas en fortalecer sus capacidades internas y la gestión del talento." },

    { year: "2022", title: "Expansión de servicios", description: "Ampliamos nuestra propuesta con servicios de desarrollo organizacional, diagnóstico institucional, diseño de perfiles, líneas de carrera y fortalecimiento de cultura, aplicando metodologías ágiles y centradas en las personas." },
    
    { year: "2023", title: "Transformación digital y alianzas estratégicas", description: "Incorporamos herramientas tecnológicas a nuestra oferta formativa y de consultoría, fortaleciendo alianzas con instituciones y empresas que apuestan por un enfoque humano e innovador." }
  ];

  const team = [
    { name: "José Raza", role: "Director General", photo: DirectorGeneral },
    { name: "Angélica Bazán", role: "Directora de Administración", photo: Directoradeadministracion },
    { name: "Sandro Wendorf", role: "Director Académico", photo: DirectorAcademico },
    { name: "Arian Anticona", role: "Directora de Proyectos y Convenios", photo: DirectoradeProyectos }

  ];

  return (
    <div className= "bg-white/90  dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-800 to-secondary-800 text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Conoce nuestra historia<span className="text-secondary-200"></span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Gestionamos el talento para potenciar el éxito de tu organización.
          </p>
        </motion.div>
      </section>

      {/* Acerca de Nosotros con fondo animado - Versión compacta */}
{/* Acerca de Nosotros - Versión responsive compacta */}
<section className="relative py-16 md:py-24 lg:py-28 flex items-center justify-center overflow-hidden">
  {/* Fondo animado */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-400 to-accent-500 opacity-15 animate-gradient-flow"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900/80"></div>
  </div>

  {/* Contenido centrado */}
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="relative z-2 text-center px-4 max-w-4xl mx-auto w-full"
  >
    <div className="mb-8 md:mb-10 lg:mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 dark:text-white">
        Sobre <span className="text-primary-500">Talenthree</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mx-auto max-w-3xl leading-relaxed">
        En Talenthree, somos más que una organización educativa. Somos un ecosistema que impulsa el crecimiento de personas y empresas, a través de consultoría en talento humano, gestión organizacional, formación laboral y asesoría estratégica para Mypes.
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-4">
      <motion.div 
        whileHover={{ y: -10 }}
        className="bg-white/90 dark:bg-gray-800 p-5 md:p-6 rounded-xl backdrop-blur-sm"
      >
        <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">10,000+</h3>
        <p className="text-gray-600 dark:text-gray-300">Profesionales capacitados</p>
      </motion.div>
      
      <motion.div 
        whileHover={{ y: -10 }}
        className="bg-white/90 dark:bg-gray-800 p-5 md:p-6 rounded-xl backdrop-blur-sm"
      >
        <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">500+</h3>
        <p className="text-gray-600 dark:text-gray-300">Empresas transformadas</p>
      </motion.div>
      
      <motion.div 
        whileHover={{ y: -10 }}
        className="bg-white/90 dark:bg-gray-800 p-5 md:p-6 rounded-xl backdrop-blur-sm"
      >
        <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">98%</h3>
        <p className="text-gray-600 dark:text-gray-300">Satisfacción de clientes</p>
      </motion.div>
    </div>
  </motion.div>
</section>

      {/* Mission & Vision */}
<section className="py-16 bg-white dark:bg-gray-900">
  <div className="container mx-auto px-4">
    {/* Sección Nuestra Historia con animación mejorada */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center my-24 py-8"
    >
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="inline-block"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Nuestra Historia</h2>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          De startup local a referente regional en educación tecnológica
        </p>
      </motion.div>
    </motion.div>

    {/* Sección Misión (original) */}
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      <motion.div variants={itemVariants} className="space-y-6">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Nuestra Misión</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">       
          Impulsar el crecimiento y éxito de las personas y organizaciones mediante soluciones integrales de gestión del talento humano, desarrollo organizacional y formación profesional. Ofreciendo servicios de alta calidad, personalizados y orientados a resultados, que permitan a nuestros clientes alcanzar su máximo potencial y adaptarse.
        </p>
      </motion.div>
      <motion.div variants={itemVariants}>
        <img 
  src={MisionImage}  // Usa la variable importada
          alt="Equipo trabajando" 
          className="rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
        />
      </motion.div>
    </motion.div>

    {/* Sección Visión (original) */}
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="grid md:grid-cols-2 gap-12 items-center mt-20"
    >
      <motion.div variants={itemVariants} className="order-1 md:order-2 space-y-6">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Nuestra Visión</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Ser la plataforma educativa y consultora líder en gestión del talento y desarrollo
          organizacional, reconocida por transformar empresas y profesionales.
        </p>
      </motion.div>
      <motion.div variants={itemVariants} className="order-2 md:order-1">
        <img 
  src={VisionImage}  // Usa la variable importada
          alt="Estudiantes colaborando" 
          className="rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
        />
      </motion.div>
    </motion.div>
  </div>
</section>
      {/* Our Story */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="relative border-l-2 border-primary-500 ml-6 md:ml-0 md:mx-auto md:max-w-3xl pl-8 pb-8"
          >
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="mb-12 relative"
              >
                <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[29px] top-4" />
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">{item.year}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Nuestros Valores</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Principios fundamentales que guían cada decisión y acción en TalentThree
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map(({ icon: Icon, title, description }, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                    <Icon className="w-8 h-8 text-white dark:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      

      {/* Team */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Conoce al Equipo</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Comprometidos con el crecimiento de personas y empresas.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 dark:text-white">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NosotrosPage;
