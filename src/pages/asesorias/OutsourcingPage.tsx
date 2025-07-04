import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from '../../contexts/CartContext';
import Outsourcing from '../../medios/Asesoria/Outsourcing.jpeg';

const OutsourcingPage: React.FC = () => {
  const { addToCart } = useCart();

  const handleContact = () => {
    window.location.href = '/contacto';
  };

  return (
    <>
      <Helmet>
        <title>Outsourcing - Recursos Humanos y Contabilidad | TalentThree</title>
        <meta name="description" content="Servicios integrales de outsourcing especializados en RRHH y contabilidad, optimizando costos y garantizando cumplimiento normativo." />
        <meta name="keywords" content="outsourcing, recursos humanos, contabilidad, servicios empresariales, gestión administrativa" />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-4xl font-bold mb-4">Recursos Humanos y Contabilidad</h1>
        <p className="text-lg text-gray-700">Esta es la página personalizada de Recursos Humanos y Contabilidad (Outsourcing).</p>
      </div>
    </>
  );
};

export default OutsourcingPage; 