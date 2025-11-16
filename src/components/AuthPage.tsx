import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Building2, User } from 'lucide-react';

type AuthPageProps = {
  onLogin: (email: string, password: string) => void;
  onRegister: (email: string, password: string, name: string, type: 'company' | 'candidate') => void;
  initialType?: 'company' | 'candidate';
};

export function AuthPage({ onLogin, onRegister, initialType }: AuthPageProps) {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState<'company' | 'candidate'>(initialType || 'candidate');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(email, password, name, userType);
  };

  const quickLogin = (type: 'company' | 'candidate') => {
    if (type === 'company') {
      onLogin('demo.company@example.com', 'password');
    } else {
      onLogin('demo.candidate@example.com', 'password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="container mx-auto max-w-md">
        <div className="text-center mb-8">
          <h1 className="mb-2">Welcome to JobConnect</h1>
          <p className="text-gray-600">Sign in or create an account to get started</p>
        </div>

        <Card>
          <CardHeader>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <CardTitle className="mt-4">Sign In</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
                
                <form onSubmit={handleLogin} className="space-y-4 mt-6">
                  <div>
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-2 text-gray-500">Quick Demo Login</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => quickLogin('candidate')}
                      className="flex items-center gap-2"
                    >
                      <User className="w-4 h-4" />
                      Candidate
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => quickLogin('company')}
                      className="flex items-center gap-2"
                    >
                      <Building2 className="w-4 h-4" />
                      Company
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="register">
                <CardTitle className="mt-4">Create Account</CardTitle>
                <CardDescription>Sign up to start your journey</CardDescription>
                
                <form onSubmit={handleRegister} className="space-y-4 mt-6">
                  <div>
                    <Label>I am a</Label>
                    <RadioGroup value={userType} onValueChange={(value: string) => setUserType(value as 'company' | 'candidate')}>
                      <div className="flex items-center space-x-2 border rounded-lg p-3">
                        <RadioGroupItem value="candidate" id="candidate" />
                        <Label htmlFor="candidate" className="flex items-center gap-2 cursor-pointer flex-1">
                          <User className="w-4 h-4" />
                          Job Seeker
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-3">
                        <RadioGroupItem value="company" id="company" />
                        <Label htmlFor="company" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Building2 className="w-4 h-4" />
                          Company / Employer
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="register-name">
                      {userType === 'company' ? 'Company Name' : 'Full Name'}
                    </Label>
                    <Input
                      id="register-name"
                      type="text"
                      placeholder={userType === 'company' ? 'Acme Inc.' : 'John Doe'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
