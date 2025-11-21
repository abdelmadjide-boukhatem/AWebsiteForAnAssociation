import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ArrowLeft, Sparkles, Users, Award, Clock, Globe } from 'lucide-react';

export function HomePage() {
  const stats = [
    { icon: Users, number: '5000+', label: 'طالب نشط', color: 'from-blue-500 to-blue-600' },
    { icon: BookOpen, number: '200+', label: 'درس تفاعلي', color: 'from-purple-500 to-purple-600' },
    { icon: Award, number: '50+', label: 'أستاذ متميز', color: 'from-pink-500 to-pink-600' },
    { icon: Clock, number: '24/7', label: 'دعم متواصل', color: 'from-orange-500 to-orange-600' },
  ];

  const features = [
    {
      icon: '📚',
      title: 'محتوى تعليمي شامل',
      description: 'دروس منظمة ومصممة بعناية لجميع المراحل الدراسية من الابتدائي إلى الثانوي',
    },
    {
      icon: '👨‍🏫',
      title: 'أساتذة متميزون',
      description: 'طاقم تربوي ذو خبرة واسعة ومؤهلات عالية في مختلف التخصصات',
    },
    {
      icon: '🌍',
      title: 'تعليم اللغات',
      description: 'برامج متكاملة لتعليم اللغات الأجنبية مع مستويات متدرجة',
    },
    {
      icon: '📝',
      title: 'موارد متنوعة',
      description: 'مكتبة ثرية من التمارين والامتحانات والملخصات للتحضير الجيد',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-right space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-100 rounded-full"
              >
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700">منصة تعليمية متكاملة</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl leading-tight"
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
                className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                منصة تعليمية شاملة لجميع الأطوار الدراسية، نوفر دروس منظمة، موارد تعليمية ثرية، وأساتذة متميزين لدعم رحلتك التعليمية نحو التفوق والنجاح
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
                  <span className="text-lg">ابدأ التعلم الآن</span>
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200 text-lg"
                >
                  اكتشف المزيد
                </motion.button>
              </motion.div>

              {/* Stats Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 pt-8 max-w-xl mx-auto lg:mx-0"
              >
                {[
                  { number: '+5000', label: 'طالب' },
                  { number: '+200', label: 'درس' },
                  { number: '+50', label: 'أستاذ' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
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
                  className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-2xl flex items-center justify-center"
                >
                  <BookOpen className="w-12 h-12 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl shadow-2xl rotate-12"
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
                    <div className="text-9xl">📚</div>
                  </motion.div>
                </div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute top-1/3 left-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-xl"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-5xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-5xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                لماذا Bilascent Academy؟
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم تجربة تعليمية متكاملة تجمع بين الجودة والاحترافية
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-16 text-center text-white shadow-2xl"
          >
            <h2 className="text-5xl mb-6">ابدأ رحلتك التعليمية اليوم</h2>
            <p className="text-2xl mb-10 opacity-90 leading-relaxed max-w-3xl mx-auto">
              انضم إلى آلاف الطلاب واستفد من محتوى تعليمي عالي الجودة
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-blue-600 rounded-full shadow-xl hover:shadow-2xl transition-all text-xl"
            >
              ابدأ الآن مجاناً
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
