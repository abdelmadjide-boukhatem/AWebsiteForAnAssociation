import { Link } from 'wouter';
import { Button } from './ui/button';
import { Briefcase, User, LogOut, Home, Building2, Search } from 'lucide-react';
import { User as JobUser } from '../types/jobs';

interface JobsHeaderProps {
  currentUser: JobUser | null;
  onLogout: () => void;
}

export function JobsHeader({ currentUser, onLogout }: JobsHeaderProps) {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white sticky top-0 z-50 shadow-lg border-b-4 border-yellow-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/jobs">
            <a className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-2 rounded-lg">
                <Briefcase className="w-6 h-6 text-blue-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl">منصة التوظيف</span>
                <span className="text-xs text-yellow-300">فرصتك بين يديك</span>
              </div>
            </a>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/jobs">
              <a className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <span>الرئيسية</span>
                <Home className="w-4 h-4" />
              </a>
            </Link>
            <Link href="/jobs/browse">
              <a className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <span>تصفح الوظائف</span>
                <Search className="w-4 h-4" />
              </a>
            </Link>
            <Link href="/jobs/companies">
              <a className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <span>الشركات</span>
                <Building2 className="w-4 h-4" />
              </a>
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            {currentUser ? (
              <>
                <Link href={currentUser.type === 'company' ? '/jobs/company-dashboard' : '/jobs/candidate-dashboard'}>
                  <a className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                    <span className="hidden sm:inline">{currentUser.name}</span>
                    <User className="w-4 h-4" />
                  </a>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onLogout}
                  className="flex items-center gap-2 bg-white text-blue-900 hover:bg-yellow-400 border-yellow-400"
                >
                  <span className="hidden sm:inline">تسجيل الخروج</span>
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <>
                <Link href="/jobs/auth">
                  <a>
                    <Button size="sm" variant="outline" className="bg-white text-blue-900 hover:bg-yellow-400 border-yellow-400">
                      تسجيل الدخول
                    </Button>
                  </a>
                </Link>
                <Link href="/jobs/auth">
                  <a>
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
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
