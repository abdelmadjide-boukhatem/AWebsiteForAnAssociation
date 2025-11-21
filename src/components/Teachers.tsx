import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Teachers() {
  const teachers = [
    {
      name: 'د. أحمد بن سالم',
      subject: 'الرياضيات',
      experience: '15 سنة خبرة',
      rating: 4.9,
      students: 1200,
      specialization: 'متخصص في الطور الثانوي',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'أ. فاطمة الزهراء',
      subject: 'الفيزياء',
      experience: '12 سنة خبرة',
      rating: 4.8,
      students: 980,
      specialization: 'متخصصة في البكالوريا',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'د. محمد الأمين',
      subject: 'اللغة الإنجليزية',
      experience: '10 سنوات خبرة',
      rating: 4.9,
      students: 1500,
      specialization: 'خبير في التحضير للامتحانات',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'أ. سارة بن عمر',
      subject: 'العلوم الطبيعية',
      experience: '8 سنوات خبرة',
      rating: 4.7,
      students: 850,
      specialization: 'متخصصة في الطور المتوسط',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section id="teachers" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              طاقمنا التربوي
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            أساتذة متميزون ذوو خبرة واسعة في التعليم والتأطير
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all">
                  <ImageWithFallback
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm shadow-lg">
                  {teacher.subject}
                </div>
              </div>

              <div className="text-center mb-4">
                <h3 className="text-xl mb-1">{teacher.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{teacher.specialization}</p>
                
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(teacher.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-700 mr-1">({teacher.rating})</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>{teacher.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <BookOpen className="w-4 h-4 text-purple-600" />
                  <span>{teacher.students} طالب</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                عرض الملف الشخصي
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
