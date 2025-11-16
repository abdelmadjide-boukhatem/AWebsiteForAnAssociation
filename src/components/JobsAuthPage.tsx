import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Briefcase, Mail, Lock, User, Building2, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { algerianStates } from '../lib/jobs-data';

interface JobsAuthPageProps {
  onLogin: (email: string, password: string) => void;
  onRegisterCompany: (data: any) => void;
  onRegisterCandidate: (data: any) => void;
}

export function JobsAuthPage({ onLogin, onRegisterCompany, onRegisterCandidate }: JobsAuthPageProps) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Company registration
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [companyIndustry, setCompanyIndustry] = useState('');

  // Candidate registration
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidatePassword, setCandidatePassword] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [candidateLocation, setCandidateLocation] = useState('');
  const [candidateTitle, setCandidateTitle] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(loginEmail, loginPassword);
  };

  const handleCompanyRegister = (e: React.FormEvent) => {
    e.preventDefault();
    onRegisterCompany({
      name: companyName,
      email: companyEmail,
      password: companyPassword,
      location: companyLocation,
      description: companyDescription,
      industry: companyIndustry,
    });
  };

  const handleCandidateRegister = (e: React.FormEvent) => {
    e.preventDefault();
    onRegisterCandidate({
      name: candidateName,
      email: candidateEmail,
      password: candidatePassword,
      phone: candidatePhone,
      location: candidateLocation,
      title: candidateTitle,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full mb-4">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl mb-2 text-gray-900">انضم إلى منصة التوظيف</h1>
          <p className="text-gray-600">ابدأ رحلتك المهنية اليوم</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-2 shadow-xl">
            <CardHeader>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="login">تسجيل الدخول</TabsTrigger>
                  <TabsTrigger value="company">حساب شركة</TabsTrigger>
                  <TabsTrigger value="candidate">حساب باحث</TabsTrigger>
                </TabsList>

                {/* Login Tab */}
                <TabsContent value="login" className="mt-6">
                  <CardTitle className="text-center mb-2">مرحبًا بعودتك</CardTitle>
                  <CardDescription className="text-center">
                    سجل الدخول لمتابعة
                  </CardDescription>
                  <form onSubmit={handleLogin} className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">البريد الإلكتروني</Label>
                      <div className="relative">
                        <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="your@email.com"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          className="pr-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password">كلمة المرور</Label>
                      <div className="relative">
                        <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="••••••••"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          className="pr-10"
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
                      تسجيل الدخول
                    </Button>
                  </form>
                </TabsContent>

                {/* Company Registration */}
                <TabsContent value="company" className="mt-6">
                  <CardTitle className="text-center mb-2">تسجيل حساب شركة</CardTitle>
                  <CardDescription className="text-center">
                    ابدأ بنشر إعلانات التوظيف
                  </CardDescription>
                  <form onSubmit={handleCompanyRegister} className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">اسم الشركة</Label>
                      <div className="relative">
                        <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="company-name"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="pr-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-email">البريد الإلكتروني</Label>
                        <Input
                          id="company-email"
                          type="email"
                          value={companyEmail}
                          onChange={(e) => setCompanyEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company-password">كلمة المرور</Label>
                        <Input
                          id="company-password"
                          type="password"
                          value={companyPassword}
                          onChange={(e) => setCompanyPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-location">الموقع</Label>
                      <Select value={companyLocation} onValueChange={setCompanyLocation}>
                        <SelectTrigger id="company-location">
                          <SelectValue placeholder="اختر الولاية..." />
                        </SelectTrigger>
                        <SelectContent>
                          {algerianStates.map((state) => (
                            <SelectItem key={state} value={state}>{state}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-industry">القطاع</Label>
                      <Input
                        id="company-industry"
                        placeholder="مثال: التكنولوجيا، الصناعة، الخدمات..."
                        value={companyIndustry}
                        onChange={(e) => setCompanyIndustry(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-description">نبذة عن الشركة</Label>
                      <Textarea
                        id="company-description"
                        placeholder="وصف مختصر عن الشركة ونشاطها..."
                        value={companyDescription}
                        onChange={(e) => setCompanyDescription(e.target.value)}
                        className="min-h-[80px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
                      <Building2 className="w-4 h-4 ml-2" />
                      إنشاء حساب شركة
                    </Button>
                  </form>
                </TabsContent>

                {/* Candidate Registration */}
                <TabsContent value="candidate" className="mt-6">
                  <CardTitle className="text-center mb-2">تسجيل حساب باحث عن عمل</CardTitle>
                  <CardDescription className="text-center">
                    ابدأ البحث عن فرصتك المناسبة
                  </CardDescription>
                  <form onSubmit={handleCandidateRegister} className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="candidate-name">الاسم الكامل</Label>
                      <div className="relative">
                        <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="candidate-name"
                          value={candidateName}
                          onChange={(e) => setCandidateName(e.target.value)}
                          className="pr-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="candidate-email">البريد الإلكتروني</Label>
                        <Input
                          id="candidate-email"
                          type="email"
                          value={candidateEmail}
                          onChange={(e) => setCandidateEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="candidate-password">كلمة المرور</Label>
                        <Input
                          id="candidate-password"
                          type="password"
                          value={candidatePassword}
                          onChange={(e) => setCandidatePassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="candidate-phone">رقم الهاتف</Label>
                        <Input
                          id="candidate-phone"
                          type="tel"
                          placeholder="0555123456"
                          value={candidatePhone}
                          onChange={(e) => setCandidatePhone(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="candidate-location">الموقع</Label>
                        <Select value={candidateLocation} onValueChange={setCandidateLocation}>
                          <SelectTrigger id="candidate-location">
                            <SelectValue placeholder="اختر الولاية..." />
                          </SelectTrigger>
                          <SelectContent>
                            {algerianStates.map((state) => (
                              <SelectItem key={state} value={state}>{state}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="candidate-title">المسمى الوظيفي المطلوب</Label>
                      <Input
                        id="candidate-title"
                        placeholder="مثال: مطور ويب، مهندس مدني..."
                        value={candidateTitle}
                        onChange={(e) => setCandidateTitle(e.target.value)}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
                      <User className="w-4 h-4 ml-2" />
                      إنشاء حساب باحث
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>
        </motion.div>

        <p className="text-center text-sm text-gray-600 mt-6">
          بالمتابعة، فإنك توافق على شروط الاستخدام وسياسة الخصوصية
        </p>
      </div>
    </div>
  );
}
