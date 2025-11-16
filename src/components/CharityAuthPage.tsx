import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Heart, Mail, Lock, User } from 'lucide-react';
import { motion } from 'motion/react';

interface CharityAuthPageProps {
  onLogin: (email: string, password: string) => void;
  onRegister: (email: string, password: string, name: string) => void;
}

export function CharityAuthPage({ onLogin, onRegister }: CharityAuthPageProps) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(loginEmail, loginPassword);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(registerEmail, registerPassword, registerName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mb-4">
            <Heart className="w-8 h-8 text-white" fill="white" />
          </div>
          <h1 className="text-3xl mb-2 text-gray-900">انضم إلى مجتمع العطاء</h1>
          <p className="text-gray-600">تواصل مع أشخاص مهتمين بإحداث فرق</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="border-2 shadow-xl">
            <CardHeader>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">تسجيل الدخول</TabsTrigger>
                  <TabsTrigger value="register">التسجيل</TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="mt-6">
                  <CardTitle className="text-center mb-2">مرحبًا بعودتك</CardTitle>
                  <CardDescription className="text-center">
                    سجل الدخول لمتابعة رحلتك
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

                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      تسجيل الدخول
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="register" className="mt-6">
                  <CardTitle className="text-center mb-2">إنشاء حساب</CardTitle>
                  <CardDescription className="text-center">
                    ابدأ في إحداث فرق اليوم
                  </CardDescription>
                  <form onSubmit={handleRegister} className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="register-name">الاسم الكامل</Label>
                      <div className="relative">
                        <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="register-name"
                          type="text"
                          placeholder="اسمك"
                          value={registerName}
                          onChange={(e) => setRegisterName(e.target.value)}
                          className="pr-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-email">البريد الإلكتروني</Label>
                      <div className="relative">
                        <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="your@email.com"
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                          className="pr-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-password">كلمة المرور</Label>
                      <div className="relative">
                        <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="register-password"
                          type="password"
                          placeholder="••••••••"
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          className="pr-10"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      إنشاء حساب
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>
        </motion.div>

        <p className="text-center text-sm text-gray-600 mt-6">
          بالمتابعة، فإنك توافق على التزامنا بالتعاطف والثقة والتأثير الإيجابي
        </p>
      </div>
    </div>
  );
}
