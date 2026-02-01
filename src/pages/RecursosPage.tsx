import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Mic, FileText, Youtube, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const RecursosPage: React.FC = () => {
    return (
        <>
            <SEO
                title="Recursos | TYX"
                description="Accede a contenido de valor, artículos, podcasts y materiales descargables para potenciar tu crecimiento."
            />

            <div className="pt-20 pb-16 bg-white dark:bg-gray-900">
                <div className="container-custom">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Recursos para tu <span className="text-primary-600">Crecimiento</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Herramientas, conocimientos e inspiración para impulsar tu carrera y organización.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Blog */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all"
                        >
                            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                                <BookOpen size={28} />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">Blog TYX</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Artículos sobre tendencias en gestión del talento, liderazgo y desarrollo organizacional.
                            </p>
                            <Link to="/blog" className="inline-flex items-center font-bold text-primary-600 hover:text-primary-700">
                                Leer artículos <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </motion.div>

                        {/* Podcast */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all"
                        >
                            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                                <Mic size={28} />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">Podcast</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Conversaciones con expertos sobre el futuro del trabajo y el capital humano.
                            </p>
                            <Link to="/podcast" className="inline-flex items-center font-bold text-primary-600 hover:text-primary-700">
                                Escuchar episodios <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </motion.div>

                        {/* Descargables */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all"
                        >
                            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                                <FileText size={28} />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">Descargables</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Guías, plantillas y ebooks gratuitos para aplicar en tu día a día profesional.
                            </p>
                            <Link to="/descargables" className="inline-flex items-center font-bold text-primary-600 hover:text-primary-700">
                                Ver materiales <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </motion.div>

                        {/* YouTube */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all"
                        >
                            <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6 text-red-600 dark:text-red-400">
                                <Youtube size={28} />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">Canal de YouTube</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Webinars, clases maestras y contenido audiovisual educativo.
                            </p>
                            <a href="https://youtube.com/@talenthree-do" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-primary-600 hover:text-primary-700">
                                Visitar canal <ArrowRight size={18} className="ml-2" />
                            </a>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default RecursosPage;
