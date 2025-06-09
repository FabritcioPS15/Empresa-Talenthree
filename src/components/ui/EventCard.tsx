import React, { useState, useMemo } from 'react';
import { Calendar, Clock, MapPin, X } from 'lucide-react';
import { SiGooglecalendar } from "react-icons/si";

export interface EventProps {
  id: string;
  title: string;
  startDateTime: string;
  endDateTime: string;
  location: string;
  image: string;
  description: string;
  isFeatured?: boolean;
  timeZone?: string;
  category?: string;
  price?: number;
  maxParticipants?: number;
  registrationLink?: string;
}

interface EventCardProps {
  event: EventProps;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [showCalendarOptions, setShowCalendarOptions] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Parsear fechas y validar
  const start = useMemo(() => new Date(event.startDateTime), [event.startDateTime]);
  const end = useMemo(() => new Date(event.endDateTime), [event.endDateTime]);
  const isDateValid = !isNaN(start.getTime()) && !isNaN(end.getTime());

  // Función para verificar si es el mismo día
  const isSameDay = useMemo(() => {
    if (!isDateValid) return false;
    return start.getFullYear() === end.getFullYear() &&
           start.getMonth() === end.getMonth() &&
           start.getDate() === end.getDate();
  }, [isDateValid, start, end]);

  // Formatear rango de fechas
  const formatDateRange = (start: Date, end: Date, timeZone?: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone 
    };
    
    const startStr = start.toLocaleDateString('es-ES', options);
    const endStr = end.toLocaleDateString('es-ES', options);

    if (startStr === endStr) return startStr;

    const startYear = start.toLocaleDateString('es-ES', { year: 'numeric', timeZone });
    const endYear = end.toLocaleDateString('es-ES', { year: 'numeric', timeZone });
    
    if (startYear !== endYear) return `${startStr} - ${endStr}`;

    const startMonth = start.toLocaleDateString('es-ES', { month: 'long', timeZone });
    const endMonth = end.toLocaleDateString('es-ES', { month: 'long', timeZone });
    
    return startMonth === endMonth 
      ? `${start.getDate()} - ${end.getDate()} de ${startMonth} de ${startYear}`
      : `${start.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', timeZone })} - ${end.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', timeZone })} de ${startYear}`;
  };

  // Formatear rango de horas
  const formatTimeRange = (start: Date, end: Date, timeZone?: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZone 
    };
    return `${start.toLocaleTimeString('es-ES', options)} - ${end.toLocaleTimeString('es-ES', options)}`;
  };

  // Calcular duración del evento
  const getDuration = (start: Date, end: Date): string => {
    const ms = end.getTime() - start.getTime();
    const weeks = Math.round(ms / (1000 * 60 * 60 * 24 * 7));
    if (weeks > 0) return `${weeks} semana${weeks > 1 ? 's' : ''}`;

    const days = Math.round(ms / (1000 * 60 * 60 * 24));
    if (days > 0) return `${days} día${days > 1 ? 's' : ''}`;

    const hours = Math.round(ms / (1000 * 60 * 60));
    return `${hours} hora${hours > 1 ? 's' : ''}`;
  };

  // Generar enlace para Google Calendar
  const generateGoogleCalendarLink = () => {
    try {
      const formatDate = (date: Date) => date.toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z';
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&` +
        `text=${encodeURIComponent(event.title)}&` +
        `dates=${formatDate(start)}/${formatDate(end)}&` +
        `details=${encodeURIComponent(event.description)}&` +
        `location=${encodeURIComponent(event.location)}` +
        (event.timeZone ? `&ctz=${event.timeZone}` : '');
    } catch {
      return '#';
    }
  };

  // Generar archivo ICS
  const handleDownloadICS = () => {
    try {
      const formatDate = (date: Date) => date.toISOString().replace(/[-:.]/g, '').slice(0, 15) + 'Z';
      
      const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        `DTSTART${event.timeZone ? `;TZID=${event.timeZone}` : ''}:${formatDate(start)}`,
        `DTEND${event.timeZone ? `;TZID=${event.timeZone}` : ''}:${formatDate(end)}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description}`,
        `LOCATION:${event.location}`,
        event.timeZone ? `X-WR-TIMEZONE:${event.timeZone}` : '',
        'END:VEVENT',
        'END:VCALENDAR'
      ].filter(l => l).join('\r\n');

      const blob = new Blob([icsContent], { type: 'text/calendar' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${event.title.replace(/ /g, '_')}.ics`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      alert('Error al generar el archivo ICS');
    }
  };

  if (!isDateValid) return null;

  return (
    <>
      {/* Tarjeta del Evento */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 transition-transform h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
            onError={(e) => (e.currentTarget.src = '/fallback.jpg')}
          />
          {event.isFeatured && (
            <div className="absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 rounded text-xs font-bold">
              Destacado
            </div>
          )}
        </div>

        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2 dark:text-white">
            {event.title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
            {event.description}
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Calendar size={16} className="mr-2 text-primary-600" />
              {formatDateRange(start, end, event.timeZone)}
            </div>

            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Clock size={16} className="mr-2 text-primary-600" />
              {isSameDay 
                ? formatTimeRange(start, end, event.timeZone)
                : getDuration(start, end)}
            </div>

            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <MapPin size={16} className="mr-2 text-primary-600" />
              <span className="line-clamp-1">{event.location}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-auto">
            <button
              onClick={() => setShowDetailsModal(true)}
              className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md text-center transition-colors"
            >
              Ver detalles
            </button>

            <div className="relative">
              <button
                onClick={() => setShowCalendarOptions(!showCalendarOptions)}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                Agendar evento
              </button>

              {showCalendarOptions && (
                <div className="absolute bottom-full w-full bg-white dark:bg-gray-800 rounded-md shadow-lg mb-2 border border-gray-200 dark:border-gray-700 z-10">
                  <a
                    href={generateGoogleCalendarLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-700 text-sm"
                  >
                    <SiGooglecalendar size={16} color='blue'/>
                    Google Calendar
                  </a>
                  <button
                    onClick={handleDownloadICS}
                    className="w-full text-left px-4 py-2 hover:bg-green-100 dark:hover:bg-gray-700 text-sm flex items-center gap-2"
                  >
                    <Calendar size={14} color='purple' />
                    Descargar ICS
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Detalles */}
      {showDetailsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover rounded-t-lg"
                onError={(e) => (e.currentTarget.src = '/fallback.jpg')}
              />
              <button
                onClick={() => setShowDetailsModal(false)}
                className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X size={20} />
              </button>
              {event.isFeatured && (
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Destacado
                </div>
              )}
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">{event.title}</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Fecha</h3>
                    <p className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary-600" />
                      {formatDateRange(start, end, event.timeZone)}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Horario</h3>
                    <p className="flex items-center gap-2">
                      <Clock size={16} className="text-primary-600" />
                      {isSameDay 
                        ? formatTimeRange(start, end, event.timeZone)
                        : getDuration(start, end)}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Ubicación</h3>
                    <p className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary-600" />
                      {event.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {event.category && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Categoría</h3>
                      <p>{event.category}</p>
                    </div>
                  )}
                  
                  {event.price !== undefined && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Precio</h3>
                      <p>{event.price === 0 ? 'Gratis' : `S/. ${event.price}`}</p>
                    </div>
                  )}

                  {event.maxParticipants && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Cupos</h3>
                      <p>{event.maxParticipants} participantes máximo</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Descripción</h3>
                <p className="whitespace-pre-line dark:text-gray-300">{event.description}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-6 rounded-md text-center transition-colors"
                  >
                    Registrarse
                  </a>
                )}
                
                <button
                  onClick={() => {
                    setShowDetailsModal(false);
                    setShowCalendarOptions(true);
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md flex items-center gap-2 transition-colors"
                >
                  <Calendar size={16} />
                  Agendar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;