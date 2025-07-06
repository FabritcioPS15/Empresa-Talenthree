import React from 'react';
import { Clock, Users, Monitor, Tag, Gift, ArrowLeft } from 'lucide-react';
import { TbCertificate } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import AsistenteRRHH from '../../medios/cursos/Asistente de Recursos Humanos.png';

const AsistenteRRHHPage: React.FC = () => {
  const { addItem } = useCart();

  const course = {
    id: '11',
    title: 'Asistente de Recursos Humanos',
    description: 'Gestiona los procesos de reclutamiento, selección, inducción, gestión de planillas y clima organizacional. Incluye fundamentos legales laborales…',
    image: AsistenteRRHH,
    duration: '4 meses',
    benefits: [
      'Certificación en gestión de RRHH',
      'Acceso a herramientas de reclutamiento',
      'Mentorías con especialistas en RRHH'
    ],
    level: '' as const,
    category: 'Formacion Laboral' as const
  };

  const handleAddToCart = () => {
    addItem({
      id: course.id,
      name: course.title,
      price: 0,
      image: course.image,
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '51960810996';
    const message = `Estoy interesado en el curso "${course.title}", ¿me podría brindar más información?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Botón de regreso */}
        <Link 
          to="/cursos" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Volver a Cursos
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Imagen del curso */}
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-auto object-cover"
              />
              {course.level && (
                <div className={`absolute top-4 right-4 px-3 py-1 text-sm font-medium text-white rounded ${
                  course.level === 'Básico' ? 'bg-green-500' :
                  course.level === 'Intermedio' ? 'bg-yellow-500' : 'bg-red-500'
                }`}>
                  {course.level}
                </div>
              )}
            </div>

            {/* Información del curso */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {course.title}
              </h1>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                {course.description}
              </p>

              {/* Detalles del curso */}
              <div className="space-y-4 mb-6">
                {course.duration && (
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock size={20} className="mr-3" />
                    <span>Duración: {course.duration}</span>
                  </div>
                )}
                
                {course.category && (
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Tag size={20} className="mr-3" />
                    <span>Categoría: {course.category}</span>
                  </div>
                )}
              </div>

              {/* Beneficios */}
              {course.benefits && course.benefits.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Gift size={24} className="mr-3 text-green-600" />
                    Beneficios del Curso
                  </h3>
                  <ul className="space-y-3">
                    {course.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center font-medium"
                >
                  <FaWhatsapp size={20} className="mr-2" />
                  Consultar por WhatsApp
                </button>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center font-medium"
                >
                  <TbCertificate size={20} className="mr-2" />
                  Solicitar Información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsistenteRRHHPage; 