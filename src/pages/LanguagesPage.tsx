import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, BookOpen, Award, Video, FileText, Headphones, Star } from 'lucide-react';

export function LanguagesPage() {
  const [selectedLanguage, setSelectedLanguage] = useState(0);

  const languages = [
    {
      flag: '🇬🇧',
      name: 'اللغة الإنجليزية',
      description: 'اللغة الأكثر انتشاراً في العالم، أساسية للتواصل الدولي والعمل والسفر',
      levels: [
        { name: 'مبتدئ', lessons: 20, duration: '3 أشهر' },
        { name: 'متوسط', lessons: 15, duration: '3 أشهر' },
        { name: 'متقدم', lessons: 10, duration: '2 أشهر' },
      ],
      totalLessons: 45,
      students: 2500,
      rating: 4.9,
      color: 'from-blue-500 to-blue-600',
    },
    {
      flag: '🇫🇷',
      name: 'اللغة الفرنسية',
      description: 'لغة رسمية في الجزائر، ضرورية للدراسة والعمل في المجالات الأكاديمية والمهنية',
      levels: [
        { name: 'مبتدئ', lessons: 18, duration: '3 أشهر' },
        { name: 'متوسط', lessons: 16, duration: '3 أشهر' },
        { name: 'متقدم', lessons: 8, duration: '2 أشهر' },
      ],
      totalLessons: 42,
      students: 2200,
      rating: 4.8,
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      flag: '🇪🇸',
      name: 'اللغة الإسبانية',
      description: 'ثاني أكثر اللغات تحدثاً في العالم، مفتاح للتواصل مع أمريكا اللاتينية وإسبانيا',
      levels: [
        { name: 'مبتدئ', lessons: 20, duration: '3 أشهر' },
        { name: 'متوسط', lessons: 10, duration: '2 أشهر' },
      ],
      totalLessons: 30,
      students: 1500,
      rating: 4.7,
      color: 'from-orange-500 to-orange-600',
    },
    {
      flag: '🇩🇪',
      name: 'اللغة الألمانية',
      description: 'لغة العلم والتكنولوجيا، مهمة للدراسة والعمل في ألمانيا وأوروبا',
      levels: [
        { name: 'مبتدئ', lessons: 20, duration: '4 أشهر' },
      ],
      totalLessons: 20,
      students: 800,
      rating: 4.6,
      color: 'from-gray-600 to-gray-700',
    },
  ];

  const features = [
    { icon: Video, title: 'دروس فيديو تفاعلية', description: 'محتوى مرئي عالي الجودة' },
    { icon: Headphones, title: 'تمارين استماع', description: 'لتحسين النطق والفهم' },
    { icon: FileText, title: 'تمارين كتابية', description: 'لتقوية القواعد والإملاء' },
    { icon: Award, title: 'شهادات معتمدة', description: 'بعد إتمام كل مستوى' },
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <Globe className="w-16 h-16 text-blue-600" />
            </div>
            <h1 className="text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                تعليم اللغات الأجنبية
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              تعلم اللغات العالمية مع برامج تفاعلية ومدربين محترفين، وافتح آفاقاً جديدة للتواصل والفرص
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center space-y-4"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Languages Tabs */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {languages.map((language, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedLanguage(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all ${
                selectedLanguage === index
                  ? `bg-gradient-to-r ${language.color} text-white shadow-xl`
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
              }`}
            >
              <span className="text-2xl">{language.flag}</span>
              <span className="text-lg">{language.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Selected Language Details */}
        <motion.div
          key={selectedLanguage}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className={`bg-gradient-to-r ${languages[selectedLanguage].color} p-16 text-white`}>
            <div className="text-center space-y-6">
              <div className="text-9xl mb-8">{languages[selectedLanguage].flag}</div>
              <h2 className="text-5xl">{languages[selectedLanguage].name}</h2>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                {languages[selectedLanguage].description}
              </p>
            </div>
          </div>

          <div className="p-12 space-y-12">
            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-3xl">
                <BookOpen className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                <div className={`text-4xl bg-gradient-to-r ${languages[selectedLanguage].color} bg-clip-text text-transparent mb-2`}>
                  {languages[selectedLanguage].totalLessons}
                </div>
                <div className="text-gray-600 text-lg">درس تفاعلي</div>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-3xl">
                <Globe className="w-10 h-10 mx-auto mb-4 text-purple-600" />
                <div className={`text-4xl bg-gradient-to-r ${languages[selectedLanguage].color} bg-clip-text text-transparent mb-2`}>
                  {languages[selectedLanguage].levels.length}
                </div>
                <div className="text-gray-600 text-lg">مستوى</div>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-3xl">
                <Award className="w-10 h-10 mx-auto mb-4 text-pink-600" />
                <div className={`text-4xl bg-gradient-to-r ${languages[selectedLanguage].color} bg-clip-text text-transparent mb-2`}>
                  {languages[selectedLanguage].students}
                </div>
                <div className="text-gray-600 text-lg">طالب</div>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-3xl">
                <Star className="w-10 h-10 mx-auto mb-4 text-yellow-500" />
                <div className={`text-4xl bg-gradient-to-r ${languages[selectedLanguage].color} bg-clip-text text-transparent mb-2`}>
                  {languages[selectedLanguage].rating}
                </div>
                <div className="text-gray-600 text-lg">تقييم</div>
              </div>
            </div>

            {/* Levels */}
            <div className="space-y-8">
              <h3 className="text-4xl text-center">المستويات المتاحة</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {languages[selectedLanguage].levels.map((level, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-lg border-2 border-gray-100 space-y-6"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${languages[selectedLanguage].color} rounded-2xl flex items-center justify-center mx-auto`}>
                      <span className="text-3xl text-white">{index + 1}</span>
                    </div>
                    <h4 className="text-2xl text-center">{level.name}</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-gray-700 text-lg">
                        <span>عدد الدروس:</span>
                        <span className="font-bold">{level.lessons} درس</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-700 text-lg">
                        <span>المدة:</span>
                        <span className="font-bold">{level.duration}</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 bg-gradient-to-r ${languages[selectedLanguage].color} text-white rounded-2xl shadow-lg hover:shadow-xl transition-all text-lg`}
                    >
                      ابدأ المستوى
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 text-center text-white shadow-2xl space-y-6"
        >
          <h2 className="text-5xl">استثمر في مستقبلك</h2>
          <p className="text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            تعلم لغة جديدة وافتح أبواب الفرص في العمل والدراسة والسفر حول العالم
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-blue-600 rounded-full shadow-xl hover:shadow-2xl transition-all text-xl"
          >
            ابدأ التعلم اليوم
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}