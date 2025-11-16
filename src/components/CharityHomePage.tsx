import { Link } from 'wouter';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Heart, Users, Leaf, TestTube, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function CharityHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-blue-100/50" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span>تواصل مع القضايا التي تهم</span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
              أحدث فرقًا،
              <br />
              <span className="text-green-600">معًا</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              انضم إلى مجتمعنا المخصص للعافية والمسؤولية الاجتماعية والوعي البيئي.
              شارك في التقييمات التفاعلية، وشارك تأثيرك، وألهم التغيير الإيجابي.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tests">
                <a>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                    <TestTube className="w-5 h-5 ml-2" />
                    ابدأ اختبارًا
                  </Button>
                </a>
              </Link>
              <Link href="/login">
                <a>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <ArrowRight className="w-5 h-5 ml-2" />
                    انضم للمجتمع
                  </Button>
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">مجالات التركيز</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اكتشف كيف يمكنك إحداث تأثير في ثلاثة مجالات أساسية للرفاهية المجتمعية
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 hover:border-red-200 transition-all hover:shadow-lg h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle>الصحة والعافية</CardTitle>
                  <CardDescription>
                    تعزيز الصحة الجسدية والنفسية من خلال التثقيف والدعم ومبادرات نمط الحياة الصحي
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• التوعية بالصحة النفسية</li>
                    <li>• برامج اللياقة البدنية</li>
                    <li>• التثقيف الغذائي</li>
                    <li>• ورش العمل الصحية</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-lg h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>الخدمات الاجتماعية</CardTitle>
                  <CardDescription>
                    دعم أفراد المجتمع من خلال العمل التطوعي والتعليم والبرامج الاجتماعية المتاحة
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• برامج الأمن الغذائي</li>
                    <li>• توجيه الشباب</li>
                    <li>• الدعم المجتمعي</li>
                    <li>• المبادرات التعليمية</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 hover:border-green-200 transition-all hover:shadow-lg h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>البيئة</CardTitle>
                  <CardDescription>
                    حماية كوكبنا من خلال الحفاظ على البيئة والممارسات المستدامة والتثقيف البيئي
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• حملات زراعة الأشجار</li>
                    <li>• تقليل النفايات</li>
                    <li>• الدعوة للطاقة النظيفة</li>
                    <li>• مشاريع الحفاظ</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Tests Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">قيّم تأثيرك</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                شارك في اختباراتنا التفاعلية لتقييم معرفتك واكتشف كيف يمكنك إحداث فرق أكبر
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="mb-2 text-gray-900">العافية</h3>
                  <p className="text-sm text-gray-600">٥ أسئلة</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-gray-900">التأثير الاجتماعي</h3>
                  <p className="text-sm text-gray-600">٥ أسئلة</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Leaf className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-gray-900">البيئة</h3>
                  <p className="text-sm text-gray-600">٥ أسئلة</p>
                </div>
              </div>
              <div className="text-center">
                <Link href="/tests">
                  <a>
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      <ArrowRight className="w-5 h-5 ml-2" />
                      ابدأ التقييم
                    </Button>
                  </a>
                </Link>
                <p className="text-sm text-gray-500 mt-4">لا حاجة للتسجيل لإجراء الاختبارات</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl mb-4">انضم إلى مجتمعنا</h2>
              <p className="text-lg mb-8 text-green-50">
                كن عضوًا لفتح الميزات الحصرية وتعزيز تأثيرك
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8 text-right">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Heart className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">شارك قصصك</h4>
                    <p className="text-sm text-green-50">انشر عن أنشطتك الخيرية وألهم الآخرين</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">أطلق المبادرات</h4>
                    <p className="text-sm text-green-50">أنشئ وقُد مشاريع مجتمعية مهمة</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">تواصل وتعاون</h4>
                    <p className="text-sm text-green-50">تواصل مع صانعي التغيير من ذوي التفكير المماثل</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <TestTube className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">تتبع تأثيرك</h4>
                    <p className="text-sm text-green-50">راقب مساهماتك وإنجازاتك</p>
                  </div>
                </div>
              </div>
              <Link href="/login">
                <a>
                  <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                    <ArrowRight className="w-5 h-5 ml-2" />
                    سجل الآن
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-gradient-to-br from-green-500 to-blue-500 p-2 rounded-lg">
              <Heart className="w-6 h-6 text-white" fill="white" />
            </div>
            <span className="text-xl text-white">مجتمع العطاء</span>
          </div>
          <p className="text-gray-400 mb-4">
            ربط الأشخاص المهتمين بالقضايا المهمة
          </p>
          <p className="text-sm text-gray-500">
            © ٢٠٢٤ مجتمع العطاء. بُني بالتعاطف والهدف.
          </p>
        </div>
      </footer>
    </div>
  );
}
