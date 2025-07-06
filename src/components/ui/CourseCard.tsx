import React, { useState } from 'react';
import { Clock, Users, Star, Monitor, Tag, Gift} from 'lucide-react';
import { TbCertificate } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

// Configuración básica del modal (necesario para accesibilidad)
Modal.setAppElement('#root');

export interface CourseProps {
  id: string;
  title: string;
  instructor: string;
  description: string;
  price?: number;
  benefits?: string[];
  image: string;
  duration?: string;
  students?: number;
  rating?: number;
  level?: 'Básico' | 'Intermedio' | 'Avanzado' | '.';
  modality?: 'Virtual' | 'Presencial' | 'Híbrido';
  category?: 'Desarrollo Personal' | 'Formación Laboral' | 'Formacion Laboral' | 'Formación Especializada' | 'Diplomados';
}

interface CourseCardProps {
  course: CourseProps;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mapeo de IDs de cursos de Formación Laboral a sus rutas
  const formacionLaboralRoutes: { [key: string]: string } = {
    '9': '/cursos/comercio-internacional',
    '10': '/cursos/auxiliar-ti',
    '11': '/cursos/asistente-rrhh',
    '12': '/cursos/asistente-administrativo',
    '13': '/cursos/asistente-contable',
    '14': '/cursos/auxiliar-logistica',
    '15': '/cursos/cajero-comercial',
    '16': '/cursos/ingles-trabajo'
  };

  const handleAddToCart = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!course.price) return;
    addItem({
      id: course.id,
      name: course.title,
      price: course.price,
      image: course.image,
    });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleVerBeneficios = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    console.log('handleVerBeneficios clicked', { 
      category: course.category, 
      id: course.id, 
      isFormacionLaboral: course.category === 'Formación Laboral' || course.category === 'Formacion Laboral',
      hasRoute: formacionLaboralRoutes[course.id]
    });
    
    // Si es un curso de Formación Laboral (con o sin tilde), redirigir a la página individual
    if ((course.category === 'Formación Laboral' || course.category === 'Formacion Laboral') && formacionLaboralRoutes[course.id]) {
      console.log('Navegando a:', formacionLaboralRoutes[course.id]);
      navigate(formacionLaboralRoutes[course.id]);
      return;
    } else {
      // Para otros cursos, abrir el modal como antes
      console.log('Abriendo modal');
      openModal();
    }
  };

  const handleWhatsAppClick = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const phoneNumber = '51960810996'; // Reemplazar con el número real despues :b
    const message = `Estoy interesado en el curso "${course.title}", ¿me podría brindar más información?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Tarjeta del curso */}
      <div 
        className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-soft transition-transform duration-300 hover:-translate-y-2 w-full max-w-[400px] min-h-[600px] cursor-pointer"
        onClick={openModal}
      >
        <div className="relative h-56 overflow-hidden">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {course.level && (
            <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium text-white rounded ${
              course.level === 'Básico' ? 'bg-green-500' :
              course.level === '.' ? 'bg-primary' :
              course.level === 'Intermedio' ? 'bg-yellow-500' : 'bg-red-500'
            }`}>
              {course.level}
            </div>
          )}
        </div>
        
        <div className="p-8 flex flex-col h-[calc(100%-224px)]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-2">
            {course.title}
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
            {course.description}
          </p>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 flex-wrap gap-2">
            {course.duration && (
              <div className="flex items-center mr-2">
                <Clock size={16} className="mr-1" />
                <span>{course.duration}</span>
              </div>
            )}
            
            {course.students !== undefined && (
              <div className="flex items-center mr-4">
                <Users size={16} className="mr-1" />
                <span>{course.students} estudiantes</span>
              </div>
            )}
            
            {course.modality && (
              <div className="flex items-center">
                <Monitor size={16} className="mr-1" />
                <span>{course.modality}</span>
              </div>
            )}
          </div>

          {course.category && (
            <div className="flex items-center mb-4">
              <Tag size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">{course.category}</span>
            </div>
          )}
          
          {course.rating !== undefined && (
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < Math.round(course.rating || 0) 
                      ? 'text-yellow-400 fill-yellow-400' 
                      : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between mt-auto">
            {course.price !== undefined ? (
              <div className="text-primary-700 dark:text-primary-400 font-bold">
                S/ {course.price.toFixed(2)}
              </div>
            ) : (
              <div className="text-green-600 dark:text-green-400 font-bold flex items-center">
                <Gift size={18} className="mr-2" />
                Beneficios Especiales
              </div>
            )}
          </div>
          
          {course.price !== undefined ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
              className="mt-4 w-full flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-md transition-colors"
            >
              <TbCertificate  size={18} className="mr-2" />
              Imprime tu certificado
            </button>
          ) : (
            <button
              onClick={handleVerBeneficios}
              className={`mt-4 w-full flex items-center justify-center text-white py-3 px-4 rounded-md transition-colors ${
                course.category === 'Diplomados' 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              <Gift size={18} className="mr-2" />
              Ver Beneficios
            </button>
          )}
        </div>
      </div>

      {/* Modal/Popup */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={`Detalles de ${course.title}`}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg relative">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{course.title}</h2>
            <button 
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <div className="flex flex-col">
              <p className="text-gray-700 dark:text-gray-300 mb-4">{course.description}</p>
              
              <div className="space-y-3">
                {course.instructor && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Instructor:</span> {course.instructor}
                  </p>
                )}
                
                {course.duration && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>Duración: {course.duration}</span>
                  </p>
                )}
                
                {course.modality && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                    <Monitor size={16} className="mr-2" />
                    <span>Modalidad: {course.modality}</span>
                  </p>
                )}
                
                {course.category && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                    <Tag size={16} className="mr-2" />
                    <span>Categoría: {course.category}</span>
                  </p>
                )}
              </div>
              
              {course.benefits && course.benefits.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2 flex items-center">
                    <Gift size={18} className="mr-2 text-green-600" />
                    Beneficios:
                  </h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
                    {course.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Botones en el modal */}
{/* Botones en el modal - tamaño contenido, alineados a la izquierda */}
<div className="mt-4 flex flex-col items-start gap-2">
  {/* Botón de WhatsApp */}
  <button
    onClick={handleWhatsAppClick}
    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center"
  >
    <FaWhatsapp size={18} className="mr-2" />
    Consultar por WhatsApp
  </button>

  {/* Botón de certificado (solo si tiene precio) */}
  {course.price !== undefined && (
    <button
      onClick={handleAddToCart}
      className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center"
    >
      <TbCertificate size={18} className="mr-2" />
      Imprime tu certificado
    </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Estilos para el modal */}
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .modal-content {
          position: relative;
          width: 90%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          border: none;
          background: transparent;
          padding: 0;
          animation: modalFadeIn 0.3s ease-out;
        }
        
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default CourseCard;