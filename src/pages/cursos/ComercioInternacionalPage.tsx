import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ComercioInternacional from '../../medios/cursos/Comercio Internacional.png';

const WHATSAPP_NUMBER = '51960810996';

const ComercioInternacionalPage: React.FC = () => {
  const [form, setForm] = useState({ nombre: '', correo: '', telefono: '', acepta: false });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.nombre || !form.correo || !form.acepta) {
      setError('Por favor, completa los campos obligatorios y acepta el uso de tus datos.');
      return;
    }
    const mensaje =
      `¡Hola! Estoy interesado/a en el curso de Comercio Internacional.\n` +
      `Nombre: ${form.nombre}\n` +
      `Celular: ${form.telefono || '-'}\n` +
      `Correo: ${form.correo}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    setEnviado(true);
    setForm({ nombre: '', correo: '', telefono: '', acepta: false });
    setTimeout(() => setEnviado(false), 6000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero/banner imagen full ancho */}
      <div className="relative w-full h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src={ComercioInternacional}
          alt="Comercio Internacional"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ filter: 'brightness(0.65)' }}
        />
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-20">
          <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow-lg">ESTUDIA 6 MESES</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">Comercio internacional</h1>
          <h2 className="text-lg md:text-2xl text-white font-medium mb-4 drop-shadow">y obtén una doble certificación</h2>
          <span className="bg-white/80 text-green-700 px-3 py-1 rounded text-sm font-semibold shadow">Modalidad 100% virtual</span>
        </div>
      </div>
      <div className="container mx-auto px-0 md:px-4 pb-12">
        <div className="mt-6 mb-2 px-4">
          <Link 
            to="/cursos" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
          >
            <span className="mr-2">←</span>
            Volver a Cursos
          </Link>
        </div>
        {/* Sección superior: inserción laboral, video y formulario */}
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="md:w-2/3 w-full flex flex-col gap-4">
            <h2 className="text-lg md:text-xl font-semibold text-primary-600 mb-1">Rápida inserción laboral</h2>
            <p className="text-base md:text-lg font-bold text-primary-600 mb-2">
              El comercio exterior no se detiene, las oportunidades laborales tampoco.<br/>
              Fórmate hoy y sé parte del movimiento que conecta al Perú con el mundo.
            </p>
            {/* Video de YouTube */}
            <div className="w-full aspect-video bg-black rounded-xl overflow-hidden flex items-center justify-center mb-2">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/watch?v=dD5w6UMeT7g" 
                title="Video de Comercio Internacional"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          {/* Formulario */}
          <div className="md:w-1/3 w-full flex flex-col items-center justify-start">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-xs bg-primary-600 rounded-2xl shadow-lg p-6 flex flex-col gap-4 mx-auto"
            >
              <h3 className="text-2xl font-bold text-white mb-2 text-center">¡MATRÍCULA GRATIS!</h3>
              {enviado && (
                <div className="mb-2 p-3 rounded bg-green-100 text-green-800 text-center flex items-center justify-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  ¡Tu consulta fue enviada por WhatsApp!
                </div>
              )}
              {error && (
                <div className="mb-2 p-3 rounded bg-red-100 text-red-800 text-center">
                  {error}
                </div>
              )}
              <input
                type="text"
                name="nombre"
                placeholder="NOMBRES Y APELLIDOS *"
                value={form.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 font-medium"
                required
              />
              <input
                type="tel"
                name="telefono"
                placeholder="CELULAR"
                value={form.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 font-medium"
              />
              <input
                type="email"
                name="correo"
                placeholder="CORREO ELECTRÓNICO *"
                value={form.correo}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 font-medium"
                required
              />
              <label className="flex items-center gap-2 text-xs text-white mt-2">
                <input
                  type="checkbox"
                  name="acepta"
                  checked={form.acepta}
                  onChange={handleChange}
                  className="accent-primary-600"
                  required
                />
                Acepto el uso de mis datos
              </label>
              <button
                type="submit"
                className="w-full bg-white hover:bg-gray-100 text-primary-600 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center mt-2 text-lg"
              >
                <Send size={20} className="mr-2" />
                ENVIAR
              </button>
            </form>
          </div>
        </div>
        {/* Sección inferior: info detallada */}
        <div className="mt-12 px-2 md:px-8">
          <h2 className="text-xl md:text-2xl font-bold text-primary-600 mb-2">Las exportaciones crecen, y las empresas necesitan talento preparado.</h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 rounded mb-6"></div>
          <p className="text-gray-700 dark:text-gray-200 mb-6 text-base md:text-lg">
            El Programa de Comercio Internacional ha sido diseñado para brindar a los participantes los conocimientos y habilidades fundamentales en los procesos de importación y exportación, normativas aduaneras, logística global y negociación internacional.<br/><br/>
            Este programa está orientado tanto a estudiantes como a técnicos, profesionales y emprendedores que deseen insertarse o mejorar su desempeño en el dinámico sector del comercio exterior.
          </p>
          <h3 className="text-lg font-bold text-primary-600 mb-2">Ámbito laboral</h3>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 rounded mb-4"></div>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-200">
            <li>Empresas exportadoras</li>
            <li>Agencias de aduanas</li>
            <li>Operadores logísticos</li>
            <li>Emprendimientos que deseen acceder a mercados internacionales.</li>
          </ul>
          <h3 className="text-lg font-bold text-primary-600 mb-2">Beneficios</h3>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 rounded mb-4"></div>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-200">
            <li>Formación práctica enfocada en los procesos reales del comercio exterior.</li>
            <li>Acceso a clases en vivo y grabadas 100 % virtuales.</li>
            <li>Casos y simulaciones sobre operaciones de exportación e importación.</li>
            <li>Material digital actualizado y recursos complementarios.</li>
            <li>Asesoría de expertos con experiencia en comercio internacional.</li>
          </ul>
          <h3 className="text-lg font-bold text-primary-600 mb-2">Módulos</h3>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 rounded mb-4"></div>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-200">
            <li><b>Módulo 1:</b> Fundamentos del Comercio Internacional</li>
            <li><b>Módulo 2:</b> Normativa y Documentación Aduanera</li>
            <li><b>Módulo 3:</b> Logística y Transporte Internacional</li>
            <li><b>Módulo 4:</b> Técnicas de Negociación y Contratación Internacional</li>
            <li><b>Módulo 5:</b> Gestión de Riesgos y Medios de Pago Internacionales</li>
            <li><b>Módulo 6:</b> Plan de Exportación y Acceso a Mercados Extranjeros</li>
          </ul>

          {/* Certificación */}
          <h3 className="text-lg font-bold text-primary-600 mb-2">Certificación</h3>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 rounded mb-4"></div>
          <p className="text-gray-700 dark:text-gray-200 mb-2">
            Al culminar satisfactoriamente los 6 módulos, el participante obtendrá una <b>Doble Certificación</b>:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-200">
            <li>Certificado por <b>Talenthred</b>: Consultora especializada en gestión del talento humano y formación profesional.</li>
            <li>Certificado por el <b>Instituto Finney & Miller</b>: Centro de formación técnica y laboral con reconocimiento institucional.</li>
          </ul>

          {/* Requisitos */}
          <h3 className="text-lg font-bold text-primary-600 mb-2">Requisitos</h3>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 rounded mb-4"></div>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-200">
            <li>Dos fotos tamaño carnet en formato digital</li>
            <li>DNI en formato PDF o JPG</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComercioInternacionalPage; 