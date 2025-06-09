import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "¿Qué tipos de cursos ofrece TalentThree?",
    answer: "Ofrecemos una amplia gama de cursos en áreas como desarrollo profesional, tecnología, liderazgo, gestión de proyectos y habilidades blandas. Todos nuestros cursos están diseñados por expertos en la industria."
  },
  {
    question: "¿Cómo funcionan las clases online?",
    answer: "Las clases se imparten a través de nuestra plataforma virtual, con sesiones en vivo y contenido pregrabado. Tendrás acceso a materiales de estudio, foros de discusión y sesiones de consulta con los instructores."
  },
  {
    question: "¿Cuál es la duración de los cursos?",
    answer: "La duración varía según el curso, desde programas cortos de 4 semanas hasta certificaciones completas de 3-6 meses. Cada curso especifica su duración en la descripción del programa."
  },
  {
    question: "¿Otorgan certificados al finalizar los cursos?",
    answer: "Sí, al completar satisfactoriamente cualquier curso, recibirás un certificado digital avalado por TalentThree y nuestros socios académicos."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos tarjetas de crédito/débito, transferencias bancarias y PayPal. También ofrecemos opciones de pago en cuotas para programas seleccionados."
  }
];

const FaqItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void }> = ({
  item,
  isOpen,
  onClick
}) => {
  return (
    <motion.div
      className="border-b border-purple-200 py-4"
      initial={false}
    >
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-purple-900">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-purple-600" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-purple-900 mb-4 text-center">
            Preguntas Frecuentes
          </h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
            Si no encuentras lo que buscas, no dudes en contactarnos.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            ¿Tienes más preguntas? {' '}
            <a href="/contacto" className="text-purple-600 hover:text-purple-700 font-medium">
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;