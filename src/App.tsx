import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { EducationalLevelsPage } from './pages/EducationalLevelsPage';
import { LanguagesPage } from './pages/LanguagesPage';
import { TeachersPage } from './pages/TeachersPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'levels':
        return <EducationalLevelsPage />;
      case 'languages':
        return <LanguagesPage />;
      case 'teachers':
        return <TeachersPage />;
      case 'resources':
        return <ResourcesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50" dir="rtl">
      <Header isScrolled={isScrolled} currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
