import { Link } from 'wouter';
import { Button } from './ui/button';
import { Heart, User, LogOut, Home, TestTube, Users, Sprout } from 'lucide-react';
import { CharityUser } from '../types/charity';

interface CharityHeaderProps {
  currentUser: CharityUser | null;
  onLogout: () => void;
}

export function CharityHeader({ currentUser, onLogout }: CharityHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="bg-gradient-to-br from-green-500 to-blue-500 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="text-xl text-gray-900">مجتمع العطاء</span>
            </a>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">
              <a className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                <span>الرئيسية</span>
                <Home className="w-4 h-4" />
              </a>
            </Link>
            <Link href="/tests">
              <a className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                <span>الاختبارات</span>
                <TestTube className="w-4 h-4" />
              </a>
            </Link>
            {currentUser && (
              <>
                <Link href="/community">
                  <a className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                    <span>المجتمع</span>
                    <Users className="w-4 h-4" />
                  </a>
                </Link>
                <Link href="/initiatives">
                  <a className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                    <span>المبادرات</span>
                    <Sprout className="w-4 h-4" />
                  </a>
                </Link>
              </>
            )}
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            {currentUser ? (
              <>
                <Link href="/dashboard">
                  <a className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors">
                    <span className="hidden sm:inline">{currentUser.name}</span>
                    <User className="w-4 h-4" />
                  </a>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onLogout}
                  className="flex items-center gap-2"
                >
                  <span className="hidden sm:inline">تسجيل الخروج</span>
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <Link href="/login">
                <a>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    تسجيل الدخول
                  </Button>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
