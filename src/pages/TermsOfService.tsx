import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
      <motion.div 
        className="container mx-auto px-4 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-purple-900 mb-8 text-center">
          Términos de Servicio
        </h1>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              1. Aceptación de los Términos
            </h2>
            <p className="mb-4">
              Al acceder y utilizar los servicios de TalentThree, usted acepta estar sujeto a estos términos de servicio. 
              Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              2. Servicios Educativos
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceso a cursos y materiales educativos</li>
              <li>Participación en sesiones en vivo</li>
              <li>Uso de recursos de aprendizaje</li>
              <li>Interacción con instructores y otros estudiantes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              3. Responsabilidades del Usuario
            </h2>
            <p className="mb-4">Como usuario de nuestra plataforma, usted se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proporcionar información precisa y actualizada</li>
              <li>Mantener la confidencialidad de su cuenta</li>
              <li>No compartir materiales del curso sin autorización</li>
              <li>Respetar los derechos de propiedad intelectual</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              4. Pagos y Reembolsos
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Los pagos deben realizarse según los términos establecidos</li>
              <li>Las solicitudes de reembolso serán evaluadas caso por caso</li>
              <li>Los descuentos y promociones están sujetos a condiciones específicas</li>
              <li>Los precios pueden estar sujetos a cambios sin previo aviso</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              5. Propiedad Intelectual
            </h2>
            <p className="mb-4">
              Todo el contenido proporcionado en la plataforma es propiedad de TalentThree o sus licenciantes.
              No está permitido copiar, distribuir o modificar el contenido sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              6. Limitación de Responsabilidad
            </h2>
            <p className="mb-4">
              TalentThree no será responsable por daños indirectos, incidentales o consecuentes
              que surjan del uso o la imposibilidad de usar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              7. Modificaciones a los Términos
            </h2>
            <p className="mb-4">
              Nos reservamos el derecho de modificar estos términos en cualquier momento.
              Los cambios entrarán en vigor inmediatamente después de su publicación en la plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              8. Contacto
            </h2>
            <p className="mb-4">
              Para cualquier consulta sobre nuestros términos de servicio:
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p>Email: legal@talenthree.com</p>
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

export default TermsOfService;