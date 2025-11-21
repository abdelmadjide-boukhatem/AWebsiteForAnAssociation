import React from 'react';
import { motion } from 'motion/react';
import { Globe, BookOpen, Award } from 'lucide-react';

export function Languages() {
  const languages = [
    {
      flag: '🇬🇧',
      name: 'اللغة الإنجليزية',
      levels: ['مبتدئ', 'متوسط', 'متقدم'],
      lessons: 45,
      color: 'from-blue-500 to-blue-600',
    },
    {
      flag: '🇫🇷',
      name: 'اللغة الفرنسية',
      levels: ['مبتدئ', 'متوسط', 'متقدم'],
      lessons: 42,
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      flag: '🇪🇸',
      name: 'اللغة الإسبانية',
      levels: ['مبتدئ', 'متوسط'],
      lessons: 30,
      color: 'from-orange-500 to-orange-600',
    },
    {
      flag: '🇩🇪',
      name: 'اللغة الألمانية',
      levels: ['مبتدئ'],
      lessons: 20,
      color: 'from-gray-600 to-gray-700',
    },
  ];

  const features = [
    { icon: Globe, title: 'دروس تفاعلية', description: 'محتوى تفاعلي مع تمارين عملية' },
    { icon: BookOpen, title: 'مستويات متعددة', description: 'من المبتدئ إلى المتقدم' },
    { icon: Award, title: 'شهادات معتمدة', description: 'احصل على شهادة إتمام المستوى' },
  ];

  return (
    <section id="languages" className="py-24 relative bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              تعليم اللغات الأجنبية
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            تعلم اللغات العالمية مع برامج تفاعلية ومدربين محترفين
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="text-6xl mb-4 text-center">{language.flag}</div>
              <h3 className="text-xl text-center mb-3">{language.name}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">عدد الدروس:</span>
                  <span className={`px-3 py-1 bg-gradient-to-r ${language.color} text-white rounded-full`}>
                    {language.lessons}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">المستويات المتاحة:</p>
                <div className="flex flex-wrap gap-2">
                  {language.levels.map((level, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 bg-gradient-to-r ${language.color} text-white rounded-xl shadow-lg hover:shadow-xl transition-all`}
              >
                ابدأ التعلم
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
