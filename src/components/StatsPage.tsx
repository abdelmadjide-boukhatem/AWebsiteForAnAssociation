import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Users, Briefcase, Building2, TrendingUp, Clock, MapPin, ArrowLeft, Eye, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { mockJobs, mockCandidates, mockCompanies, mockApplications, algerianStates } from '../lib/jobs-data';
import { Link } from 'wouter';

export function StatsPage() {
  // Calculate statistics
  const totalUsers = mockCandidates.length + mockCompanies.length + 1;
  const totalJobs = mockJobs.length;
  const activeJobs = mockJobs.filter(j => j.status === 'active').length;
  const totalApplications = mockApplications.length;
  const pendingApplications = mockApplications.filter(a => a.status === 'pending').length;
  const acceptedApplications = mockApplications.filter(a => a.status === 'accepted').length;
  const rejectedApplications = mockApplications.filter(a => a.status === 'rejected').length;

  // Jobs by location
  const jobsByLocation = algerianStates.slice(0, 5).map(state => ({
    state,
    count: mockJobs.filter(j => j.location.includes(state)).length
  })).sort((a, b) => b.count - a.count);

  // Jobs by type
  const jobsByType = [
    { type: 'full-time', label: 'دوام كامل', count: mockJobs.filter(j => j.type === 'full-time').length },
    { type: 'part-time', label: 'دوام جزئي', count: mockJobs.filter(j => j.type === 'part-time').length },
    { type: 'contract', label: 'عقد مؤقت', count: mockJobs.filter(j => j.type === 'contract').length },
    { type: 'remote', label: 'عن بُعد', count: mockJobs.filter(j => j.type === 'remote').length },
  ].filter(item => item.count > 0);

  // Top companies by jobs
  const topCompanies = mockCompanies.map(company => ({
    ...company,
    jobCount: mockJobs.filter(j => j.companyId === company.id).length,
    applicationCount: mockApplications.filter(a =>
      mockJobs.some(j => j.id === a.jobId && j.companyId === company.id)
    ).length
  })).sort((a, b) => b.jobCount - a.jobCount);

  // Recent activity
  const recentJobs = [...mockJobs].sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime()).slice(0, 5);

  const getJobTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'bg-blue-100 text-blue-700';
      case 'part-time': return 'bg-purple-100 text-purple-700';
      case 'contract': return 'bg-yellow-100 text-yellow-700';
      case 'remote': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href="/jobs/admin">
            <a>
              <Button variant="outline" className="mb-4 gap-2">
                <ArrowLeft className="w-4 h-4" />
                العودة للوحة الإدارة
              </Button>
            </a>
          </Link>
          <h1 className="text-4xl mb-2 text-gray-900">إحصائيات المنصة</h1>
          <p className="text-gray-600">نظرة شاملة على أداء منصة التوظيف</p>
        </motion.div>

        {/* Main Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="border-2 bg-gradient-to-br from-blue-50 to-white hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-blue-700" />
                </div>
                <div className="text-right">
                  <CardDescription>إجمالي المستخدمين</CardDescription>
                  <CardTitle className="text-4xl mt-2">{totalUsers}</CardTitle>
                  <div className="text-sm text-blue-600 mt-2">
                    {mockCandidates.length} مرشح • {mockCompanies.length} شركة
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2 bg-gradient-to-br from-green-50 to-white hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-green-700" />
                </div>
                <div className="text-right">
                  <CardDescription>الوظائف المتاحة</CardDescription>
                  <CardTitle className="text-4xl mt-2 text-green-600">{activeJobs}</CardTitle>
                  <div className="text-sm text-green-600 mt-2">
                    من أصل {totalJobs} إعلان
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2 bg-gradient-to-br from-purple-50 to-white hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-purple-700" />
                </div>
                <div className="text-right">
                  <CardDescription>إجمالي الطلبات</CardDescription>
                  <CardTitle className="text-4xl mt-2 text-purple-600">{totalApplications}</CardTitle>
                  <div className="text-sm text-purple-600 mt-2">
                    {pendingApplications} قيد المراجعة
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-2 bg-gradient-to-br from-yellow-50 to-white hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-yellow-700" />
                </div>
                <div className="text-right">
                  <CardDescription>معدل القبول</CardDescription>
                  <CardTitle className="text-4xl mt-2 text-yellow-600">
                    {totalApplications > 0 ? Math.round((acceptedApplications / totalApplications) * 100) : 0}%
                  </CardTitle>
                  <div className="text-sm text-yellow-600 mt-2">
                    {acceptedApplications} مقبول
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Applications Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-2 h-full">
              <CardHeader>
                <CardTitle>حالة الطلبات</CardTitle>
                <CardDescription>توزيع طلبات التوظيف حسب الحالة</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-200 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-yellow-700" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">قيد المراجعة</div>
                        <div className="text-2xl text-yellow-700">{pendingApplications}</div>
                      </div>
                    </div>
                    <div className="text-3xl text-yellow-700">
                      {totalApplications > 0 ? Math.round((pendingApplications / totalApplications) * 100) : 0}%
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center">
                        <Eye className="w-5 h-5 text-blue-700" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">تمت المراجعة</div>
                        <div className="text-2xl text-blue-700">
                          {mockApplications.filter(a => a.status === 'reviewed').length}
                        </div>
                      </div>
                    </div>
                    <div className="text-3xl text-blue-700">
                      {totalApplications > 0 ? Math.round((mockApplications.filter(a => a.status === 'reviewed').length / totalApplications) * 100) : 0}%
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-green-700" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">مقبولة</div>
                        <div className="text-2xl text-green-700">{acceptedApplications}</div>
                      </div>
                    </div>
                    <div className="text-3xl text-green-700">
                      {totalApplications > 0 ? Math.round((acceptedApplications / totalApplications) * 100) : 0}%
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-200 rounded-lg flex items-center justify-center">
                        <XCircle className="w-5 h-5 text-red-700" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">مرفوضة</div>
                        <div className="text-2xl text-red-700">{rejectedApplications}</div>
                      </div>
                    </div>
                    <div className="text-3xl text-red-700">
                      {totalApplications > 0 ? Math.round((rejectedApplications / totalApplications) * 100) : 0}%
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Jobs by Type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-2 h-full">
              <CardHeader>
                <CardTitle>الوظائف حسب النوع</CardTitle>
                <CardDescription>توزيع الإعلانات حسب نوع العقد</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobsByType.map((item) => (
                    <div key={item.type} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-semibold">{item.count}</span>
                        <div className="flex items-center gap-2">
                          <Badge className={getJobTypeColor(item.type)}>
                            {item.label}
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${(item.count / totalJobs) * 100}%` }}
                        />
                      </div>
                      <div className="text-sm text-gray-500 text-left">
                        {Math.round((item.count / totalJobs) * 100)}% من الإعلانات
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Top Companies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle>أكثر الشركات نشاطًا</CardTitle>
                <CardDescription>الشركات الأكثر نشرًا للإعلانات</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topCompanies.map((company, index) => (
                    <div key={company.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-blue-700" />
                      </div>
                      <div className="flex-1 text-right">
                        <div className="font-semibold text-gray-900">{company.name}</div>
                        <div className="text-sm text-gray-600">
                          {company.jobCount} إعلان • {company.applicationCount} طلب
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">#{index + 1}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Jobs by Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle>الوظائف حسب الموقع</CardTitle>
                <CardDescription>أكثر المدن نشاطًا في التوظيف</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobsByLocation.map((item) => (
                    <div key={item.state} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold">{item.count}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-700">{item.state}</span>
                          <MapPin className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full transition-all"
                          style={{ width: `${(item.count / totalJobs) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Jobs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card className="border-2">
            <CardHeader>
              <CardTitle>آخر الإعلانات المنشورة</CardTitle>
              <CardDescription>أحدث فرص العمل على المنصة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentJobs.map((job) => (
                  <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <Badge className={getJobTypeColor(job.type)}>
                        {job.type === 'full-time' ? 'دوام كامل' : job.type === 'part-time' ? 'دوام جزئي' : job.type}
                      </Badge>
                      <Badge variant="outline">
                        {job.applicants} متقدم
                      </Badge>
                    </div>
                    <div className="flex-1 text-right px-4">
                      <div className="font-semibold text-gray-900 mb-1">{job.title}</div>
                      <div className="text-sm text-gray-600">
                        {job.companyName} • {job.location}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      منذ {Math.floor((Date.now() - job.postedAt.getTime()) / (1000 * 60 * 60 * 24))} يوم
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
