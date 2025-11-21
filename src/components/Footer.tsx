import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerLinks = {
    'روابط سريعة': [
      { name: 'الرئيسية', page: 'home' },
      { name: 'الأقسام التعليمية', page: 'levels' },
      { name: 'اللغات', page: 'languages' },
      { name: 'الأساتذة', page: 'teachers' },
      { name: 'الموارد', page: 'resources' },
    ],
    'الأقسام': [
      { name: 'الطور الابتدائي', page: 'levels' },
      { name: 'الطور المتوسط', page: 'levels' },
      { name: 'الطور الثانوي', page: 'levels' },
      { name: 'تعليم اللغات', page: 'languages' },
    ],
    'الدعم': [
      { name: 'مركز المساعدة', page: 'home' },
      { name: 'الأسئلة الشائعة', page: 'home' },
      { name: 'سياسة الخصوصية', page: 'home' },
      { name: 'شروط الاستخدام', page: 'home' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl">Bilascent Academy</h3>
                <p className="text-sm text-gray-400">منصة التعلم المتكاملة</p>
              </div>
            </motion.div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              منصة تعليمية شاملة تقدم محتوى تربوي منظم لجميع الأطوار التعليمية، مع أساتذة متميزين وموارد تعليمية ثرية.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>info@bilascent.academy</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-500" />
                <span dir="ltr">+213 555 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>الجزائر، العاصمة</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-lg mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-gray-400 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200 text-right"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-400 text-sm">
              © 2025 Bilascent Academy. جميع الحقوق محفوظة.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all hover:bg-gray-600`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
