import { Link } from 'wouter';
import { Application, Job, Company, Candidate } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { FileText, Briefcase, MapPin, Building2, Clock, User } from 'lucide-react';

type CandidateDashboardProps = {
  candidate: Candidate | undefined;
  applications: Application[];
  jobs: Job[];
  companies: Company[];
};

export function CandidateDashboard({ candidate, applications, jobs, companies }: CandidateDashboardProps) {
  const getJob = (jobId: string) => jobs.find(j => j.id === jobId);
  const getCompany = (companyId: string) => companies.find(c => c.id === companyId);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const getStatusColor = (status: Application['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'reviewing':
        return 'bg-blue-100 text-blue-800';
      case 'interview':
        return 'bg-purple-100 text-purple-800';
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const sortedApplications = [...applications].sort((a, b) => 
    b.appliedDate.getTime() - a.appliedDate.getTime()
  );

  if (!candidate) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Profile Not Found</h2>
          <p className="text-gray-600">Please complete your profile to access the dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b py-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-2">My Dashboard</h1>
          <p className="text-gray-600">Track your applications and manage your profile</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-center">{candidate.fullName}</CardTitle>
                {candidate.title && (
                  <p className="text-center text-gray-600">{candidate.title}</p>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {candidate.location && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{candidate.location}</span>
                  </div>
                )}
                
                <Separator />

                <div>
                  <p className="text-gray-600 mb-2">Profile Completion</p>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-gray-600 mt-1">85% Complete</p>
                </div>

                <Separator />

                <Link href="/profile">
                  <a>
                    <Button variant="outline" className="w-full">
                      Edit Profile
                    </Button>
                  </a>
                </Link>
                <Link href="/jobs">
                  <a>
                    <Button className="w-full">
                      Browse Jobs
                    </Button>
                  </a>
                </Link>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Applications</span>
                  <span>{applications.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">In Review</span>
                  <span>{applications.filter(a => a.status === 'reviewing').length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Interviews</span>
                  <span>{applications.filter(a => a.status === 'interview').length}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="applications">
              <TabsList>
                <TabsTrigger value="applications">My Applications</TabsTrigger>
                <TabsTrigger value="profile">Profile Overview</TabsTrigger>
              </TabsList>

              <TabsContent value="applications" className="space-y-4 mt-6">
                {sortedApplications.length === 0 ? (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="mb-2">No Applications Yet</h3>
                      <p className="text-gray-600 mb-6">Start applying to jobs to see your applications here.</p>
                      <Link href="/jobs">
                        <a>
                          <Button>Browse Jobs</Button>
                        </a>
                      </Link>
                    </CardContent>
                  </Card>
                ) : (
                  sortedApplications.map(application => {
                    const job = getJob(application.jobId);
                    const company = job ? getCompany(job.companyId) : undefined;

                    if (!job) return null;

                    return (
                      <Card key={application.id}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <Building2 className="w-6 h-6 text-gray-600" />
                                </div>
                                <div className="flex-1">
                                  <Link href={`/jobs/${job.id}`}>
                                    <a className="hover:underline">
                                      <h3 className="mb-1">{job.title}</h3>
                                    </a>
                                  </Link>
                                  <p className="text-gray-600 mb-3">{company?.companyName}</p>
                                  
                                  <div className="flex flex-wrap gap-4 text-gray-600 mb-3">
                                    <div className="flex items-center gap-1">
                                      <MapPin className="w-4 h-4" />
                                      <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Clock className="w-4 h-4" />
                                      <span>Applied {formatDate(application.appliedDate)}</span>
                                    </div>
                                  </div>

                                  <Badge className={getStatusColor(application.status) + ' capitalize'}>
                                    {application.status}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            
                            <Link href={`/jobs/${job.id}`}>
                              <a>
                                <Button variant="outline">View Job</Button>
                              </a>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })
                )}
              </TabsContent>

              <TabsContent value="profile" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-gray-600">Full Name</p>
                        <p>{candidate.fullName}</p>
                      </div>
                      {candidate.phone && (
                        <div>
                          <p className="text-gray-600">Phone</p>
                          <p>{candidate.phone}</p>
                        </div>
                      )}
                      {candidate.location && (
                        <div>
                          <p className="text-gray-600">Location</p>
                          <p>{candidate.location}</p>
                        </div>
                      )}
                      {candidate.summary && (
                        <div>
                          <p className="text-gray-600">Summary</p>
                          <p>{candidate.summary}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {candidate.skills.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Skills</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {candidate.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {candidate.experience.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Experience</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {candidate.experience.map((exp) => (
                          <div key={exp.id} className="border-l-2 border-blue-600 pl-4">
                            <h4>{exp.position}</h4>
                            <p className="text-gray-600">{exp.company}</p>
                            <p className="text-gray-600">
                              {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                            </p>
                            <p className="mt-2">{exp.description}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  )}

                  {candidate.education.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Education</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {candidate.education.map((edu) => (
                          <div key={edu.id} className="border-l-2 border-green-600 pl-4">
                            <h4>{edu.degree} in {edu.field}</h4>
                            <p className="text-gray-600">{edu.institution}</p>
                            <p className="text-gray-600">
                              {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                            </p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  )}

                  {candidate.cvFileName && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Resume/CV</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-3">
                          <FileText className="w-8 h-8 text-blue-600" />
                          <div>
                            <p>{candidate.cvFileName}</p>
                            <p className="text-gray-600">Uploaded</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
