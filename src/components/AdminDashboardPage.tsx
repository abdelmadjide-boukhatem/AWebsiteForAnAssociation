import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Users, Briefcase, Building2, TrendingUp, Search, Trash2, Eye, CheckCircle2, XCircle, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';
import { mockJobs, mockCandidates, mockCompanies, mockApplications } from '../lib/jobs-data';
import { toast } from 'sonner@2.0.3';
import { Link } from 'wouter';

export function AdminDashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const totalUsers = mockCandidates.length + mockCompanies.length + 1; // +1 for admin
  const totalJobs = mockJobs.length;
  const activeJobs = mockJobs.filter(j => j.status === 'active').length;
  const totalApplications = mockApplications.length;

  const handleDeleteJob = (jobId: string) => {
    toast.success('تم حذف الإعلان بنجاح');
  };

  const handleDeleteUser = (userId: string) => {
    toast.success('تم حذف المستخدم بنجاح');
  };

  const handleToggleJobStatus = (jobId: string) => {
    toast.success('تم تغيير حالة الإعلان');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <Link href="/jobs/stats">
            <a>
              <Button variant="outline" className="gap-2">
                <BarChart3 className="w-5 h-5" />
                عرض الإحصائيات التفصيلية
              </Button>
            </a>
          </Link>
          <div className="text-right">
            <h1 className="text-4xl mb-2 text-gray-900">لوحة تحكم الإدارة</h1>
            <p className="text-gray-600">إدارة المنصة والمستخدمين</p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-700" />
                </div>
                <div className="text-right">
                  <CardDescription>إجمالي المستخدمين</CardDescription>
                  <CardTitle className="text-3xl">{totalUsers}</CardTitle>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-green-700" />
                </div>
                <div className="text-right">
                  <CardDescription>الإعلانات النشطة</CardDescription>
                  <CardTitle className="text-3xl text-green-600">{activeJobs}</CardTitle>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-purple-700" />
                </div>
                <div className="text-right">
                  <CardDescription>الشركات المسجلة</CardDescription>
                  <CardTitle className="text-3xl text-purple-600">{mockCompanies.length}</CardTitle>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-yellow-700" />
                </div>
                <div className="text-right">
                  <CardDescription>إجمالي الطلبات</CardDescription>
                  <CardTitle className="text-3xl text-yellow-600">{totalApplications}</CardTitle>
                </div>
              </div>
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
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="jobs">إدارة الإعلانات</TabsTrigger>
              <TabsTrigger value="companies">الشركات</TabsTrigger>
              <TabsTrigger value="candidates">المرشحون</TabsTrigger>
            </TabsList>

            {/* Jobs Tab */}
            <TabsContent value="jobs" className="mt-6">
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Button variant="outline" size="sm">
                      تصدير القائمة
                    </Button>
                    <div className="text-right">
                      <CardTitle>إدارة إعلانات التوظيف</CardTitle>
                      <CardDescription>{totalJobs} إعلان في النظام</CardDescription>
                    </div>
                  </div>
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="ابحث عن إعلان..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pr-10"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockJobs.map((job) => (
                      <Card key={job.id} className="border">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleToggleJobStatus(job.id)}
                              >
                                {job.status === 'active' ? (
                                  <>
                                    <XCircle className="w-4 h-4 ml-1" />
                                    إيقاف
                                  </>
                                ) : (
                                  <>
                                    <CheckCircle2 className="w-4 h-4 ml-1" />
                                    تفعيل
                                  </>
                                )}
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                              >
                                <Eye className="w-4 h-4 ml-1" />
                                عرض
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleDeleteJob(job.id)}
                              >
                                <Trash2 className="w-4 h-4 ml-1" />
                                حذف
                              </Button>
                            </div>
                            <div className="flex-1 text-right px-4">
                              <div className="flex items-center gap-2 justify-end mb-1">
                                <Badge className={job.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                                  {job.status === 'active' ? 'نشط' : 'موقوف'}
                                </Badge>
                                <h3 className="font-semibold text-gray-900">{job.title}</h3>
                              </div>
                              <div className="text-sm text-gray-600">
                                {job.companyName} • {job.location} • {job.applicants} متقدم
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Companies Tab */}
            <TabsContent value="companies" className="mt-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>الشركات المسجلة</CardTitle>
                  <CardDescription>{mockCompanies.length} شركة في النظام</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockCompanies.map((company) => {
                      const companyJobs = mockJobs.filter(j => j.companyId === company.id);
                      return (
                        <Card key={company.id} className="border">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                >
                                  <Eye className="w-4 h-4 ml-1" />
                                  عرض
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => handleDeleteUser(company.id)}
                                >
                                  <Trash2 className="w-4 h-4 ml-1" />
                                  حذف
                                </Button>
                              </div>
                              <div className="flex-1 text-right px-4">
                                <div className="flex items-center gap-2 justify-end mb-1">
                                  <Badge className="bg-purple-100 text-purple-700">
                                    {company.industry}
                                  </Badge>
                                  <h3 className="font-semibold text-gray-900">{company.name}</h3>
                                </div>
                                <div className="text-sm text-gray-600">
                                  {company.location} • {companyJobs.length} إعلان • {company.email}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Candidates Tab */}
            <TabsContent value="candidates" className="mt-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>المرشحون المسجلون</CardTitle>
                  <CardDescription>{mockCandidates.length} مرشح في النظام</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockCandidates.map((candidate) => {
                      const candidateApps = mockApplications.filter(a => a.candidateId === candidate.id);
                      return (
                        <Card key={candidate.id} className="border">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                >
                                  <Eye className="w-4 h-4 ml-1" />
                                  عرض
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => handleDeleteUser(candidate.id)}
                                >
                                  <Trash2 className="w-4 h-4 ml-1" />
                                  حذف
                                </Button>
                              </div>
                              <div className="flex-1 text-right px-4">
                                <div className="flex items-center gap-2 justify-end mb-1">
                                  <Badge className="bg-blue-100 text-blue-700">
                                    {candidate.title || 'مرشح'}
                                  </Badge>
                                  <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
                                </div>
                                <div className="text-sm text-gray-600">
                                  {candidate.location} • {candidateApps.length} طلب • {candidate.email}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
