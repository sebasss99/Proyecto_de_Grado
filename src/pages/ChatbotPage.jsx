
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/components/ui/use-toast';
import { pageVariants, pageTransition } from '@/lib/animations';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! Soy tu asistente virtual. ¿Cómo te sientes hoy?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const { toast } = useToast();

  const handleSend = () => {
    if (input.trim() === '') return;
    const newMessage = { id: messages.length + 1, text: input, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = { id: messages.length + 2, text: "Entiendo. Cuéntame más sobre eso.", sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botResponse]);
      toast({ title: "Nuevo mensaje del bot", description: "El asistente virtual ha respondido." });
    }, 1000);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="flex flex-col h-[calc(100vh-200px)] max-h-[700px] glassmorphism rounded-xl shadow-xl overflow-hidden"
    >
      <div className="p-4 border-b border-border">
        <h1 className="text-2xl font-semibold gradient-text text-center">Chat con Asistente Virtual</h1>
      </div>
      <ScrollArea className="flex-grow p-4 space-y-4">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-end space-x-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}
          >
            {msg.sender === 'bot' && (
              <Avatar className="h-8 w-8">
                <AvatarFallback><Bot className="h-5 w-5 text-primary" /></AvatarFallback>
              </Avatar>
            )}
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow ${
                msg.sender === 'user'
                  ? 'bg-primary text-primary-foreground rounded-br-none'
                  : 'bg-secondary text-secondary-foreground rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
            {msg.sender === 'user' && (
              <Avatar className="h-8 w-8">
                <AvatarFallback><User className="h-5 w-5 text-muted-foreground" /></AvatarFallback>
              </Avatar>
            )}
          </motion.div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t border-border">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Escribe tu mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-grow focus-visible:ring-purple-500"
          />
          <Button onClick={handleSend} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatbotPage;
