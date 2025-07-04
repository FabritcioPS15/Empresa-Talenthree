import React from 'react';
import { Link } from 'react-router-dom';

export interface InstructorProps {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    facebook?: string;
  };
}

interface InstructorCardProps {
  instructor: InstructorProps;
}

const getAsesoriaPath = (name: string) => {
  // Normaliza el nombre para crear el path
  return '/asesorias/' + name
    .toLowerCase()
    .replace(/á/g, 'a')
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ó/g, 'o')
    .replace(/ú/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '');
};

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  const handleOpenInstructorPage = () => {
    // Abrir en una nueva ventana/pestaña
    window.open(`/instructores/${instructor.id}`, '_blank');
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-soft-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="relative pb-2/3">
        <img 
          src={instructor.image} 
          alt={instructor.name} 
          className="w-full h-64 md:h-80 object-cover object-center"
        />
      </div>
      
      <div className="p-5 text-center">
        <h3 
          className="text-xl font-bold text-gray-900 dark:text-white mb-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer" 
          onClick={handleOpenInstructorPage}
        >
          {instructor.name}
        </h3>
        
        <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
          {instructor.specialty}
        </p>
        
        <Link
          to={getAsesoriaPath(instructor.name)}
          className="inline-block w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Empieza hoy
        </Link>
      </div>
    </div>
  );
};

export default InstructorCard;