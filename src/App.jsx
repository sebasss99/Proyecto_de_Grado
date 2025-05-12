
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Layout from '@/components/layout';
import HomePage from '@/pages/HomePage';
import ChatbotPage from '@/pages/ChatbotPage';
import HelpPage from '@/pages/HelpPage';
import ProfilePage from '@/pages/ProfilePage';
import StressManagementPage from '@/pages/StressManagementPage';
import MindfulnessPage from '@/pages/MindfulnessPage';
import EmotionalSupportPage from '@/pages/EmotionalSupportPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/ayuda" element={<HelpPage />} />
            <Route path="/perfil" element={<ProfilePage />} />
            <Route path="/estres" element={<StressManagementPage />} />
            <Route path="/mindfulness" element={<MindfulnessPage />} />
            <Route path="/apoyo" element={<EmotionalSupportPage />} />
          </Routes>
        </Layout>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
