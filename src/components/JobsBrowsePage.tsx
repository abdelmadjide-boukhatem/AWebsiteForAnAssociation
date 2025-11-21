import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Search, MapPin, Building2, Clock, Users, Briefcase, Filter } from 'lucide-react';
import { motion } from 'motion/react';
import { mockJobs, algerianStates } from '../lib/jobs-data';

export function JobsBrowsePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const getJobTypeLabel = (type: string) => {
    switch (type) {
      case 'full-time': return 'دوام كامل';
      case 'part-time': return 'دوام جزئي';
      case 'contract': return 'عقد مؤقت';
      case 'remote': return 'عن بُعد';
      default: return type;
    }
  };

  const filteredJobs = useMemo(() => {
    let filtered = [...mockJobs];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Location filter
    if (locationFilter && locationFilter !== 'all') {
      filtered = filtered.filter(job =>
        job.location.includes(locationFilter)
      );
    }

    // Type filter
    if (typeFilter && typeFilter !== 'all') {
      filtered = filtered.filter(job => job.type === typeFilter);
    }

    // Sorting
    if (sortBy === 'recent') {
      filtered.sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime());
    } else if (sortBy === 'applicants') {
      filtered.sort((a, b) => b.applicants - a.applicants);
    }

    return filtered;
  }, [searchQuery, locationFilter, typeFilter, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-amber-50/20 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">تصفح الوظائف</h1>
          <p className="text-2xl text-slate-600 font-semibold">اكتشف أفضل فرص العمل المتاحة</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-12 border-2 border-slate-200"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl">
              <Filter className="w-6 h-6 text-slate-900" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">فلتر النتائج</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative md:col-span-2">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="ابحث عن وظيفة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 h-12"
              />
            </div>

            {/* Location */}
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="الموقع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">كل المواقع</SelectItem>
                {algerianStates.map((state) => (
                  <SelectItem key={state} value={state}>{state}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Job Type */}
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="نوع العقد" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">كل الأنواع</SelectItem>
                <SelectItem value="full-time">دوام كامل</SelectItem>
                <SelectItem value="part-time">دوام جزئي</SelectItem>
                <SelectItem value="contract">عقد مؤقت</SelectItem>
                <SelectItem value="remote">عن بُعد</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div className="text-gray-600">
              <span className="font-semibold text-blue-900">{filteredJobs.length}</span> فرصة عمل متاحة
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="ترتيب حسب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">الأحدث</SelectItem>
                <SelectItem value="applicants">الأكثر طلبًا</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Jobs Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/jobs/${job.id}`}>
                  <a>
                    <Card className="h-full border-2 hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-blue-900" />
                          </div>
                          <Badge className="bg-blue-900 text-white">
                            {getJobTypeLabel(job.type)}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl line-clamp-2 text-right hover:text-blue-700 transition-colors">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-right">
                          <div className="flex items-center justify-end gap-2 text-blue-900">
                            <span>{job.companyName}</span>
                            <Building2 className="w-4 h-4" />
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-end gap-2 text-gray-600">
                            <span>{job.location}</span>
                            <MapPin className="w-4 h-4" />
                          </div>
                          {job.salary && (
                            <div className="text-lg text-green-600 text-right">
                              {job.salary}
                            </div>
                          )}
                          <div className="flex items-center justify-between pt-3 border-t">
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Clock className="w-4 h-4" />
                              <span>{Math.floor((Date.now() - job.postedAt.getTime()) / (1000 * 60 * 60 * 24))} يوم</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Users className="w-4 h-4" />
                              <span>{job.applicants} متقدم</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Briefcase className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-2xl mb-2 text-gray-700">لا توجد وظائف متاحة</h3>
            <p className="text-gray-500">جرب تغيير معايير البحث</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
