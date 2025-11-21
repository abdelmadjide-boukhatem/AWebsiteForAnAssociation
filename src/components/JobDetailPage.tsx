import { useState } from 'react';
import { Link, useRoute } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { MapPin, Building2, Clock, Users, Briefcase, ArrowRight, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { mockJobs } from '../lib/jobs-data';
import { User as JobUser } from '../types/jobs';
import { toast } from 'sonner@2.0.3';

interface JobDetailPageProps {
  currentUser: JobUser | null;
}

export function JobDetailPage({ currentUser }: JobDetailPageProps) {
  const [, params] = useRoute('/jobs/:id');
  const jobId = params?.id;
  const job = mockJobs.find(j => j.id === jobId);

  const [coverLetter, setCoverLetter] = useState('');
  const [isApplying, setIsApplying] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-3xl mb-4 text-gray-900">الوظيفة غير موجودة</h2>
          <Link href="/jobs/browse">
            <a>
              <Button>
                <ArrowRight className="w-4 h-4 ml-2" />
                العودة للوظائف
              </Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const getJobTypeLabel = (type: string) => {
    switch (type) {
      case 'full-time': return 'دوام كامل';
      case 'part-time': return 'دوام جزئي';
      case 'contract': return 'عقد مؤقت';
      case 'remote': return 'عن بُعد';
      default: return type;
    }
  };

  const handleApply = () => {
    if (!currentUser) {
      toast.error('يجب تسجيل الدخول أولاً');
      return;
    }

    if (currentUser.type !== 'candidate') {
      toast.error('هذه الميزة متاحة للمرشحين فقط');
      return;
    }

    setIsApplying(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsApplying(false);
      setHasApplied(true);
      toast.success('تم إرسال طلبك بنجاح!');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link href="/jobs/browse">
            <a>
              <Button variant="outline" className="gap-2">
                <ArrowRight className="w-4 h-4" />
                العودة للوظائف
              </Button>
            </a>
          </Link>
        </motion.div>

        {/* Job Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="border-2 shadow-xl mb-6">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-3 mb-3">
                    <Badge className="bg-blue-900 text-white">
                      {getJobTypeLabel(job.type)}
                    </Badge>
                    {job.status === 'active' && (
                      <Badge className="bg-green-100 text-green-700">
                        متاح
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-3xl mb-2">{job.title}</CardTitle>
                  <CardDescription className="text-lg">
                    <div className="flex items-center justify-end gap-2 text-blue-900">
                      <span>{job.companyName}</span>
                      <Building2 className="w-5 h-5" />
                    </div>
                  </CardDescription>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-blue-50 rounded-lg p-3 text-right">
                  <div className="flex items-center justify-end gap-2 mb-1 text-gray-600">
                    <span className="text-sm">الموقع</span>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-blue-900">{job.location}</div>
                </div>

                {job.salary && (
                  <div className="bg-green-50 rounded-lg p-3 text-right">
                    <div className="flex items-center justify-end gap-2 mb-1 text-gray-600">
                      <span className="text-sm">الراتب</span>
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div className="text-green-700">{job.salary}</div>
                  </div>
                )}

                <div className="bg-purple-50 rounded-lg p-3 text-right">
                  <div className="flex items-center justify-end gap-2 mb-1 text-gray-600">
                    <span className="text-sm">المتقدمين</span>
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-purple-700">{job.applicants} متقدم</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 text-right">
                  <div className="flex items-center justify-end gap-2 mb-1 text-gray-600">
                    <span className="text-sm">منذ</span>
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-gray-700">
                    {Math.floor((Date.now() - job.postedAt.getTime()) / (1000 * 60 * 60 * 24))} يوم
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Job Details */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>وصف الوظيفة</CardTitle>
                </CardHeader>
                <CardContent className="text-right">
                  <p className="text-gray-700 leading-relaxed">{job.description}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>المتطلبات</CardTitle>
                </CardHeader>
                <CardContent className="text-right">
                  <ul className="space-y-3">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>المسؤوليات</CardTitle>
                </CardHeader>
                <CardContent className="text-right">
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2" />
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Apply Card */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="sticky top-24"
            >
              <Card className="border-2 border-blue-300 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-t-lg">
                  <CardTitle>قدّم طلبك الآن</CardTitle>
                  <CardDescription className="text-blue-100">
                    انضم إلى {job.applicants} متقدم آخر
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  {hasApplied ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-xl text-green-700 mb-2">تم إرسال طلبك!</h3>
                      <p className="text-gray-600 mb-4">
                        سيتم مراجعة طلبك من قبل الشركة
                      </p>
                      <Link href="/jobs/candidate-dashboard">
                        <a>
                          <Button variant="outline" className="w-full">
                            عرض طلباتي
                          </Button>
                        </a>
                      </Link>
                    </div>
                  ) : currentUser && currentUser.type === 'candidate' ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-blue-900 hover:bg-blue-800" size="lg">
                          <Send className="w-5 h-5 ml-2" />
                          قدّم الآن
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-right">التقديم على الوظيفة</DialogTitle>
                          <DialogDescription className="text-right">
                            أضف رسالة تعريفية (اختياري)
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <Textarea
                            placeholder="اكتب رسالة قصيرة عن نفسك ولماذا أنت مناسب لهذه الوظيفة..."
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            className="min-h-[120px]"
                          />
                          <Button
                            onClick={handleApply}
                            disabled={isApplying}
                            className="w-full bg-blue-900 hover:bg-blue-800"
                          >
                            {isApplying ? 'جاري الإرسال...' : 'إرسال الطلب'}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-center text-gray-600 mb-4">
                        يجب تسجيل الدخول كمرشح للتقديم
                      </p>
                      <Link href="/jobs/auth">
                        <a>
                          <Button className="w-full bg-blue-900 hover:bg-blue-800">
                            تسجيل الدخول
                          </Button>
                        </a>
                      </Link>
                    </div>
                  )}

                  <div className="mt-6 pt-6 border-t text-sm text-gray-600 space-y-2 text-right">
                    <p>💼 نوع العقد: {getJobTypeLabel(job.type)}</p>
                    <p>📅 تاريخ النشر: {job.postedAt.toLocaleDateString('ar')}</p>
                    <p>🏢 الشركة: {job.companyName}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
