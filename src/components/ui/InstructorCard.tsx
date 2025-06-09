import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export interface InstructorProps {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  courses: number;
  students: number;
  rating: number;
  social?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
}

interface InstructorCardProps {
  instructor: InstructorProps;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-soft-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="relative pb-2/3">
        <img 
          src={instructor.image} 
          alt={instructor.name} 
          className="w-full h-52 object-cover object-center"
        />
      </div>
      
      <div className="p-5 text-center">
        <Link to={`/instructores/${instructor.id}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            {instructor.name}
          </h3>
        </Link>
        
        <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
          {instructor.specialty}
        </p>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {instructor.bio}
        </p>
        
        <div className="flex justify-center space-x-3 mb-4">
          {instructor.social?.facebook && (
            <a 
              href={instructor.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          )}
          
          {instructor.social?.twitter && (
            <a 
              href={instructor.social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          )}
          
          {instructor.social?.linkedin && (
            <a 
              href={instructor.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-800 dark:text-gray-400 dark:hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          )}
          
          {instructor.social?.youtube && (
            <a 
              href={instructor.social.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          )}
        </div>
        
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-4">
          <div>
            <span className="font-medium text-gray-900 dark:text-white">
              {instructor.courses}
            </span> Cursos
          </div>
          <div>
            <span className="font-medium text-gray-900 dark:text-white">
              {instructor.students}
            </span> Estudiantes
          </div>
          <div>
            <span className="font-medium text-gray-900 dark:text-white">
              {instructor.rating.toFixed(1)}
            </span> Rating
          </div>
        </div>
        
        <Link
          to={`/instructores/${instructor.id}`}
          className="inline-block w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Ver perfil
        </Link>
      </div>
    </div>
  );
};

export default InstructorCard;