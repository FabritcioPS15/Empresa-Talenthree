import React from 'react';

const DesarrolloOrganizacionalPage: React.FC = () => (
  <div className="bg-white min-h-screen w-full">
    {/* Banner superior */}
    <div
      className="relative w-full h-[350px] flex items-center justify-start bg-cover bg-center"
      style={{
        backgroundImage: `url('/src/medios/Asesoria/Asesoria y Consultoria - Desarrollo Organizacional.png')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 p-8 text-white max-w-xl">
        <div className="bg-green-400 text-xs px-3 py-1 rounded-full mb-2 inline-block font-semibold">ESTUDIA 4 MESES</div>
        <h1 className="text-4xl font-bold leading-tight mb-2">Desarrollo Organizacional</h1>
        <p className="text-lg mb-4">y obtén una doble certificación</p>
        <div className="flex items-center space-x-2">
          <div className="bg-white text-black px-3 py-1 rounded-full shadow flex items-center">
            <span className="font-semibold mr-2">¿Preguntas?</span>
            <span className="bg-green-400 text-xs px-2 py-0.5 rounded-full">¡Ya!</span>
          </div>
        </div>
      </div>
    </div>

    {/* Sección de inscripción y video */}
    <div className="max-w-6xl mx-auto mt-[-60px] flex flex-col md:flex-row gap-8 px-4">
      {/* Video */}
      <div className="flex-1 bg-white rounded-lg shadow-lg p-4 flex items-center justify-center">
        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video de Desarrollo Organizacional"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* Formulario */}
      <div className="flex-1 max-w-sm bg-[#7B2FF2] rounded-lg shadow-lg p-6 text-white self-start">
        <h2 className="text-xl font-bold mb-4 text-center">¡MATRÍCULA GRATIS!</h2>
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="NOMBRES Y APELLIDOS" className="p-2 rounded bg-white text-black placeholder-gray-500" />
          <input type="text" placeholder="CELULAR" className="p-2 rounded bg-white text-black placeholder-gray-500" />
          <input type="email" placeholder="CORREO ELECTRÓNICO" className="p-2 rounded bg-white text-black placeholder-gray-500" />
          <label className="flex items-center text-xs mt-2">
            <input type="checkbox" className="mr-2" />
            Acepto el uso de mis datos
          </label>
          <button type="button" className="bg-white text-[#7B2FF2] font-bold py-2 rounded mt-2">ENVIAR</button>
        </form>
      </div>
    </div>

    {/* Texto introductorio */}
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h3 className="text-base text-[#7B2FF2] font-semibold">Rápida inserción laboral</h3>
      <p className="text-sm font-bold text-[#1a1a1a] mt-2">
        El desarrollo organizacional no se detiene, las oportunidades laborales tampoco. Fórmate hoy y sé parte del movimiento que transforma las empresas en el Perú y el mundo.
      </p>
    </div>

    {/* Sección de descripción */}
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h4 className="text-[#7B2FF2] font-bold mb-2">Las empresas crecen, y necesitan talento preparado.</h4>
      <p className="text-gray-700 mb-4">
        El Programa de Desarrollo Organizacional está diseñado para brindar a los participantes los conocimientos y habilidades fundamentales en los procesos de gestión del cambio, cultura organizacional, liderazgo y mejora continua.
      </p>
      <p className="text-gray-700 mb-4">
        Este programa está orientado tanto a estudiantes como a técnicos, profesionales y emprendedores que deseen fortalecer o mejorar su desempeño en el dinámico sector del desarrollo organizacional.
      </p>
    </div>

    {/* Ámbito laboral */}
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h5 className="text-[#7B2FF2] font-bold mb-2">Ámbito laboral</h5>
      <ul className="list-disc list-inside text-gray-700">
        <li>Empresas públicas y privadas</li>
        <li>Consultoras organizacionales</li>
        <li>Áreas de recursos humanos y gestión del talento</li>
        <li>Proyectos de gestión del cambio y mejora continua</li>
      </ul>
    </div>

    {/* Beneficios */}
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h5 className="text-[#7B2FF2] font-bold mb-2">Beneficios</h5>
      <ul className="list-disc list-inside text-gray-700">
        <li>Formación práctica orientada a las necesidades reales del sector.</li>
        <li>Acceso a clases en vivo y grabadas con instructores expertos.</li>
        <li>Red de contactos y oportunidades de networking profesional.</li>
        <li>Materiales de estudio actualizados y acceso a recursos exclusivos.</li>
      </ul>
    </div>

    {/* Módulos */}
    <div className="max-w-4xl mx-auto mt-8 px-4 mb-12">
      <h5 className="text-[#7B2FF2] font-bold mb-2">Módulos</h5>
      <ul className="list-disc list-inside text-gray-700">
        <li>Gestión del cambio organizacional</li>
        <li>Cultura y clima organizacional</li>
        <li>Liderazgo y trabajo en equipo</li>
        <li>Mejora continua y gestión de la calidad</li>
      </ul>
    </div>
  </div>
);

export default DesarrolloOrganizacionalPage; 