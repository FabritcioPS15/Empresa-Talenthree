import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Star, Users, Award, Calendar, ExternalLink, CheckCircle, BookOpen, Target, TrendingUp, Heart, Shield, Zap, User, Send } from 'lucide-react';
import SEO from '../../components/SEO';
import { instructors } from '../../data/mockData';

// Datos específicos para cada instructor
const instructorDetails = {
  '1': {
    title: 'Desarrollo Organizacional',
    subtitle: 'Transformamos organizaciones desde su núcleo',
    description: 'Especialistas en transformación organizacional con más de 15 años de experiencia ayudando a empresas a optimizar sus procesos internos y potenciar el talento humano. Nuestro enfoque integral abarca desde el diagnóstico organizacional hasta la implementación de cambios sostenibles.',
    longDescription: `Somos expertos en desarrollo organizacional con una metodología probada que ha transformado más de 50 empresas en Perú y Latinoamérica. Nuestro equipo multidisciplinario combina experiencia en psicología organizacional, gestión del cambio y tecnología para crear soluciones personalizadas que generan resultados medibles.

    Nuestro proceso incluye:
    • Diagnóstico integral de la organización
    • Identificación de oportunidades de mejora
    • Diseño de estrategias de transformación
    • Implementación con acompañamiento continuo
    • Medición de resultados y optimización`,
    services: [
      {
        title: 'Diagnóstico Organizacional',
        description: 'Evaluación completa de la estructura, procesos y cultura organizacional',
        icon: BookOpen,
        price: 'S/ 3,500',
        duration: '2-3 semanas'
      },
      {
        title: 'Diseño de Estructuras',
        description: 'Rediseño de organigramas y flujos de trabajo optimizados',
        icon: Target,
        price: 'S/ 5,000',
        duration: '4-6 semanas'
      },
      {
        title: 'Cultura Corporativa',
        description: 'Desarrollo e implementación de valores y cultura organizacional',
        icon: Heart,
        price: 'S/ 8,000',
        duration: '3-6 meses'
      },
      {
        title: 'Gestión del Cambio',
        description: 'Acompañamiento en procesos de transformación organizacional',
        icon: TrendingUp,
        price: 'S/ 12,000',
        duration: '6-12 meses'
      }
    ],
    experience: '15+ años',
    clients: '50+ empresas',
    rating: 4.9,
    reviews: 127,
    availability: 'Lunes a Viernes',
    contactInfo: {
      phone: '+51 999 123 456',
      email: 'desarrollo@talenthree.com',
      location: 'Lima, Perú',
      address: 'Av. Arequipa 1234, San Isidro'
    },
    pricing: {
      consultation: 'S/ 200',
      project: 'Desde S/ 5,000',
      monthly: 'S/ 2,500'
    },
    testimonials: [
      {
        name: 'María González',
        position: 'CEO, TechCorp',
        text: 'La transformación que logramos con su ayuda fue increíble. Nuestra productividad aumentó 40% en 6 meses.',
        rating: 5
      },
      {
        name: 'Carlos Mendoza',
        position: 'Director RRHH, InnovateLab',
        text: 'Excelente trabajo en el rediseño de nuestra estructura organizacional. Altamente recomendados.',
        rating: 5
      }
    ],
    certifications: [
      'Certificación en Desarrollo Organizacional - Universidad de Lima',
      'Especialización en Gestión del Cambio - ESAN',
      'Certificación Internacional en Coaching Organizacional'
    ],
    methodology: [
      'Diagnóstico integral con herramientas validadas',
      'Diseño colaborativo de soluciones',
      'Implementación gradual con acompañamiento',
      'Medición continua de resultados',
      'Optimización basada en datos'
    ]
  },
  '2': {
    title: 'Gestión Empresarial',
    subtitle: 'Optimizamos tu empresa para el éxito sostenible',
    description: 'Consultores expertos en optimización empresarial, especializados en estrategias de crecimiento sostenible y eficiencia operativa. Ayudamos a empresas a alcanzar su máximo potencial.',
    longDescription: `Con más de 12 años de experiencia en consultoría empresarial, hemos ayudado a más de 35 empresas a transformar sus operaciones y alcanzar objetivos estratégicos. Nuestro enfoque se basa en metodologías probadas como Lean Management, Six Sigma y Balanced Scorecard.

    Nuestros servicios abarcan:
    • Análisis estratégico del negocio
    • Optimización de procesos operativos
    • Implementación de sistemas de gestión
    • Desarrollo de indicadores de rendimiento
    • Planificación financiera y presupuestaria`,
    services: [
      {
        title: 'Planificación Estratégica',
        description: 'Desarrollo de planes estratégicos alineados con la visión empresarial',
        icon: Target,
        price: 'S/ 8,000',
        duration: '2-3 meses'
      },
      {
        title: 'Optimización de Procesos',
        description: 'Rediseño y mejora de procesos operativos con metodología Lean',
        icon: Zap,
        price: 'S/ 6,000',
        duration: '3-4 meses'
      },
      {
        title: 'Análisis Financiero',
        description: 'Evaluación financiera y desarrollo de estrategias de crecimiento',
        icon: TrendingUp,
        price: 'S/ 4,500',
        duration: '1-2 meses'
      },
      {
        title: 'Sistemas de Gestión',
        description: 'Implementación de sistemas de gestión de calidad y procesos',
        icon: Shield,
        price: 'S/ 10,000',
        duration: '4-6 meses'
      }
    ],
    experience: '12+ años',
    clients: '35+ empresas',
    rating: 4.8,
    reviews: 89,
    availability: 'Lunes a Sábado',
    contactInfo: {
      phone: '+51 999 234 567',
      email: 'gestion@talenthree.com',
      location: 'Lima, Perú',
      address: 'Av. Javier Prado 2345, San Borja'
    },
    pricing: {
      consultation: 'S/ 250',
      project: 'Desde S/ 8,000',
      monthly: 'S/ 3,500'
    },
    testimonials: [
      {
        name: 'Roberto Silva',
        position: 'Gerente General, Comercial ABC',
        text: 'Gracias a su consultoría, logramos aumentar nuestras ventas en 60% y reducir costos operativos.',
        rating: 5
      },
      {
        name: 'Ana Torres',
        position: 'Directora de Operaciones, ServiCorp',
        text: 'Excelente trabajo en la optimización de nuestros procesos. Los resultados superaron nuestras expectativas.',
        rating: 4
      }
    ],
    certifications: [
      'MBA en Gestión Empresarial - Universidad del Pacífico',
      'Certificación Lean Six Sigma Black Belt',
      'Especialización en Finanzas Corporativas'
    ],
    methodology: [
      'Análisis integral del negocio',
      'Identificación de oportunidades de mejora',
      'Diseño de soluciones personalizadas',
      'Implementación con seguimiento continuo',
      'Medición de ROI y resultados'
    ]
  },
  '3': {
    title: 'Gestión Pública',
    subtitle: 'Modernizamos el Estado para servir mejor',
    description: 'Especialistas en modernización del Estado y políticas públicas efectivas, con amplia experiencia en el sector público peruano.',
    longDescription: `Con más de 18 años de experiencia en el sector público, hemos contribuido a la modernización de más de 25 entidades gubernamentales. Nuestro conocimiento profundo de la normativa peruana y las mejores prácticas internacionales nos permite ofrecer soluciones efectivas.

    Nuestros servicios incluyen:
    • Modernización de procesos públicos
    • Formulación de políticas públicas
    • Implementación de gobierno digital
    • Gestión presupuestaria por resultados
    • Control gubernamental y transparencia`,
    services: [
      {
        title: 'Modernización Pública',
        description: 'Transformación digital y optimización de procesos gubernamentales',
        icon: Zap,
        price: 'S/ 15,000',
        duration: '6-12 meses'
      },
      {
        title: 'Políticas Públicas',
        description: 'Formulación e implementación de políticas públicas efectivas',
        icon: BookOpen,
        price: 'S/ 20,000',
        duration: '8-12 meses'
      },
      {
        title: 'Gobierno Digital',
        description: 'Implementación de soluciones tecnológicas para el sector público',
        icon: Shield,
        price: 'S/ 25,000',
        duration: '12-18 meses'
      },
      {
        title: 'Control Gubernamental',
        description: 'Sistemas de control interno y transparencia',
        icon: Target,
        price: 'S/ 18,000',
        duration: '6-9 meses'
      }
    ],
    experience: '18+ años',
    clients: '25+ entidades',
    rating: 4.7,
    reviews: 67,
    availability: 'Lunes a Viernes',
    contactInfo: {
      phone: '+51 999 345 678',
      email: 'publica@talenthree.com',
      location: 'Lima, Perú',
      address: 'Av. 28 de Julio 3456, Lima'
    },
    pricing: {
      consultation: 'S/ 300',
      project: 'Desde S/ 12,000',
      monthly: 'S/ 4,500'
    },
    testimonials: [
      {
        name: 'Dr. Juan Pérez',
        position: 'Director General, Ministerio de Economía',
        text: 'Su trabajo en la modernización de nuestros procesos fue fundamental para mejorar la eficiencia del sector.',
        rating: 5
      },
      {
        name: 'Lic. Carmen Ríos',
        position: 'Jefa de Planeamiento, Gobierno Regional',
        text: 'Excelente asesoría en la formulación de políticas públicas. Los resultados han sido muy positivos.',
        rating: 4
      }
    ],
    certifications: [
      'Maestría en Gestión Pública - Universidad Nacional Mayor de San Marcos',
      'Especialización en Gobierno Digital - ESAN',
      'Certificación en Control Gubernamental'
    ],
    methodology: [
      'Análisis del marco normativo vigente',
      'Diagnóstico de capacidades institucionales',
      'Diseño de soluciones alineadas con políticas nacionales',
      'Implementación gradual con participación ciudadana',
      'Evaluación de impacto y sostenibilidad'
    ]
  },
  '4': {
    title: 'Psicología Integral',
    subtitle: 'Desarrollo personal y bienestar emocional',
    description: 'Psicólogos especializados en desarrollo personal y profesional, promoviendo el bienestar emocional y el crecimiento humano.',
    longDescription: `Nuestro equipo de psicólogos especializados cuenta con más de 10 años de experiencia en el desarrollo humano. Hemos ayudado a más de 200 personas a superar desafíos personales y profesionales, promoviendo el bienestar integral.

    Nuestros servicios abarcan:
    • Evaluación psicológica integral
    • Terapia individual y grupal
    • Desarrollo de habilidades blandas
    • Manejo del estrés laboral
    • Coaching psicológico especializado`,
    services: [
      {
        title: 'Evaluación Psicológica',
        description: 'Evaluación integral de salud mental y desarrollo personal',
        icon: BookOpen,
        price: 'S/ 200',
        duration: '2-3 sesiones'
      },
      {
        title: 'Terapia Individual',
        description: 'Sesiones personalizadas de terapia psicológica',
        icon: Heart,
        price: 'S/ 120',
        duration: '50 minutos'
      },
      {
        title: 'Desarrollo de Habilidades',
        description: 'Programas de desarrollo de inteligencia emocional',
        icon: Target,
        price: 'S/ 500',
        duration: '5 sesiones'
      },
      {
        title: 'Coaching Psicológico',
        description: 'Acompañamiento en procesos de cambio personal',
        icon: TrendingUp,
        price: 'S/ 150',
        duration: '60 minutos'
      }
    ],
    experience: '10+ años',
    clients: '200+ personas',
    rating: 4.9,
    reviews: 156,
    availability: 'Lunes a Sábado',
    contactInfo: {
      phone: '+51 999 456 789',
      email: 'psicologia@talenthree.com',
      location: 'Lima, Perú',
      address: 'Av. Benavides 4567, Miraflores'
    },
    pricing: {
      consultation: 'S/ 150',
      session: 'S/ 120',
      package: 'S/ 500 (5 sesiones)'
    },
    testimonials: [
      {
        name: 'Sofía Mendoza',
        position: 'Ejecutiva de Marketing',
        text: 'Gracias a la terapia logré superar mi ansiedad laboral y ahora tengo una vida más equilibrada.',
        rating: 5
      },
      {
        name: 'Miguel Ángel López',
        position: 'Emprendedor',
        text: 'El coaching psicológico me ayudó a desarrollar mi liderazgo y mejorar mis relaciones profesionales.',
        rating: 5
      }
    ],
    certifications: [
      'Licenciatura en Psicología - Universidad Católica',
      'Especialización en Terapia Cognitivo-Conductual',
      'Certificación en Coaching Psicológico'
    ],
    methodology: [
      'Evaluación inicial personalizada',
      'Diseño de plan terapéutico individual',
      'Aplicación de técnicas científicamente validadas',
      'Seguimiento continuo del progreso',
      'Evaluación de resultados y ajustes'
    ]
  },
  '5': {
    title: 'Coaching Profesional',
    subtitle: 'Potencia tu desarrollo personal y profesional',
    description: 'Coaches profesionales certificados que potencian el desarrollo personal y profesional a través de metodologías probadas.',
    longDescription: `Nuestros coaches certificados han acompañado a más de 150 profesionales en su desarrollo personal y profesional. Utilizamos metodologías reconocidas internacionalmente como ICF, GROW y Ontológico para maximizar el potencial de cada persona.

    Nuestros programas incluyen:
    • Coaching ejecutivo y de liderazgo
    • Desarrollo de carrera profesional
    • Gestión del tiempo y productividad
    • Comunicación efectiva
    • Inteligencia emocional aplicada`,
    services: [
      {
        title: 'Coaching Ejecutivo',
        description: 'Desarrollo de habilidades de liderazgo y gestión',
        icon: Target,
        price: 'S/ 300',
        duration: '60 minutos'
      },
      {
        title: 'Desarrollo de Carrera',
        description: 'Planificación y desarrollo profesional estratégico',
        icon: TrendingUp,
        price: 'S/ 250',
        duration: '60 minutos'
      },
      {
        title: 'Productividad Personal',
        description: 'Optimización del tiempo y gestión de prioridades',
        icon: Zap,
        price: 'S/ 200',
        duration: '60 minutos'
      },
      {
        title: 'Comunicación Efectiva',
        description: 'Desarrollo de habilidades de comunicación',
        icon: Heart,
        price: 'S/ 180',
        duration: '60 minutos'
      }
    ],
    experience: '8+ años',
    clients: '150+ profesionales',
    rating: 4.8,
    reviews: 98,
    availability: 'Lunes a Domingo',
    contactInfo: {
      phone: '+51 999 567 890',
      email: 'coaching@talenthree.com',
      location: 'Lima, Perú',
      address: 'Av. Larco 5678, Miraflores'
    },
    pricing: {
      consultation: 'S/ 100',
      session: 'S/ 200',
      package: 'S/ 800 (5 sesiones)'
    },
    testimonials: [
      {
        name: 'Patricia Vargas',
        position: 'Directora de Ventas',
        text: 'El coaching ejecutivo transformó mi estilo de liderazgo. Ahora tengo un equipo más motivado y productivo.',
        rating: 5
      },
      {
        name: 'Ricardo Fuentes',
        position: 'Consultor Independiente',
        text: 'Gracias al coaching de carrera, logré hacer la transición profesional que siempre soñé.',
        rating: 4
      }
    ],
    certifications: [
      'Certificación ICF - International Coaching Federation',
      'Especialización en Coaching Ontológico',
      'Certificación en Metodología GROW'
    ],
    methodology: [
      'Sesión inicial de diagnóstico',
      'Establecimiento de objetivos SMART',
      'Aplicación de metodologías probadas',
      'Seguimiento y accountability',
      'Medición de resultados y celebración'
    ]
  },
  '6': {
    title: 'Recursos Humanos y Contabilidad',
    subtitle: 'Outsourcing integral para tu empresa',
    description: 'Servicios integrales de outsourcing especializados en RRHH y contabilidad, optimizando costos y garantizando cumplimiento normativo.',
    longDescription: `Con más de 20 años de experiencia en servicios de outsourcing, hemos ayudado a más de 80 empresas a optimizar sus procesos de RRHH y contabilidad. Nuestro equipo especializado garantiza cumplimiento normativo y eficiencia operativa.

    Nuestros servicios abarcan:
    • Gestión completa de planillas
    • Contabilidad empresarial integral
    • Reclutamiento y selección de personal
    • Cumplimiento tributario y legal
    • Reportes financieros y análisis`,
    services: [
      {
        title: 'Gestión de Planillas',
        description: 'Administración completa de planillas y beneficios sociales',
        icon: Users,
        price: 'S/ 800',
        duration: 'Mensual'
      },
      {
        title: 'Contabilidad Empresarial',
        description: 'Contabilidad completa y reportes financieros',
        icon: BookOpen,
        price: 'S/ 1,200',
        duration: 'Mensual'
      },
      {
        title: 'Reclutamiento y Selección',
        description: 'Procesos de contratación y selección de personal',
        icon: Target,
        price: 'S/ 2,000',
        duration: 'Por proceso'
      },
      {
        title: 'Cumplimiento Tributario',
        description: 'Declaraciones tributarias y cumplimiento legal',
        icon: Shield,
        price: 'S/ 600',
        duration: 'Mensual'
      }
    ],
    experience: '20+ años',
    clients: '80+ empresas',
    rating: 4.6,
    reviews: 134,
    availability: 'Lunes a Viernes',
    contactInfo: {
      phone: '+51 999 678 901',
      email: 'outsourcing@talenthree.com',
      location: 'Lima, Perú',
      address: 'Av. República de Panamá 6789, San Isidro'
    },
    pricing: {
      consultation: 'S/ 180',
      monthly: 'Desde S/ 1,500',
      project: 'Según requerimientos'
    },
    testimonials: [
      {
        name: 'Luis Ramírez',
        position: 'Gerente General, Constructora XYZ',
        text: 'Su servicio de outsourcing nos ha permitido enfocarnos en nuestro negocio mientras ellos manejan todo el tema administrativo.',
        rating: 5
      },
      {
        name: 'Carmen Delgado',
        position: 'Directora Financiera, RetailCorp',
        text: 'Excelente trabajo en la gestión de planillas y contabilidad. Siempre cumplen con los plazos y la calidad es excepcional.',
        rating: 4
      }
    ],
    certifications: [
      'Certificación en Gestión de RRHH - Universidad de Lima',
      'Contador Público Colegiado',
      'Especialización en Legislación Laboral'
    ],
    methodology: [
      'Análisis de necesidades específicas',
      'Diseño de procesos optimizados',
      'Implementación con acompañamiento',
      'Monitoreo continuo de calidad',
      'Mejora continua basada en feedback'
    ]
  }
};

const InstructorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [instructor, setInstructor] = useState<any>(null);
  const [details, setDetails] = useState<any>(null);
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    celular: '',
    email: '',
    aceptoDatos: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (id) {
      const foundInstructor = instructors.find(inst => inst.id === id);
      const instructorDetail = instructorDetails[id as keyof typeof instructorDetails];
      
      if (foundInstructor && instructorDetail) {
        setInstructor(foundInstructor);
        setDetails(instructorDetail);
      } else {
        navigate('/instructores');
      }
    }
  }, [id, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Aquí iría la lógica real de envío del formulario
    console.log('Datos del formulario:', formData);
    
    // Resetear formulario
    setFormData({
      nombres: '',
      apellidos: '',
      celular: '',
      email: '',
      aceptoDatos: false
    });
    
    setIsSubmitting(false);
    alert('¡Matrícula enviada exitosamente! Nos pondremos en contacto contigo pronto.');
  };

  if (!instructor || !details) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Cargando instructor...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${details.title} - ${details.subtitle} | TalentThree`}
        description={details.description}
        keywords={`${details.title.toLowerCase()}, consultoría, asesoría, ${details.title.split(' ').join(', ')}, Perú`}
        url={`/instructores/${id}`}
        type="article"
        author={instructor.name}
        publishedTime={new Date().toISOString()}
        tags={[details.title, 'consultoría', 'asesoría', 'Perú']}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700"
      >
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/instructores')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <ArrowLeft size={20} />
              Volver a Instructores
            </button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-primary-800 to-secondary-800 text-white py-16"
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                {details.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl opacity-90 mb-6"
              >
                {details.subtitle}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg opacity-80 mb-8"
              >
                {details.description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
                  <Star className="text-yellow-400" size={16} />
                  <span>{details.rating} ({details.reviews} reseñas)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
                  <Users size={16} />
                  <span>{details.clients} clientes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
                  <Award size={16} />
                  <span>{details.experience} experiencia</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Content Sections */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Acerca de {details.title}
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {details.longDescription}
                </p>
              </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
            >
              <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                Servicios Principales
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {details.services.map((service: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <service.icon className="text-primary-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-primary-600 font-medium">{service.price}</span>
                          <span className="text-gray-500">{service.duration}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft"
            >
              <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                Lo que dicen nuestros clientes
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {details.testimonials.map((testimonial: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
                  >
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400" size={16} />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Matrícula Gratis Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  ¡Matrícula Gratis!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Completa el formulario y obtén tu matrícula sin costo
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombres" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    NOMBRES Y APELLIDOS
                  </label>
                  <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Ingresa tus nombres y apellidos"
                  />
                </div>
                
                <div>
                  <label htmlFor="celular" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    CELULAR
                  </label>
                  <input
                    type="tel"
                    id="celular"
                    name="celular"
                    value={formData.celular}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Ingresa tu número de celular"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    CORREO ELECTRÓNICO
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Ingresa tu correo electrónico"
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="aceptoDatos"
                    name="aceptoDatos"
                    checked={formData.aceptoDatos}
                    onChange={handleInputChange}
                    required
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="aceptoDatos" className="text-sm text-gray-600 dark:text-gray-400">
                    Acepto el uso de mis datos para marcar
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Tarifas
              </h3>
              <div className="space-y-3">
                {Object.entries(details.pricing).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 capitalize">
                      {key === 'consultation' ? 'Consulta inicial' :
                       key === 'project' ? 'Proyecto completo' :
                       key === 'monthly' ? 'Servicio mensual' :
                       key === 'session' ? 'Sesión individual' :
                       key === 'package' ? 'Paquete de sesiones' : key}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">{value as string}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-soft"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Certificaciones
              </h3>
              <div className="space-y-3">
                {details.certifications.map((cert: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default InstructorDetailPage; 