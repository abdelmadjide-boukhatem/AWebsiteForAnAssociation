import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Briefcase } from 'lucide-react';

export function EducationalLevels() {
  const levels = [
    {
      icon: BookOpen,
      title: 'الطور الابتدائي',
      description: 'برنامج تعليمي مخصص للتلاميذ من السنة الأولى إلى الخامسة ابتدائي',
      subjects: ['رياضيات', 'لغة عربية', 'لغة فرنسية', 'علوم', 'تربية إسلامية'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: GraduationCap,
      title: 'الطور المتوسط',
      description: 'محتوى شامل للسنوات من الأولى إلى الرابعة متوسط',
      subjects: ['رياضيات', 'فيزياء', 'علوم طبيعية', 'تاريخ و جغرافيا', 'لغات'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Briefcase,
      title: 'الطور الثانوي',
      description: 'تحضير شامل لامتحان البكالوريا بجميع الشعب',
      subjects: ['علوم تجريبية', 'رياضيات', 'تقني رياضي', 'آداب و فلسفة', 'لغات أجنبية'],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
    },
  ];

  return (
    <section id="levels" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              الأقسام التعليمية
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            برامج تعليمية متكاملة لجميع المراحل الدراسية
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Background Decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${level.bgColor} rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${level.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <level.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl mb-3">{level.title}</h3>
                <p className="text-gray-600 mb-6">{level.description}</p>

                <div className="space-y-2 mb-6">
                  {level.subjects.map((subject, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${level.color} rounded-full`}></div>
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 bg-gradient-to-r ${level.color} text-white rounded-xl shadow-lg hover:shadow-xl transition-all`}
                >
                  استكشف الدروس
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
