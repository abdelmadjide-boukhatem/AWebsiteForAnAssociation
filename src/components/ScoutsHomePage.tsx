import { Link } from 'wouter';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Compass, BookOpen, Users, TreePine, Heart, Target, Award, ArrowLeft, Calendar, MapPin, UserPlus } from 'lucide-react';
import { motion } from 'motion/react';
import { activities, scoutValues } from '../lib/scouts-data';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ScoutsHomePage() {
  const recentActivities = activities.slice(0, 3);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'camping': return 'bg-green-100 text-green-700';
      case 'training': return 'bg-blue-100 text-blue-700';
      case 'environment': return 'bg-emerald-100 text-emerald-700';
      case 'community': return 'bg-purple-100 text-purple-700';
      case 'education': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'camping': return 'مخيمات';
      case 'training': return 'تكوين';
      case 'environment': return 'بيئة';
      case 'community': return 'مجتمع';
      case 'education': return 'تربوي';
      default: return category;
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-8 h-8" />;
      case 'Heart': return <Heart className="w-8 h-8" />;
      case 'BookOpen': return <BookOpen className="w-8 h-8" />;
      case 'TreePine': return <TreePine className="w-8 h-8" />;
      default: return <Compass className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1636247640621-c9850ad7e491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY291dHMlMjBjYW1waW5nJTIwbmF0dXJlfGVufDF8fHx8MTc2Mjg5NzEzNXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500 text-green-900 px-6 py-3 rounded-full mb-6">
              <Compass className="w-5 h-5" />
              <span>الكشافة الإسلامية الجزائرية - الفوج 93</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl mb-6">
              فوج الفتح مديونة
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-yellow-200">
              نبني جيلاً واعيًا، مسؤولاً ومبادرًا
            </p>
            <p className="text-xl mb-8 text-green-100">
              جمعية شبابية رائدة تجمع بين الكشافة، التربية، والتطوع
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/scouts/activities">
                <a>
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900 w-full sm:w-auto">
                    <TreePine className="w-5 h-5 ml-2" />
                    اكتشف أنشطتنا
                  </Button>
                </a>
              </Link>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white w-full sm:w-auto">
                <UserPlus className="w-5 h-5 ml-2" />
                انضم للفوج
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white border-b-2 border-green-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-green-700" />
              </div>
              <div className="text-3xl text-green-800 mb-1">+200</div>
              <div className="text-gray-600">عضو نشط</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TreePine className="w-8 h-8 text-yellow-700" />
              </div>
              <div className="text-3xl text-green-800 mb-1">+50</div>
              <div className="text-gray-600">نشاط سنوي</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-blue-700" />
              </div>
              <div className="text-3xl text-green-800 mb-1">12</div>
              <div className="text-gray-600">سنة خبرة</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-8 h-8 text-purple-700" />
              </div>
              <div className="text-3xl text-green-800 mb-1">+100</div>
              <div className="text-gray-600">مشروع مُنجز</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">من نحن؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              فوج الفتح مديونة هو جمعية شبابية تابعة للكشافة الإسلامية الجزائرية، 
              نعمل على تنمية قدرات الشباب وخدمة المجتمع من خلال ثلاثة فروع متكاملة
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/scouts/activities">
                <a>
                  <Card className="h-full border-2 hover:border-green-500 hover:shadow-xl transition-all cursor-pointer">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 text-white">
                        <TreePine className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-right">الكشافة الإسلامية</CardTitle>
                      <CardDescription className="text-right">
                        أنشطة كشفية متنوعة: مخيمات، تكوينات، مبادرات بيئية، وبرامج قيادية
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-right">
                      <Button variant="link" className="p-0 text-green-600">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        اكتشف المزيد
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/scouts/education">
                <a>
                  <Card className="h-full border-2 hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 text-white">
                        <BookOpen className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-right">الفرع التربوي</CardTitle>
                      <CardDescription className="text-right">
                        دعم أكاديمي للطلبة: مراجع دراسية، توجيه جامعي، ومعلومات عن التخصصات
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-right">
                      <Button variant="link" className="p-0 text-blue-600">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        استكشف الموارد
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/scouts/members">
                <a>
                  <Card className="h-full border-2 hover:border-purple-500 hover:shadow-xl transition-all cursor-pointer">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 text-white">
                        <Users className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-right">الأعضاء والمتطوعون</CardTitle>
                      <CardDescription className="text-right">
                        تعرّف على أعضائنا ومساهماتهم في خدمة الفوج والمجتمع
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-right">
                      <Button variant="link" className="p-0 text-purple-600">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        تعرف على الفريق
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">قيمنا الكشفية</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نلتزم بمجموعة من القيم الأصيلة التي توجه عملنا وأنشطتنا
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scoutValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-2 hover:border-green-400 transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
                      {getIcon(value.icon)}
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl mb-2 text-gray-900">آخر أنشطتنا</h2>
              <p className="text-gray-600">تابع أحدث فعالياتنا ومبادراتنا</p>
            </div>
            <Link href="/scouts/activities">
              <a>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  عرض الكل
                </Button>
              </a>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:shadow-xl transition-all">
                  {activity.imageUrl && (
                    <div className="h-48 overflow-hidden rounded-t-lg">
                      <ImageWithFallback
                        src={activity.imageUrl}
                        alt={activity.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={getCategoryColor(activity.category)}>
                        {getCategoryLabel(activity.category)}
                      </Badge>
                    </div>
                    <CardTitle className="line-clamp-2 text-right">{activity.title}</CardTitle>
                    <CardDescription className="line-clamp-3 text-right">
                      {activity.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-end gap-2">
                        <span>{activity.location}</span>
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <span>{activity.date.toLocaleDateString('ar')}</span>
                        <Calendar className="w-4 h-4" />
                      </div>
                      {activity.participants && (
                        <div className="flex items-center justify-end gap-2">
                          <span>{activity.participants} مشارك</span>
                          <Users className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Compass className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl mb-4">هل أنت مستعد لتكون جزءًا من التغيير؟</h2>
            <p className="text-xl mb-8 text-green-100">
              انضم إلى فوج الفتح مديونة واصنع الفرق في مجتمعك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900">
                <UserPlus className="w-5 h-5 ml-2" />
                سجل الآن
              </Button>
              <Link href="/scouts/contact">
                <a>
                  <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                    اتصل بنا
                  </Button>
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-2.5 rounded-full">
                  <Compass className="w-7 h-7 text-green-900" />
                </div>
                <div>
                  <div className="text-xl text-white">فوج الفتح مديونة</div>
                  <div className="text-sm text-yellow-300">الكشافة الإسلامية الجزائرية</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                بناء جيل واعٍ ومسؤول من خلال الكشافة والتربية والتطوع
              </p>
            </div>

            <div className="text-right">
              <h3 className="text-white mb-4">روابط سريعة</h3>
              <div className="space-y-2 text-sm">
                <Link href="/scouts/activities"><a className="block hover:text-yellow-300">الأنشطة</a></Link>
                <Link href="/scouts/education"><a className="block hover:text-yellow-300">الفرع التربوي</a></Link>
                <Link href="/scouts/members"><a className="block hover:text-yellow-300">الأعضاء</a></Link>
                <Link href="/scouts/contact"><a className="block hover:text-yellow-300">اتصل بنا</a></Link>
              </div>
            </div>

            <div className="text-right">
              <h3 className="text-white mb-4">تواصل معنا</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📍 مديونة، الجزائر العاصمة</p>
                <p>📞 0550 12 34 56</p>
                <p>✉️ contact@foujelfath.dz</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© ٢٠٢٤ فوج الفتح مديونة - الكشافة الإسلامية الجزائرية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
