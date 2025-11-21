import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Star, Users, GraduationCap, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function TeachersPage() {
  const [filter, setFilter] = useState('all');

  const teachers = [
    {
      name: 'د. أحمد بن سالم',
      subject: 'الرياضيات',
      level: 'ثانوي',
      experience: '15 سنة خبرة',
      rating: 4.9,
      students: 1200,
      lessons: 250,
      specialization: 'متخصص في الطور الثانوي والتحضير للبكالوريا',
      qualifications: ['دكتوراه في الرياضيات', 'مؤطر بكالوريا لمدة 10 سنوات', 'خبير في الدوال والهندسة'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'أ. فاطمة الزهراء',
      subject: 'الفيزياء',
      level: 'ثانوي',
      experience: '12 سنة خبرة',
      rating: 4.8,
      students: 980,
      lessons: 220,
      specialization: 'متخصصة في الفيزياء والكيمياء للبكالوريا',
      qualifications: ['ماجستير في الفيزياء', 'مدربة معتمدة', 'خبيرة في الكهرباء والميكانيك'],
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'د. محمد الأمين',
      subject: 'اللغة الإنجليزية',
      level: 'جميع الأطوار',
      experience: '10 سنوات خبرة',
      rating: 4.9,
      students: 1500,
      lessons: 300,
      specialization: 'خبير في تعليم اللغة الإنجليزية والتحضير للامتحانات الدولية',
      qualifications: ['دكتوراه في اللغة الإنجليزية', 'شهادة TESOL', 'مدرب معتمد من Cambridge'],
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'أ. سارة بن عمر',
      subject: 'العلوم الطبيعية',
      level: 'متوسط',
      experience: '8 سنوات خبرة',
      rating: 4.7,
      students: 850,
      lessons: 180,
      specialization: 'متخصصة في علوم الطبيعة والحياة للطور المتوسط',
      qualifications: ['ماجستير في البيولوجيا', 'مكونة معتمدة', 'خبيرة في البيئة والوراثة'],
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'د. يوسف كريم',
      subject: 'الفلسفة',
      level: 'ثانوي',
      experience: '13 سنة خبرة',
      rating: 4.9,
      students: 750,
      lessons: 200,
      specialization: 'متخصص في الفلسفة والمقالة الفلسفية',
      qualifications: ['دكتوراه في الفلسفة', 'باحث في الفلسفة المعاصرة', 'مؤطر للبكالوريا'],
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    {
      name: 'أ. نادية حسين',
      subject: 'اللغة الفرنسية',
      level: 'جميع الأطوار',
      experience: '11 سنة خبرة',
      rating: 4.8,
      students: 1100,
      lessons: 260,
      specialization: 'خبيرة في تعليم اللغة الفرنسية وإعداد الامتحانات',
      qualifications: ['ماجستير في الأدب الفرنسي', 'شهادة DELF/DALF', 'مدربة معتمدة'],
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
    },
  ];

  const filters = [
    { id: 'all', name: 'الكل' },
    { id: 'ابتدائي', name: 'ابتدائي' },
    { id: 'متوسط', name: 'متوسط' },
    { id: 'ثانوي', name: 'ثانوي' },
  ];

  const filteredTeachers = filter === 'all' 
    ? teachers 
    : teachers.filter(t => t.level === filter || t.level === 'جميع الأطوار');

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
                طاقمنا التربوي المتميز
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              أساتذة ذوو خبرة واسعة ومؤهلات عالية في مختلف التخصصات، ملتزمون بدعم نجاح كل طالب
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 pb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((f) => (
            <motion.button
              key={f.id}
              onClick={() => setFilter(f.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full transition-all text-lg ${
                filter === f.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
              }`}
            >
              {f.name}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTeachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Header with Avatar */}
              <div className="relative h-52 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                <div className="relative w-36 h-36 rounded-3xl overflow-hidden ring-4 ring-white shadow-xl group-hover:scale-110 transition-transform">
                  <ImageWithFallback
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div className="text-center space-y-3">
                  <h3 className="text-2xl">{teacher.name}</h3>
                  <div className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                    {teacher.subject}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{teacher.specialization}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(teacher.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-gray-700 mr-2">({teacher.rating})</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-4 bg-gray-50 rounded-2xl">
                    <Award className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <div className="text-sm text-gray-600 leading-relaxed">{teacher.experience}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-2xl">
                    <Users className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                    <div className="text-sm text-gray-600">{teacher.students} طالب</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-2xl">
                    <BookOpen className="w-6 h-6 mx-auto mb-2 text-pink-600" />
                    <div className="text-sm text-gray-600">{teacher.lessons} درس</div>
                  </div>
                </div>

                {/* Qualifications */}
                <div className="space-y-3">
                  <h4 className="text-gray-700">المؤهلات:</h4>
                  <div className="space-y-3">
                    {teacher.qualifications.map((qual, i) => (
                      <div key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{qual}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all text-lg"
                >
                  عرض الملف الشخصي
                </motion.button>
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
          <GraduationCap className="w-20 h-20 mx-auto" />
          <h2 className="text-5xl">هل أنت أستاذ مؤهل؟</h2>
          <p className="text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            انضم إلى فريقنا وساهم في بناء مستقبل الأجيال القادمة وصنع فرق حقيقي في حياة الطلاب
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-blue-600 rounded-full shadow-xl hover:shadow-2xl transition-all text-xl"
          >
            قدّم طلبك الآن
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}