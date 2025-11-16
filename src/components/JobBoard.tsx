import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { Job, Company } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MapPin, Building2, DollarSign, Clock, Briefcase } from 'lucide-react';

type JobBoardProps = {
  jobs: Job[];
  companies: Company[];
};

export function JobBoard({ jobs, companies }: JobBoardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [experienceFilter, setExperienceFilter] = useState('all');

  const getCompany = (companyId: string) => {
    return companies.find(c => c.id === companyId);
  };

  const formatSalary = (job: Job) => {
    if (!job.salaryMin || !job.salaryMax) return 'Salary not specified';
    return `${job.salaryCurrency} ${(job.salaryMin / 1000).toFixed(0)}k - ${(job.salaryMax / 1000).toFixed(0)}k`;
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const locations = useMemo(() => {
    const uniqueLocations = new Set(jobs.map(job => job.location));
    return Array.from(uniqueLocations);
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = searchQuery === '' || 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        getCompany(job.companyId)?.companyName.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLocation = locationFilter === 'all' || job.location === locationFilter;
      const matchesType = typeFilter === 'all' || job.type === typeFilter;
      const matchesExperience = experienceFilter === 'all' || job.experienceLevel === experienceFilter;
      
      return matchesSearch && matchesLocation && matchesType && matchesExperience && job.status === 'active';
    });
  }, [jobs, searchQuery, locationFilter, typeFilter, experienceFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b py-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-2">Browse Jobs</h1>
          <p className="text-gray-600">Find your next opportunity from {jobs.length} available positions</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="search">Search</Label>
                  <Input
                    id="search"
                    placeholder="Job title or company..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="location">Location</Label>
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger id="location">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      {locations.map(location => (
                        <SelectItem key={location} value={location}>{location}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="type">Job Type</Label>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger id="type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="full-time">Full Time</SelectItem>
                      <SelectItem value="part-time">Part Time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="experience">Experience Level</Label>
                  <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                    <SelectTrigger id="experience">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior</SelectItem>
                      <SelectItem value="lead">Lead</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchQuery('');
                    setLocationFilter('all');
                    setTypeFilter('all');
                    setExperienceFilter('all');
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-gray-600 mb-4">
              {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
            </div>

            {filteredJobs.map(job => {
              const company = getCompany(job.companyId);
              return (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
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
                                <Briefcase className="w-4 h-4" />
                                <span className="capitalize">{job.type.replace('-', ' ')}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                <span>{formatSalary(job)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{formatDate(job.postedDate)}</span>
                              </div>
                            </div>

                            <p className="text-gray-600 mb-3 line-clamp-2">{job.description}</p>

                            <div className="flex flex-wrap gap-2">
                              {job.remote && (
                                <Badge variant="secondary">Remote</Badge>
                              )}
                              <Badge variant="outline" className="capitalize">
                                {job.experienceLevel}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <Link href={`/jobs/${job.id}`}>
                        <a>
                          <Button>View Details</Button>
                        </a>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {filteredJobs.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-gray-600">No jobs found matching your criteria. Try adjusting your filters.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
