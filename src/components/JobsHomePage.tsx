import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Search, MapPin, Briefcase, Building2, Users, TrendingUp, Clock, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { mockJobs, mockCompanies, algerianStates } from '../lib/jobs-data';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function JobsHomePage() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const recentJobs = mockJobs.slice(0, 6);
  const featuredCompanies = mockCompanies.slice(0, 4);

  const getJobTypeLabel = (type: string) => {
    switch (type) {
      case 'full-time': return 'دوام كامل';
      case 'part-time': return 'دوام جزئي';
      case 'contract': return 'عقد مؤقت';
      case 'remote': return 'عن بُعد';
      default: return type;
    }
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedState) params.set('location', selectedState);
    setLocation(`/jobs/browse?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjI4NjIyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
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
            <div className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 px-6 py-3 rounded-full mb-6">
              <Briefcase className="w-5 h-5" />
              <span className="font-semibold">منصة التوظيف الأولى في الجزائر</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl mb-6">
              فرصتك بين يديك
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-yellow-200">
              ابحث، أعلن، وابدأ طريقك المهني الآن!
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="أدخل المسمى الوظيفي أو المجال..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-12 h-14 text-lg text-gray-900"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                
                <div className="md:w-64 relative">
                  <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none" />
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger className="h-14 pr-12 text-gray-900">
                      <SelectValue placeholder="اختر الولاية..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">كل الولايات</SelectItem>
                      {algerianStates.map((state) => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  size="lg" 
                  onClick={handleSearch}
                  className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 h-14 px-8 text-lg"
                >
                  <Search className="w-5 h-5 ml-2" />
                  ابحث عن وظيفة
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Briefcase className="w-8 h-8 text-blue-900" />
              </div>
              <div className="text-3xl text-blue-900 mb-1">+{mockJobs.length}</div>
              <div className="text-gray-600">فرصة عمل</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-3xl text-blue-900 mb-1">+{mockCompanies.length}</div>
              <div className="text-gray-600">شركة موثوقة</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl text-blue-900 mb-1">+500</div>
              <div className="text-gray-600">باحث عن عمل</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl text-blue-900 mb-1">+200</div>
              <div className="text-gray-600">توظيف ناجح</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Jobs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl mb-2 text-gray-900">أحدث الوظائف</h2>
              <p className="text-gray-600">اكتشف أفضل فرص العمل المتاحة الآن</p>
            </div>
            <Link href="/jobs/browse">
              <a>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  عرض الكل
                </Button>
              </a>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/jobs/${job.id}`}>
                  <a>
                    <Card className="h-full border-2 hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-blue-900" />
                          </div>
                          <Badge className="bg-blue-900 text-white">
                            {getJobTypeLabel(job.type)}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl line-clamp-2 text-right">{job.title}</CardTitle>
                        <CardDescription className="text-right">
                          <div className="flex items-center justify-end gap-2 text-blue-900">
                            <span>{job.companyName}</span>
                            <Building2 className="w-4 h-4" />
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-end gap-2 text-gray-600">
                            <span>{job.location}</span>
                            <MapPin className="w-4 h-4" />
                          </div>
                          {job.salary && (
                            <div className="text-lg text-green-600 text-right">
                              {job.salary}
                            </div>
                          )}
                          <div className="flex items-center justify-between pt-3 border-t">
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Clock className="w-4 h-4" />
                              <span>{Math.floor((Date.now() - job.postedAt.getTime()) / (1000 * 60 * 60 * 24))} يوم</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Users className="w-4 h-4" />
                              <span>{job.applicants} متقدم</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">الشركات المميزة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تعرف على الشركات الرائدة التي توفر فرص عمل متميزة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer border-2 hover:border-yellow-500">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-lg">{company.name}</CardTitle>
                    <CardDescription className="text-center">
                      <div className="flex items-center justify-center gap-1 text-gray-600">
                        <span>{company.location}</span>
                        <MapPin className="w-3 h-3" />
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{company.industry}</p>
                    <Badge variant="outline" className="bg-blue-50 text-blue-900">
                      {company.employeeCount} موظف
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">هل أنت شركة تبحث عن موظفين؟</h2>
            <p className="text-xl mb-8 text-blue-100">
              انشر إعلاناتك مجانًا واحصل على أفضل المواهب الجزائرية
            </p>
            <Link href="/jobs/auth">
              <a>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 text-lg px-8">
                  <Briefcase className="w-5 h-5 ml-2" />
                  سجل كشركة الآن
                </Button>
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 rounded-lg">
              <Briefcase className="w-8 h-8 text-blue-900" />
            </div>
            <div className="text-right">
              <div className="text-2xl text-white">منصة التوظيف</div>
              <div className="text-sm text-yellow-300">فرصتك بين يديك</div>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            ربط الشركات بالمواهب الجزائرية المتميزة
          </p>
          <p className="text-sm text-gray-500">
            © ٢٠٢٤ منصة التوظيف. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}
