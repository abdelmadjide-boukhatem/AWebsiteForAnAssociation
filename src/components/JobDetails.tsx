import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Job, Company, Application } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { MapPin, Building2, DollarSign, Clock, Briefcase, CheckCircle, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

type JobDetailsProps = {
  job: Job | undefined;
  company: Company | undefined;
  currentUser: any;
  userApplications: Application[];
  onApply: (jobId: string, coverLetter: string) => void;
};

export function JobDetails({ job, company, currentUser, userApplications, onApply }: JobDetailsProps) {
  const [, setLocation] = useLocation();
  const [coverLetter, setCoverLetter] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Job Not Found</h2>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Link href="/jobs">
            <a>
              <Button>Browse All Jobs</Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const hasApplied = userApplications.some(app => app.jobId === job.id);

  const formatSalary = () => {
    if (!job.salaryMin || !job.salaryMax) return 'Salary not specified';
    return `${job.salaryCurrency} ${(job.salaryMin / 1000).toFixed(0)}k - ${(job.salaryMax / 1000).toFixed(0)}k per year`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleApply = () => {
    if (!currentUser) {
      toast.error('Please sign in to apply for jobs');
      setLocation('/login');
      return;
    }

    if (currentUser.type !== 'candidate') {
      toast.error('Only job seekers can apply for jobs');
      return;
    }

    onApply(job.id, coverLetter);
    setIsDialogOpen(false);
    setCoverLetter('');
    toast.success('Application submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <Link href="/jobs">
            <a className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Jobs
            </a>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">{job.title}</CardTitle>
                    <p className="text-gray-600 mb-3">{company?.companyName}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.remote && (
                        <Badge>Remote</Badge>
                      )}
                      <Badge variant="outline" className="capitalize">
                        {job.type.replace('-', ' ')}
                      </Badge>
                      <Badge variant="outline" className="capitalize">
                        {job.experienceLevel}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="w-5 h-5" />
                    <span>{formatSalary()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Briefcase className="w-5 h-5" />
                    <span className="capitalize">{job.type.replace('-', ' ')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span>Posted {formatDate(job.postedDate)}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3">Job Description</h3>
                    <p className="text-gray-600">{job.description}</p>
                  </div>

                  {job.responsibilities.length > 0 && (
                    <div>
                      <h3 className="mb-3">Responsibilities</h3>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {job.requirements.length > 0 && (
                    <div>
                      <h3 className="mb-3">Requirements</h3>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {job.qualifications.length > 0 && (
                    <div>
                      <h3 className="mb-3">Preferred Qualifications</h3>
                      <ul className="space-y-2">
                        {job.qualifications.map((qual, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span>{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Apply for this position</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {hasApplied ? (
                  <div className="text-center py-4">
                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <p className="text-green-600">You have already applied for this position</p>
                    <Link href="/dashboard/candidate">
                      <a>
                        <Button variant="outline" className="w-full mt-4">
                          View Application
                        </Button>
                      </a>
                    </Link>
                  </div>
                ) : (
                  <>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full" size="lg">
                          Apply Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Apply for {job.title}</DialogTitle>
                          <DialogDescription>
                            Submit your application for this position. Your profile and CV will be sent to the company.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                          <div>
                            <Label htmlFor="cover-letter">Cover Letter (Optional)</Label>
                            <Textarea
                              id="cover-letter"
                              placeholder="Tell the employer why you're a great fit for this role..."
                              value={coverLetter}
                              onChange={(e) => setCoverLetter(e.target.value)}
                              rows={6}
                            />
                          </div>
                          <div className="flex gap-3">
                            <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="flex-1">
                              Cancel
                            </Button>
                            <Button onClick={handleApply} className="flex-1">
                              Submit Application
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {!currentUser && (
                      <p className="text-gray-600 text-center">
                        Please{' '}
                        <Link href="/login">
                          <a className="text-blue-600 hover:underline">sign in</a>
                        </Link>
                        {' '}to apply
                      </p>
                    )}
                  </>
                )}

                {company && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="mb-3">About {company.companyName}</h4>
                      <p className="text-gray-600 mb-3">{company.description}</p>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{company.location}</span>
                        </div>
                        {company.size && (
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4" />
                            <span>{company.size} employees</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
