
import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2 } from 'lucide-react';

const MindfulnessPage = () => {
  const exercises = [
    {
      title: "Meditación de la Respiración",
      duration: "10 minutos",
      description: "Enfócate en tu respiración para anclar tu mente al momento presente.",
      benefits: [
        "Reduce la ansiedad",
        "Mejora la concentración",
        "Aumenta la claridad mental"
      ]
    },
    {
      title: "Escaneo Corporal",
      duration: "15 minutos",
      description: "Recorre mentalmente tu cuerpo para liberar tensión y aumentar la conciencia corporal.",
      benefits: [
        "Reduce el estrés físico",
        "Mejora la calidad del sueño",
        "Aumenta la conexión mente-cuerpo"
      ]
    },
    {
      title: "Mindfulness en Actividades Diarias",
      duration: "5 minutos",
      description: "Practica la atención plena en actividades cotidianas como comer o caminar.",
      benefits: [
        "Desarrolla la presencia mental",
        "Reduce el piloto automático",
        "Aumenta el disfrute del momento"
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
        <h1 className="text-4xl font-extrabold mb-4 gradient-text">Ejercicios de Mindfulness</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Practica la atención plena para mejorar tu bienestar mental y emocional.
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise, index) => (
          <motion.div
            key={index}
            className="glassmorphism p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-2 gradient-text">{exercise.title}</h2>
            <p className="text-sm text-foreground/70 mb-2">{exercise.duration}</p>
            <p className="text-foreground/70 mb-4">{exercise.description}</p>
            <div className="space-y-2 mb-4">
              {exercise.benefits.map((benefit, benefitIndex) => (
                <div key={benefitIndex} className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <p className="text-sm text-foreground/70">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Play className="h-4 w-4 mr-2" /> Comenzar
              </Button>
              <Button variant="outline" size="icon">
                <Volume2 className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="glassmorphism p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Guía de Práctica</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Encuentra un Lugar Tranquilo",
              content: "Busca un espacio donde te sientas cómodo y sin distracciones.",
              icon: "🏡"
            },
            {
              title: "Postura Correcta",
              content: "Siéntate con la espalda recta pero relajada, hombros sueltos.",
              icon: "🧘‍♀️"
            },
            {
              title: "Establece una Rutina",
              content: "Practica a la misma hora cada día para crear un hábito.",
              icon: "⏰"
            },
            {
              title: "Sé Paciente",
              content: "El mindfulness es una habilidad que se desarrolla con el tiempo.",
              icon: "🌱"
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

export default MindfulnessPage;
