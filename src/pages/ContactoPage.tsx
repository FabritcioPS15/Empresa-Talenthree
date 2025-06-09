import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, BookOpen, Briefcase, Users, Globe, Clock, MessageCircle, Star, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

// Animaciones
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  hover: { scale: 1.02 }
};

const ContactoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '', service: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="dark:bg-gray-900 overflow-hidden">
      {/* Hero Section Mejorado */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white py-20 overflow-hidden">
        {/* Elementos decorativos animados */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Partículas flotantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full">
              <MessageCircle size={48} className="text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
          >
            ¡Hablemos!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8"
          >
            Transforma tu carrera y la de tu equipo. Estamos aquí para crear soluciones únicas que impulsen tu éxito.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            {['Respuesta en 24h', 'Consulta gratuita', 'Soluciones personalizadas'].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle size={16} className="text-green-300" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Sección principal mejorada */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-5 gap-12"
          >
            {/* Información de contacto mejorada */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                {/* Fondo decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                
                <h2 className="text-3xl font-bold mb-8 relative z-10">Información de Contacto</h2>
                
                <div className="space-y-8 relative z-10">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-6 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                    >
                      <div className="p-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl shadow-lg">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                          {item.content}
                        </p>
                        {item.action && (
                          <motion.a
                            href={item.action.href}
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 mt-3 text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                          >
                            {item.action.text}
                            <ArrowRight size={16} />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Horarios de atención */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl relative z-10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-primary-600 dark:text-primary-400" size={24} />
                    <h3 className="text-lg font-semibold">Horarios de Atención</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Lunes - Viernes:</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Sábados:</span>
                      <span className="font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Domingos:</span>
                      <span className="font-medium text-red-500">Cerrado</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Testimonios rápidos */}
              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Star className="text-yellow-500 fill-yellow-500" size={24} />
                  <h3 className="text-lg font-semibold">Lo que dicen nuestros clientes</h3>
                </div>
                <blockquote className="text-gray-600 dark:text-gray-300 italic">
                  "TalentThree transformó completamente nuestro equipo. La atención personalizada y los resultados superaron nuestras expectativas."
                </blockquote>
                <cite className="text-sm text-primary-600 dark:text-primary-400 font-medium mt-2 block">
                  - María González, Directora de RRHH
                </cite>
              </motion.div>
            </motion.div>

            {/* Formulario mejorado */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              {/* Fondo decorativo del formulario */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-purple-500"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl">
                  <Send className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold">Envíanos un Mensaje</h2>
              </div>
              
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-700 rounded-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
                      <div>
                        <h3 className="font-semibold text-green-800 dark:text-green-200">¡Mensaje enviado exitosamente!</h3>
                        <p className="text-green-600 dark:text-green-300 text-sm">Te contactaremos dentro de las próximas 24 horas.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Nombre completo *
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:border-primary-500 focus:bg-white dark:focus:bg-gray-600 transition-all duration-300 text-gray-900 dark:text-white"
                      placeholder="Tu nombre completo"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:border-primary-500 focus:bg-white dark:focus:bg-gray-600 transition-all duration-300 text-gray-900 dark:text-white"
                      placeholder="tu@email.com"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:border-primary-500 focus:bg-white dark:focus:bg-gray-600 transition-all duration-300 text-gray-900 dark:text-white"
                      placeholder="+51 999 999 999"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Empresa
                    </label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:border-primary-500 focus:bg-white dark:focus:bg-gray-600 transition-all duration-300 text-gray-900 dark:text-white"
                      placeholder="Nombre de tu empresa"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Servicio de interés
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:border-primary-500 focus:bg-white dark:focus:bg-gray-600 transition-all duration-300 text-gray-900 dark:text-white"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="cursos-individuales">Cursos Individuales</option>
                    <option value="capacitacion-empresarial">Capacitación Empresarial</option>
                    <option value="consultoria">Consultoría</option>
                    <option value="mentoria">Mentoría Personalizada</option>
                    <option value="otro">Otro</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Asunto *
                  </label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:border-primary-500 focus:bg-white dark:focus:bg-gray-600 transition-all duration-300 text-gray-900 dark:text-white"
                    placeholder="¿Cómo podemos ayudarte?"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:border-primary-500 focus:bg-white dark:focus:bg-gray-600 transition-all duration-300 text-gray-900 dark:text-white resize-none"
                    placeholder="Cuéntanos más detalles sobre tu proyecto o necesidades..."
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar Mensaje
                        <Sparkles size={16} />
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mapa mejorado */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-3xl mb-8">
              <MapPin size={48} className="text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Visítanos</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Nuestras modernas instalaciones están ubicadas en el corazón de Pueblo Libre, con fácil acceso y estacionamiento disponible.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3947470524756!2d-77.07284368570445!3d-12.076041991456995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9c5f5555555%3A0x5d1a2dd9091d94c5!2sAv.%20Sim%C3%B3n%20Bol%C3%ADvar%20460%2C%20Pueblo%20Libre%2015084!5e0!3m2!1sen!2spe!4v1717373723059!5m2!1sen!2spe"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      {/* FAQ mejorado */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Preguntas Frecuentes</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Respuestas rápidas a las consultas más comunes sobre nuestros servicios
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white leading-tight">{item.question}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed pl-20">{item.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para comenzar?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              No esperes más. Contáctanos hoy y descubre cómo podemos transformar tu carrera o la de tu equipo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.a
                href="tel:+51960810996"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300"
              >
                <Phone size={20} />
                Llamar Ahora
              </motion.a>
              <motion.a
                href="https://wa.me/51960810996"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300"
              >
                <MessageCircle size={20} />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Datos para las secciones
const contactInfo = [
  {
    icon: <MapPin className="text-white" size={24} />,
    title: 'Oficina Principal',
    content: 'Av. Simón Bolívar 460, 401.\nPueblo Libre, Lima - Perú',
    action: {
      text: 'Ver en Google Maps',
      href: 'https://maps.google.com/?q=Av.+Simón+Bolívar+460,+Pueblo+Libre'
    }
  },
  {
    icon: <Mail className="text-white\" size={24} />,
    title: 'Correo Electrónico',
    content: 'informes@talenthree.com\nsoporte@talenthree.com',
    action: {
      text: 'Enviar correo',
      href: 'mailto:informes@talenthree.com'
    }
  },
  {
    icon: <Phone className="text-white" size={24} />,
    title: 'Teléfono',
    content: '(+51) 960810996\nAtención personalizada',
    action: {
      text: 'Llamar ahora',
      href: 'tel:+51960810996'
    }
  }
];

const faqItems = [
  {
    icon: <BookOpen className="text-primary-600 dark:text-primary-400\" size={24} />,
    question: '¿Cómo accedo a mis cursos?',
    answer: 'Todos los cursos están disponibles inmediatamente después de la inscripción en tu área personal. Recibirás un correo con las instrucciones de acceso y podrás comenzar de inmediato.'
  },
  {
    icon: <Briefcase className="text-primary-600 dark:text-primary-400" size={24} />,
    question: '¿Ofrecen certificados?',
    answer: 'Sí, todos nuestros cursos incluyen certificado digital válido internacionalmente que puedes descargar al completar el 100% del programa y aprobar las evaluaciones.'
  },
  {
    icon: <Users className="text-primary-600 dark:text-primary-400\" size={24} />,
    question: '¿Tienen programas empresariales?',
    answer: 'Ofrecemos planes corporativos con descuentos especiales para equipos de 5+ personas, capacitación in-house y soluciones personalizadas. Contáctanos para una cotización.'
  },
  {
    icon: <Globe className="text-primary-600 dark:text-primary-400" size={24} />,
    question: '¿Disponible en otros países?',
    answer: 'Nuestra plataforma está disponible globalmente con soporte en español. Ofrecemos horarios flexibles para diferentes zonas horarias y métodos de pago internacionales.'
  }
];

export default ContactoPage;