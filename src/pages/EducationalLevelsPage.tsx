import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Briefcase, CheckCircle, Clock, Users } from 'lucide-react';

export function EducationalLevelsPage() {
  const levels = [
    {
      icon: BookOpen,
      title: 'الطور الابتدائي',
      description: 'برنامج تعليمي مخصص للتلاميذ من السنة الأولى إلى الخامسة ابتدائي',
      subjects: ['رياضيات', 'لغة عربية', 'لغة فرنسية', 'علوم', 'تربية إسلامية', 'تاريخ و جغرافيا'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      stats: { lessons: 120, teachers: 15, students: 1800 },
    },
    {
      icon: GraduationCap,
      title: 'الطور المتوسط',
      description: 'محتوى شامل للسنوات من الأولى إلى الرابعة متوسط',
      subjects: ['رياضيات', 'فيزياء', 'علوم طبيعية', 'تاريخ و جغرافيا', 'لغة عربية', 'لغة فرنسية', 'لغة إنجليزية'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      stats: { lessons: 150, teachers: 20, students: 1500 },
    },
    {
      icon: Briefcase,
      title: 'الطور الثانوي',
      description: 'تحضير شامل لامتحان البكالوريا بجميع الشعب',
      subjects: ['علوم تجريبية', 'رياضيات', 'تقني رياضي', 'آداب و فلسفة', 'لغات أجنبية', 'علوم اقتصادية'],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      stats: { lessons: 180, teachers: 25, students: 1700 },
    },
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Page Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 space-y-6"
          >
            <h1 className="text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                الأقسام التعليمية
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              برامج تعليمية متكاملة لجميع المراحل الدراسية من الابتدائي إلى الثانوي، مصممة بعناية لتلبية احتياجات كل مرحلة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Educational Levels */}
      <section className="container mx-auto px-4 pb-24">
        <div className="space-y-20">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-3xl p-10 shadow-2xl space-y-6"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${level.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <level.icon className="w-10 h-10 text-white" />
                    </div>

                    <h2 className="text-4xl">{level.title}</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">{level.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 py-6">
                      <div className="text-center p-5 bg-gray-50 rounded-2xl">
                        <BookOpen className={`w-6 h-6 mx-auto mb-3 text-gradient-to-r ${level.color}`} />
                        <div className={`text-3xl bg-gradient-to-r ${level.color} bg-clip-text text-transparent mb-2`}>
                          {level.stats.lessons}
                        </div>
                        <div className="text-gray-600">درس</div>
                      </div>
                      <div className="text-center p-5 bg-gray-50 rounded-2xl">
                        <Users className={`w-6 h-6 mx-auto mb-3`} />
                        <div className={`text-3xl bg-gradient-to-r ${level.color} bg-clip-text text-transparent mb-2`}>
                          {level.stats.teachers}
                        </div>
                        <div className="text-gray-600">أستاذ</div>
                      </div>
                      <div className="text-center p-5 bg-gray-50 rounded-2xl">
                        <GraduationCap className={`w-6 h-6 mx-auto mb-3`} />
                        <div className={`text-3xl bg-gradient-to-r ${level.color} bg-clip-text text-transparent mb-2`}>
                          {level.stats.students}
                        </div>
                        <div className="text-gray-600">طالب</div>
                      </div>
                    </div>

                    {/* Subjects */}
                    <div className="space-y-4">
                      <h3 className="text-2xl">المواد الدراسية:</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {level.subjects.map((subject, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-gray-700 text-lg"
                          >
                            <CheckCircle className={`w-5 h-5 text-green-500 flex-shrink-0`} />
                            <span>{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-5 bg-gradient-to-r ${level.color} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all text-xl`}
                    >
                      استكشف الدروس والموارد
                    </motion.button>
                  </motion.div>
                </div>

                {/* Illustration */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className={`relative w-full h-[450px] ${level.bgColor} rounded-3xl flex items-center justify-center shadow-2xl`}
                  >
                    <div className="text-9xl">
                      {index === 0 ? '📚' : index === 1 ? '🎓' : '🎯'}
                    </div>
                    <div className={`absolute top-5 right-5 w-16 h-16 bg-gradient-to-br ${level.color} rounded-xl opacity-50`}></div>
                    <div className={`absolute bottom-5 left-5 w-20 h-20 bg-gradient-to-br ${level.color} rounded-2xl opacity-30`}></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 text-center text-white shadow-2xl space-y-6"
        >
          <h2 className="text-5xl">هل أنت مستعد للبدء؟</h2>
          <p className="text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            انضم إلى آلاف الطلاب الذين يتعلمون معنا وابدأ رحلتك التعليمية اليوم
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-blue-600 rounded-full shadow-xl hover:shadow-2xl transition-all text-xl"
          >
            ابدأ الآن مجاناً
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}