import { Link } from 'wouter';
import { Building2, User, Briefcase, LogOut, Menu } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

type HeaderProps = {
  currentUser: any;
  onLogout: () => void;
};

export function Header({ currentUser, onLogout }: HeaderProps) {
  const NavLinks = () => (
    <>
      <Link href="/jobs">
        <a className="hover:opacity-70 transition-opacity">Jobs</a>
      </Link>
      {currentUser?.type === 'candidate' && (
        <Link href="/dashboard/candidate">
          <a className="hover:opacity-70 transition-opacity">My Applications</a>
        </Link>
      )}
      {currentUser?.type === 'company' && (
        <Link href="/dashboard/company">
          <a className="hover:opacity-70 transition-opacity">Dashboard</a>
        </Link>
      )}
    </>
  );

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <Briefcase className="w-6 h-6" />
            <span>JobConnect</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-3">
          {currentUser ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
                    {currentUser.type === 'company' ? (
                      <Building2 className="w-4 h-4" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                    {currentUser.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href={`/dashboard/${currentUser.type}`}>
                      <a className="flex items-center gap-2 w-full">Dashboard</a>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <a className="flex items-center gap-2 w-full">Profile</a>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onLogout} className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col gap-4 mt-8">
                    <div className="flex items-center gap-2 pb-4 border-b">
                      {currentUser.type === 'company' ? (
                        <Building2 className="w-5 h-5" />
                      ) : (
                        <User className="w-5 h-5" />
                      )}
                      <span>{currentUser.name}</span>
                    </div>
                    <Link href="/jobs">
                      <a className="py-2">Jobs</a>
                    </Link>
                    {currentUser.type === 'candidate' && (
                      <Link href="/dashboard/candidate">
                        <a className="py-2">My Applications</a>
                      </Link>
                    )}
                    {currentUser.type === 'company' && (
                      <Link href="/dashboard/company">
                        <a className="py-2">Dashboard</a>
                      </Link>
                    )}
                    <Link href="/profile">
                      <a className="py-2">Profile</a>
                    </Link>
                    <Button onClick={onLogout} variant="destructive" className="mt-4">
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <a>
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </a>
              </Link>
              <Link href="/register">
                <a>
                  <Button size="sm">Get Started</Button>
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
