
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { pageVariants, pageTransition } from '@/lib/animations';

const HelpPage = () => {
  const { toast } = useToast();
  const resources = [
    { 
      title: "Consejos para el Manejo del Estrés", 
      content: "Identifica tus factores estresantes, establece prioridades, practica técnicas de relajación como la respiración profunda, y asegúrate de dormir lo suficiente y alimentarte bien.",
      icon: "😌"
    },
    { 
      title: "Ejercicios de Respiración y Mindfulness", 
      content: "Dedica unos minutos al día a la respiración diafragmática: inhala profundamente por la nariz, siente cómo se expande tu abdomen, y exhala lentamente por la boca. Prueba apps de mindfulness guiado.",
      icon: "🧘‍♀️"
    },
    { 
      title: "Contacto con Profesionales", 
      content: "Si sientes que necesitas ayuda adicional, no dudes en buscar un profesional. Puedes contactar al servicio de consejería de tu universidad o buscar terapeutas especializados en salud mental estudiantil.",
      icon: "👩‍⚕️"
    },
    { 
      title: "Preguntas Frecuentes (FAQ)", 
      content: "¿Es normal sentirse abrumado en la universidad? Sí, es común. ¿Qué hago si un amigo necesita ayuda? Anímalo a buscar apoyo y acompáñalo en el proceso si es posible.",
      icon: "❓"
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
        <h1 className="text-4xl font-extrabold mb-4 gradient-text">Opciones de Ayuda</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Encuentra recursos y herramientas útiles para tu bienestar emocional y mental.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            className="glassmorphism p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-3">
              <span className="text-3xl mr-3">{resource.icon}</span>
              <h2 className="text-2xl font-semibold gradient-text">{resource.title}</h2>
            </div>
            <p className="text-foreground/70">{resource.content}</p>
            <Button 
              variant="link" 
              className="mt-3 text-purple-500 hover:text-pink-500"
              onClick={() => toast({ title: "Recurso útil", description: `Has explorado: ${resource.title}`})}
            >
              Saber más
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HelpPage;
