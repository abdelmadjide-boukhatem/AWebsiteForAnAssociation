import React from 'react';
import { motion } from 'motion/react';
import { Users, BookOpen, Award, Clock } from 'lucide-react';

export function Stats() {
  const stats = [
    { icon: Users, number: '5000+', label: 'طالب نشط', color: 'from-blue-500 to-blue-600' },
    { icon: BookOpen, number: '200+', label: 'درس تفاعلي', color: 'from-purple-500 to-purple-600' },
    { icon: Award, number: '50+', label: 'أستاذ متميز', color: 'from-pink-500 to-pink-600' },
    { icon: Clock, number: '24/7', label: 'دعم متواصل', color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className={`text-4xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
