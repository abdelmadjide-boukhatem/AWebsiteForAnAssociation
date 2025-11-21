import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, BookOpen, CheckCircle, Calendar, Search, Filter } from 'lucide-react';

export function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('lessons');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const tabs = [
    { id: 'lessons', name: 'الدروس و الملخصات', icon: BookOpen },
    { id: 'exercises', name: 'التمارين', icon: FileText },
    { id: 'exams', name: 'المواضيع و الاختبارات', icon: CheckCircle },
  ];

  const levels = ['الكل', 'ابتدائي', 'متوسط', 'ثانوي'];

  const resources = {
    lessons: [
      { title: 'درس الدوال العددية', subject: 'رياضيات', level: 'ثانوي', grade: '3 ثانوي', downloads: 1250, date: '2025-11-15', size: '2.5 MB' },
      { title: 'ملخص التفاعلات الكيميائية', subject: 'فيزياء', level: 'متوسط', grade: '4 متوسط', downloads: 890, date: '2025-11-14', size: '1.8 MB' },
      { title: 'قواعد اللغة الإنجليزية', subject: 'إنجليزية', level: 'ثانوي', grade: '2 ثانوي', downloads: 1100, date: '2025-11-13', size: '3.2 MB' },
      { title: 'درس النهايات والاستمرارية', subject: 'رياضيات', level: 'ثانوي', grade: '3 ثانوي', downloads: 950, date: '2025-11-12', size: '2.1 MB' },
      { title: 'درس الحركة والقوة', subject: 'فيزياء', level: 'متوسط', grade: '4 متوسط', downloads: 780, date: '2025-11-11', size: '1.5 MB' },
      { title: 'ملخص قواعد اللغة العربية', subject: 'لغة عربية', level: 'ابتدائي', grade: '5 ابتدائي', downloads: 1350, date: '2025-11-10', size: '1.2 MB' },
    ],
    exercises: [
      { title: 'تمارين محلولة في الهندسة', subject: 'رياضيات', level: 'متوسط', grade: '4 متوسط', downloads: 780, date: '2025-11-10', size: '2.8 MB' },
      { title: 'تطبيقات على المعادلات', subject: 'رياضيات', level: 'ثانوي', grade: '3 ثانوي', downloads: 920, date: '2025-11-09', size: '3.5 MB' },
      { title: 'تمارين الكهرباء', subject: 'فيزياء', level: 'متوسط', grade: '4 متوسط', downloads: 650, date: '2025-11-08', size: '2.0 MB' },
      { title: 'تدريبات القواعد اللغوية', subject: 'لغة عربية', level: 'متوسط', grade: '2 متوسط', downloads: 540, date: '2025-11-07', size: '1.7 MB' },
      { title: 'تمارين في الحساب الذهني', subject: 'رياضيات', level: 'ابتدائي', grade: '5 ابتدائي', downloads: 890, date: '2025-11-06', size: '1.3 MB' },
      { title: 'تطبيقات على الدوال', subject: 'رياضيات', level: 'ثانوي', grade: '3 ثانوي', downloads: 1020, date: '2025-11-05', size: '4.1 MB' },
    ],
    exams: [
      { title: 'موضوع بكالوريا 2024', subject: 'رياضيات', level: 'ثانوي', grade: '3 ثانوي', downloads: 2100, date: '2025-11-05', size: '3.8 MB' },
      { title: 'اختبار الفصل الأول', subject: 'فيزياء', level: 'متوسط', grade: '4 متوسط', downloads: 1450, date: '2025-11-04', size: '2.5 MB' },
      { title: 'امتحان تجريبي شامل', subject: 'علوم طبيعية', level: 'ثانوي', grade: '3 ثانوي', downloads: 1680, date: '2025-11-03', size: '3.2 MB' },
      { title: 'نموذج اختبار نهائي', subject: 'إنجليزية', level: 'ثانوي', grade: '2 ثانوي', downloads: 1320, date: '2025-11-02', size: '2.0 MB' },
      { title: 'موضوع شهادة التعليم المتوسط', subject: 'رياضيات', level: 'متوسط', grade: '4 متوسط', downloads: 1850, date: '2025-11-01', size: '3.0 MB' },
      { title: 'اختبار الفصل الثاني', subject: 'لغة عربية', level: 'ابتدائي', grade: '5 ابتدائي', downloads: 970, date: '2025-10-30', size: '1.8 MB' },
    ],
  };

  const filteredResources = resources[activeTab as keyof typeof resources].filter(resource => {
    const matchesSearch = resource.title.includes(searchQuery) || resource.subject.includes(searchQuery);
    const matchesLevel = selectedLevel === 'الكل' || resource.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

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
                مكتبة الموارد التعليمية
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              مكتبة شاملة من الدروس، التمارين والامتحانات لجميع المستويات، محدثة باستمرار لضمان أفضل جودة
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث عن موارد تعليمية..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-14 pl-6 py-5 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
              </div>

              {/* Level Filter */}
              <div className="relative">
                <Filter className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full md:w-56 pr-14 pl-6 py-5 bg-white rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer text-lg"
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 pb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all text-lg ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
              }`}
            >
              <tab.icon className="w-6 h-6" />
              <span>{tab.name}</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Resources List */}
      <section className="container mx-auto px-4 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + selectedLevel + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {filteredResources.length === 0 ? (
              <div className="text-center py-20">
                <FileText className="w-20 h-20 mx-auto mb-4 text-gray-300" />
                <p className="text-xl text-gray-500">لم يتم العثور على موارد</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredResources.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all group space-y-6"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-4">
                        <h3 className="text-2xl group-hover:text-blue-600 transition-colors leading-relaxed">
                          {resource.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
                            {resource.subject}
                          </span>
                          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
                            {resource.grade}
                          </span>
                          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">
                            {resource.size}
                          </span>
                        </div>
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 mr-4">
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-gray-600 pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span>{resource.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        <span>{resource.downloads} تحميل</span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg"
                      >
                        <Download className="w-5 h-5" />
                        <span>تحميل</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-all text-lg"
                      >
                        معاينة
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Results count */}
            {filteredResources.length > 0 && (
              <div className="text-center mt-8 text-gray-600">
                عرض {filteredResources.length} من أصل {resources[activeTab as keyof typeof resources].length} مورد
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        {filteredResources.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200"
            >
              عرض المزيد من الموارد
            </motion.button>
          </motion.div>
        )}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 text-center text-white shadow-2xl space-y-6"
        >
          <BookOpen className="w-20 h-20 mx-auto" />
          <h2 className="text-5xl">احصل على وصول كامل</h2>
          <p className="text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            اشترك الآن للحصول على وصول غير محدود لجميع الموارد التعليمية والمحتوى الحصري
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-blue-600 rounded-full shadow-xl hover:shadow-2xl transition-all text-xl"
          >
            اشترك الآن
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}