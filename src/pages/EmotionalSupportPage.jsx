
import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, Calendar, ExternalLink } from 'lucide-react';

const EmotionalSupportPage = () => {
  const resources = [
    {
      title: "Línea de Ayuda 24/7",
      description: "Servicio de apoyo emocional disponible las 24 horas.",
      contact: "0800-123-4567",
      icon: Phone
    },
    {
      title: "Consejería Universitaria",
      description: "Agenda una cita con nuestros consejeros profesionales.",
      contact: "Agendar Cita",
      icon: Calendar
    },
    {
      title: "Grupos de Apoyo",
      description: "Únete a grupos de estudiantes que comparten experiencias similares.",
      contact: "Ver Horarios",
      icon: MessageSquare
    }
  ];

  const supportTypes = [
    {
      title: "Ansiedad Académica",
      description: "Aprende a manejar el estrés relacionado con los estudios y exámenes.",
      tips: [
        "Establece metas realistas",
        "Practica técnicas de respiración",
        "Organiza tu tiempo de estudio",
        "Busca apoyo cuando lo necesites"
      ]
    },
    {
      title: "Adaptación Universitaria",
      description: "Estrategias para adaptarte mejor a la vida universitaria.",
      tips: [
        "Participa en actividades sociales",
        "Mantén contacto con familia y amigos",
        "Explora grupos de interés",
        "Establece una rutina diaria"
      ]
    },
    {
      title: "Manejo de Emociones",
      description: "Herramientas para gestionar tus emociones de manera saludable.",
      tips: [
        "Identifica tus emociones",
        "Practica el autocuidado",
        "Mantén un diario emocional",
        "Comparte con personas de confianza"
      ]
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="space-y-8"
    >
      <section className="text-center py-8 glassmorphism p-8 rounded-xl shadow-xl">
        <h1 className="text-4xl font-extrabold mb-4 gradient-text">Apoyo Emocional</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Encuentra el apoyo que necesitas para tu bienestar emocional. No estás solo en este camino.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            className="glassmorphism p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <resource.icon className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-semibold gradient-text">{resource.title}</h2>
            </div>
            <p className="text-foreground/70 mb-4">{resource.description}</p>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              {resource.contact}
            </Button>
          </motion.div>
        ))}
      </div>

      <section className="grid md:grid-cols-3 gap-6">
        {supportTypes.map((type, index) => (
          <motion.div
            key={index}
            className="glassmorphism p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-3 gradient-text">{type.title}</h2>
            <p className="text-foreground/70 mb-4">{type.description}</p>
            <ul className="space-y-2">
              {type.tips.map((tip, tipIndex) => (
                <li key={tipIndex} className="flex items-start gap-2 text-sm text-foreground/70">
                  <span className="text-primary">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      <section className="glassmorphism p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Recursos Adicionales</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Artículos y Guías",
              description: "Accede a nuestra biblioteca de recursos sobre bienestar emocional.",
              link: "Ver biblioteca"
            },
            {
              title: "Testimonios",
              description: "Conoce las experiencias de otros estudiantes que han buscado apoyo.",
              link: "Leer testimonios"
            }
          ].map((resource, index) => (
            <div key={index} className="flex items-start gap-4 bg-background/50 p-6 rounded-lg">
              <div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-foreground/70 mb-3">{resource.description}</p>
                <Button variant="link" className="p-0 text-primary hover:text-primary/80">
                  {resource.link} <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default EmotionalSupportPage;
