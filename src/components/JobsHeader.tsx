import { Link } from 'wouter';
import { Button } from './ui/button';
import { Briefcase, User, LogOut, Home, Building2, Search, Shield } from 'lucide-react';
import { User as JobUser } from '../types/jobs';

interface JobsHeaderProps {
  currentUser: JobUser | null;
  onLogout: () => void;
}

export function JobsHeader({ currentUser, onLogout }: JobsHeaderProps) {
  // Check if user is admin
  const isAdmin = typeof window !== 'undefined' && localStorage.getItem('jobsIsAdmin') === 'true';
  
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white sticky top-0 z-50 shadow-2xl border-b border-amber-500/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/jobs">
            <a className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-3 rounded-xl shadow-lg shadow-amber-500/30">
                <Briefcase className="w-7 h-7 text-slate-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">منصة التوظيف</span>
                <span className="text-sm text-amber-400 font-medium">فرصتك بين يديك</span>
              </div>
            </a>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/jobs">
              <a className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                <span className="group-hover:text-amber-400 transition-colors">الرئيسية</span>
                <Home className="w-5 h-5 group-hover:text-amber-400 transition-colors" />
              </a>
            </Link>
            <Link href="/jobs/browse">
              <a className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                <span className="group-hover:text-amber-400 transition-colors">تصفح الوظائف</span>
                <Search className="w-5 h-5 group-hover:text-amber-400 transition-colors" />
              </a>
            </Link>
            {isAdmin && (
              <Link href="/jobs/admin">
                <a className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 transition-all duration-300 group">
                  <span className="text-amber-400 group-hover:text-amber-300 transition-colors">الإدارة</span>
                  <Shield className="w-5 h-5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                </a>
              </Link>
            )}
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            {currentUser ? (
              <>
                <Link href={isAdmin ? '/jobs/admin' : currentUser.type === 'company' ? '/jobs/company-dashboard' : '/jobs/candidate-dashboard'}>
                  <a className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition-all duration-300 group">
                    <span className="hidden sm:inline group-hover:text-amber-400 transition-colors">{currentUser.name}</span>
                    {isAdmin ? <Shield className="w-5 h-5 text-amber-400" /> : <User className="w-5 h-5 group-hover:text-amber-400 transition-colors" />}
                  </a>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onLogout}
                  className="flex items-center gap-2 bg-white/95 text-slate-900 hover:bg-amber-400 hover:text-slate-900 border-0 shadow-lg hover:shadow-amber-400/50 transition-all duration-300"
                >
                  <span className="hidden sm:inline font-semibold">تسجيل الخروج</span>
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <>
                <Link href="/jobs/auth">
                  <a>
                    <Button size="sm" variant="outline" className="bg-white/95 text-slate-900 hover:bg-white border-0 shadow-md font-semibold">
                      تسجيل الدخول
                    </Button>
                  </a>
                </Link>
                <Link href="/jobs/auth">
                  <a>
                    <Button size="sm" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 border-0 shadow-lg shadow-amber-500/30 font-semibold">
                      حساب جديد
                    </Button>
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
