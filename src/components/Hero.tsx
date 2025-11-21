import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ArrowLeft, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-700">منصة تعليمية متكاملة</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                نحو مستقبل
              </span>
              <br />
              <span className="text-gray-800">تعليمي مشرق</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              منصة تعليمية شاملة لجميع الأطوار الدراسية، نوفر دروس منظمة، موارد تعليمية ثرية، وأساتذة متميزين لدعم رحلتك التعليمية
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <span>ابدأ التعلم الآن</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                اكتشف المزيد
              </motion.button>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 max-w-xl mx-auto lg:mx-0"
            >
              {[
                { number: '+5000', label: 'طالب' },
                { number: '+200', label: 'درس' },
                { number: '+50', label: 'أستاذ' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-2xl flex items-center justify-center"
              >
                <BookOpen className="w-10 h-10 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl shadow-2xl rotate-12"
              ></motion.div>

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-dashed border-blue-300 rounded-full opacity-30"
              ></motion.div>

              {/* Central Illustration */}
              <div className="relative z-10 w-full h-[500px] flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-80 h-80 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl shadow-2xl flex items-center justify-center"
                >
                  <div className="text-8xl">📚</div>
                </motion.div>
              </div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/3 left-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
