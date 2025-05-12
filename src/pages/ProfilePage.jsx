
import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, School, Calendar } from 'lucide-react';
import { pageVariants, pageTransition } from '@/lib/animations';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const ProfilePage = () => {
  const userProfile = {
    name: "Usuario Ejemplo",
    email: "usuario@ejemplo.com",
    university: "Universidad Nacional",
    joinDate: "2024",
    avatar: "UE"
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="space-y-8"
    >
      <section className="glassmorphism p-8 rounded-xl shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Avatar className="h-32 w-32">
            <AvatarFallback className="text-3xl">{userProfile.avatar}</AvatarFallback>
          </Avatar>
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl font-bold gradient-text">{userProfile.name}</h1>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-foreground/70">
                <Mail className="h-5 w-5" />
                <span>{userProfile.email}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <School className="h-5 w-5" />
                <span>{userProfile.university}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <Calendar className="h-5 w-5" />
                <span>Miembro desde {userProfile.joinDate}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="glassmorphism p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 gradient-text">Progreso</h2>
          <div className="space-y-4">
            <div className="bg-background/50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Sesiones de Mindfulness</h3>
              <div className="h-2 bg-background rounded-full">
                <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              </div>
              <p className="text-sm text-foreground/70 mt-2">15 sesiones completadas</p>
            </div>
            <div className="bg-background/50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Ejercicios de Respiración</h3>
              <div className="h-2 bg-background rounded-full">
                <div className="h-full w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              </div>
              <p className="text-sm text-foreground/70 mt-2">8 ejercicios completados</p>
            </div>
          </div>
        </section>

        <section className="glassmorphism p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 gradient-text">Actividad Reciente</h2>
          <div className="space-y-4">
            {[
              { title: "Sesión de meditación", date: "Hace 2 días", icon: "🧘" },
              { title: "Chat con asistente", date: "Hace 3 días", icon: "💬" },
              { title: "Ejercicio de respiración", date: "Hace 5 días", icon: "🫁" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 bg-background/50 p-4 rounded-lg">
                <span className="text-2xl">{activity.icon}</span>
                <div>
                  <h3 className="font-medium">{activity.title}</h3>
                  <p className="text-sm text-foreground/70">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
