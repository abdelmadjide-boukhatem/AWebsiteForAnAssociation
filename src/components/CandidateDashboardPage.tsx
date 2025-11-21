import { useState } from 'react';
import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Label } from './ui/label';
import { User, Mail, Phone, MapPin, Briefcase, FileText, Clock, Building2, Eye, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Candidate } from '../types/jobs';
import { mockApplications, mockJobs } from '../lib/jobs-data';
import { toast } from 'sonner@2.0.3';

interface CandidateDashboardPageProps {
  currentUser: Candidate;
}

export function CandidateDashboardPage({ currentUser }: CandidateDashboardPageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [phone, setPhone] = useState(currentUser.phone || '');
  const [location, setLocation] = useState(currentUser.location);
  const [title, setTitle] = useState(currentUser.title || '');
  const [bio, setBio] = useState(currentUser.bio || '');
  const [skills, setSkills] = useState(currentUser.skills.join(', '));

  // Get user's applications
  const userApplications = mockApplications.filter(app => app.candidateId === currentUser.id);

  const handleSaveProfile = () => {
    toast.success('تم حفظ التغييرات بنجاح');
    setIsEditing(false);
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
      case 'pending': return 'قيد المراجعة';
      case 'reviewed': return 'تمت المراجعة';
      case 'accepted': return 'مقبول';
      case 'rejected': return 'مرفوض';
      default: return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      case 'reviewed': return <Eye className="w-4 h-4" />;
      case 'accepted': return <CheckCircle2 className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl mb-2 text-gray-900">لوحة التحكم</h1>
          <p className="text-gray-600">مرحبًا، {currentUser.name}</p>
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
              <CardDescription>إجمالي الطلبات</CardDescription>
              <CardTitle className="text-3xl">{userApplications.length}</CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardDescription>قيد المراجعة</CardDescription>
              <CardTitle className="text-3xl text-yellow-600">
                {userApplications.filter(a => a.status === 'pending').length}
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardDescription>تمت المراجعة</CardDescription>
              <CardTitle className="text-3xl text-blue-600">
                {userApplications.filter(a => a.status === 'reviewed').length}
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-3">
              <CardDescription>مقبولة</CardDescription>
              <CardTitle className="text-3xl text-green-600">
                {userApplications.filter(a => a.status === 'accepted').length}
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
          <Tabs defaultValue="applications" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="applications">طلباتي</TabsTrigger>
              <TabsTrigger value="profile">الملف الشخصي</TabsTrigger>
            </TabsList>

            {/* Applications Tab */}
            <TabsContent value="applications" className="mt-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>طلبات التوظيف</CardTitle>
                  <CardDescription>
                    تابع حالة طلباتك المقدمة
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {userApplications.length > 0 ? (
                    <div className="space-y-4">
                      {userApplications.map((application) => {
                        const job = mockJobs.find(j => j.id === application.jobId);
                        if (!job) return null;

                        return (
                          <Card key={application.id} className="border hover:shadow-md transition-shadow">
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <div className="flex-1 text-right">
                                  <div className="flex items-center justify-end gap-2 mb-2">
                                    <Badge className={getStatusColor(application.status)}>
                                      <span className="flex items-center gap-1">
                                        {getStatusIcon(application.status)}
                                        {getStatusLabel(application.status)}
                                      </span>
                                    </Badge>
                                  </div>
                                  <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                                  <CardDescription>
                                    <div className="flex items-center justify-end gap-2">
                                      <span>{job.companyName}</span>
                                      <Building2 className="w-4 h-4" />
                                    </div>
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="text-right">
                                  <div className="flex items-center justify-end gap-2 text-gray-600">
                                    <span>{job.location}</span>
                                    <MapPin className="w-4 h-4" />
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="flex items-center justify-end gap-2 text-gray-600">
                                    <span>تم التقديم منذ {Math.floor((Date.now() - application.appliedAt.getTime()) / (1000 * 60 * 60 * 24))} يوم</span>
                                    <Clock className="w-4 h-4" />
                                  </div>
                                </div>
                              </div>
                              {application.coverLetter && (
                                <div className="mt-4 pt-4 border-t">
                                  <p className="text-sm text-gray-600 text-right">
                                    <strong>رسالة التقديم:</strong>
                                  </p>
                                  <p className="text-sm text-gray-700 mt-2 text-right">
                                    {application.coverLetter}
                                  </p>
                                </div>
                              )}
                              <div className="mt-4">
                                <Link href={`/jobs/${job.id}`}>
                                  <a>
                                    <Button variant="outline" size="sm" className="w-full">
                                      عرض تفاصيل الوظيفة
                                    </Button>
                                  </a>
                                </Link>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Briefcase className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                      <h3 className="text-xl mb-2 text-gray-700">لم تقدم أي طلبات بعد</h3>
                      <p className="text-gray-500 mb-6">ابدأ البحث عن الوظائف وقدم طلبك الآن</p>
                      <Link href="/jobs/browse">
                        <a>
                          <Button>تصفح الوظائف</Button>
                        </a>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="mt-6">
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Button
                      onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                      variant={isEditing ? 'default' : 'outline'}
                    >
                      {isEditing ? 'حفظ التغييرات' : 'تعديل الملف'}
                    </Button>
                    <div className="text-right">
                      <CardTitle>الملف الشخصي</CardTitle>
                      <CardDescription>معلوماتك ومهاراتك</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">الاسم الكامل</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={!isEditing}
                            className="pl-10 text-right"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">البريد الإلكتروني</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="email"
                            value={currentUser.email}
                            disabled
                            className="pl-10 text-right bg-gray-50"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">رقم الهاتف</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            disabled={!isEditing}
                            className="pl-10 text-right"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">الموقع</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            disabled={!isEditing}
                            className="pl-10 text-right"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                      <Label htmlFor="title">المسمى الوظيفي</Label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          disabled={!isEditing}
                          className="pl-10 text-right"
                          placeholder="مثال: مطور ويب Full Stack"
                        />
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="space-y-2">
                      <Label htmlFor="bio">نبذة عني</Label>
                      <Textarea
                        id="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        disabled={!isEditing}
                        className="min-h-[100px] text-right"
                        placeholder="اكتب نبذة مختصرة عن خبراتك ومهاراتك..."
                      />
                    </div>

                    {/* Skills */}
                    <div className="space-y-2">
                      <Label htmlFor="skills">المهارات</Label>
                      <Input
                        id="skills"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        disabled={!isEditing}
                        className="text-right"
                        placeholder="مثال: React, Node.js, TypeScript"
                      />
                      <p className="text-sm text-gray-500 text-right">
                        افصل المهارات بفاصلة (,)
                      </p>
                    </div>

                    {/* CV Upload */}
                    <div className="space-y-2">
                      <Label htmlFor="cv">السيرة الذاتية</Label>
                      <div className="border-2 border-dashed rounded-lg p-6 text-center">
                        <FileText className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                        <p className="text-gray-600 mb-2">قم بتحميل سيرتك الذاتية</p>
                        <Button variant="outline" disabled={!isEditing}>
                          اختر ملف PDF
                        </Button>
                      </div>
                    </div>

                    {isEditing && (
                      <div className="flex gap-3">
                        <Button onClick={handleSaveProfile} className="flex-1">
                          حفظ التغييرات
                        </Button>
                        <Button onClick={() => setIsEditing(false)} variant="outline" className="flex-1">
                          إلغاء
                        </Button>
                      </div>
                    )}
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
