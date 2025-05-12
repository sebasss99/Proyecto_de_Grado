
import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '@/lib/animations';
import { Button } from '@/components/ui/button';

const StressManagementPage = () => {
  const techniques = [
    {
      title: "Respiración 4-7-8",
      description: "Inhala por 4 segundos, mantén por 7 segundos, exhala por 8 segundos.",
      steps: [
        "Siéntate en una posición cómoda",
        "Coloca la punta de la lengua detrás de los dientes superiores",
        "Exhala completamente por la boca",
        "Cierra la boca e inhala por la nariz durante 4 segundos",
        "Mantén la respiración durante 7 segundos",
        "Exhala completamente por la boca durante 8 segundos"
      ]
    },
    {
      title: "Relajación Muscular Progresiva",
      description: "Tensa y relaja sistemáticamente diferentes grupos musculares.",
      steps: [
        "Comienza con los dedos de los pies",
        "Tensa los músculos durante 5 segundos",
        "Relaja los músculos durante 10 segundos",
        "Avanza hacia arriba por todo el cuerpo",
        "Presta atención a la sensación de relajación"
      ]
    },
    {
      title: "Visualización Guiada",
      description: "Imagina un lugar tranquilo y seguro para reducir el estrés.",
      steps: [
        "Cierra los ojos y respira profundamente",
        "Imagina un lugar que te haga sentir en paz",
        "Observa los detalles de ese lugar",
        "Siente las sensaciones asociadas",
        "Permanece en ese lugar por 5-10 minutos"
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
        <h1 className="text-4xl font-extrabold mb-4 gradient-text">Manejo del Estrés</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Aprende técnicas efectivas para manejar el estrés académico y mantener tu bienestar emocional.
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techniques.map((technique, index) => (
          <motion.div
            key={index}
            className="glassmorphism p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-3 gradient-text">{technique.title}</h2>
            <p className="text-foreground/70 mb-4">{technique.description}</p>
            <div className="space-y-2">
              {technique.steps.map((step, stepIndex) => (
                <div key={stepIndex} className="flex items-start gap-2">
                  <span className="text-primary font-bold">{stepIndex + 1}.</span>
                  <p className="text-sm text-foreground/70">{step}</p>
                </div>
              ))}
            </div>
            <Button 
              className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Practicar Ahora
            </Button>
          </motion.div>
        ))}
      </div>

      <section className="glassmorphism p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Consejos Adicionales</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Organización del Tiempo",
              content: "Establece horarios realistas y toma descansos regulares para mantener un equilibrio saludable.",
              icon: "⏰"
            },
            {
              title: "Actividad Física",
              content: "Incorpora ejercicio regular en tu rutina, incluso una caminata corta puede ayudar a reducir el estrés.",
              icon: "🏃‍♂️"
            },
            {
              title: "Alimentación Saludable",
              content: "Mantén una dieta balanceada y evita el exceso de cafeína cuando te sientas estresado.",
              icon: "🥗"
            },
            {
              title: "Descanso Adecuado",
              content: "Prioriza un buen descanso nocturno, apuntando a 7-9 horas de sueño por noche.",
              icon: "😴"
            }
          ].map((tip, index) => (
            <div key={index} className="flex items-start gap-4 bg-background/50 p-6 rounded-lg">
              <span className="text-4xl">{tip.icon}</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-foreground/70">{tip.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default StressManagementPage;
