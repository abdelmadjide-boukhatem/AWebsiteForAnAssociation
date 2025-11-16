import { useState } from 'react';
import { Link } from 'wouter';
import { Application, Job, Candidate, Company as CompanyType } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { Building2, Plus, Briefcase, Users, Eye, MapPin, DollarSign, FileText } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

type CompanyDashboardProps = {
  company: CompanyType | undefined;
  jobs: Job[];
  applications: Application[];
  candidates: Candidate[];
  onPostJob: (jobData: Partial<Job>) => void;
  onUpdateApplicationStatus: (applicationId: string, status: Application['status']) => void;
};

export function CompanyDashboard({
  company,
  jobs,
  applications,
  candidates,
  onPostJob,
  onUpdateApplicationStatus,
}: CompanyDashboardProps) {
  const [isPostJobOpen, setIsPostJobOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [jobForm, setJobForm] = useState({
    title: '',
    description: '',
    location: '',
    type: 'full-time' as const,
    experienceLevel: 'mid' as const,
    salaryMin: '',
    salaryMax: '',
    remote: false,
    requirements: '',
    qualifications: '',
    responsibilities: '',
  });

  const getCandidate = (candidateId: string) => candidates.find(c => c.id === candidateId);

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

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    
    const requirements = jobForm.requirements
      .split('\n')
      .filter(r => r.trim())
      .map(r => r.trim());
    const qualifications = jobForm.qualifications
      .split('\n')
      .filter(q => q.trim())
      .map(q => q.trim());
    const responsibilities = jobForm.responsibilities
      .split('\n')
      .filter(r => r.trim())
      .map(r => r.trim());

    onPostJob({
      title: jobForm.title,
      description: jobForm.description,
      location: jobForm.location,
      type: jobForm.type,
      experienceLevel: jobForm.experienceLevel,
      salaryMin: jobForm.salaryMin ? parseInt(jobForm.salaryMin) : undefined,
      salaryMax: jobForm.salaryMax ? parseInt(jobForm.salaryMax) : undefined,
      remote: jobForm.remote,
      requirements,
      qualifications,
      responsibilities,
    });

    setIsPostJobOpen(false);
    setJobForm({
      title: '',
      description: '',
      location: '',
      type: 'full-time',
      experienceLevel: 'mid',
      salaryMin: '',
      salaryMax: '',
      remote: false,
      requirements: '',
      qualifications: '',
      responsibilities: '',
    });
    toast.success('Job posted successfully!');
  };

  const updateStatus = (applicationId: string, status: Application['status']) => {
    onUpdateApplicationStatus(applicationId, status);
    toast.success(`Application status updated to ${status}`);
  };

  const activeJobs = jobs.filter(j => j.status === 'active');
  const closedJobs = jobs.filter(j => j.status === 'closed');

  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Company Profile Not Found</h2>
          <p className="text-gray-600">Please complete your company profile to access the dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b py-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-2">Company Dashboard</h1>
          <p className="text-gray-600">Manage your job postings and applications</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-center">{company.companyName}</CardTitle>
                {company.location && (
                  <p className="text-center text-gray-600">{company.location}</p>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <Dialog open={isPostJobOpen} onOpenChange={setIsPostJobOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Post New Job
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Post a New Job</DialogTitle>
                      <DialogDescription>
                        Fill in the details below to create a new job posting.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handlePostJob} className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="title">Job Title *</Label>
                        <Input
                          id="title"
                          value={jobForm.title}
                          onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="description">Description *</Label>
                        <Textarea
                          id="description"
                          value={jobForm.description}
                          onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                          required
                          rows={4}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="location">Location *</Label>
                          <Input
                            id="location"
                            value={jobForm.location}
                            onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="type">Job Type *</Label>
                          <Select value={jobForm.type} onValueChange={(value: any) => setJobForm({ ...jobForm, type: value })}>
                            <SelectTrigger id="type">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="full-time">Full Time</SelectItem>
                              <SelectItem value="part-time">Part Time</SelectItem>
                              <SelectItem value="contract">Contract</SelectItem>
                              <SelectItem value="internship">Internship</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="experience">Experience Level *</Label>
                          <Select value={jobForm.experienceLevel} onValueChange={(value: any) => setJobForm({ ...jobForm, experienceLevel: value })}>
                            <SelectTrigger id="experience">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="entry">Entry Level</SelectItem>
                              <SelectItem value="mid">Mid Level</SelectItem>
                              <SelectItem value="senior">Senior</SelectItem>
                              <SelectItem value="lead">Lead</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="remote"
                            checked={jobForm.remote}
                            onChange={(e) => setJobForm({ ...jobForm, remote: e.target.checked })}
                            className="w-4 h-4"
                          />
                          <Label htmlFor="remote" className="cursor-pointer">Remote Position</Label>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="salaryMin">Min Salary (USD)</Label>
                          <Input
                            id="salaryMin"
                            type="number"
                            value={jobForm.salaryMin}
                            onChange={(e) => setJobForm({ ...jobForm, salaryMin: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="salaryMax">Max Salary (USD)</Label>
                          <Input
                            id="salaryMax"
                            type="number"
                            value={jobForm.salaryMax}
                            onChange={(e) => setJobForm({ ...jobForm, salaryMax: e.target.value })}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="requirements">Requirements (one per line)</Label>
                        <Textarea
                          id="requirements"
                          value={jobForm.requirements}
                          onChange={(e) => setJobForm({ ...jobForm, requirements: e.target.value })}
                          rows={4}
                          placeholder="5+ years experience&#10;Bachelor's degree&#10;Strong communication skills"
                        />
                      </div>
                      <div>
                        <Label htmlFor="qualifications">Preferred Qualifications (one per line)</Label>
                        <Textarea
                          id="qualifications"
                          value={jobForm.qualifications}
                          onChange={(e) => setJobForm({ ...jobForm, qualifications: e.target.value })}
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="responsibilities">Responsibilities (one per line)</Label>
                        <Textarea
                          id="responsibilities"
                          value={jobForm.responsibilities}
                          onChange={(e) => setJobForm({ ...jobForm, responsibilities: e.target.value })}
                          rows={4}
                        />
                      </div>
                      <div className="flex gap-3">
                        <Button type="button" variant="outline" onClick={() => setIsPostJobOpen(false)} className="flex-1">
                          Cancel
                        </Button>
                        <Button type="submit" className="flex-1">
                          Post Job
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>

                <Link href="/profile">
                  <a>
                    <Button variant="outline" className="w-full">
                      Edit Profile
                    </Button>
                  </a>
                </Link>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Jobs</span>
                  <span>{activeJobs.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Applications</span>
                  <span>{applications.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pending Review</span>
                  <span>{applications.filter(a => a.status === 'pending').length}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="jobs">
              <TabsList>
                <TabsTrigger value="jobs">My Jobs ({activeJobs.length})</TabsTrigger>
                <TabsTrigger value="applications">Applications ({applications.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="jobs" className="space-y-4 mt-6">
                {activeJobs.length === 0 ? (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="mb-2">No Active Jobs</h3>
                      <p className="text-gray-600 mb-6">Start by posting your first job opening.</p>
                      <Button onClick={() => setIsPostJobOpen(true)}>
                        <Plus className="w-4 h-4 mr-2" />
                        Post a Job
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  activeJobs.map(job => {
                    const jobApplications = applications.filter(a => a.jobId === job.id);
                    return (
                      <Card key={job.id}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="flex-1">
                              <Link href={`/jobs/${job.id}`}>
                                <a className="hover:underline">
                                  <h3 className="mb-2">{job.title}</h3>
                                </a>
                              </Link>
                              
                              <div className="flex flex-wrap gap-4 text-gray-600 mb-3">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="w-4 h-4" />
                                  <span>{jobApplications.length} applications</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Eye className="w-4 h-4" />
                                  <span>Posted {formatDate(job.postedDate)}</span>
                                </div>
                              </div>

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
                            
                            <div className="flex gap-2">
                              <Link href={`/jobs/${job.id}`}>
                                <a>
                                  <Button variant="outline">
                                    <Eye className="w-4 h-4 md:mr-2" />
                                    <span className="hidden md:inline">View</span>
                                  </Button>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })
                )}
              </TabsContent>

              <TabsContent value="applications" className="space-y-4 mt-6">
                {applications.length === 0 ? (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="mb-2">No Applications Yet</h3>
                      <p className="text-gray-600">Applications will appear here once candidates apply to your jobs.</p>
                    </CardContent>
                  </Card>
                ) : (
                  applications.map(application => {
                    const candidate = getCandidate(application.candidateId);
                    const job = jobs.find(j => j.id === application.jobId);

                    if (!candidate || !job) return null;

                    return (
                      <Card key={application.id}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                  <Users className="w-6 h-6 text-gray-600" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="mb-1">{candidate.fullName}</h3>
                                  {candidate.title && (
                                    <p className="text-gray-600 mb-2">{candidate.title}</p>
                                  )}
                                  <p className="text-gray-600 mb-3">Applied for: {job.title}</p>
                                  
                                  <div className="flex flex-wrap gap-4 text-gray-600 mb-3">
                                    <div className="flex items-center gap-1">
                                      <MapPin className="w-4 h-4" />
                                      <span>{candidate.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <FileText className="w-4 h-4" />
                                      <span>Applied {formatDate(application.appliedDate)}</span>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-2 mb-3">
                                    <span className="text-gray-600">Status:</span>
                                    <Select
                                      value={application.status}
                                      onValueChange={(value: Application['status']) => updateStatus(application.id, value)}
                                    >
                                      <SelectTrigger className="w-40">
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="pending">Pending</SelectItem>
                                        <SelectItem value="reviewing">Reviewing</SelectItem>
                                        <SelectItem value="interview">Interview</SelectItem>
                                        <SelectItem value="accepted">Accepted</SelectItem>
                                        <SelectItem value="rejected">Rejected</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>

                                  {candidate.skills.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                      {candidate.skills.slice(0, 5).map((skill, index) => (
                                        <Badge key={index} variant="secondary">{skill}</Badge>
                                      ))}
                                      {candidate.skills.length > 5 && (
                                        <Badge variant="secondary">+{candidate.skills.length - 5} more</Badge>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            <Button
                              variant="outline"
                              onClick={() => setSelectedApplication(application)}
                            >
                              View Profile
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Candidate Profile Dialog */}
      <Dialog open={!!selectedApplication} onOpenChange={() => setSelectedApplication(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedApplication && (() => {
            const candidate = getCandidate(selectedApplication.candidateId);
            if (!candidate) return null;

            return (
              <>
                <DialogHeader>
                  <DialogTitle>{candidate.fullName}</DialogTitle>
                  <DialogDescription>{candidate.title}</DialogDescription>
                </DialogHeader>
                <div className="space-y-6 mt-4">
                  <div>
                    <h4 className="mb-2">Contact Information</h4>
                    <p className="text-gray-600">Location: {candidate.location}</p>
                    {candidate.phone && <p className="text-gray-600">Phone: {candidate.phone}</p>}
                  </div>

                  {candidate.summary && (
                    <div>
                      <h4 className="mb-2">Summary</h4>
                      <p className="text-gray-600">{candidate.summary}</p>
                    </div>
                  )}

                  {candidate.skills.length > 0 && (
                    <div>
                      <h4 className="mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {candidate.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {candidate.experience.length > 0 && (
                    <div>
                      <h4 className="mb-3">Experience</h4>
                      <div className="space-y-4">
                        {candidate.experience.map((exp) => (
                          <div key={exp.id} className="border-l-2 border-blue-600 pl-4">
                            <h5>{exp.position}</h5>
                            <p className="text-gray-600">{exp.company}</p>
                            <p className="text-gray-600">
                              {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                            </p>
                            <p className="mt-2">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {candidate.education.length > 0 && (
                    <div>
                      <h4 className="mb-3">Education</h4>
                      <div className="space-y-4">
                        {candidate.education.map((edu) => (
                          <div key={edu.id} className="border-l-2 border-green-600 pl-4">
                            <h5>{edu.degree} in {edu.field}</h5>
                            <p className="text-gray-600">{edu.institution}</p>
                            <p className="text-gray-600">
                              {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedApplication.coverLetter && (
                    <div>
                      <h4 className="mb-2">Cover Letter</h4>
                      <p className="text-gray-600">{selectedApplication.coverLetter}</p>
                    </div>
                  )}
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
}
