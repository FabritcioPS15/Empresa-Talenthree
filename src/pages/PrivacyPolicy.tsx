import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
      <motion.div 
        className="container mx-auto px-4 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-purple-900 mb-8 text-center">
          Política de Privacidad
        </h1>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              1. Información que Recopilamos
            </h2>
            <p className="mb-4">
              En TalentThree, recopilamos y procesamos la siguiente información:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Información de contacto (nombre, correo electrónico, teléfono)</li>
              <li>Información de perfil profesional</li>
              <li>Historial académico y certificaciones</li>
              <li>Datos de uso de la plataforma</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              2. Uso de la Información
            </h2>
            <p className="mb-4">
              Utilizamos su información personal para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proporcionar y mejorar nuestros servicios educativos</li>
              <li>Personalizar su experiencia de aprendizaje</li>
              <li>Comunicarnos con usted sobre actualizaciones y ofertas</li>
              <li>Procesar pagos y transacciones</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              3. Protección de Datos
            </h2>
            <p className="mb-4">
              Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales, incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encriptación de datos sensibles</li>
              <li>Acceso restringido a información personal</li>
              <li>Monitoreo regular de seguridad</li>
              <li>Copias de seguridad periódicas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              4. Sus Derechos
            </h2>
            <p className="mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar información inexacta</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              5. Contacto
            </h2>
            <p className="mb-4">
              Para cualquier consulta sobre nuestra política de privacidad, puede contactarnos en:
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p>Email: privacidad@talenthree.com</p>
              <p>Teléfono: (+51) 919746504</p>
              <p>Dirección: Av. Simón Bolívar 460, 401. Pueblo Libre</p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-sm text-gray-500 text-center">
          <p>Última actualización: Mayo 2024</p>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;