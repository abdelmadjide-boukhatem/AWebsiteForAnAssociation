import { Link } from 'wouter';
import { Button } from './ui/button';
import { Compass, Home, Users, BookOpen, TreePine, Phone, Menu } from 'lucide-react';
import { useState } from 'react';

export function ScoutsHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white sticky top-0 z-50 shadow-lg border-b-4 border-yellow-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/scouts">
            <a className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-2.5 rounded-full">
                <Compass className="w-7 h-7 text-green-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl">فوج الفتح مديونة</span>
                <span className="text-xs text-yellow-300">الكشافة الإسلامية الجزائرية</span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/scouts">
              <a className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <span>الرئيسية</span>
                <Home className="w-4 h-4" />
              </a>
            </Link>
            <Link href="/scouts/activities">
              <a className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <span>الأنشطة الكشفية</span>
                <TreePine className="w-4 h-4" />
              </a>
            </Link>
            <Link href="/scouts/education">
              <a className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <span>الفرع التربوي</span>
                <BookOpen className="w-4 h-4" />
              </a>
            </Link>
            <Link href="/scouts/members">
              <a className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <span>الأعضاء</span>
                <Users className="w-4 h-4" />
              </a>
            </Link>
            <Link href="/scouts/contact">
              <a className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                <span>اتصل بنا</span>
                <Phone className="w-4 h-4" />
              </a>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-green-900">
              انضم إلينا
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link href="/scouts">
              <a className="block py-2 hover:text-yellow-300">الرئيسية</a>
            </Link>
            <Link href="/scouts/activities">
              <a className="block py-2 hover:text-yellow-300">الأنشطة الكشفية</a>
            </Link>
            <Link href="/scouts/education">
              <a className="block py-2 hover:text-yellow-300">الفرع التربوي</a>
            </Link>
            <Link href="/scouts/members">
              <a className="block py-2 hover:text-yellow-300">الأعضاء</a>
            </Link>
            <Link href="/scouts/contact">
              <a className="block py-2 hover:text-yellow-300">اتصل بنا</a>
            </Link>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-green-900">
              انضم إلينا
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
