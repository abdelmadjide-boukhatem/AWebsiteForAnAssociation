import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Mail, Lock, Chrome, Gamepad2 } from 'lucide-react';

export default function GamingLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBuZW9uJTIwZGFya3xlbnwxfHx8fDE3NjI3NzkxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Neon Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Login Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        {/* Glass Card */}
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full shadow-lg shadow-purple-500/50"
            >
              <Gamepad2 className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-white mb-2">Welcome Back</h1>
            <p className="text-gray-400">Sign in to continue your gaming journey</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="gamer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/50 transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-200">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/50 transition-all"
                  required
                />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-lg shadow-purple-500/30 transition-all"
              >
                Sign In
              </Button>
            </motion.div>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin('Google')}
                className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all"
              >
                <Chrome className="w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin('Xbox')}
                className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.102 21.033A11.947 11.947 0 0012 24a11.96 11.96 0 007.902-2.967c1.877-1.912-4.316-8.709-7.902-11.417-3.582 2.708-9.779 9.505-7.898 11.417zm11.16-14.406c2.5 2.961 7.484 10.313 6.076 12.912A11.942 11.942 0 0024 12.004a11.95 11.95 0 00-3.57-8.536 4.02 4.02 0 00-.758-.506c-1.941-.868-3.023 1.856-4.41 3.665zm-6.524 0C7.35 4.818 6.268 2.094 4.327 2.962a4.02 4.02 0 00-.758.506A11.95 11.95 0 000 12.004a11.942 11.942 0 002.662 7.535c-1.408-2.599 3.576-9.951 6.076-12.912z"/>
                </svg>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin('Steam')}
                className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 00-9.771 12.054l4.777 1.958a2.83 2.83 0 011.585-.49c.047 0 .094.001.14.004l2.127-3.071V12.4a3.8 3.8 0 117.608 0 3.8 3.8 0 01-3.8 3.8h-.087l-3.037 2.142c0 .046.002.092.002.138a2.83 2.83 0 01-2.83 2.83 2.83 2.83 0 01-2.768-2.279l-3.42-1.402A10 10 0 1012 2zm-4.25 17.15l1.1.45a2.127 2.127 0 003.95-1.117 2.127 2.127 0 00-2.125-2.125c-.066 0-.131.003-.196.008l-1.14-.467a1.422 1.422 0 10-1.589 3.25zm9.79-6.95a2.533 2.533 0 01-2.533-2.533 2.533 2.533 0 012.533-2.533 2.533 2.533 0 012.533 2.533 2.533 2.533 0 01-2.533 2.533zm0-4.493a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92z"/>
                </svg>
              </Button>
            </motion.div>
          </div>

          {/* Sign Up Call to Action */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <button
                type="button"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Create one now
              </button>
            </p>
            <p className="text-gray-500 mt-2">
              Start downloading games instantly
            </p>
          </div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center text-gray-500"
        >
          <p>Secure gaming platform • Instant access</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
