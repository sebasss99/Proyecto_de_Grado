
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, MessageSquare, HelpCircle, Moon, Sun, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useTheme } from '@/components/theme-provider';

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio', icon: Home },
    { path: '/chatbot', label: 'Chatbot', icon: MessageSquare },
    { path: '/ayuda', label: 'Ayuda', icon: HelpCircle },
    { path: '/perfil', label: 'Perfil', icon: User },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-800 dark:via-purple-900 dark:to-gray-900 transition-colors duration-500">
      <header className="sticky top-0 z-50 shadow-md glassmorphism">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold gradient-text">
            BienestarEstudiantil
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant={location.pathname === item.path ? 'secondary' : 'ghost'}
                asChild
                className="transition-all duration-300 hover:scale-105"
              >
                <Link to={item.path} className="flex items-center space-x-2">
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
            <div className="flex items-center space-x-2">
              <Label htmlFor="theme-switch" className="text-sm font-medium text-foreground">
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Label>
              <Switch
                id="theme-switch"
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                aria-label="Cambiar tema"
              />
            </div>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glassmorphism p-4"
          >
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant={location.pathname === item.path ? 'secondary' : 'ghost'}
                  asChild
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full justify-start"
                >
                  <Link to={item.path} className="flex items-center space-x-2 py-2">
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              ))}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <Label htmlFor="mobile-theme-switch" className="text-sm font-medium text-foreground">
                  Modo {theme === 'light' ? 'Oscuro' : 'Claro'}
                </Label>
                <Switch
                  id="mobile-theme-switch"
                  checked={theme === 'dark'}
                  onCheckedChange={() => { toggleTheme(); setIsMobileMenuOpen(false); }}
                  aria-label="Cambiar tema"
                />
              </div>
            </nav>
          </motion.div>
        )}
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {React.cloneElement(children, { key: location.pathname })}
        </AnimatePresence>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground glassmorphism">
        © {new Date().getFullYear()} BienestarEstudiantil. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Layout;
