import { Link } from 'wouter';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Search, Building2, Users, Zap, TrendingUp, Shield, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">
              Connect Talent with Opportunity
            </h1>
            <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
              The premier platform for companies to find exceptional talent and for professionals to discover their dream careers.
              Join thousands of successful matches today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register?type=candidate">
                <a>
                  <Button size="lg">
                    <Users className="w-5 h-5 mr-2" />
                    I'm Looking for a Job
                  </Button>
                </a>
              </Link>
              <Link href="/register?type=company">
                <a>
                  <Button size="lg" variant="outline">
                    <Building2 className="w-5 h-5 mr-2" />
                    I'm Hiring
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjI2MDM1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team collaboration"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features for Candidates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">For Job Seekers</h2>
            <p className="text-gray-600">Everything you need to find your next opportunity</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="mb-2">Easy Job Search</h3>
                <p className="text-gray-600">
                  Browse thousands of job opportunities with advanced filters by location, salary, and experience level.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="mb-2">One-Click Apply</h3>
                <p className="text-gray-600">
                  Save time with instant applications. Your profile and CV are ready to submit with a single click.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="mb-2">Track Applications</h3>
                <p className="text-gray-600">
                  Monitor all your applications in one place and get real-time updates on your application status.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features for Companies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">For Companies</h2>
            <p className="text-gray-600">Powerful tools to find and hire the best talent</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="mb-2">Quick Posting</h3>
                <p className="text-gray-600">
                  Post job openings in minutes with our intuitive form. Add requirements, salary ranges, and benefits easily.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="mb-2">Candidate Database</h3>
                <p className="text-gray-600">
                  Search through qualified candidates using advanced filters for skills, experience, and location.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="mb-2">Application Management</h3>
                <p className="text-gray-600">
                  Review, filter, and manage all applications efficiently. Update candidate statuses and organize your pipeline.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="mb-2">10,000+</div>
              <p className="text-blue-100">Active Jobs</p>
            </div>
            <div>
              <div className="mb-2">50,000+</div>
              <p className="text-blue-100">Registered Candidates</p>
            </div>
            <div>
              <div className="mb-2">5,000+</div>
              <p className="text-blue-100">Companies</p>
            </div>
            <div>
              <div className="mb-2">95%</div>
              <p className="text-blue-100">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join JobConnect today and take the next step in your career journey or find the perfect candidate for your team.
          </p>
          <Link href="/register">
            <a>
              <Button size="lg">Create Free Account</Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
