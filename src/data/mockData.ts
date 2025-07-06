import AsistenteAdministrativa from './../medios/cursos/Asistente Administrativa.png';
import AsistenteContable from './../medios/cursos/Asistente Contable y Financiero.png';
import AsistenteLogistica from './../medios/cursos/Asistente de Logistica.png';
import AsistenteRRHH from './../medios/cursos/Asistente de Recursos Humanos.png';
import AuxiliarTI from './../medios/cursos/Auxiliar de TI.png';
import CajeroComercial from './../medios/cursos/Cajero comercial y financiero.png';
import ComercioInternacional from './../medios/cursos/Comercio Internacional.png';
import Comunicacionasertiva from './../medios/cursos/ComunicacionAsertiva.jpeg';
import DiplomadoCiberseguridad from './../medios/cursos/Diplomado en Ciberseguridad.png';
import DiplomadoGestionAmbiental from './../medios/cursos/Diplomado en Gestion Ambiental.png';
import DiplomadoGestiondeCalidad from './../medios/cursos/Diplomado en Gestion de la Calidad.png';
import DiplomadoGestiondeProyectos from './../medios/cursos/Diplomado en gestion de Proyectos.png';
import DiplomadoGestionInmobiliaria from './../medios/cursos/Diplomado en Gestion Inmobiliaria.png';
import DiplomadoGestionPublica from './../medios/cursos/Diplomado en Gestion Publica.png';
import DiplomadoEnSST from './../medios/cursos/Diplomado en SST.png';
import DiplomadoEnGTHEstrategico from './../medios/cursos/Diplomado en GTH Estrategico.png';
import Gestiondetiempo from './../medios/cursos/Gestiondetiempo.jpeg';
import Ingles from './../medios/cursos/Ingles para el trabajo.png';
import InteligenciaEmocional from './../medios/cursos/Inteligencia Emocional.png';
import Liderazgo from './../medios/cursos/LiderazgoPersonal.jpeg';
import Manejodeestres from './../medios/cursos/Manejodeestres.jpeg';
import Marcapersonal from './../medios/cursos/MarcaPersonal.jpeg';
import PensamientoCritico from './../medios/cursos/PensamientoCritico.jpeg';
import Trabajoenequipo from './../medios/cursos/Trabajoenequipo.jpeg';
import DesarrolloOrganizacional from './../medios/Asesoria/1.png';
import GestiónEmpresarial from './../medios/Asesoria/2.png';
import GestiónPública from './../medios/Asesoria/4.png';
import PsicologíaIntegral from './../medios/Asesoria/Asesoria y Consultoria - Psicologia Integral.png';
import Coaching from './../medios/Asesoria/Coaching Profesional.jpeg';
import Outsourcing from './../medios/Asesoria/5.png';
import BuildConsult from './../medios/Asesoria/6.png';
import Agroindustria from './../medios/Asesoria/7.png';
import Compliance from './../medios/Asesoria/8.png';


export const courses = [
  {
    id: '1',
    title: 'Inteligencia Emocional para el Éxito Profesional',
    description: 'Desarrolla la capacidad de identificar, comprender y gestionar las emociones propias y ajenas para fortalecer relaciones interpersonales y el desempeño profesional.',
    price: 30.00,
    image: InteligenciaEmocional,
    duration: '90 minutos',
    students: 1500,
    benefits: [
      'Mejora de relaciones laborales, toma de decisiones más equilibrada, mayor autoconciencia.'
    ],
    modality: 'Virtual' as const,
    level: 'Intermedio' as const,
    category: 'Desarrollo Personal' as const
  },
  {
    id: '2',
    title: 'Comunicación asertiva y Escucha activa',
    description: 'Potencia la capacidad de expresar ideas y necesidades con claridad y respeto, promoviendo una comunicación efectiva y empática.',
    price: 25.00,
    image: Comunicacionasertiva,
    duration: '75 minutos',
    students: 1000,
    modality: 'Virtual' as const,
    level: 'Básico' as const,
    category: 'Desarrollo Personal' as const
  },
  {
    id: '3',
    title: 'Liderazgo Personal y Autogestión',
    description: 'Desarrolla habilidades de liderazgo desde la autorresponsabilidad, la disciplina y la toma de decisiones estratégicas',
    price: 50.00,
    image: Liderazgo,
    duration: '90 minutos',
    students: 3500,
    modality: 'Virtual' as const,
    level: 'Avanzado' as const,
    category: 'Desarrollo Personal' as const
  },
  {
    id: '4',
    title: 'Gestión del Tiempo y Productividad Personal',
    description: 'Incorpora herramientas y técnicas para una mejor organización de tareas y prioridades.',
    price: 35.00,
    image: Gestiondetiempo,
    duration: '70 minutos',
    students: 1700,
    modality: 'Virtual' as const,
    level: '' as const,
    category: 'Desarrollo Personal' as const
  },
  {
    id: '5',
    title: 'Manejo del Estrés y Bienestar Emocional',
    description: 'Aprende a identificar factores estresantes y aplicar estrategias para el autocuidado emocional y físico.',
    price: 50.00,
    image: Manejodeestres,
    duration: '80 minutos',
    students: 1200,
    modality: 'Virtual' as const,
    level: '' as const,
    category: 'Desarrollo Personal' as const
  },
  {
    id: '6',
    title: 'Pensamiento Crítico y Solución de Problemas',
    description: 'Fortalece la capacidad de análisis, razonamiento lógico y toma de decisiones fundamentadas.',
    price: 50.00,
    image: PensamientoCritico,
    duration: '90 minutos',
    students: 2700,
    modality: 'Virtual' as const,
    level: 'Avanzado' as const,
    category: 'Desarrollo Personal' as const
  },
  {
    id: '7',
    title: 'Marca Personal y Presencia Profesional',
    description: 'Construye una identidad profesional sólida y coherente con los objetivos personales y laborales.',
    price: 33.00,
    image: Marcapersonal,
    duration: '75 minutos',
    students: 3500,
    modality: 'Virtual' as const,
    level: '' as const,
    category: 'Desarrollo Personal' as const
  },
  {
    id: '8',
    title: 'Trabajo en Equipo y Colaboración Efectiva',
    description: 'Mejorar la capacidad de integrarse y contribuir activamente en equipos diversos y multidisciplinarios..',
    price: 50.00,
    image: Trabajoenequipo,
    duration: '90 minutos',
    students: 1700,
    modality: 'Virtual' as const,
    level: 'Intermedio' as const,
    category: 'Desarrollo Personal' as const
  },
  {
    id: '9',
    title: 'Comercio Internacional',
    description: 'Gestiona oportunidades de negocios en el comercio exterior y conecta empresas con nuevos mercados alrededor del mundo…',
    image: ComercioInternacional,
    duration: '6 meses',
  benefits: [
    'Certificación internacional',
    'Acceso a comunidad exclusiva',
    'Mentorías personalizadas'
  ],    level: '' as const,
    category: 'Formacion Laboral' as const
  },
  {
    id: '10',
    title: 'Auxiliar TI',
    description: 'Aprende a brindar soporte básico de sistemas, atención técnica, manejo de bases de datos simples, gestión de hardware y software…',
    image: AuxiliarTI,
    duration: '6 meses',
    level: '' as const,
    category: 'Formacion Laboral' as const
  },
  {
    id: '11',
    title: 'Asistente de Recursos Humanos',
    description: 'Gestiona los procesos de reclutamiento, selección, inducción, gestión de planillas y clima organizacional. Incluye fundamentos legales laborales…',
    image: AsistenteRRHH,
    duration: '4 meses',
    level: '' as const,
    category: 'Formacion Laboral' as const
  },
  {
    id: '12',
    title: 'Asistente administrativo con herramientas digitales',
    description: 'Desempéñate eficientemente en áreas administrativas, dominando herramientas como Excel, Google Workspace, técnicas de archivo, redacción, atención al cliente…',
    image: AsistenteAdministrativa,
    duration: '4 meses',
    level: '' as const,
    category: 'Formacion Laboral' as const
  },
  {
    id: '13',
    title: 'Asistente Contable',
    description: 'Brinda soporte en registros contables, libros electrónicos, PDT, conciliaciones bancarias, análisis de costos y preparación de reportes…',
    image: AsistenteContable,
    duration: '6 meses',
    level: '' as const,
    category: 'Formacion Laboral' as const
  },
  {
    id: '14',
    title: 'Auxiliar en logística y almacén',
    description: 'Brinda apoyo en procesos logísticos, control de inventarios, almacenamiento, guías de remisión y manejo de software de gestión…',
    image: AsistenteLogistica,
    duration: '4 meses',
    level: '' as const,
    category: 'Formacion Laboral' as const
  },
  {
    id: '15',
    title: 'Cajero Comercial y Financiero',
    description: 'Maneja operaciones de caja, atención al cliente, terminales POS y procesos financieros básicos. Ideal para insertarse rápidamente en el mundo laboral del comercio y las finanzas.',
    image: CajeroComercial,
    duration: '4 meses',
    level: '' as const,
    category: 'Formacion Laboral' as const
  },
  {
    id: '16',
    title: 'Inglés para el trabajo y la comunicación Profesional',
    description: 'Domina expresiones, vocabulario y estructuras clave para comunicarte eficazmente en entornos laborales...',
    image: Ingles,
    duration: '6 meses',
    level: '' as const,
    category: 'Formacion Laboral' as const
  },
  {
    id: '17',
    title: 'Diplomado en Gestión del Talento Humano Estratégico',
    description: 'Desarrolla habilidades para planificar, atraer, desarrollar y retener talento alineado a los objetivos estratégicos de la organización. Incorpora temas como cultura organizacional, liderazgo, evaluación del desempeño, gestión por competencias y transformación digital del área de RR.HH.',
    image: DiplomadoEnGTHEstrategico,
    duration: '5 meses',
    level: '' as const,
    category: 'Diplomados' as const
  },
  {
    id: '18',
    title: 'Diplomado en Seguridad y Salud en el Trabajo',
    description: 'Formas especialistas en implementación de sistemas de gestión de SST. Incluye identificación de peligros, evaluación de riesgos, cultura preventiva, auditorías internas y cumplimiento legal según la normativa peruana.',
    image: DiplomadoEnSST,
    duration: '5 meses',
    level: '' as const,
    category: 'Diplomados' as const
  },
  {
    id: '19',
    title: 'Diplomado en Gestión Pública',
    description: 'Brinda herramientas clave para mejorar la administración pública y formular políticas públicas efectivas. Incluye planificación, presupuesto por resultados y control gubernamental bajo enfoques modernos de gestión estatal.',
    image: DiplomadoGestionPublica,
    duration: '6 meses',
    level: '' as const,
    category: 'Diplomados' as const
  },
  {
    id: '20',
    title: 'Diplomado en Gestión Ambiental para Proyectos de Construcción',
    description: 'Este diplomado capacita a los profesionales en la identificación, evaluación y mitigación de impactos ambientales generados por proyectos de construcción. Se enfoca en la normativa ambiental vigente en Perú, elaboración de instrumentos de gestión ambiental (IGAs), planes de manejo ambiental, control de residuos y sostenibilidad en obras civiles. ',
    image:  DiplomadoGestionAmbiental,
    duration: '5 meses',
    level: '' as const,
    category: 'Diplomados' as const
  },
  {
    id: '21',
    title: 'Diplomado en Gestión Inmobiliaria y Comercialización de Bienes Raíces ',
    description: 'Capacita para desempeñarse en el sector inmobiliario con conocimientos en contratos, tasaciones, marketing inmobiliario, atención al cliente y normativas urbanísticas.',
    image: DiplomadoGestionInmobiliaria,
    duration: '4 meses',
    level: '' as const,
    category: 'Diplomados' as const
  },
  {
    id: '22',
    title: 'Diplomado en Gestión de Proyectos de Construcción',
    description: 'Brinda herramientas para planificar, ejecutar y controlar proyectos de construcción bajo los estándares del PMI. Incluye cronogramas, control de avances, gestión de costos y manejo de riesgos.',
    image: DiplomadoGestiondeProyectos,
    duration: '6 meses',
    level: '' as const,
    category: 'Diplomados' as const
  },
  {
    id: '23',
    title: 'Diplomado en Ciberseguridad y Gestión de la Seguridad de la Información',
    description: 'Este diplomado está diseñado para formar profesionales capaces de proteger los activos digitales de una organización mediante estrategias y herramientas de ciberseguridad. Se abordan conceptos clave como gestión de riesgos, normativas internacionales (ISO 27001, NIST), análisis de vulnerabilidades, gestión de incidentes, seguridad en redes, criptografía y ciberinteligencia.',
    image: DiplomadoCiberseguridad,
    duration: '5 meses',
    level: '' as const,
    category: 'Diplomados' as const
  },
  {
    id: '24',
    title: 'Diplomado en Gestión de la Calidad y Buenas Prácticas de Manufactura (BPM)',
    description: 'Este diplomado capacita a los profesionales en la identificación, evaluación y mitigación de impactos ambientales generados por proyectos de construcción. Se enfoca en la normativa ambiental vigente en Perú, elaboración de instrumentos de gestión ambiental (IGAs), planes de manejo ambiental, control de residuos y sostenibilidad en obras civiles. ',
    image: DiplomadoGestiondeCalidad,
    duration: '5 meses',
    level: '' as const,
    category: 'Diplomados' as const
  },
];

export const events = [
  {
    id: '1',
    title: 'Ser 360: Descubre el arquitecto que hay en ti',
    startDateTime: '2025-07-15T09:00:00',
    endDateTime: '2025-08-12T18:00:00', // 4 semanas después
    location: 'Semi presencial',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    description: 'Curso teórico-práctico que promueve el desarrollo integral del ser humano...',
    isFeatured: true,
    timeZone: 'America/Lima'
  },
  {
    id: '2',
    title: 'Mi primer trabajo: errores que no volvería a cometer',
    startDateTime: '2025-09-17T19:00:00',
    endDateTime: '2025-09-17T21:00:00',
    location: 'Live',
    image: 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg',
    description: 'Live con Waldo Barragán...',
    timeZone: 'America/Lima'
  },
  {
    id: '3',
    title: 'Tech Meetup: Inteligencia Artificial',
    startDateTime: '2025-08-05T18:30:00',
    endDateTime: '2025-08-05T21:00:00',
    location: 'Hub Tecnológico Central',
    image: 'https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg',
    description: 'Encuentro para discutir avances en IA...',
    isFeatured: false
  },
  {
    id: '4',
    title: 'Mi primer trabajo: errores que no volvería a cometer',
    startDateTime: '2025-09-17T19:00:00-05:00', // Hora explícita con offset UTC-5
    endDateTime: '2025-09-17T21:00:00-05:00',
    location: 'Live',
    image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg',
    description: 'Live con Waldo Barragán...',
    isFeatured: true
  }
];

export const instructors = [
  {
    id: '1',
    name: 'Desarrollo Organizacional',
    specialty: 'Asesoría y Consultoría',	
    bio: 'Especialistas en transformación organizacional con más de 15 años de experiencia ayudando a empresas a optimizar sus procesos internos y potenciar el talento humano.',
    image: DesarrolloOrganizacional,
    social: {
      twitter: 'https://twitter.com/talenthree_do',
      linkedin: 'https://linkedin.com/company/talenthree-do',
      youtube: 'https://youtube.com/@talenthree-do'
    }
  },
  {
    id: '2',
    name: 'Gestión Empresarial',
    specialty: 'Asesoría y Consultoría',
    bio: 'Consultores expertos en optimización empresarial, especializados en estrategias de crecimiento sostenible y eficiencia operativa.',
    image: GestiónEmpresarial,
    social: {
      facebook: 'https://facebook.com/talenthree-ge',
      linkedin: 'https://linkedin.com/company/talenthree-ge',
    }
  },
  {
    id: '3',
    name: 'Gestión Pública',
    specialty: 'Asesoría',
    bio: 'Especialistas en modernización del Estado y políticas públicas efectivas, con amplia experiencia en el sector público peruano.',
    image: GestiónPública,
    social: {
      twitter: 'https://twitter.com/talenthree-gp',
      youtube: 'https://youtube.com/@talenthree-gp'
    }
  },
  {
    id: '4',
    name: 'Psicología Integral',
    specialty: 'Consultoría',
    bio: 'Psicólogos especializados en desarrollo personal y profesional, promoviendo el bienestar emocional y el crecimiento humano.',
    image: PsicologíaIntegral,
    social: {
      linkedin: 'https://linkedin.com/company/talenthree-pi',
      twitter: 'https://twitter.com/talenthree-pi'
    }
  },
  {
    id: '5',
    name: 'Coaching',
    specialty: 'Asesoría',
    bio: 'Coaches profesionales certificados que potencian el desarrollo personal y profesional a través de metodologías probadas.',
    image: Coaching,
    social: {
      linkedin: 'https://linkedin.com/company/talenthree-coaching',
      twitter: 'https://twitter.com/talenthree-coach'
    }
  },
  {
    id: '6',
    name: 'Recursos Humanos y Contabilidad',
    specialty: 'Outsourcing',
    bio: 'Servicios integrales de outsourcing especializados en RRHH y contabilidad, optimizando costos y garantizando cumplimiento normativo.',
    image: Outsourcing,
    social: {
      linkedin: 'https://linkedin.com/company/talenthree-outsourcing',
      twitter: 'https://twitter.com/talenthree-out'
    }
  },
  {
    id: '7',
    name: 'BuildConsult',
    specialty: 'Asesoría',
    bio: 'Servicios integrales de outsourcing especializados en RRHH y contabilidad, optimizando costos y garantizando cumplimiento normativo.',
    image: BuildConsult,
    social: {
      linkedin: 'https://linkedin.com/company/talenthree-outsourcing',
      twitter: 'https://twitter.com/talenthree-out'
    }
  },
  {
    id: '8',
    name: 'Agroindustria y Alimentos',
    specialty: 'Asesoría',
    bio: 'Servicios integrales de outsourcing especializados en RRHH y contabilidad, optimizando costos y garantizando cumplimiento normativo.',
    image: Agroindustria,
    social: {
      linkedin: 'https://linkedin.com/company/talenthree-outsourcing',
      twitter: 'https://twitter.com/talenthree-out'
    }
  },
  {
    id: '9',
    name: 'Compliance',
    specialty: 'Asesoría',
    bio: 'Servicios integrales de outsourcing especializados en RRHH y contabilidad, optimizando costos y garantizando cumplimiento normativo.',
    image: Compliance,
    social: {
      linkedin: 'https://linkedin.com/company/talenthree-outsourcing',
      twitter: 'https://twitter.com/talenthree-out'
    }
  },
];