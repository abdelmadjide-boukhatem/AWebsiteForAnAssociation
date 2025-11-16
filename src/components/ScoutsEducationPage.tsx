import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { BookOpen, Download, GraduationCap, FileText, MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { educationalResources, universityInfo } from '../lib/scouts-data';

export function ScoutsEducationPage() {
  const [activeTab, setActiveTab] = useState('resources');

  const getSubjectColor = (subject: string) => {
    if (subject.includes('رياضيات')) return 'bg-blue-100 text-blue-700';
    if (subject.includes('فيزياء')) return 'bg-purple-100 text-purple-700';
    if (subject.includes('فلسفة')) return 'bg-yellow-100 text-yellow-700';
    if (subject.includes('توجيه')) return 'bg-green-100 text-green-700';
    return 'bg-gray-100 text-gray-700';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="w-5 h-5" />;
      case 'video': return <FileText className="w-5 h-5" />;
      case 'article': return <BookOpen className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getUniversityTypeColor = (type: string) => {
    switch (type) {
      case 'science': return 'bg-blue-100 text-blue-700';
      case 'engineering': return 'bg-purple-100 text-purple-700';
      case 'medicine': return 'bg-red-100 text-red-700';
      case 'letters': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">الفرع التربوي والأكاديمي</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مكتب الجمعية - دعم أكاديمي شامل للطلبة من البكالوريا إلى الجامعة
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="resources">المراجع الدراسية</TabsTrigger>
            <TabsTrigger value="universities">دليل التخصصات الجامعية</TabsTrigger>
          </TabsList>

          {/* Educational Resources Tab */}
          <TabsContent value="resources">
            <div className="grid md:grid-cols-2 gap-6">
              {educationalResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={resource.level === 'bac' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}>
                          {resource.level === 'bac' ? 'بكالوريا' : 'جامعي'}
                        </Badge>
                        <div className="text-blue-600">
                          {getTypeIcon(resource.fileType)}
                        </div>
                      </div>
                      <CardTitle className="text-xl line-clamp-2 text-right">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-right">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Download className="w-4 h-4 ml-2" />
                            تحميل
                          </Button>
                          <Badge className={getSubjectColor(resource.subject)} variant="outline">
                            {resource.subject}
                          </Badge>
                        </div>
                        
                        {resource.downloadCount && (
                          <div className="text-sm text-gray-500 text-right">
                            تم التحميل {resource.downloadCount} مرة
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-3 text-blue-600" />
              <h3 className="text-xl mb-2 text-gray-900">هل تحتاج إلى مساعدة؟</h3>
              <p className="text-gray-600 mb-4">
                فريقنا التربوي جاهز لمساعدتك في تحضير امتحاناتك والتوجيه الأكاديمي
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                تواصل مع المكتب التربوي
              </Button>
            </div>
          </TabsContent>

          {/* Universities Tab */}
          <TabsContent value="universities">
            <div className="grid gap-6">
              {universityInfo.map((uni, index) => (
                <motion.div
                  key={uni.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-2 hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
                            <GraduationCap className="w-6 h-6" />
                          </div>
                          <div className="text-right">
                            <Badge className={getUniversityTypeColor(uni.type)}>
                              {uni.specialty}
                            </Badge>
                            <CardTitle className="text-xl mt-2">{uni.name}</CardTitle>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-right text-base mt-3">
                        {uni.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-right">
                          <div className="flex items-center justify-end gap-2 mb-2">
                            <span className="text-sm text-gray-600">معدل القبول</span>
                            <TrendingUp className="w-4 h-4 text-green-600" />
                          </div>
                          <div className="text-xl text-green-700">{uni.requiredAverage}</div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-right md:col-span-2">
                          <div className="flex items-center justify-end gap-2 mb-2">
                            <span className="text-sm text-gray-600">الموقع</span>
                            <MapPin className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="text-lg text-blue-700">{uni.location}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
              <GraduationCap className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl mb-3">محتار في اختيار التخصص؟</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                نقدم جلسات توجيه مجانية لمساعدتك في اختيار المسار الأكاديمي الأنسب لقدراتك وطموحاتك
              </p>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                احجز جلسة توجيه مجانية
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
