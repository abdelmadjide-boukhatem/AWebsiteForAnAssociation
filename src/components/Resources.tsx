import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, BookOpen, CheckCircle, Calendar } from 'lucide-react';

export function Resources() {
  const [activeTab, setActiveTab] = useState('lessons');

  const tabs = [
    { id: 'lessons', name: 'الدروس و الملخصات', icon: BookOpen },
    { id: 'exercises', name: 'التمارين', icon: FileText },
    { id: 'exams', name: 'المواضيع و الاختبارات', icon: CheckCircle },
  ];

  const resources = {
    lessons: [
      { title: 'درس الدوال العددية', subject: 'رياضيات', level: '3 ثانوي', downloads: 1250, date: '2025-11-15' },
      { title: 'ملخص التفاعلات الكيميائية', subject: 'فيزياء', level: '4 متوسط', downloads: 890, date: '2025-11-14' },
      { title: 'قواعد اللغة الإنجليزية', subject: 'إنجليزية', level: '2 ثانوي', downloads: 1100, date: '2025-11-13' },
      { title: 'درس النهايات والاستمرارية', subject: 'رياضيات', level: '3 ثانوي', downloads: 950, date: '2025-11-12' },
    ],
    exercises: [
      { title: 'تمارين محلولة في الهندسة', subject: 'رياضيات', level: '4 متوسط', downloads: 780, date: '2025-11-10' },
      { title: 'تطبيقات على المعادلات', subject: 'رياضيات', level: '3 ثانوي', downloads: 920, date: '2025-11-09' },
      { title: 'تمارين الكهرباء', subject: 'فيزياء', level: '4 متوسط', downloads: 650, date: '2025-11-08' },
      { title: 'تدريبات القواعد اللغوية', subject: 'لغة عربية', level: '2 متوسط', downloads: 540, date: '2025-11-07' },
    ],
    exams: [
      { title: 'موضوع بكالوريا 2024', subject: 'رياضيات', level: '3 ثانوي', downloads: 2100, date: '2025-11-05' },
      { title: 'اختبار الفصل الأول', subject: 'فيزياء', level: '4 متوسط', downloads: 1450, date: '2025-11-04' },
      { title: 'امتحان تجريبي شامل', subject: 'علوم طبيعية', level: '3 ثانوي', downloads: 1680, date: '2025-11-03' },
      { title: 'نموذج اختبار نهائي', subject: 'إنجليزية', level: '2 ثانوي', downloads: 1320, date: '2025-11-02' },
    ],
  };

  return (
    <section id="resources" className="py-24 relative bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              الموارد التعليمية
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            مكتبة شاملة من الدروس، التمارين والامتحانات لجميع المستويات
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Resources List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {resources[activeTab as keyof typeof resources].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {resource.subject}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {resource.level}
                      </span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{resource.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>{resource.downloads} تحميل</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  <span>تحميل المورد</span>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200"
          >
            عرض جميع الموارد
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
