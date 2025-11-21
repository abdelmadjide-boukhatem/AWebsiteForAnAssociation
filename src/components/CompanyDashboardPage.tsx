import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Briefcase, Plus, Users, Eye, CheckCircle2, XCircle, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Company } from '../types/jobs';
import { mockJobs, mockApplications, algerianStates } from '../lib/jobs-data';
import { toast } from 'sonner@2.0.3';

interface CompanyDashboardPageProps {
  currentUser: Company;
}

export function CompanyDashboardPage({ currentUser }: CompanyDashboardPageProps) {
  const [isCreatingJob, setIsCreatingJob] = useState(false);
  
  // New job form
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobType, setJobType] = useState('full-time');
  const [jobSalary, setJobSalary] = useState('');

  // Get company's jobs and applications
  const companyJobs = mockJobs.filter(job => job.companyId === currentUser.id);
  const companyApplications = mockApplications.filter(app =>
    companyJobs.some(job => job.id === app.jobId)
  );

  const handleCreateJob = () => {
    if (!jobTitle || !jobDescription || !jobLocation) {
      toast.error('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    toast.success('تم نشر الإعلان بنجاح!');
    setIsCreatingJob(false);
    // Reset form
    setJobTitle('');
    setJobDescription('');
    setJobLocation('');
    setJobType('full-time');
    setJobSalary('');
  };

  const handleUpdateStatus = (appId: string, newStatus: 'reviewed' | 'accepted' | 'rejected') => {
    toast.success(`تم تحديث حالة الطلب إلى: ${getStatusLabel(newStatus)}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'reviewed': return 'bg-blue-100 text-blue-700';
      case 'accepted': return 'bg-green-100 text-green-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return 'جديد';
      case 'reviewed': return 'تمت المراجعة';
      case 'accepted': return 'مقبول';
      case 'rejected': return 'مرفوض';
      default: return status;
    }
  };

  const getJobTypeLabel = (type: string) => {
    switch (type) {
      case 'full-time': return 'دوام كامل';
      case 'part-time': return 'دوام جزئي';
      case 'contract': return 'عقد مؤقت';
      case 'remote': return 'عن بُعد';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <Dialog open={isCreatingJob} onOpenChange={setIsCreatingJob}>
            <DialogTrigger asChild>
              <Button className="bg-blue-900 hover:bg-blue-800">
                <Plus className="w-5 h-5 ml-2" />
                نشر إعلان جديد
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-right">إنشاء إعلان توظيف جديد</DialogTitle>
                <DialogDescription className="text-right">
                  املأ التفاصيل لنشر فرصة عمل جديدة
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="job-title">عنوان الوظيفة*</Label>
                  <Input
                    id="job-title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="مثال: مهندس برمجيات"
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="job-description">الوصف*</Label>
                  <Textarea
                    id="job-description"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="وصف الوظيفة والمهام..."
                    className="min-h-[100px] text-right"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="job-location">الموقع*</Label>
                    <Select value={jobLocation} onValueChange={setJobLocation}>
                      <SelectTrigger id="job-location">
                        <SelectValue placeholder="اختر الولاية" />
                      </SelectTrigger>
                      <SelectContent>
                        {algerianStates.map((state) => (
                          <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="job-type">نوع العقد*</Label>
                    <Select value={jobType} onValueChange={setJobType}>
                      <SelectTrigger id="job-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">دوام كامل</SelectItem>
                        <SelectItem value="part-time">دوام جزئي</SelectItem>
                        <SelectItem value="contract">عقد مؤقت</SelectItem>
                        <SelectItem value="remote">عن بُعد</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="job-salary">الراتب (اختياري)</Label>
                  <Input
                    id="job-salary"
                    value={jobSalary}
                    onChange={(e) => setJobSalary(e.target.value)}
                    placeholder="مثال: 50,000 - 80,000 دج"
                    className="text-right"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button onClick={handleCreateJob} className="flex-1 bg-blue-900 hover:bg-blue-800">
                    نشر الإعلان
                  </Button>
                  <Button onClick={() => setIsCreatingJob(false)} variant="outline" className="flex-1">
                    إلغاء
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <div className="text-right">
            <h1 className="text-4xl mb-2 text-gray-900">لوحة التحكم</h1>
            <p className="text-gray-600">{currentUser.name}</p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardDescription>إجمالي الإعلانات</CardDescription>
              <CardTitle className="text-3xl">{companyJobs.length}</CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardDescription>الطلبات المستلمة</CardDescription>
              <CardTitle className="text-3xl text-blue-600">{companyApplications.length}</CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardDescription>طلبات جديدة</CardDescription>
              <CardTitle className="text-3xl text-yellow-600">
                {companyApplications.filter(a => a.status === 'pending').length}
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardDescription>المقبولين</CardDescription>
              <CardTitle className="text-3xl text-green-600">
                {companyApplications.filter(a => a.status === 'accepted').length}
              </CardTitle>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs defaultValue="jobs" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="jobs">إعلاناتي</TabsTrigger>
              <TabsTrigger value="applications">الطلبات الواردة</TabsTrigger>
            </TabsList>

            {/* Jobs Tab */}
            <TabsContent value="jobs" className="mt-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>إعلانات التوظيف</CardTitle>
                  <CardDescription>
                    إدارة إعلاناتك المنشورة
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {companyJobs.length > 0 ? (
                    <div className="space-y-4">
                      {companyJobs.map((job) => (
                        <Card key={job.id} className="border hover:shadow-md transition-shadow">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="space-y-2">
                                <Badge className="bg-blue-900 text-white">
                                  {getJobTypeLabel(job.type)}
                                </Badge>
                                {job.status === 'active' && (
                                  <Badge className="bg-green-100 text-green-700 mr-2">
                                    نشط
                                  </Badge>
                                )}
                              </div>
                              <div className="flex-1 text-right">
                                <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                                <CardDescription>
                                  <div className="flex items-center justify-end gap-2">
                                    <span>{job.location}</span>
                                    <MapPin className="w-4 h-4" />
                                  </div>
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="text-center p-3 bg-blue-50 rounded-lg">
                                <div className="text-2xl text-blue-700 mb-1">{job.applicants}</div>
                                <div className="text-sm text-gray-600">متقدم</div>
                              </div>
                              <div className="text-center p-3 bg-green-50 rounded-lg">
                                <div className="text-2xl text-green-700 mb-1">
                                  {companyApplications.filter(a => a.jobId === job.id && a.status === 'accepted').length}
                                </div>
                                <div className="text-sm text-gray-600">مقبول</div>
                              </div>
                              <div className="text-center p-3 bg-yellow-50 rounded-lg">
                                <div className="text-2xl text-yellow-700 mb-1">
                                  {companyApplications.filter(a => a.jobId === job.id && a.status === 'pending').length}
                                </div>
                                <div className="text-sm text-gray-600">جديد</div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="flex-1">
                                تعديل
                              </Button>
                              <Button variant="outline" size="sm" className="flex-1">
                                عرض الطلبات
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Briefcase className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                      <h3 className="text-xl mb-2 text-gray-700">لم تنشر أي إعلانات بعد</h3>
                      <p className="text-gray-500 mb-6">ابدأ بنشر أول إعلان توظيف</p>
                      <Button onClick={() => setIsCreatingJob(true)}>
                        <Plus className="w-4 h-4 ml-2" />
                        نشر إعلان
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Applications Tab */}
            <TabsContent value="applications" className="mt-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>الطلبات الواردة</CardTitle>
                  <CardDescription>
                    راجع وإدارة طلبات المتقدمين
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {companyApplications.length > 0 ? (
                    <div className="space-y-4">
                      {companyApplications.map((application) => {
                        const job = mockJobs.find(j => j.id === application.jobId);
                        if (!job) return null;

                        return (
                          <Card key={application.id} className="border hover:shadow-md transition-shadow">
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <div className="flex gap-2">
                                  {application.status === 'pending' && (
                                    <>
                                      <Button
                                        size="sm"
                                        onClick={() => handleUpdateStatus(application.id, 'accepted')}
                                        className="bg-green-600 hover:bg-green-700"
                                      >
                                        <CheckCircle2 className="w-4 h-4 ml-1" />
                                        قبول
                                      </Button>
                                      <Button
                                        size="sm"
                                        onClick={() => handleUpdateStatus(application.id, 'rejected')}
                                        variant="destructive"
                                      >
                                        <XCircle className="w-4 h-4 ml-1" />
                                        رفض
                                      </Button>
                                      <Button
                                        size="sm"
                                        onClick={() => handleUpdateStatus(application.id, 'reviewed')}
                                        variant="outline"
                                      >
                                        <Eye className="w-4 h-4 ml-1" />
                                        مراجعة
                                      </Button>
                                    </>
                                  )}
                                </div>
                                <div className="flex-1 text-right">
                                  <Badge className={getStatusColor(application.status)}>
                                    {getStatusLabel(application.status)}
                                  </Badge>
                                  <CardTitle className="text-xl mt-2 mb-1">
                                    {application.candidateName}
                                  </CardTitle>
                                  <CardDescription>
                                    يتقدم لوظيفة: {job.title}
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-3">
                                <div className="flex items-center justify-end gap-2 text-sm text-gray-600">
                                  <span>{application.candidateEmail}</span>
                                  <Mail className="w-4 h-4" />
                                </div>
                                <div className="flex items-center justify-end gap-2 text-sm text-gray-600">
                                  <span>تقدم منذ {Math.floor((Date.now() - application.appliedAt.getTime()) / (1000 * 60 * 60 * 24))} يوم</span>
                                  <Clock className="w-4 h-4" />
                                </div>
                                {application.coverLetter && (
                                  <div className="pt-3 border-t">
                                    <p className="text-sm text-gray-600 mb-2 text-right">
                                      <strong>رسالة التقديم:</strong>
                                    </p>
                                    <p className="text-sm text-gray-700 text-right">
                                      {application.coverLetter}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Users className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                      <h3 className="text-xl mb-2 text-gray-700">لا توجد طلبات بعد</h3>
                      <p className="text-gray-500">ستظهر هنا الطلبات الواردة على إعلاناتك</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
