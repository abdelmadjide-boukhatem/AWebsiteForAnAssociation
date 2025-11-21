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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-amber-50/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-4 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-8 py-4 rounded-full mb-8 shadow-2xl shadow-amber-500/30">
              <Briefcase className="w-6 h-6" />
              <span className="font-bold text-lg">منصة التوظيف الأولى في الجزائر</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent leading-tight">
              فرصتك بين يديك
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-amber-400 font-semibold">
              ابحث، أعلن، وابدأ طريقك المهني الآن!
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto border border-slate-200/50"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative group">
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-amber-500 transition-colors" />
                  <Input
                    placeholder="أدخل المسمى الوظيفي أو المجال..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-14 h-16 text-lg text-slate-900 border-2 border-slate-200 focus:border-amber-500 rounded-2xl shadow-sm font-medium"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                
                <div className="md:w-72 relative group">
                  <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 z-10 pointer-events-none group-focus-within:text-amber-500 transition-colors" />
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger className="h-16 pr-14 text-slate-900 border-2 border-slate-200 hover:border-amber-400 rounded-2xl shadow-sm font-medium">
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
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 h-16 px-10 text-lg font-bold text-slate-900 shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 rounded-2xl transition-all duration-300"
                >
                  <Search className="w-6 h-6 ml-2" />
                  ابحث عن وظيفة
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-extrabold text-slate-900 mb-2">+{mockJobs.length}</div>
              <div className="text-slate-600 font-semibold">فرصة عمل</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200/50 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-extrabold text-slate-900 mb-2">+{mockCompanies.length}</div>
              <div className="text-slate-600 font-semibold">شركة موثوقة</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-extrabold text-slate-900 mb-2">+500</div>
              <div className="text-slate-600 font-semibold">باحث عن عمل</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200/50 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-extrabold text-slate-900 mb-2">+200</div>
              <div className="text-slate-600 font-semibold">توظيف ناجح</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Jobs */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="text-right flex-1">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-slate-900">أحدث الوظائف</h2>
              <p className="text-lg text-slate-600">اكتشف أفضل فرص العمل المتاحة الآن</p>
            </div>
            <Link href="/jobs/browse">
              <a>
                <Button className="gap-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 shadow-lg text-lg px-6 py-6">
                  <ArrowLeft className="w-5 h-5" />
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
                    <Card className="h-full border-2 border-slate-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden bg-white">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-amber-100 group-hover:to-amber-200 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300">
                            <Building2 className="w-7 h-7 text-slate-700 group-hover:text-amber-600 transition-colors" />
                          </div>
                          <Badge className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-2 shadow-md font-semibold">
                            {getJobTypeLabel(job.type)}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl line-clamp-2 text-right font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{job.title}</CardTitle>
                        <CardDescription className="text-right text-base">
                          <div className="flex items-center justify-end gap-2 text-slate-700 font-medium">
                            <span>{job.companyName}</span>
                            <Building2 className="w-5 h-5" />
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-end gap-2 text-slate-600 font-medium">
                            <span>{job.location}</span>
                            <MapPin className="w-5 h-5 text-amber-500" />
                          </div>
                          {job.salary && (
                            <div className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent text-right">
                              {job.salary}
                            </div>
                          )}
                          <div className="flex items-center justify-between pt-4 border-t-2 border-slate-100">
                            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                              <Clock className="w-4 h-4" />
                              <span>{Math.floor((Date.now() - job.postedAt.getTime()) / (1000 * 60 * 60 * 24))} يوم</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-semibold px-3 py-1 bg-amber-50 text-amber-700 rounded-full">
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
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">الشركات المميزة</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
                <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-slate-200 hover:border-amber-400 group bg-white">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-slate-900 to-slate-800 group-hover:from-amber-500 group-hover:to-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl transition-all duration-300">
                      <Building2 className="w-12 h-12 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{company.name}</CardTitle>
                    <CardDescription className="text-center">
                      <div className="flex items-center justify-center gap-2 text-slate-600 font-medium">
                        <span>{company.location}</span>
                        <MapPin className="w-4 h-4 text-amber-500" />
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2 font-medium">{company.industry}</p>
                    <Badge className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-900 border-0 px-4 py-2 font-semibold shadow-sm">
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
      <section className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              هل أنت شركة تبحث عن موظفين؟
            </h2>
            <p className="text-2xl mb-10 text-amber-400 font-semibold max-w-3xl mx-auto">
              انشر إعلاناتك مجانًا واحصل على أفضل المواهب الجزائرية
            </p>
            <Link href="/jobs/auth">
              <a>
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 text-xl px-12 py-8 rounded-2xl shadow-2xl shadow-amber-500/30 font-bold">
                  <Briefcase className="w-6 h-6 ml-3" />
                  سجل كشركة الآن
                </Button>
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-16 px-4 border-t border-slate-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-4 rounded-2xl shadow-lg shadow-amber-500/20">
              <Briefcase className="w-10 h-10 text-slate-900" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">منصة التوظيف</div>
              <div className="text-base text-amber-400 font-semibold">فرصتك بين يديك</div>
            </div>
          </div>
          <p className="text-slate-400 mb-6 text-lg">
            ربط الشركات بالمواهب الجزائرية المتميزة
          </p>
          <div className="border-t border-slate-800 pt-6 mt-6">
            <p className="text-sm text-slate-500">
              © ٢٠٢٤ منصة التوظيف. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
