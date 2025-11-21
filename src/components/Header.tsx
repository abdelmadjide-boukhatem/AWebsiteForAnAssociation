import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, BookOpen } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ isScrolled, currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', page: 'home' },
    { name: 'الأقسام التعليمية', page: 'levels' },
    { name: 'اللغات', page: 'languages' },
    { name: 'الأساتذة', page: 'teachers' },
    { name: 'الموارد', page: 'resources' },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-md shadow-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Bilascent Academy
              </h1>
              <p className="text-xs text-gray-600">منصة التعلم المتكاملة</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-gray-700 hover:text-blue-600 transition-colors relative group ${
                  currentPage === item.page ? 'text-blue-600' : ''
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                    currentPage === item.page ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              تسجيل الدخول
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigation(item.page)}
                  className={`px-4 py-3 text-right rounded-lg transition-colors ${
                    currentPage === item.page
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
                تسجيل الدخول
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
