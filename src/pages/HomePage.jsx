
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { pageVariants, pageTransition } from '@/lib/animations';

const HomePage = () => {
  const { toast } = useToast();
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="space-y-8"
    >
      <section className="text-center py-12 glassmorphism p-8 rounded-xl shadow-xl">
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Bienvenido a BienestarEstudiantil
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Tu espacio seguro para cuidar tu salud mental. Encuentra apoyo, recursos y herramientas para navegar la vida universitaria.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => toast({ title: "¡Explora la app!", description: "Descubre todas las funcionalidades que tenemos para ti."})}
          >
            Comenzar a Explorar
          </Button>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <motion.div 
          className="glassmorphism p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ y: -5 }}
        >
          <h2 className="text-2xl font-semibold mb-3 gradient-text">Chatbot Amigable</h2>
          <p className="text-foreground/70 mb-4">
            Conversa con nuestro asistente virtual para expresar tus emociones, obtener consejos rápidos o simplemente desahogarte.
          </p>
          <Button variant="outline" asChild className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors duration-300">
            <Link to="/chatbot">Ir al Chatbot <MessageSquare className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>
        <motion.div 
          className="glassmorphism p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ y: -5 }}
        >
          <h2 className="text-2xl font-semibold mb-3 gradient-text">Recursos de Ayuda</h2>
          <p className="text-foreground/70 mb-4">
            Accede a una biblioteca de recursos, desde técnicas de manejo de estrés hasta información de contacto profesional.
          </p>
          <Button variant="outline" asChild className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-300">
            <Link to="/ayuda">Ver Recursos <HelpCircle className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </section>
      
      <section className="glassmorphism p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 gradient-text">¿Cómo podemos ayudarte?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { title: "Manejo del Estrés", description: "Aprende técnicas efectivas para reducir el estrés académico y personal.", icon: "🧘", path: "/estres" },
            { title: "Ejercicios de Mindfulness", description: "Practica la atención plena para mejorar tu concentración y bienestar.", icon: "🧠", path: "/mindfulness" },
            { title: "Apoyo Emocional", description: "Encuentra un oído amigo y recursos para momentos difíciles.", icon: "❤️", path: "/apoyo" },
          ].map((item, index) => (
            <motion.div 
              key={item.title} 
              className="p-4 border border-primary/20 rounded-lg hover:bg-primary/5 dark:hover:bg-secondary/20 transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index + 0.8 }}
              onClick={() => window.location.href = item.path}
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary-foreground/90 mb-1">{item.title}</h3>
              <p className="text-sm text-foreground/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
