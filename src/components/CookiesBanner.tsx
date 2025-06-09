import React, { useState } from 'react';

const CookiesBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  if (!isVisible || localStorage.getItem('cookiesAccepted') === 'true') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra{' '}
          <a href="/privacidad" className="underline text-purple-400">Política de Privacidad</a>.
        </p>
        <button
          onClick={handleAccept}
          className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default CookiesBanner;